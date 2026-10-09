"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/toggle";
import { GradientButton } from "@/components/ui/gradient-button";
import { mumbaiNGOs } from "@/lib/mumbai-ngos";
import { rtsActInfo, mumbaiWardData, mumbaiVoterData } from "@/lib/civic-services";
import { majhiVasundharaData, mumbaiTreeData } from "@/lib/environment-data";
import {
  Building2,
  Users,
  TreePine,
  Droplets,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Leaf,
  Shield,
  ExternalLink,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

type TabId = "ngos" | "environment" | "wards" | "rts";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("ngos");
  const [selectedNGO, setSelectedNGO] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-black dark:via-[#0a0f0d] dark:to-emerald-950/20 transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Mumbai<span className="text-gradient">CivicSense</span>
              </span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8">
              <MapPin className="h-4 w-4" />
              Real Mumbai data. BMC, RTS Act 2015, Majhi Vasundhara.
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Civic Sense for{" "}
              <span className="text-gradient">Mumbai</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore real BMC NGO directory, Maharashtra Right to Public Services,
              Majhi Vasundhara pledges, and Mumbai's tree census data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton size="lg" onClick={() => setActiveTab("ngos")}>
                Explore NGOs <ArrowRight className="h-5 w-5" />
              </GradientButton>
              <GradientButton variant="ghost" size="lg" onClick={() => setActiveTab("environment")}>
                Environment Data
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "ngos" as const, label: "BMC NGO Directory", icon: Users },
            { id: "environment" as const, label: "Environment", icon: TreePine },
            { id: "wards" as const, label: "Ward Data", icon: MapPin },
            { id: "rts" as const, label: "Right to Services", icon: Shield },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white dark:bg-white/5 text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* NGOs Tab */}
          {activeTab === "ngos" && (
            <motion.div
              key="ngos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  <strong>Real Data:</strong> BMC Official NGO Directory 2025 — {mumbaiNGOs.length} registered NGOs shown.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {mumbaiNGOs.map((ngo, index) => (
                  <motion.div
                    key={ngo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedNGO(selectedNGO === ngo.id ? null : ngo.id)}
                    className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-border hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-lg group-hover:text-emerald-500 transition-colors">
                        {ngo.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          ngo.workingWithBMC
                            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                            : "bg-slate-500/20 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        {ngo.workingWithBMC ? "BMC Partner" : "Independent"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {ngo.areas.slice(0, 3).map((area) => (
                        <span
                          key={area}
                          className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3" />
                        {ngo.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {ngo.ward}
                      </div>
                    </div>

                    {selectedNGO === ngo.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-border space-y-2 text-sm"
                      >
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {ngo.email}
                        </div>
                        <p className="text-muted-foreground">{ngo.address}</p>
                        <p className="text-muted-foreground">
                          Working since {ngo.since} | FCRA: {ngo.fcra ? "Yes" : "No"}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Environment Tab */}
          {activeTab === "environment" && (
            <motion.div
              key="environment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Majhi Vasundhara */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">Majhi Vasundhara E-Pledge Campaign</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Government of Maharashtra initiative — {majhiVasundharaData.totalPledgesAllPhases.toLocaleString()} total pledges across all phases.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {majhiVasundharaData.phases.slice(-3).map((phase) => (
                    <div key={phase.phase} className="p-4 rounded-xl bg-white dark:bg-white/5">
                      <div className="text-sm text-muted-foreground mb-1">{phase.phase}</div>
                      <div className="text-2xl font-bold text-gradient">
                        {(phase.totalPledges / 100000).toFixed(1)}L
                      </div>
                      <div className="text-xs text-muted-foreground">pledges</div>
                    </div>
                  ))}
                </div>
                <a
                  href={majhiVasundharaData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm text-emerald-500 hover:text-emerald-400"
                >
                  Take E-Pledge <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Tree Census */}
              <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <TreePine className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-bold">Mumbai Tree Census {mumbaiTreeData.censusYear}</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 rounded-xl bg-emerald-500/10">
                    <div className="text-3xl font-extrabold text-gradient">
                      {(mumbaiTreeData.totalTreesMumbaiCity / 100000).toFixed(2)}L
                    </div>
                    <div className="text-sm text-muted-foreground">Trees in Mumbai City</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-emerald-500/10">
                    <div className="text-3xl font-extrabold text-gradient">
                      {(mumbaiTreeData.totalTreesWithAarey / 100000).toFixed(2)}L
                    </div>
                    <div className="text-sm text-muted-foreground">Including Aarey</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-emerald-500/10">
                    <div className="text-3xl font-extrabold text-gradient">
                      {(mumbaiTreeData.treeIncrease / 100000).toFixed(1)}L
                    </div>
                    <div className="text-sm text-muted-foreground">Increase since 2008</div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3">Greenest Wards</h4>
                <div className="space-y-2 mb-4">
                  {mumbaiTreeData.highestTreeWards.map((ward) => (
                    <div key={ward.ward} className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/5">
                      <span>{ward.ward}</span>
                      <span className="font-bold text-emerald-500">{ward.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold mb-3">Least Green Wards</h4>
                <div className="space-y-2">
                  {mumbaiTreeData.lowestTreeWards.map((ward) => (
                    <div key={ward.ward} className="flex items-center justify-between p-3 rounded-lg bg-amber-500/5">
                      <span>{ward.ward}</span>
                      <span className="font-bold text-amber-500">{ward.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Wards Tab */}
          {activeTab === "wards" && (
            <motion.div
              key="wards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-border">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-emerald-500" />
                    Ward Population {mumbaiWardData.source}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald-500/10">
                      <div className="text-sm text-muted-foreground">Highest Population</div>
                      <div className="text-2xl font-bold">Ward {mumbaiWardData.highestPopulationWard.ward}</div>
                      <div className="text-emerald-500">{mumbaiWardData.highestPopulationWard.population.toLocaleString()}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10">
                      <div className="text-sm text-muted-foreground">Lowest Population</div>
                      <div className="text-2xl font-bold">Ward {mumbaiWardData.lowestPopulationWard.ward}</div>
                      <div className="text-amber-500">{mumbaiWardData.lowestPopulationWard.population.toLocaleString()}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Average: {mumbaiWardData.averagePopulationRange} | Total Wards: {mumbaiWardData.totalWards}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-border">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Voter Growth {mumbaiVoterData.overallGrowth}
                  </h3>
                  <div className="space-y-3">
                    {mumbaiVoterData.highestGrowthWards.slice(0, 3).map((ward) => (
                      <div key={ward.ward} className="p-4 rounded-xl bg-emerald-500/10">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold">Ward {ward.ward} — {ward.area}</span>
                          <span className="text-emerald-500 font-bold">{ward.growth}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {ward.voters2017.toLocaleString()} → {ward.voters2025.toLocaleString()} voters
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-amber-500" />
                    Declining Wards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mumbaiVoterData.decliningWards.slice(0, 4).map((ward) => (
                      <span key={ward.ward} className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        {ward.area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RTS Tab */}
          {activeTab === "rts" && (
            <motion.div
              key="rts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <h3 className="text-2xl font-bold mb-2">{rtsActInfo.actName}</h3>
                <p className="text-muted-foreground mb-6">Enacted: {rtsActInfo.enactedDate}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5">
                    <h4 className="font-semibold mb-2">Objective</h4>
                    <p className="text-sm text-muted-foreground">{rtsActInfo.objective}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5">
                    <h4 className="font-semibold mb-2">Penalty</h4>
                    <p className="text-sm text-muted-foreground">{rtsActInfo.penalty}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-white/5 mb-6">
                  <h4 className="font-semibold mb-2">Appeal Process</h4>
                  <p className="text-sm text-muted-foreground">{rtsActInfo.appealProcess}</p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-white/5">
                  <h4 className="font-semibold mb-2">Commission</h4>
                  <p className="text-sm text-muted-foreground">{rtsActInfo.commission.name}</p>
                  <p className="text-sm text-muted-foreground">{rtsActInfo.commission.headquarters}</p>
                </div>

                <a
                  href={rtsActInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  Visit Aaple Sarkar Portal <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>
            Real data from BMC NGO Directory 2025, Maharashtra RTS Act 2015, Majhi Vasundhara, and Mumbai Tree Census 2018.{" "}
            <span className="text-gradient font-semibold">No dummy data. No paid APIs.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}