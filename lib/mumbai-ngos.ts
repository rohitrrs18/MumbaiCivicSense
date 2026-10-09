// ============================================================
// MUMBAI CIVIC PLATFORM — COMPLETE REAL DATA
// Sources:
// - BMC Official NGO Directory 2025 (mcgm.gov.in)
// - Maharashtra Right to Public Services Act 2015
// - Majhi Vasundhara (majhivasundhara.in)
// - Mumbai Tree Census 2018 (BMC Garden Dept)
// - BMC Delimitation 2025 + SEC Draft Electoral Roll 2025
// ============================================================

export interface MumbaiNGO {
  id: number;
  name: string;
  contactPerson: string;
  address: string;
  phone: string;
  email: string;
  areas: string[];
  workingWithBMC: boolean;
  since: number;
  fcra: boolean;
  ward: string;
}

export const mumbaiNGOs: MumbaiNGO[] = [
  {
    id: 1,
    name: "Aadhar Samajik Vikas Seva Sahkar Sanstha",
    contactPerson: "Ganesh Khade",
    address: "29, Sangram Nagar, Kala Killa, Dharavi, Mumbai 400017",
    phone: "9821242437",
    email: "aadharsamjikvikassevashakarisanstha@gmail.com",
    areas: ["Art & Culture", "Civic Issues", "Education", "Literacy", "Environment"],
    workingWithBMC: true,
    since: 2014,
    fcra: false,
    ward: "SWM Department",
  },
  {
    id: 2,
    name: "Aadarsh Mahila Mandal",
    contactPerson: "Kamla Sonawane",
    address: "Mukundra Ambedkar Nagar, Aarey Dudh Vasshat Gat No. 32, Goregaon (East), Mumbai",
    phone: "8097417059",
    email: "rajeshreedlakhann@gmail.com",
    areas: ["Women Empowerment", "Child Welfare", "Basic Education"],
    workingWithBMC: true,
    since: 2024,
    fcra: false,
    ward: "SWM Department",
  },
  {
    id: 3,
    name: "Aarambh Shahar Star Sangh",
    contactPerson: "MS. Trupti Pawar",
    address: "38/2763, Siddhivinayak Co Operative Society, Abhyudaya Nagar, Kalachowki, Mumbai 400033",
    phone: "9967464570",
    email: "jahnavi@456@gmail.com",
    areas: ["Women Empowerment", "Livelihood"],
    workingWithBMC: true,
    since: 2023,
    fcra: false,
    ward: "F South Ward",
  },
  {
    id: 4,
    name: "Aarambh Vasti Star Sangh",
    contactPerson: "Kishor Din",
    address: "Gauri Shankar Wadi 1-2, Panth Nagar, Ghatkopar",
    phone: "9867842377",
    email: "info@aarambh.org",
    areas: ["Education"],
    workingWithBMC: true,
    since: 2015,
    fcra: false,
    ward: "AC Planning",
  },
  {
    id: 5,
    name: "Action Aid Association",
    contactPerson: "Sandeep Chachra",
    address: "Flat No 15, B Wing, Kastur Mahal, Sion Circle East, Mumbai",
    phone: "8668445145",
    email: "roshan.gajbhiye@actionaid.org",
    areas: ["Social And Ecological Justice", "Marginalized Communities", "Equality"],
    workingWithBMC: true,
    since: 1972,
    fcra: true,
    ward: "Education Department",
  },
  {
    id: 6,
    name: "Adani Foundation",
    contactPerson: "Dr Priti G Adani",
    address: "6th Floor, Maker Chambers III, Nariman Point, Mumbai - 400021",
    phone: "9029321023",
    email: "mahesh.jadhav@adanifoundation.com",
    areas: ["Education"],
    workingWithBMC: true,
    since: 1996,
    fcra: false,
    ward: "Education Department",
  },
  {
    id: 7,
    name: "Ashtavinayak Seva Sanstha",
    contactPerson: "Dhanshri Sanjay Tambe",
    address: "Khandwala Lane, Jain Mandir Rd, Pushpa Park, Malad East, Mumbai 400097",
    phone: "9821243812",
    email: "ashtavinayakgrp@gmail.com",
    areas: ["Community Service", "Festivals", "Health Camps", "Youth Activities"],
    workingWithBMC: true,
    since: 0,
    fcra: false,
    ward: "Disaster Department, C & D Ward",
  },
  {
    id: 8,
    name: "Bal Asha Trust",
    contactPerson: "Sunil Arora",
    address: "Anand Niketan Kgvm, Dr. Elijah Moses Rd, Mahalakshmi, Mumbai 400011",
    phone: "9930986400",
    email: "info@balashatrust.org",
    areas: ["Orphanages", "Child Rights & Welfare", "Adoption", "Child Development"],
    workingWithBMC: true,
    since: 1985,
    fcra: false,
    ward: "Health Department G South",
  },
  {
    id: 9,
    name: "Barefoot Edu Foundation",
    contactPerson: "Saumya Aggarwal",
    address: "Flat No. 302, Building No. D2, Indiabulls Golf City, Savroli, Khalapur, Raigarh 410202",
    phone: "9643773431",
    email: "contact@barefootedu.com",
    areas: ["Education", "Child Development", "Meaningful Change"],
    workingWithBMC: true,
    since: 2018,
    fcra: false,
    ward: "Education Department",
  },
  {
    id: 10,
    name: "Berojgar Janakalyan Sangari Seva Sahakari Sanstha",
    contactPerson: "Shri Milind Mane",
    address: "Opp. Rani Baug, Byculla (E), Mumbai - 400027",
    phone: "9892856026",
    email: "milindmane123@gmail.com",
    areas: ["Employment Generation"],
    workingWithBMC: true,
    since: 2011,
    fcra: true,
    ward: "Disaster Department, E Ward",
  },
  {
    id: 11,
    name: "BGS Foundation",
    contactPerson: "Abdulkhalique Shaikh",
    address: "Kurla West, Mumbai, Maharashtra 400070",
    phone: "(022) 26501312",
    email: "info@bgsfoundation.org",
    areas: ["Animal Welfare", "Environment", "People Assistance"],
    workingWithBMC: true,
    since: 0,
    fcra: false,
    ward: "Not Specified",
  },
  {
    id: 12,
    name: "Asmita Handicap Central",
    contactPerson: "Mrs. Medha Ghisas-Barve",
    address: "Ajagonkar Maidan, Western Express Highway, Jogeshwari East, Mumbai 400060",
    phone: "7208479919",
    email: "info@asmitatrust.org",
    areas: ["Physically Challenged Support", "Skill Training", "Development"],
    workingWithBMC: false,
    since: 1989,
    fcra: false,
    ward: "Not working with BMC",
  },
];

