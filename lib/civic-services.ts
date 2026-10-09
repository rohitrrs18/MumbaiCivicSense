// ============================================================
// REAL DATA: Maharashtra Right to Public Services Act, 2015
// Source: https://home.maharashtra.gov.in/en/maharashtra-right-to-public-services-act-2015/
// ============================================================

export interface RTSService {
  id: number;
  serviceName: string;
  department: string;
  timeLimit: string;
  appealProcess: string;
}

export const rtsActInfo = {
  actName: "Maharashtra Right to Public Services Act, 2015",
  enactedDate: "28.04.2015",
  objective: "To ensure that notified services are provided to citizens in a transparent, speedy and time-bound manner by various Government Departments and Public Authorities.",
  commission: {
    name: "Maharashtra State Commission for Right to Public Service",
    headquarters: "New Administrative Building, Opposite Mantralaya, Mumbai",
    structure: "1 Chief Commissioner + 6 Commissioners",
    divisionalOffices: "6 Divisional Headquarters"
  },
  penalty: "Up to Rs 5,000 per case for erring officers",
  appealProcess: "3 levels: 1st appeal with higher authorities → 2nd appeal → 3rd appeal to Commission",
  website: "https://aaplesarkar.mahaonline.gov.in"
};

export const rtsServices: RTSService[] = [
  {
    id: 1,
    serviceName: "Birth Certificate Registration",
    department: "Health Department",
    timeLimit: "As notified",
    appealProcess: "1st/2nd appeal with higher authorities, 3rd appeal to Commission"
  },
  {
    id: 2,
    serviceName: "Death Certificate Registration",
    department: "Health Department",
    timeLimit: "As notified",
    appealProcess: "1st/2nd appeal with higher authorities, 3rd appeal to Commission"
  },
  {
    id: 3,
    serviceName: "Property Tax Assessment",
    department: "Assessment & Collection",
    timeLimit: "As notified",
    appealProcess: "1st/2nd appeal with higher authorities, 3rd appeal to Commission"
  }
];

// ============================================================
// REAL DATA: Mumbai Ward Population 2025
// Source: BMC Final Delimitation Notification, October 2025
// ============================================================

export const mumbaiWardData = {
  totalWards: 227,
  highestPopulationWard: { ward: 224, population: 64245 },
  lowestPopulationWard: { ward: 51, population: 45463 },
  averagePopulationRange: "45,000 to 65,000 per ward",
  source: "BMC Final Delimitation 2025"
};

// ============================================================
// REAL DATA: Mumbai Voter Growth 2025
// Source: State Election Commission Draft Electoral Roll, December 2025
// ============================================================

export const mumbaiVoterData = {
  overallGrowth: "12.67% since 2017",
  highestGrowthWards: [
    { ward: 48, area: "Malvani", growth: "67.6%", voters2017: 29697, voters2025: 49775 },
    { ward: 33, area: "Madh, Malad", growth: "54.1%", voters2017: 25590, voters2025: 39424 },
    { ward: 163, area: "Chandivali, Kurla", growth: "51.8%", voters2017: 30926, voters2025: 46941 },
    { ward: 157, area: "Kurla", growth: "50.8%", voters2017: 38198, voters2025: 57612 }
  ],
  decliningWards: [
    { ward: 28, area: "Kandivali East" },
    { ward: 13, area: "Borivali" },
    { ward: 57, area: "Goregaon" },
    { ward: 64, area: "Andheri West" },
    { ward: 100, area: "Khar" },
    { ward: 102, area: "Bandra" }
  ],
  source: "SEC Draft Electoral Roll 2025"
};