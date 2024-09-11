# Expense Tracker App

## Overview

The Expense Tracker App is a personal finance management tool designed to help users track their income, expenses, and budgets with a simple and user-friendly interface. It provides features such as detailed expense categorization, income management, budget goal setting, and insightful reports with downloadable options. The app is built using Next.js, PostgresSQL, and styled with RadixUI, ensuring a fast, responsive, and visually appealing experience.

## Features

1. User Authentication
   - Simple and secure user authentication using NextAuth.js or custom methods.
   - Supports user sign-up, login, and logout.
2. Expense Tracking
   - Users can add, edit, and delete expenses.
   - Expenses are categorized (e.g., food, transportation, entertainment) for easy organization.
3. Income Tracking
   - Manage income by adding, editing, and deleting various income sources.
4. Dashboard
   - Provides a financial overview, displaying total income vs. total expenses.
   - Visual representation of expense breakdown by category through graphs (bar or pie charts).
   - A list of recent transactions showing date, category, amount, and description.
5. Budget Goals
   - Users can set monthly budget goals for specific categories.
   - Receive notifications or warnings when spending approaches or exceeds the set budget for a category.
6. Reports
   - Generate simple financial reports for monthly, yearly, or custom time periods.
   - Option to download reports as PDF or CSV for personal records.

## Pages and Layout

1. Dashboard Screen
   - Header: Displays the user's name and current date.
   - Overview Cards: Shows total income, expenses, and savings.
   - Graph Section: Visual breakdown of expenses by category.
   - Recent Transactions: List of the latest transactions.
   - Navigation Bar: Quick links to Home, Add Transaction, Categories, and Settings.
2. Add Transaction Screen
   - Header: "Add New Transaction"
   - Input Fields: Amount, category, date, and description.
   - Add Button: A simple button to submit the new transaction.
3. Categories Screen
   - Header: "Manage Categories"
   - List of Categories: Edit or delete existing categories.
   - Add Category Button: Allows users to create new categories.
4. Settings Screen
   - Header: "Settings"
   - Options for managing default currency, toggling notifications, and backing up/restoring data.
   - Logout Button: Simple option to log out from the app.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository.
2. Install dependencies using:

```bash
npm install
# or
yarn instal
# or
pnpm install
```

3. Set up environment variables for database, authentication, and any external services.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

To create a production-ready build:

```bash
npm run build
npm start
```
