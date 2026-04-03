# ValTube Frontend - React + TypeScript + Tailwind CSS

A modern, beautiful, and interactive video sharing platform built with React, TypeScript, Vite, and Tailwind CSS.

## 🎨 Features

- **Beautiful UI with Tailwind CSS** - Modern, responsive design with smooth animations
- **Authentication System** - Login and registration with Context API
- **Protected Routes** - Secure dashboard only accessible to authenticated users
- **Interactive Components** - Smooth transitions and hover effects
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark Mode Ready** - Easy to extend with dark theme
- **Type-Safe** - Full TypeScript support with strict mode

## 🚀 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.2.2
- **Build Tool**: Vite 5.2.0
- **Styling**: Tailwind CSS 4.2.2
- **Routing**: React Router DOM 6.14.1
- **HTTP Client**: Axios 1.4.0
- **State Management**: React Context API

## 📦 Project Structure

```
src/
├── modules/
│   └── auth/
│       ├── AuthContext.tsx       # Auth state management
│       ├── authService.ts        # API calls for auth
│       └── pages/
│           ├── Login.tsx         # Beautiful login page
│           └── Register.tsx      # Beautiful registration page
├── pages/
│   ├── Home.tsx                  # Landing page with features
│   ├── Dashboard.tsx             # User dashboard with stats
│   └── NotFound.tsx              # 404 page
├── routes/
│   └── Routes.tsx                # Route configuration
├── services/
│   └── api.ts                    # Axios API client
├── shared/
│   ├── Header.tsx                # Navigation header
│   └── Footer.tsx                # Footer
├── constants/
│   └── routes.ts                 # Route constants
├── components/
│   ├── Button.tsx                # Reusable button
│   └── Input.tsx                 # Reusable input
├── utils/
│   └── fetcher.ts                # Utility functions
├── index.css                     # Tailwind directives
├── main.tsx                      # Entry point
└── App.tsx                       # Root component
```

## 🛠️ Tailwind CSS Configuration

### Files Created:

- `tailwind.config.js` - Tailwind configuration with custom colors and fonts
- `postcss.config.js` - PostCSS configuration
- `src/vite-env.d.ts` - Vite environment variable types
- `src/index.css` - Global styles with Tailwind directives

### Custom Colors (in tailwind.config.js):

- Primary: #3b82f6 (Blue)
- Secondary: #1e40af (Dark Blue)
- Danger: #ef4444 (Red)
- Success: #10b981 (Green)
- Warning: #f59e0b (Amber)

## 📄 Pages Overview

### Home Page

- Hero section with gradient background
- Feature cards with hover effects
- Call-to-action buttons
- Statistics section
- Fully responsive design

### Login Page

- Beautiful gradient background
- Centered form with shadow
- Email and password inputs
- Loading state with spinner
- Error message display
- Link to registration page

### Register Page

- Similar to login with additional confirm password field
- Password validation
- Links to login page
- Loading state

### Dashboard Page

- Welcome header with user email
- Stats cards showing videos, views, subscribers, and likes
- Tabbed interface for Overview, Videos, and Analytics
- Responsive grid layout
- Interactive tabs

### 404 Page

- Centered error message
- Navigation links back to home and dashboard
- Decorative icon

## 🎯 Using Tailwind CSS Classes

### Common Patterns Used:

```tsx
// Flexbox layout
<div className="flex flex-col items-center justify-center">

// Gradient backgrounds
<div className="bg-gradient-to-r from-blue-600 to-blue-700">

// Responsive design
<div className="grid md:grid-cols-3 gap-6">

// Hover effects
<button className="hover:shadow-lg transition transform hover:-translate-y-1">

// Focus states
<input className="focus:outline-none focus:ring-2 focus:ring-blue-500">

// Responsive spacing
<div className="px-4 sm:px-6 lg:px-8 py-6">
```

## 🔧 Getting Started

### Installation

```bash
# Navigate to project directory
cd /Users/vibhorsoni/Desktop/ValTube-Frontend-React

# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE=http://localhost:4000/api
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Running the App

The app runs on `http://localhost:3001` (or next available port if 3001 is in use).

- **Home Page**: `http://localhost:3001/`
- **Login**: `http://localhost:3001/login`
- **Register**: `http://localhost:3001/register`
- **Dashboard**: `http://localhost:3001/dashboard` (requires login)

## 🎨 Customizing Tailwind CSS

### Modify Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#3b82f6",
      secondary: "#1e40af",
      // Add more colors
    },
  },
}
```

### Add Custom Animations

Edit `src/index.css`:

```css
@layer utilities {
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

## 📱 Responsive Breakpoints

Tailwind's default breakpoints are used:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use them in class names: `md:grid-cols-3`, `lg:px-8`

## 🔐 Authentication

The app includes a complete authentication system:

1. **AuthContext** - Manages user state globally
2. **Protected Routes** - Dashboard is only accessible when logged in
3. **Token Management** - JWT tokens stored in localStorage
4. **API Interceptor** - Automatically attaches token to requests

## 🚀 Next Steps

1. **Backend Integration**: Connect to your backend API server running on `localhost:4000`
2. **Add More Pages**: Create additional pages (Search, Upload, Profile, etc.)
3. **Video Upload**: Implement video upload functionality
4. **Comments System**: Add video comments and ratings
5. **User Profiles**: Create user profile pages
6. **Search Feature**: Implement video search
7. **Notifications**: Add real-time notifications

## 📝 Notes

- All CSS classes use Tailwind utility classes for consistency
- No custom CSS needed for basic components
- The design is mobile-first and responsive
- Smooth transitions and animations enhance user experience
- TypeScript provides type safety across the application

## 🤝 Contributing

Feel free to extend and customize this template for your needs!

---

**Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS**
