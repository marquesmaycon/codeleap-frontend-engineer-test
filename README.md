# CodeLeap Frontend Engineer Test

A modern, full-featured social media platform built with Next.js 16, demonstrating advanced React patterns, state management, and UI/UX best practices.

## 🚀 Key Features

### 💻 **Modern Tech Stack**
- **Next.js 16** with App Router and Server Components
- **React 19** with latest features and optimizations
- **TypeScript** for type-safe development
- **TailwindCSS 4** for modern, responsive styling
- **TanStack Query** for efficient server state management

### 🏗️ **Advanced Architecture**
- **Feature-based architecture** for scalability and maintainability
- **Custom hooks** for reusable business logic
- **Optimistic updates** for instant user feedback
- **Infinite scrolling** with automatic pagination
- **Server-side rendering** for optimal performance

### ✨ **User Experience**
- **Dark/Light theme** with seamless switching
- **Responsive design** with mobile-first approach
- **Real-time interactions** (likes, comments, posts)
- **Loading states** and skeleton screens
- **Toast notifications** for user feedback
- **Confirmation dialogs** for destructive actions

### 🎯 **Feature Set**
- ✅ User authentication and profiles
- ✅ Create, read, update, delete posts
- ✅ Like and unlike posts
- ✅ Comment on posts
- ✅ User profile pages with activity tabs
- ✅ Post detail pages with comments
- ✅ Infinite scroll feed

## 🛠️ Technical Highlights

### 🔄 **State Management**
- **TanStack Query (React Query)** for server state
  - Automatic caching and invalidation
  - Optimistic updates for instant UI feedback
  - Background refetching
  - Infinite queries for pagination

### 🧩 **Component Architecture**
- **Shadcn/ui** components for consistent design system
- **Radix UI** primitives for accessibility
- **Responsive Modal/Drawer** pattern (modal on desktop, drawer on mobile)
- **Compound components** for flexible composition

### ⚡ **Performance Optimizations**
- Server Components for reduced client-side JavaScript
- Lazy loading and code splitting
- Optimized images and assets
- Efficient re-rendering with React 19

### 👨‍💻 **Developer Experience**
- ESLint with custom rules
- Prettier with Tailwind plugin
- Auto-sorting imports
- Type-safe API layer
- Clean folder structure

## 📁 Project Structure

```
app/              # Next.js App Router
  (auth)/         # Authentication routes
  (root)/         # Main application routes
components/       # Shared UI components
  ui/             # Base UI components (Shadcn)
  layout/         # Layout components
features/         # Feature-based modules
  auth/           # Authentication logic
  posts/          # Posts management
  user/           # User profiles
hooks/            # Custom React hooks
lib/              # Utilities and configurations
```

## � Design Patterns

- **Custom Hooks** for logic reusability
- **Compound Components** for flexible APIs
- **Render Props** pattern for shared behavior
- **Provider Pattern** for global state
- **HOC Pattern** for cross-cutting concerns

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### ⚙️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Key Dependencies

- **Next.js 16** - React framework with App Router
- **TanStack Query** - Powerful data synchronization
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Day.js** - Lightweight date formatting
- **Ky** - Modern HTTP client
- **Sonner** - Toast notifications
- **next-themes** - Theme management

## 🎨 UI/UX Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible components (WCAG compliant)
- 🎭 Smooth animations and transitions
- ⏳ Loading states and error handling
- 📝 Empty states with helpful messages
- 🛡️ Confirmation dialogs for safety

## 🧪 Code Quality

- 🔒 **TypeScript** for type safety
- ✅ **ESLint** for code consistency
- 🎯 **Prettier** for code formatting
- 📦 **Import sorting** for clean imports
- 🎨 Consistent code style across the project

## 🌟 Highlights for Reviewers

1. 🏗️ **Clean Architecture**: Feature-based structure that scales
2. ⚛️ **Modern React**: Leveraging latest React 19 and Next.js 16 features
3. ⚡ **Performance**: Optimized with server components and caching
4. ✨ **UX Excellence**: Smooth interactions with optimistic updates
5. 🔒 **Type Safety**: Full TypeScript coverage
6. ♿ **Accessibility**: WCAG compliant components
7. 📱 **Responsive Design**: Works seamlessly on all devices
8. 👨‍💻 **Developer Experience**: Well-organized code with clear patterns

---

Built with ❤️ using Next.js and modern web technologies
