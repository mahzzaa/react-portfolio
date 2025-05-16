# Vercel Analytics Setup Guide

This guide explains how to enable Vercel Analytics for your React portfolio project.

## Prerequisites

- A Vercel account (sign up at https://vercel.com if you don't have one)
- Your project deployed on Vercel

## Steps to Enable Vercel Analytics

### 1. Deploy Your Project to Vercel

If you haven't deployed your project to Vercel yet, follow these steps:

```bash
# Install Vercel CLI (if you haven't already)
npm install -g vercel

# Login to your Vercel account
vercel login

# From your project root directory
cd /Users/masha/projects/react-portfolio
vercel
```

Follow the prompts to complete the deployment.

### 2. Enable Analytics in Vercel Dashboard

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project from the list
3. Click on the "Analytics" tab in the left sidebar
4. Click the "Enable Analytics" button

### 3. Implementation Details (Already Completed)

The following has already been implemented in your codebase:

- Installed the `@vercel/analytics` package
- Added the `<Analytics />` component in `App.jsx`
- Created custom event tracking in `/src/lib/analytics.js`
- Added tracking for:
  - Section views (in Navbar.jsx)
  - Project clicks (in ProjectSection.jsx)
  - Form submissions (in ContactSection.jsx)

### 4. View Analytics Data

After enabling analytics in your Vercel dashboard and deploying your project:

1. Visit your site and interact with it to generate analytics data
2. Go back to the Vercel dashboard and navigate to the Analytics tab
3. You'll see data for:
   - Real-time visitor counts
   - Page views
   - Visitor metrics
   - Bounce rates
   - Custom events you've added

### Custom Events Currently Tracked

The following custom events are currently tracked:

- `section_view`: When a user scrolls to a new section
- `nav_click` and `nav_click_mobile`: When navigation links are clicked
- `project_view`: When a user views a project
- `project_github_click`: When a user clicks a GitHub project link
- `project_demo_click`: When a user clicks a project demo link
- `profile_github_click`: When a user clicks your GitHub profile link
- `contact_form_submit`: When a user submits the contact form

## Additional Customization

To add more custom event tracking, import the `trackEvent` function from `/src/lib/analytics.js` and use it like this:

```jsx
import { trackEvent } from "../lib/analytics";

// Track an event
trackEvent("event_name", { property1: "value1", property2: "value2" });
```
