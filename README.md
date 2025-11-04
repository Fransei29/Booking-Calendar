# Booking Calendar Challenge

A modern, responsive booking calendar application built with Next.js, React, and SCSS. This project demonstrates advanced frontend development skills including component architecture, state management, responsive design, and precise UI implementation.

## 🎯 Project Overview

This booking calendar allows users to select dates and see real-time pricing updates. The application features a clean, modern design with precise spacing, typography, and interactive elements that match the provided Figma design specifications.

## ✨ Features

- **Interactive Date Selection**: Click on available dates to select/deselect them
- **Real-time Pricing**: Dynamic total calculation based on selected dates
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Precise UI Implementation**: Exact match to Figma design specifications
- **Modern Typography**: Helvetica Neue and Inter font families
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Date Handling**: date-fns
- **Fonts**: Helvetica Neue, Inter (Google Fonts)
- **Build Tool**: Vite (via Next.js)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   └── page.tsx            # Main page component
├── components/
│   ├── Sidebar/
│   │   ├── SidebarComponent.tsx
│   │   └── SidebarComponent.module.scss
│   └── Calendar/
│       ├── CalendarComponent.tsx
│       └── CalendarComponent.module.scss
├── data/
│   └── pricing.ts          # Pricing data for April 2024
├── styles/
│   ├── globals.scss        # Global styles
│   └── Home.module.scss    # Main page layout styles
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/
    └── assets/             # Images and icons
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd booking-calendar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Implementation

### Typography
- **Primary Font**: Helvetica Neue (Bold, Medium, Regular)
- **Secondary Font**: Inter (Bold, Medium, Regular)
- **Responsive Sizing**: Using `clamp()` for fluid typography

### Color Palette
- **Primary Background**: `#BE83BF` (Purple)
- **Text Primary**: `#3D2F4B` (Dark Purple)
- **Text Secondary**: `#FFFFFF` (White)
- **Selected Dates**: `#9B7BBF` (Light Purple)
- **Unavailable Dates**: `#EAEAEA` (Light Gray)

### Layout
- **Responsive Grid**: CSS Grid for calendar layout
- **Flexbox**: For sidebar and main layout
- **Fluid Spacing**: Using `clamp()` for responsive padding/margins

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

### Mobile Adaptations
- Stacked layout (sidebar above calendar)
- Adjusted padding and font sizes
- Touch-friendly button sizes

## 🔧 Key Components

### SidebarComponent
- Displays project information and author details
- Responsive typography with precise line breaks
- Icon and avatar integration

### CalendarComponent
- Interactive date grid with April 2024 data
- Real-time price calculation
- Selected/unavailable date states
- Responsive grid layout

## 📊 Data Structure

### Date Information
```typescript
interface DateInfo {
  date: string;        // YYYY-MM-DD format
  price: number | null; // Price or null if unavailable
  selected: boolean;   // User selection state
}
```

### Pricing Data
- Predefined prices for April 2024
- Null values for unavailable dates
- Default price of $10 for unspecified dates

## 🎯 Challenge Requirements Met

✅ **Exact Figma Design Match**
- Precise colors, typography, and spacing
- Responsive layout implementation
- Interactive elements matching design

✅ **Calendar Functionality**
- Date selection with visual feedback
- Real-time total calculation
- Proper date validation

✅ **Code Quality**
- TypeScript implementation
- Component-based architecture
- Clean, maintainable code
- Professional documentation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

[www.francoseiler.com]
