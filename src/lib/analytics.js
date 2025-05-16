// analytics.js - Utility functions for tracking events with Vercel Analytics
import { track } from "@vercel/analytics";

/**
 * Track a custom event
 * @param {string} eventName - Name of the event to track
 * @param {Object} properties - Properties to associate with the event
 */
export const trackEvent = (eventName, properties = {}) => {
  track(eventName, properties);
};

// Example tracking functions for your portfolio
export const trackProjectView = (projectName) => {
  trackEvent("project_view", { name: projectName });
};

export const trackContactSubmission = () => {
  trackEvent("contact_form_submit");
};

export const trackSectionView = (sectionName) => {
  trackEvent("section_view", { name: sectionName });
};
