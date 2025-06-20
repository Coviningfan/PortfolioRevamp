# DSX Edge - Business Communication Platform

A modern, professional website for DSX Edge, showcasing advanced business communication and data management solutions. Built with React, TypeScript, and Express.js, featuring comprehensive VoIP services, data solutions, and AI-powered customer service.

## 🚀 Features

### Core Services
- **DSX Voice**: Advanced VoIP telephony solutions with up to 60% cost savings
- **DSX Live**: AI-powered customer service with hybrid human-AI support
- **DSX Data**: Enterprise-grade data management and infrastructure solutions

### Website Highlights
- **Real Client Case Studies**: Detailed cost comparisons with actual client data (Law Office of Michael H. Bonner, Synology Inc., Synergy Homeopathic)
- **Enterprise Phone Catalog**: Comprehensive business telephone solutions (Yealink, Grandstream, VTech, Fanvil)
- **Professional Design**: Clean, modern interface with DSX brand colors (blue-to-orange gradient)
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Contact Integration**: Seamless navigation to contact forms from all sections

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for development and build tooling
- **Tailwind CSS** with shadcn/ui component library
- **Framer Motion** for smooth animations
- **Wouter** for client-side routing
- **TanStack React Query** for server state management
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js framework
- **TypeScript** with ES modules
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** with Neon Database (serverless)
- **Express sessions** with PostgreSQL storage
- **Zod schemas** shared between frontend and backend

### Development Tools
- **ESBuild** for production server bundling
- **PostCSS** with Tailwind processing
- **Drizzle Kit** for database migrations
- **Hot reload** development environment

## 📁 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route-based page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configurations
├── server/                # Express.js backend
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Database abstraction layer
│   └── vite.ts           # Vite integration for development
├── shared/               # Shared TypeScript schemas
└── attached_assets/      # Static assets and content files
```

## 🎨 Design System

### Brand Colors
- **Primary**: Blue (#2563eb) to Orange (#ea580c) gradient
- **Consistent gradients** applied only to icons and key UI elements
- **Professional typography** with clear hierarchy
- **Accessibility-focused** color contrast ratios

### UI Components
- **Modern card-based layouts** with subtle shadows
- **Interactive hover effects** and smooth transitions
- **Responsive navigation** with mobile-friendly menu
- **Professional contact forms** with real-time validation

## 📊 Real Client Data

The website showcases authentic cost savings from actual DSX Voice installations:

### Law Office of Michael H. Bonner
- **Extensions**: 7 (including conference room and off-site)
- **Monthly Cost**: $199.95 (down from $570.00)
- **Savings**: 65% ($370.05/month)

### Synology Inc.
- **Extensions**: 40+ (call center with 100,000+ minutes/month)
- **Monthly Cost**: $686.00 (down from $1,145.00)
- **Savings**: 40% ($459.00/month)

### Synergy Homeopathic
- **Extensions**: 17 (global users across 5 countries)
- **Monthly Cost**: $239.00 (down from $670.65)
- **Savings**: 64% ($431.65/month)

## 🔧 Development

### Prerequisites
- Node.js 20+
- PostgreSQL database (or Neon Database account)

### Environment Variables
```bash
DATABASE_URL=your_postgresql_connection_string
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=your_database
PGHOST=your_host
```

### Getting Started
```bash
# Install dependencies
npm install

# Set up database
npm run db:push

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run start` - Serve production build
- `npm run db:push` - Push schema changes to database

## 🌐 Deployment

### Replit Configuration
- **Environment**: Node.js 20 with PostgreSQL 16
- **Port**: Application runs on port 5000, exposed as port 80
- **Build Process**: 
  1. Frontend built with Vite to `dist/public`
  2. Backend bundled with ESBuild to `dist/index.js`
  3. Static assets served from built frontend

### Production Features
- **Database fallback**: In-memory storage for development
- **Session management**: Persistent sessions with PostgreSQL
- **Error handling**: Comprehensive error boundaries and logging
- **Performance optimization**: Compressed assets and lazy loading

## 📈 Performance Optimizations

- **Code splitting** with dynamic imports
- **Image optimization** with lazy loading
- **Compressed assets** for faster loading
- **Efficient animations** with Framer Motion
- **Database query optimization** with Drizzle ORM

## 🎯 Key Business Features

### Contact Management
- **Form validation** with Zod schemas
- **Database persistence** of contact submissions
- **Real-time feedback** for form interactions
- **Multiple contact methods** (phone, email, forms)

### Service Showcases
- **Detailed service pages** for each offering
- **Cost comparison tools** with real client data
- **Enterprise phone catalog** with specifications
- **Professional testimonials** from actual clients

### Navigation & UX
- **Intuitive routing** between service pages
- **Smooth scrolling** to page sections
- **Mobile-responsive** design patterns
- **Professional animations** without being childish

## 📝 Content Management

The website includes comprehensive content for:
- **Service descriptions** with technical specifications
- **Client testimonials** with real names and companies
- **Cost analysis** with detailed breakdowns
- **Phone specifications** for business equipment
- **Company history** and background information

## 🔒 Security Features

- **Input validation** with Zod schemas
- **SQL injection protection** via Drizzle ORM
- **Session security** with secure cookies
- **Environment variable protection** for sensitive data

## 📱 Mobile Responsiveness

- **Responsive navigation** with collapsible menu
- **Touch-friendly** buttons and interactions
- **Optimized layouts** for various screen sizes
- **Fast loading** on mobile connections

## 🚀 Future Enhancements

- **Blog section** for industry insights
- **Interactive cost calculators** for services
- **Advanced search** functionality
- **Multi-language support** for international clients
- **Enhanced analytics** and user tracking

## 📄 License

This project is proprietary software for DSX Edge business communications.

## 🤝 Contributing

This is a private project for DSX Edge. For inquiries, contact the development team.

---

**Built with modern web technologies for professional business communication solutions.**