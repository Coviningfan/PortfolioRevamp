# DSX Edge - Portfolio Website

A modern, responsive portfolio website showcasing DSX Edge's unified solution for advanced communication and data management services.

## 🚀 Overview

DSX Edge represents the successful integration of DSX Voice and DSX Data, uniting pioneering communication services with expert data management solutions. This website serves as the digital showcase for our comprehensive suite of business technology services.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds
- **SEO Friendly**: Structured for optimal search engine visibility
- **Component-Based**: Modular architecture using shadcn/ui components

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Production-ready motion library for React
- **Wouter** - Minimalist routing for React applications
- **shadcn/ui** - High-quality, accessible UI components

### Backend
- **Express.js** - Fast, unopinionated web framework for Node.js
- **TypeScript** - Full-stack type safety
- **Drizzle ORM** - Lightweight and performant TypeScript ORM

### Development Tools
- **Vite** - Next-generation frontend tooling
- **ESBuild** - Extremely fast JavaScript bundler
- **PostCSS** - Tool for transforming CSS with JavaScript
- **Autoprefixer** - PostCSS plugin to parse CSS and add vendor prefixes

## 📱 Services Showcase

### DSX Voice
- Flexible, cost-effective VoIP solutions
- Seamless integration with existing systems
- Up to 60% cost savings compared to traditional systems
- Customizable user profiles and conditional call handling

### DSX Data
- Advanced Virtual DataSpace Management
- Hosted at the world-class Citadel Campus data center
- 100% renewable energy powered infrastructure
- Enterprise-grade security and reliability

### DSX Live
- Next-generation contact center excellence
- Dynamic communication powerhouse
- Seamless telephone system integration
- Enhanced customer engagement capabilities

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
├── shared/                # Shared TypeScript schemas
└── attached_assets/       # Project assets and content
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Coviningfan/DSX.git
cd DSX
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

This will:
1. Build the frontend using Vite
2. Bundle the backend using ESBuild
3. Output production-ready files to the `dist` directory

## 🌐 Deployment

This project is configured for deployment on Replit:

1. The application runs on port 5000 by default
2. Production builds are automatically optimized
3. Environment variables can be configured through Replit's Secrets tool

## 🎨 Styling

The project uses a modern design system with:
- **Color Palette**: Professional blue and orange gradients
- **Typography**: Clean, readable fonts optimized for web
- **Spacing**: Consistent spacing scale using Tailwind CSS
- **Components**: Accessible UI components from shadcn/ui

### Custom Gradients
- `gradient-dsx`: Blue gradient for primary elements
- `gradient-dsx-orange`: Orange gradient for accent elements

## 📊 Key Pages

- **Home** (`/`) - Landing page with service overview
- **About** (`/about`) - Company story and mission
- **DSX Voice** (`/dsx-voice`) - Voice communication solutions
- **DSX Data** (`/dsx-data`) - Data management services
- **DSX Live** (`/dsx-live`) - Contact center solutions
- **Data Center** (`/data-center`) - Infrastructure showcase

## 🔧 Configuration

### Environment Variables
Configure the following through Replit's Secrets tool:
- Database connection strings
- API keys for third-party services
- Production environment settings

### Database
The project uses Drizzle ORM with PostgreSQL. Schema definitions are located in `shared/schema.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏢 About DSX Edge

DSX Edge is committed to delivering strategic, technology-driven solutions tailored to the unique needs and goals of our clients. As we look to the future, our focus remains on harnessing cutting-edge technologies to continue leading the way in the digital transformation of businesses globally.