// ============================================================
// MAHARASHTRA RIGHT TO PUBLIC SERVICES ACT 2015
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
  objective:
    "To ensure that notified services are provided to citizens in a transparent, speedy and time-bound manner by various Government Departments and Public Authorities.",
  commission: {
    name: "Maharashtra State Commission for Right to Public Service",
    headquarters: "New Administrative Building, Opposite Mantralaya, Mumbai",
    structure: "1 Chief Commissioner + 6 Commissioners",
    divisionalOffices: "6 Divisional Headquarters",
  },
  penalty: "Up to Rs 5,000 per case for erring officers",
  appealProcess:
    "3 levels: 1st appeal with higher authorities → 2nd appeal → 3rd appeal to Commission",
  website: "https://aaplesarkar.mahaonline.gov.in",
};

export const rtsServices: RTSService[] = [
  {
    id: 1,
    serviceName: "Birth Certificate Registration",
    department: "Health Department",
    timeLimit: "As notified",
    appealProcess: "1st/2nd appeal with higher authorities, 3rd appeal to Commission",
  },
  {
    id: 2,
    serviceName: "Death Certificate Registration",
    department: "Health Department",
    timeLimit: "As notified",
    appealProcess: "1st/2nd appeal with higher authorities, 3rd appeal to Commission",
  },
  {
    id: 3,
    serviceName: "Property Tax Assessment",
    department: "Assessment & Collection",
    timeLimit: "As notified",
    appealProcess: "1st/2nd appeal with higher authorities, 3rd appeal to Commission",
  },
];

// ============================================================
// BMC WARD POPULATION 2025
// ============================================================

export const mumbaiWardData = {
  totalWards: 227,
  highestPopulationWard: { ward: 224, population: 64245 },
  lowestPopulationWard: { ward: 51, population: 45463 },
  averagePopulationRange: "45,000 to 65,000 per ward",
  source: "BMC Final Delimitation 2025",
};

// ============================================================
// MUMBAI VOTER GROWTH 2025
// ============================================================

export const mumbaiVoterData = {
  overallGrowth: "12.67% since 2017",
  highestGrowthWards: [
    { ward: 48, area: "Malvani", growth: "67.6%", voters2017: 29697, voters2025: 49775 },
    { ward: 33, area: "Madh, Malad", growth: "54.1%", voters2017: 25590, voters2025: 39424 },
    { ward: 163, area: "Chandivali, Kurla", growth: "51.8%", voters2017: 30926, voters2025: 46941 },
    { ward: 157, area: "Kurla", growth: "50.8%", voters2017: 38198, voters2025: 57612 },
  ],
  decliningWards: [
    { ward: 28, area: "Kandivali East" },
    { ward: 13, area: "Borivali" },
    { ward: 57, area: "Goregaon" },
    { ward: 64, area: "Andheri West" },
    { ward: 100, area: "Khar" },
    { ward: 102, area: "Bandra" },
  ],
  source: "SEC Draft Electoral Roll 2025",
};

// ============================================================
// MAJHI VASUNDHARA E-PLEDGE CAMPAIGN
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
  description:
    "Encourages citizens to take small actions/changes in daily life for environmental protection",
  website: "https://majhivasundhara.in",
  phases: [
    { phase: "M.V. 1.0", totalPledges: 1052902, friendFamily: 14208384 },
    { phase: "M.V. 2.0", totalPledges: 1541873, friendFamily: 7954815 },
    { phase: "M.V. 3.0", totalPledges: 125921, friendFamily: 818402 },
    { phase: "M.V. 4.0", totalPledges: 3979078, friendFamily: 30935324 },
    { phase: "M.V. 5.0", totalPledges: 7111609, friendFamily: 70823125 },
    { phase: "M.V. 6.0", totalPledges: 6915269, friendFamily: 110563727 },
  ] as EpledgePhase[],
  totalPledgesAllPhases: 20726652,
  totalFriendFamilyAllPhases: 236513777,
};

// ============================================================
// MUMBAI TREE CENSUS 2018
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
    { ward: "S Ward (Bhandup)", count: 254000 },
  ],
  lowestTreeWards: [
    { ward: "C Ward (Marine Lines-Kalbadevi)", count: 5756 },
    { ward: "B Ward (Masjid-Dongri)", count: 7816 },
  ],
  nextCensus: "2026 (announced)",
  source: "BMC Garden Department",
};

// ============================================================
// BMC PRE-MONSOON TREE TRIMMING 2026
// ============================================================

export const bmcTreeTrimming = {
  year: 2026,
  treesOnPrivatePremises: 7978,
  treesFlaggedUrgent: 313,
  purpose: "Prevent tree-related incidents during monsoon",
  lastCensusTrees: 2975000,
  source: "BMC Garden Department",
};