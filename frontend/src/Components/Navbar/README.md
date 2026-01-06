# Navbar Components

Responsive navigation bars for the EASY-WALLET application with a clean black and white theme.

## Components

### Navbar (Landing Page)
- Used on the landing page
- Features smooth scrolling to page sections
- Hide on scroll down, show on scroll up behavior

### DashboardNavbar (Dashboard Pages)
- Used on dashboard and app pages
- Features navigation between app sections
- Hide on scroll down, show on scroll up behavior
- Includes logout functionality

## Features

- **Smart hide/show behavior** - hides when scrolling down, shows when scrolling up
- **Always visible at top** - remains visible when at the very top of the page
- **Responsive design** with mobile hamburger menu
- **Money/wallet logo** with custom SVG icon
- **Smooth animations** and transitions
- **Backdrop blur** effect for modern look
- **Hover animations** on navigation links

## Props

### Navbar
- `onGetStarted`: Function called when "Get Started" button is clicked

### DashboardNavbar
- `onLogout`: Function called when "Logout" button is clicked

## Styling

Both navbars follow the black and white theme:
- White background with transparency and shadow
- Black text and accents
- Smooth transitions and hover effects
- Mobile-first responsive design
- Smart hide/show on scroll behavior

## Usage

```jsx
// Landing Page
import Navbar from '../Navbar';
<Navbar onGetStarted={handleGetStarted} />

// Dashboard Pages
import { DashboardNavbar } from '../Navbar';
<DashboardNavbar onLogout={handleLogout} />
```