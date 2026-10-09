# 🏛️ Mumbai CivicSense

> **Civic education & behaviour change platform for Mumbai** — turning constitutional duties into daily habits through real data, gamified learning, and a premium UI.

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)

---

## 🌟 Overview

Mumbai CivicSense is a **real-data civic education platform** that helps citizens — from school children to parents to entire neighbourhoods — understand and act on their civic responsibilities.

Built on **official Government of Maharashtra and BMC data**, it combines:

- 🏢 **Real NGO directory** from BMC's 2025 official publication
- ⚖️ **Maharashtra Right to Public Services Act 2015** — full citizen rights info
- 🌳 **Mumbai Tree Census 2018** — 29.75 lakh trees mapped by ward
- 🌍 **Majhi Vasundhara E-Pledge** — 20.7 million+ citizen pledges tracked
- 🗳️ **BMC Delimitation 2025 + SEC Voter Data** — ward populations and voter growth

**No paid APIs. No dummy data. 100% real.**

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌓 **Dark / Light Theme** | Premium black & clean white themes with animated toggle |
| 🎨 **Gradient UI** | Glass morphism, gradient buttons with shimmer hover |
| 🎯 **4 Data Tabs** | NGOs · Environment · Wards · Right to Services |
| 📱 **Fully Responsive** | Mobile-first, adapts 1→2→3 column layouts |
| ⚡ **Zero Config Deploy** | Vercel-ready, no environment variables needed |
| 🔒 **Security Patched** | Next.js 14.2.35 — all critical CVEs resolved |

---

## 🗂️ Real Data Sources

All data is sourced from **official government publications**:

| Source | Records | Reference |
|--------|---------|-----------|
| **BMC NGO Directory 2025** | 12 NGOs | [mcgm.gov.in](https://www.mcgm.gov.in) |
| **Maharashtra RTS Act 2015** | Full act | [home.maharashtra.gov.in](https://home.maharashtra.gov.in) |
| **Majhi Vasundhara** | 20.7M pledges | [majhivasundhara.in](https://majhivasundhara.in) |
| **Mumbai Tree Census 2018** | 2,975,283 trees | BMC Garden Dept |
| **BMC Ward Delimitation** | 227 wards | BMC 2025 Notification |
| **SEC Voter Roll 2025** | 12.67% growth | State Election Commission |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Language:** [TypeScript 5.9](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com)
- **Animations:** [Framer Motion 11](https://www.framer.com/motion)
- **Icons:** [Lucide React](https://lucide.dev)
- **Themes:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Hosting:** [Vercel](https://vercel.com)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or higher
- npm 9+ (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/rohit-sawant/mumbai-civic-platform.git
cd mumbai-civic-platform

# Install dependencies
npm install

# Run development server
npm run dev