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

Changelog:
- June 20, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.