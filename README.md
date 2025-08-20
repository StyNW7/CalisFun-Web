# CalisFun Web Repository Documentation

---

## 📃 Table of Contents
- [⚙️ Technology Stack](#-technology-stack)
- [🧩 Core Features](#-core-features)
- [🏗️ Clean Architecture](#-clean-architecture)
- [🧪 Test Coverage](#-test-coverage)
- [🔐 .env Configuration](#-env-configuration)
- [🧰 Getting Started Locally](#-getting-started-locally)
- [🧭 Flowchart Diagram](#-flowchart-diagram)
- [📝 Important Notes](#-important-notes)
- [👥 Owner](#-owner)
- [📬 Contact](#-contact)

---

## ⚙️ Technology Stack

<div align="center">

<kbd><img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" height="60" /></kbd>
<kbd><img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" height="60" /></kbd>
<kbd><img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png" height="60" /></kbd>
<kbd><img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png" height="60" /></kbd>
<kbd><img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png" height="60" /></kbd>
<kbd><img src="./Images/tech/vitest.png" height="60" /></kbd>

</div>

<div align="center">
<h4>React | TypeScript | Vite | TailwindCSS | ShadcnUI | Vitest</h4>
</div>

---

## 🧩 Core Features

### 🌐 Landing Page & SEO
- Provides an official information page about the CalisFun app.
- Serves as a promotional hub to increase app visibility through SEO optimization.
- Users can read the description, key features, testimonials, and view a preview of the app.

### 📥 APK Download
- Users can directly download the CalisFun app .apk file through the website.
- Alternative distribution option besides the Google Play Store/App Store.
- The download link for the latest version is always available and integrated with release management.

### 🛠️ Admin Dashboard
- **User Account Management:** Create, edit, deactivate, or delete child and parent accounts.
- **Question & Content Management:** CRUD practice questions (handwriting, spelling, counting) for the CalisFun app.
- **Data Analytics:** Displays learning progress data, number of users, daily activity, and app performance statistics.
- **Role Management:** differentiates admin and moderator access for more controlled security & management.

---

## 🏗️ Architecture Pattern

### Repository Structure

```
calis-fun-web/
├── .github/                    # GitHub workflows / CI configuration
├── coverage/                   # Coverage reports (Using Vitest)
├── Images/                     # Repo-related images (for docs/README)
├── node_modules/               # Dependencies (auto-generated)
├── public/                     # Static public assets (favicon, static images, manifest, etc.)
│
├── src/                        # Main source code
│   ├── assets/                 # Images, icons, and static files for UI
│   ├── components/             # Reusable React components (UI building blocks)
│   ├── context/                # React context providers (Auth, Theme, Global State)
│   ├── hooks/                  # Custom React hooks
│   ├── layouts/                # Layout components (e.g., Admin layout, Landing layout)
│   ├── lib/                    # Utility libraries (API clients, helpers)
│   ├── pages/                  # Page-level components (Landing page, Dashboard, etc.)
│   ├── services/               # API calls & backend integration (Express/MongoDB endpoints)
│   ├── tests/                  # Unit & integration tests
│   ├── types/                  # TypeScript types and interfaces
│   ├── utility/                # Utility functions (formatting, constants, validation)
│   │
│   ├── App.tsx                 # Main app component (routing entry point)
│   ├── index.css               # Global CSS styling
│   ├── main.tsx                # Entry point for React + Vite
│   └── vite-env.d.ts           # TypeScript env type definitions
│
├── .env                        # Environment variables (local)
├── .env.sample                 # Sample env file for reference
├── .gitignore                  # Git ignore rules
├── components.json             # Config file for shadcn/ui or custom component setup
├── eslint.config.js            # ESLint rules & configs
├── index.html                  # Root HTML file (for Vite/React)
├── package.json                # Project metadata & dependencies
├── package-lock.json           # Locked dependency 
├── README.md                   # Repository Documentation
├── tailwind.config.js          # Tailwind Configuration
├── vercel.json                 # Vercel Config for Deployment
├── vite.config.ts              # Vite Configuration
```


### **Architecture Principles**

The architecture for the **CalisFun Web Frontend** follows a **Layered Architecture** with emphasis on **scalability, reusability, and maintainability**.

1. **Layered Architecture Pattern**

    * Presentation Layer (UI): components, layouts, and pages folder
    * Application Layer (State & Orchestration Layer): context and hooks folder
    * Domain Layer (Business): services, utility, and lib folder
    * Infrastructure Layer: types, tests, public, assets folder

2. **Component-First**

   * `components/` holds reusable UI building blocks (buttons, cards, forms).
   * `layouts/` defines page skeletons (Landing, Dashboard).
   * `pages/` contain high-level views that orchestrate components.

3. **Separation of Concerns**

   * `services/` → communication layer for backend API.
   * `context/` → global state & role-based access (parent, child, admin).
   * `hooks/` → encapsulate reusable logic for cleaner components.
   * `utility/` → shared utilities (formatting, constants, validation).

4. **Scalability in Mind**

   * `types/` → enforce strong typing with TypeScript.
   * `tests/` → ensure testability with Jest/Vitest.
   * `assets/` → central location for images/icons for consistency.

5. **Vite + React + TS Setup**

   * `main.tsx` → bootstraps React.
   * `App.tsx` → app-wide routing & layout injection.
   * Integrated with **shadcn/ui** + **TailwindCSS** for clean and modern UI.


---


## 🔒 Security

Because this repository is just for local development and testing, so there is no CI/CD Implementation. However from docker folder you can build the docker image successfully.

---

## 📝 CI/CD

Because this repository is just for local development and testing, so there is no CI/CD Implementation. However from docker folder you can build the docker image successfully.

---

## 🧪 Test Coverage

We already succedd to passed some of unit tests such as button test, shadcnui library test, navbar test, and etc. We also already manually tested our website and from user perspective we can know better about CalisFun and download the app. From the admin perspective we can manage users and questions for CalisFun.


<img src="./Images/test_coverage.png" height="210"/>

---

## 🔐 .env Configuration

.env for the AI
```
VITE_API_BASE_URL=http://localhost:3000/api
```

You can also copy the .env.sample then rename it to .env

---

## 🧰 Getting Started Locally

### Prerequisites
- **Node.js** (v16+)
- **Git**

### Clone the Project
```bash
git clone https://github.com/best-team-compfest17/CalisFun-Web.git
cd CalisFun-Web
npm install
npm run dev # Run the local server
npm run test # Run vitest test
npm run test --coverage # Make the test coverage report
```

---

## 📸 &nbsp;Website Preview
<table style="width:100%; text-align:center">
    <col width="100%">
    <tr>
        <td width="1%" align="center"><img height="370" src="./Images/Preview/home.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Home Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./Images/Preview/features.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Features Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./Images/Preview/sample-feature.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Sample Feature Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./Images/Preview/download.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Download Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./Images/Preview/admin-overview.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Admin Overview Dashboard Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./Images/Preview/admin-manage-user.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Admin Manage User Dashboard Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./Images/Preview/admin-manage-question.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Admin Manage Question Page</td>
    </tr>
</table>

---

## 👥 Owner

This Repository is created by Team 1
<ul>
<li>Stanley Nathanael Wijaya - Fullstack Developer</li>
<li>Haikal Iman F - Mobile Developer</li>
<li>Muhammad Favian Jiwani - Mobile Developer</li>
<li>Raditya Ramadhan - Backend Developer</li>
<li>Muhammad Ridho Ananda - Mentor</li>
</ul>
As Final Project for SEA Academy Compfest 17

---

## 📬 Contact
Have questions or want to collaborate?

- 📧 Email: stanley.n.wijaya7@gmail.com
- 💬 Discord: `stynw7`

<code>Made with ❤️ by The Calon Best Team</code>