# DSX Edge - Business Communication Platform

## Overview

DSX Edge is a comprehensive business communication and data management platform that combines VoIP services, data solutions, and AI-powered customer service. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a modern corporate website with contact form functionality and service information pages.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth UI transitions
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **Validation**: Zod schemas shared between frontend and backend

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schemas between client and server
- **Migrations**: Drizzle Kit for database schema management
- **Storage**: Abstracted storage interface with in-memory fallback

## Key Components

### Database Schema
- **Users Table**: Authentication and user management
- **Contacts Table**: Contact form submissions with timestamps
- **Validation**: Zod schemas for runtime type checking and validation

### API Endpoints
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve contact submissions (admin)

### Frontend Pages
- **Home**: Main landing page with hero, services, testimonials
- **DSX Voice**: VoIP telephony services information
- **DSX Data**: Data management and infrastructure services
- **DSX Live**: AI-powered customer service solutions
- **About**: Company history and background
- **Data Center**: Infrastructure and facility information

### UI Components
- **Navigation**: Responsive navigation with mobile menu
- **Hero Section**: Animated landing section
- **Services**: Three main service offerings presentation
- **Contact Form**: Validated form with submission handling
- **Testimonials**: Rotating customer testimonials
- **Facts Section**: Animated statistics and achievements

## Data Flow

1. **User Interaction**: Users navigate the corporate website and submit contact forms
2. **Form Submission**: Contact forms are validated on client-side using Zod schemas
3. **API Request**: Form data is sent to Express.js backend via TanStack Query
4. **Server Validation**: Backend validates data using shared Zod schemas
5. **Database Storage**: Valid submissions are stored in PostgreSQL via Drizzle ORM
6. **Response**: Success/error feedback is provided to the user

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Library**: Radix UI primitives via shadcn/ui
- **Fonts**: Google Fonts (Inter family)
- **Icons**: Lucide React icon library

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESBuild**: Production server bundling
- **PostCSS**: CSS processing with Tailwind
- **Drizzle Kit**: Database migration management

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20 with PostgreSQL 16
- **Development**: `npm run dev` - Runs TSX server with hot reload
- **Build**: `npm run build` - Creates optimized Vite frontend and ESBuild server bundle
- **Production**: `npm run start` - Serves built application
- **Port**: Application runs on port 5000, exposed as port 80

### Build Process
1. Frontend built with Vite to `dist/public`
2. Backend bundled with ESBuild to `dist/index.js`
3. Static assets served from built frontend
4. Production server runs compiled JavaScript

### Database Management
- **Schema Sync**: `npm run db:push` - Pushes schema changes to database
- **Environment**: Requires `DATABASE_URL` environment variable
- **Storage Fallback**: In-memory storage for development without database

## Changelog

### June 20, 2025 - Navigation and AI Integration Update
- **Navigation Fix**: Converted "Get Quote" back to "Contact" button in styled box format as requested
- **Interactive Navigation**: Added orange gradient hover underlines to all navigation menu items
- **AI Chat Widget**: Created professional expandable chat interface on DSX Voice page (bottom-right corner)
- **Error Resolution**: Removed problematic third-party scripts causing runtime errors
- **Professional UI**: Implemented clean chat interface with gradient styling and smooth animations
- **TypeScript Support**: Added proper type declarations and error handling
- **UX Enhancement**: Smooth hover animations with 300ms transitions and orange gradient effects

### June 20, 2025 - Major Update: Professional Website Optimization
- **Navigation System**: Fixed all contact button routing across all pages and sections
- **Gradient Consistency**: Standardized blue-to-orange gradients, applied only to icons (not entire graphics)
- **Service Integration**: Added functional "Contact Us" buttons to all service sections
- **Cost Comparison**: Added detailed real client cost analysis to DSX Voice page with actual data
- **Phone Catalog**: Comprehensive enterprise telephone solutions (Yealink, Grandstream, VTech, Fanvil)
- **Client Testimonials**: Updated with real client names (Michael H. Bonner, Synology Inc., Synergy Homeopathic)
- **Case Studies**: Added proven results section with 65%, 40%, and 64% cost savings documentation
- **UX Optimization**: Professional design maintaining engagement without childish elements
- **Resource Optimization**: Improved logical page flow and performance
- **Documentation**: Created comprehensive README.md with full project documentation

### Technical Improvements
- Removed all direct AT&T references and promotional language
- Fixed "Voice Solutions" back to "DSX Voice" branding
- Implemented proper cross-page navigation for contact sections
- Standardized gradient applications for visual consistency
- Enhanced mobile responsiveness and accessibility

### Content Updates
- Real client data integration with specific cost breakdowns
- Professional phone equipment specifications
- Detailed service descriptions without aggressive marketing language
- Comprehensive company background and data center information

### June 20, 2025 - Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.