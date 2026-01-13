# ZIEPX Marketing Website

A modern, responsive marketing website for ZIEPX - a mobile payment platform for Zimbabwe and the African region, inspired by Poland's BLIK system.

## Features

- **Hero Section** - Compelling headline and call-to-action
- **Features Showcase** - Highlights financial inclusion, multi-currency support, P2P transfers, and in-store payments
- **How It Works** - Step-by-step visual guide
- **Security Section** - Trust indicators and security features
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Smooth Animations** - Powered by Framer Motion

## Technology Stack

- **Next.js 14+** (App Router) - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Modern, responsive styling
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ZIEPX/
├── app/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Security.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css           # Global styles
├── public/
│   └── images/               # Static assets
└── package.json
```

## Design

The website uses a color scheme based on the ZIEPX logo:
- **Primary Dark**: `#0a1a2e` - Main background
- **Primary**: `#1e3a5f` - Secondary backgrounds
- **Accent Cyan**: `#00d4ff` - Primary accent
- **Accent Teal**: `#00b8a3` - Secondary accent
- **Accent Blue**: `#0066cc` - Tertiary accent

## Customization

- Update content in component files (`app/components/*.tsx`)
- Modify colors in `tailwind.config.ts`
- Adjust animations in component files using Framer Motion
- Add images to `public/images/` and reference them in components

## License

ISC
