// ============================================================
// REAL DATA: Majhi Vasundhara E-Pledge Campaign
// Source: https://majhivasundhara.in (Government of Maharashtra)
// ============================================================

export interface EpledgePhase {
  phase: string;
  totalPledges: number;
  friendFamily: number;
}

export const majhiVasundharaData = {
  campaignName: "Majhi Vasundhara (My Earth)",
  department: "Environment and Climate Change Department, Government of Maharashtra",
  motto: "Be the change that you wish to see in the world — Mahatma Gandhi",
  description: "Encourages citizens to take small actions/changes in daily life for environmental protection",
  website: "https://majhivasundhara.in",
  phases: [
    { phase: "M.V. 1.0", totalPledges: 1052902, friendFamily: 14208384 },
    { phase: "M.V. 2.0", totalPledges: 1541873, friendFamily: 7954815 },
    { phase: "M.V. 3.0", totalPledges: 125921, friendFamily: 818402 },
    { phase: "M.V. 4.0", totalPledges: 3979078, friendFamily: 30935324 },
    { phase: "M.V. 5.0", totalPledges: 7111609, friendFamily: 70823125 },
    { phase: "M.V. 6.0", totalPledges: 6915269, friendFamily: 110563727 }
  ] as EpledgePhase[],
  totalPledgesAllPhases: 20726652,
  totalFriendFamilyAllPhases: 236513777
};

// ============================================================
// REAL DATA: Mumbai Tree Census 2018
// Source: BMC Garden Department / Mumbai Tree Census
// ============================================================

export const mumbaiTreeData = {
  censusYear: 2018,
  totalTreesMumbaiCity: 2975283,
  totalTreesWithAarey: 3370000,
  aareyTrees: 400000,
  previousCensusYear: 2008,
  treeIncrease: 1100000,
  censusCost: "Rs 3 crore",
  firstGISBased: true,
  highestTreeWards: [
    { ward: "N Ward (Ghatkopar)", count: 292000 },
    { ward: "P North (Malad)", count: 284000 },
    { ward: "S Ward (Bhandup)", count: 254000 }
  ],
  lowestTreeWards: [
    { ward: "C Ward (Marine Lines-Kalbadevi)", count: 5756 },
    { ward: "B Ward (Masjid-Dongri)", count: 7816 }
  ],
  nextCensus: "2026 (announced)",
  source: "BMC Garden Department"
};

// ============================================================
// REAL DATA: BMC Pre-Monsoon Tree Trimming 2026
// Source: Times of India, April 2026
// ============================================================

export const bmcTreeTrimming = {
  year: 2026,
  treesOnPrivatePremises: 7978,
  treesFlaggedUrgent: 313,
  purpose: "Prevent tree-related incidents during monsoon",
  lastCensusTrees: 2975000,
  source: "BMC Garden Department"
};