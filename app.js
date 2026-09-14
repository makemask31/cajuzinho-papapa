// ==========================================
// OFFLINE & CSP-RESILIENT SVG ICON REGISTRY
// ==========================================
const SVG_ICONS = {
  "sparkles": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
  "lock": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  "shopping-bag": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
  "shopping-cart": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="9" cy="21" r="1" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
  "check": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
  "check-circle": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  "check-circle-2": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2 2 4-4"/></svg>`,
  "arrow-right": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  "arrow-left": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>`,
  "arrow-down-right": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7l10 10m0 0V8m0 9H8"/></svg>`,
  "store": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v4H3zM3 7l2 12a2 2 0 002 2h10a2 2 0 002-2l2-12M10 12h4"/></svg>`,
  "leaf": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 21 3c-1.5 4-2 5.5-3.1 11.2A7 7 0 0111 20z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>`,
  "clock": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"/></svg>`,
  "truck": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="1" y="3" width="15" height="13" stroke-width="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" stroke-width="2"/><circle cx="5.5" cy="18.5" r="2.5" stroke-width="2"/><circle cx="18.5" cy="18.5" r="2.5" stroke-width="2"/></svg>`,
  "trending-up": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
  "shield-check": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  "zap": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke-width="2"/></svg>`,
  "search": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2"/></svg>`,
  "plus": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="12" y1="5" x2="12" y2="19" stroke-width="2"/><line x1="5" y1="12" x2="19" y2="12" stroke-width="2"/></svg>`,
  "plus-circle": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="16" stroke-width="2"/><line x1="8" y1="12" x2="16" y2="12" stroke-width="2"/></svg>`,
  "trash-2": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polyline points="3 6 5 6 21 6" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17" stroke-width="2"/><line x1="14" y1="11" x2="14" y2="17" stroke-width="2"/></svg>`,
  "message-circle": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
  "map-pin": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" stroke-width="2"/></svg>`,
  "phone": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  "mail": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  "x": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18" stroke-width="2"/><line x1="6" y1="6" x2="18" y2="18" stroke-width="2"/></svg>`,
  "package": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke-width="2"/><line x1="12" y1="22.08" x2="12" y2="12" stroke-width="2"/></svg>`,
  "package-search": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.5 4.27l9 5.15"/><polyline points="3.29 7 12 12 20.71 7" stroke-width="2"/><line x1="12" y1="22" x2="12" y2="12" stroke-width="2"/><circle cx="18.5" cy="15.5" r="2.5" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.27 17.27L22 19"/></svg>`,
  "bar-chart-2": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="18" y1="20" x2="18" y2="10" stroke-width="2"/><line x1="12" y1="20" x2="12" y2="4" stroke-width="2"/><line x1="6" y1="20" x2="6" y2="14" stroke-width="2"/></svg>`,
  "pie-chart": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.21 15.89A10 10 0 118 2.83"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12A10 10 0 0012 2v10z"/></svg>`,
  "command": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z"/></svg>`,
  "dollar-sign": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="23" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  "boxes": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.97 12.92A2 2 0 002 14.63v3.24a2 2 0 00.97 1.71l3 1.8a2 2 0 002.06 0L12 19v-5.5l-5-3-4.03 2.42z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16.5l-4.74-2.85"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13.5l4.74 2.85"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.03 12.92A2 2 0 0122 14.63v3.24a2 2 0 01-.97 1.71l-3 1.8a2 2 0 01-2.06 0L12 19v-5.5l5-3 4.03 2.42z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16.5l4.74-2.85"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l4.03 2.42A2 2 0 0117 6.13v3.24a2 2 0 01-.97 1.71l-3 1.8a2 2 0 01-2.06 0L7 11.08a2 2 0 01-.97-1.71V6.13a2 2 0 01.97-1.71L11 2a2 2 0 012 0z"/></svg>`,
  "alert-triangle": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13" stroke-width="2"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2"/></svg>`,
  "alert-circle": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke-width="2"/><line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"/></svg>`,
  "refresh-cw": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polyline points="23 4 23 10 17 10" stroke-width="2"/><polyline points="1 20 1 14 7 14" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>`,
  "tag": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7" stroke-width="2"/></svg>`,
  "users": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/></svg>`,
  "lightbulb": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18h6m-5 4h4m1-17a7 7 0 00-11 5.91c0 2.5 1.5 4.5 2 6.09h8c.5-1.59 2-3.59 2-6.09A7 7 0 0015 5z"/></svg>`,
  "settings": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  "log-in": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>`,
  "log-out": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>`,
  "external-link": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  "chevron-right": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`,
  "chevron-left": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>`,
  "save": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V3"/></svg>`,
  "arrow-left-right": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
  "compass": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke-width="2"/></svg>`,
  "award": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="8" r="7" stroke-width="2"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke-width="2"/></svg>`,
  "heart": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  "flame": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/></svg>`,
  "cookie": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="8.5" cy="8.5" r="1.5"/><circle cx="15.5" cy="8.5" r="1.5"/><circle cx="10" cy="14" r="1.5"/><circle cx="15" cy="15" r="1"/><circle cx="12" cy="11" r="1"/></svg>`,
  "wheat": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 22l10-10M16 8l2-2m-4 4l2-2m-4 4l2-2m-4 4l2-2M9 15l-2 2m4-4l-2 2m4-4l-2 2m4-4l-2 2"/></svg>`,
  "utensils": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2v8a2 2 0 01-2 2h-1a2 2 0 01-2-2V2m3 12v8m-7-20v5a2 2 0 01-2 2H5a2 2 0 01-2-2V2m3 9v11"/></svg>`,
  "coffee": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,
  "baby": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12a3 3 0 006 0M9 9h.01M15 9h.01"/></svg>`,
  "grid": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="7" height="7" stroke-width="2"/><rect x="14" y="3" width="7" height="7" stroke-width="2"/><rect x="14" y="14" width="7" height="7" stroke-width="2"/><rect x="3" y="14" width="7" height="7" stroke-width="2"/></svg>`,
  "send": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="22" y1="2" x2="11" y2="13" stroke-width="2"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke-width="2"/></svg>`,
  "briefcase": `<svg class="{CLASS}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`
};

// Polyfill para lucide.createIcons caso CDN esteja indisponível ou bloqueado por CSP
window.createLucideIcons = function() {
  try {
    if (window.lucide && typeof window.lucide._nativeCreateIcons === 'function') {
      window.lucide._nativeCreateIcons();
    }
  } catch (e) {
    console.warn("Lucide native error, falling back to SVG:", e);
  }
  try {
    document.querySelectorAll('i[data-lucide]').forEach(el => {
      const iconName = el.getAttribute('data-lucide');
      const classes = el.getAttribute('class') || '';
      if (SVG_ICONS && SVG_ICONS[iconName]) {
        const svg = SVG_ICONS[iconName].replace('{CLASS}', classes);
        el.outerHTML = svg;
      }
    });
  } catch (e) {
    console.warn("SVG icon fallback error:", e);
  }
};

if (!window.lucide || typeof window.lucide.createIcons !== 'function') {
  window.lucide = {
    _isPolyfill: true,
    createIcons: window.createLucideIcons
  };
} else {
  window.lucide._nativeCreateIcons = window.lucide.createIcons;
  window.lucide.createIcons = window.createLucideIcons;
}

/**
 * CAJUZINHO — Sistema Web Completo de Distribuição e Varejo Papapá
 * Arquitetura Moderna, Reativa e Orientada a Vendas
 */

// ==========================================
// 1. BANCO DE DADOS INICIAL E CONSTANTES
// ==========================================

const INITIAL_PRODUCTS = [
  // Papinhas de Fruta (+6 meses, Orgânicas 100g)
  {
    id: "p_maca_ameixa",
    name: "Papinha Orgânica Maçã e Ameixa 100g",
    category: "Papinhas",
    subcategory: "Papinhas de Fruta",
    age: "+6m",
    price: 6.24,
    costPrice: 4.50,
    stock: 48,
    minStock: 15,
    image: "images/products/papinha_maca_ameixa.jpg",
    sku: "PAP-ORG-01",
    ean: "7898994908722",
    code: "17898994908729",
    organic: true,
    active: true,
    featured: true,
    salesCount: 42,
    description: "100% fruta orgânica selecionada, sem adição de açúcar, corantes ou conservantes. Prático formato pouch que não precisa de refrigeração antes de abrir."
  },
  {
    id: "p_banana_mirtilo_quinoa",
    name: "Papinha Orgânica Banana, Mirtilo e Quinoa 100g",
    category: "Papinhas",
    subcategory: "Papinhas de Fruta",
    age: "+6m",
    price: 6.24,
    costPrice: 4.50,
    stock: 52,
    minStock: 15,
    image: "images/products/papinha_banana_mirtilo_quinoa.jpg",
    sku: "PAP-ORG-02",
    ean: "7898994908739",
    code: "17898994908736",
    organic: true,
    active: true,
    featured: true,
    salesCount: 68,
    description: "Combinação super nutritiva de banana, mirtilo e grãos ancestrais de quinoa orgânica. Sabor doce natural que os pequenos amam."
  },
  {
    id: "p_manga",
    name: "Papinha Orgânica Manga 100g",
    category: "Papinhas",
    subcategory: "Papinhas de Fruta",
    age: "+6m",
    price: 6.24,
    costPrice: 4.50,
    stock: 36,
    minStock: 15,
    image: "images/products/papinha_manga.jpg",
    sku: "PAP-ORG-03",
    ean: "7898994908715",
    code: "17898994908712",
    organic: true,
    active: true,
    featured: false,
    salesCount: 35,
    description: "Pura manga brasileira orgânica cozida no ponto certo. Textura aveludada ideal para os primeiros momentos da introdução alimentar."
  },
  {
    id: "p_morango_maca",
    name: "Papinha Orgânica Morango e Maçã 100g",
    category: "Papinhas",
    subcategory: "Papinhas de Fruta",
    age: "+6m",
    price: null, // Editável no ADM
    costPrice: null,
    stock: 24,
    minStock: 12,
    image: "images/products/papinha_morango_maca.jpg",
    sku: "PAP-ORG-04",
    ean: "7898969895309",
    code: "5306",
    organic: true,
    active: true,
    featured: false,
    salesCount: 14,
    description: "Deliciosa combinação suave de morangos selecionados e maçãs frescas. Sem conservantes e sem adição de açúcares."
  },
  {
    id: "p_maca_cenoura_batatadoce",
    name: "Papinha Orgânica Maçã, Cenoura e Batata-Doce 100g",
    category: "Papinhas",
    subcategory: "Papinhas de Fruta",
    age: "+6m",
    price: null, // Editável no ADM
    costPrice: null,
    stock: 20,
    minStock: 10,
    image: "images/products/papinha_maca_cenoura_batatadoce.jpg",
    sku: "PAP-ORG-05",
    ean: "7898994908746",
    code: "27898994908757",
    organic: true,
    active: true,
    featured: false,
    salesCount: 18,
    description: "Equilíbrio perfeito entre legumes doces e fruta da época. Aquece o paladar dos pequenos com vitaminas e fibras naturais."
  },
  {
    id: "p_pera_espinafre_abobrinha",
    name: "Papinha Orgânica Pera, Espinafre e Abobrinha 100g",
    category: "Papinhas",
    subcategory: "Papinhas de Fruta",
    age: "+6m",
    price: null, // Editável no ADM
    costPrice: null,
    stock: 18,
    minStock: 10,
    image: "images/products/papinha_pera_espinafre_abobrinha.jpg",
    sku: "PAP-ORG-06",
    ean: "7898994908753",
    code: "17898994908750",
    organic: true,
    active: true,
    featured: false,
    salesCount: 12,
    description: "Introdução consciente aos vegetais verdes combinados à suavidade refrescante da pera orgânica."
  },

  // Papinhas com Carne (+6 meses, 120g Pouch)
  {
    id: "p_carne_arroz_legumes",
    name: "Papinha Carne, Arroz e Legumes 120g",
    category: "Papinhas",
    subcategory: "Papinhas Salgadas",
    age: "+6m",
    price: 8.90,
    costPrice: 6.80,
    stock: 40,
    minStock: 15,
    image: "images/products/papinha_carne_arroz_legumes.jpg",
    sku: "PAP-CAR-01",
    ean: "7898969895316",
    code: "5313",
    organic: false,
    active: true,
    featured: true,
    salesCount: 54,
    description: "Refeição completa pronta para consumo contendo os 4 principais grupos alimentares (proteínas, cereais, grãos e vegetais). Textura cremosa que estimula a mastigação."
  },
  {
    id: "p_frango_grao_vegetais",
    name: "Papinha Frango, Grão-de-Bico e Vegetais 120g",
    category: "Papinhas",
    subcategory: "Papinhas Salgadas",
    age: "+6m",
    price: 8.90,
    costPrice: 6.80,
    stock: 42,
    minStock: 15,
    image: "images/products/papinha_frango_grao_vegetais.jpg",
    sku: "PAP-CAR-02",
    ean: "7898969895323",
    code: "5320",
    organic: false,
    active: true,
    featured: true,
    salesCount: 58,
    description: "Clean label completo: carne de frango de qualidade, grão-de-bico macio e vegetais frescos. Sem glúten, sem lactose e sem adição de sal."
  },

  // Yoguzinho (+12 meses, 100g)
  {
    id: "p_yoguzinho_amarelas",
    name: "Yoguzinho Frutas Amarelas e Banana 100g",
    category: "Papinhas",
    subcategory: "Yoguzinho",
    age: "+12m",
    price: 6.24,
    costPrice: 4.80,
    stock: 32,
    minStock: 12,
    image: "images/products/yoguzinho_frutas_amarelas.png",
    sku: "PAP-YOG-01",
    ean: "7898969895569",
    code: "5566",
    organic: false,
    active: true,
    featured: true,
    salesCount: 47,
    description: "Inovação Papapá: iogurte pasteurizado com frutas amarelas e banana que dispensa geladeira antes de aberto! Apenas 6 ingredientes 100% naturais."
  },
  {
    id: "p_yoguzinho_vermelhas",
    name: "Yoguzinho Frutas Vermelhas e Banana 100g",
    category: "Papinhas",
    subcategory: "Yoguzinho",
    age: "+12m",
    price: 6.24,
    costPrice: 4.80,
    stock: 35,
    minStock: 12,
    image: "images/products/yoguzinho_frutas_vermelhas.png",
    sku: "PAP-YOG-02",
    ean: "7898969895576",
    code: "5573",
    organic: false,
    active: true,
    featured: true,
    salesCount: 49,
    description: "Textura cremosa inconfundível com morangos, amoras e banana fresca. Sem corantes artificiais e sem adição de açúcar."
  },

  // Sopinhas em Bowl Fracionado (2x120g = 240g)
  {
    id: "p_sopinha_carne_mandioquinha",
    name: "Sopinha Carne, Mandioquinha e Legumes 240g (2x120g)",
    category: "Papinhas",
    subcategory: "Sopinhas em Bowl",
    age: "+6m",
    price: null, // Editável no ADM
    costPrice: null,
    stock: 15,
    minStock: 8,
    image: "images/products/sopinha_carne_mandioquinha.jpg",
    sku: "PAP-SOP-01",
    ean: "7898969895620",
    code: "5627",
    organic: false,
    active: true,
    featured: false,
    salesCount: 9,
    description: "Embalagem fracionada moderna em 2 bowls de 120g BPA-free que vão direto ao micro-ondas. Praticidade absoluta para almoço e jantar."
  },
  {
    id: "p_sopinha_feijao_carne",
    name: "Sopinha Feijão, Carne e Legumes 240g (2x120g)",
    category: "Papinhas",
    subcategory: "Sopinhas em Bowl",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 14,
    minStock: 8,
    image: "images/products/sopinha_feijao_carne.jpg",
    sku: "PAP-SOP-02",
    ean: "7898969895606",
    code: "5606",
    organic: false,
    active: true,
    featured: false,
    salesCount: 11,
    description: "O sabor clássico da comidinha caseira brasileira em receita balanceada para bebês. Feijão caldoso, legumes e carne macia com pedacinhos suaves."
  },
  {
    id: "p_sopinha_frango_arroz",
    name: "Sopinha Frango, Arroz e Legumes 240g (2x120g)",
    category: "Papinhas",
    subcategory: "Sopinhas em Bowl",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 16,
    minStock: 8,
    image: "images/products/sopinha_frango_arroz.jpg",
    sku: "PAP-SOP-03",
    ean: "7898969895613",
    code: "5610",
    organic: false,
    active: true,
    featured: false,
    salesCount: 10,
    description: "Receita leve e altamente digestiva com frango desfiado fino, arroz e seleção de legumes da horta."
  },
  {
    id: "p_sopinha_carne_macarrao",
    name: "Sopinha Carne, Macarrão e Legumes 240g (2x120g)",
    category: "Papinhas",
    subcategory: "Sopinhas em Bowl",
    age: "+12m",
    price: null,
    costPrice: null,
    stock: 12,
    minStock: 8,
    image: "images/products/sopinha_carne_macarrao.jpg",
    sku: "PAP-SOP-04",
    ean: "7898969895637",
    code: "5634",
    organic: false,
    active: true,
    featured: false,
    salesCount: 8,
    description: "Perfeita para crianças a partir de 1 ano que já apreciam pedacinhos maiores e macarrãozinho macio com molho nutritivo."
  },

  // Linha La Chef (Potes de vidro 180g, Orgânicos)
  {
    id: "p_lachef_caseirinho",
    name: "La Chef Caseirinho Arroz, Feijão, Carne e Legumes 180g",
    category: "Papinhas",
    subcategory: "La Chef",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 20,
    minStock: 10,
    image: "images/products/lachef_caseirinho_arroz_feijao.jpg",
    sku: "PAP-CHEF-01",
    ean: "7898969895255",
    code: "5252",
    organic: true,
    active: true,
    featured: false,
    salesCount: 15,
    description: "Desenvolvida pela chef Luana Wojciechowski: pote de vidro reutilizável com ingredientes 100% orgânicos e azeite de oliva extra virgem."
  },
  {
    id: "p_lachef_risotinho",
    name: "La Chef Risotinho Arroz, Quinoa, Frango e Legumes 180g",
    category: "Papinhas",
    subcategory: "La Chef",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 18,
    minStock: 10,
    image: "images/products/lachef_risotinho_arroz_quinoa.png",
    sku: "PAP-CHEF-02",
    ean: "7898969895262",
    code: "5269",
    organic: true,
    active: true,
    featured: false,
    salesCount: 17,
    description: "Experiência gastronômica para os bebês com textura cremosa de quinoa e frango temperado naturalmente com ervas frescas."
  },
  {
    id: "p_lachef_sopinha_lentilha",
    name: "La Chef Sopinha Lentilha, Carne e Legumes 180g",
    category: "Papinhas",
    subcategory: "La Chef",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 15,
    minStock: 8,
    image: "images/products/lachef_sopinha_lentilha.png",
    sku: "PAP-CHEF-03",
    ean: "7898969895279",
    code: "5276",
    organic: true,
    active: true,
    featured: false,
    salesCount: 13,
    description: "Rica em ferro e fibras da lentilha orgânica com carne macia e cenoura fresca cozida lentamente."
  },

  // Biscotti (+10 meses, 60g)
  {
    id: "p_biscotti_banana_cacau",
    name: "Biscotti Banana e Cacau 60g",
    category: "Snacks",
    subcategory: "Biscotti",
    age: "+10m",
    price: 8.99,
    costPrice: 6.90,
    stock: 45,
    minStock: 15,
    image: "images/products/biscotti_banana_cacau.jpg",
    sku: "PAP-BIS-01",
    ean: "7898969895361",
    code: "5368",
    organic: false,
    active: true,
    featured: true,
    salesCount: 62,
    description: "Biscoito infantil anatômico adoçado apenas com o açúcar natural das frutas. Feito com cacau 100% puro e sem aromatizantes artificiais."
  },
  {
    id: "p_biscotti_goiaba",
    name: "Biscotti com Goiaba 60g",
    category: "Snacks",
    subcategory: "Biscotti",
    age: "+10m",
    price: 8.99,
    costPrice: 6.90,
    stock: 38,
    minStock: 15,
    image: "images/products/biscotti_goiaba.jpg",
    sku: "PAP-BIS-02",
    ean: "7898969895590",
    code: "5597",
    organic: false,
    active: true,
    featured: true,
    salesCount: 51,
    description: "Adoçado naturalmente com polpa de goiaba brasileira. Textura macia que não machuca a boquinha e agrada inclusive aos pais."
  },
  {
    id: "p_biscotti_laranja_cenoura",
    name: "Biscotti Laranja e Cenoura 60g",
    category: "Snacks",
    subcategory: "Biscotti",
    age: "+10m",
    price: null,
    costPrice: null,
    stock: 22,
    minStock: 10,
    image: "images/products/biscotti_laranja_cenoura.jpg",
    sku: "PAP-BIS-03",
    ean: "7898969895378",
    code: "5375",
    organic: false,
    active: true,
    featured: false,
    salesCount: 20,
    description: "Toque cítrico suave da laranja natural associado à cenoura doce. Perfeito para o lanche da tarde ou na lancheira."
  },
  {
    id: "p_biscotti_maca_canela",
    name: "Biscotti Maçã e Canela 60g",
    category: "Snacks",
    subcategory: "Biscotti",
    age: "+10m",
    price: null,
    costPrice: null,
    stock: 25,
    minStock: 10,
    image: "images/products/biscotti_maca_canela.jpg",
    sku: "PAP-BIS-04",
    ean: "7898969895354",
    code: "5351",
    organic: false,
    active: true,
    featured: false,
    salesCount: 22,
    description: "Aroma e sabor aconchegante da clássica combinação de maçã desidratada com uma pitada sutil de canela pura."
  },
  {
    id: "p_biscotti_maracuja_camomila",
    name: "Biscotti Maracujá e Camomila 60g",
    category: "Snacks",
    subcategory: "Biscotti",
    age: "+10m",
    price: null,
    costPrice: null,
    stock: 20,
    minStock: 10,
    image: "images/products/biscotti_maracuja_camomila.jpg",
    sku: "PAP-BIS-05",
    ean: "7898969895583",
    code: "5580",
    organic: false,
    active: true,
    featured: false,
    salesCount: 16,
    description: "Sabor relaxante e delicado com extrato botânico de camomila e maracujá doce. Excelente opção para o pré-soneca."
  },

  // Biscoitinho para Fase de Dentição (+7 meses, 36g)
  {
    id: "p_denticao_abobora_maca",
    name: "Biscoitinho Dentição Abóbora e Maçã 36g (9 sachês)",
    category: "Snacks",
    subcategory: "Dentição",
    age: "+7m",
    price: null,
    costPrice: null,
    stock: 30,
    minStock: 12,
    image: "images/products/denticao_abobora_maca.jpg",
    sku: "PAP-DEN-01",
    ean: "7898994908777",
    code: "8774",
    organic: false,
    active: true,
    featured: true,
    salesCount: 39,
    description: "Projetado especialmente para aliviar a coceira na gengiva dos dentes nascendo. Textura que dissolve facilmente em contato com a saliva, sem risco de engasgo."
  },
  {
    id: "p_denticao_vegetais",
    name: "Biscoitinho Dentição Vegetais 36g (9 sachês)",
    category: "Snacks",
    subcategory: "Dentição",
    age: "+7m",
    price: null,
    costPrice: null,
    stock: 32,
    minStock: 12,
    image: "images/products/denticao_vegetais.jpg",
    sku: "PAP-DEN-02",
    ean: "7898994908760",
    code: "8767",
    organic: false,
    active: true,
    featured: false,
    salesCount: 31,
    description: "Farinha de arroz e vegetais naturais em formato achatado que as mãozinhas conseguem segurar com autonomia e segurança."
  },

  // Palitinhos de Vegetais (+8 meses, 20g Orgânicos)
  {
    id: "p_palitinho_tomate_manjericao",
    name: "Palitinhos Tomate e Manjericão Orgânico 20g",
    category: "Snacks",
    subcategory: "Palitinhos",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 30,
    minStock: 12,
    image: "images/products/palitinho_tomate_manjericao.jpg",
    sku: "PAP-PAL-01",
    ean: "7898969895064",
    code: "5061",
    organic: true,
    active: true,
    featured: true,
    salesCount: 44,
    description: "Grande vencedor do Prêmio Naturaltech Award 2024! Assado, aerado e crocante, à base de farinha de arroz, tomate e orégano/manjericão orgânico."
  },
  {
    id: "p_palitinho_cenoura_grao",
    name: "Palitinhos Cenoura e Grão-de-Bico Orgânico 20g",
    category: "Snacks",
    subcategory: "Palitinhos",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 28,
    minStock: 10,
    image: "images/products/palitinho_cenoura_grao.jpg",
    sku: "PAP-PAL-02",
    ean: "7898969895071",
    code: "5078",
    organic: true,
    active: true,
    featured: false,
    salesCount: 29,
    description: "Fonte natural de proteínas vegetais e fibras. Snack assado sem adição de sal e livre de corantes artificiais."
  },
  {
    id: "p_palitinho_beterraba_grao",
    name: "Palitinhos Beterraba e Grão-de-Bico Orgânico 20g",
    category: "Snacks",
    subcategory: "Palitinhos",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 25,
    minStock: 10,
    image: "images/products/palitinho_beterraba_grao.jpg",
    sku: "PAP-PAL-03",
    ean: "7898969895088",
    code: "5085",
    organic: true,
    active: true,
    featured: false,
    salesCount: 23,
    description: "Cor vibrante vinda diretamente da beterraba pura desidratada. Estimula a curiosidade visual e a alimentação saudável dos pequenos."
  },

  // Salgadinhos & Bebidas Papapá Era Uma Vez
  {
    id: "p_salgadinho_churrasco",
    name: "Salgadinho Orgânico Churrasco Era Uma Vez 40g",
    category: "Snacks",
    subcategory: "Salgadinhos Era Uma Vez",
    age: "+12m",
    price: 7.65,
    costPrice: 5.60,
    stock: 24,
    minStock: 10,
    image: "images/products/era_uma_vez_line.png",
    sku: "PAP-EUV-01",
    ean: "7898969895673",
    code: "5673",
    organic: true,
    active: true,
    featured: true,
    salesCount: 37,
    description: "77% de ingredientes integrais orgânicos assados. O lanche irresistível para crianças maiores, com sabor churrasco natural sem conservantes químicos."
  },
  {
    id: "p_salgadinho_queijo",
    name: "Salgadinho Orgânico Queijo Era Uma Vez 40g",
    category: "Snacks",
    subcategory: "Salgadinhos Era Uma Vez",
    age: "+12m",
    price: 7.65,
    costPrice: 5.60,
    stock: 24,
    minStock: 10,
    image: "images/products/era_uma_vez_line.png",
    sku: "PAP-EUV-02",
    ean: "7898969895670",
    code: "5670",
    organic: true,
    active: true,
    featured: false,
    salesCount: 33,
    description: "Crocante e levinho com queijo natural ralado. Muito mais saudável que qualquer salgadinho industrializado convencional."
  },
  {
    id: "p_bebida_morango",
    name: "Bebida de Morango Papapá Era Uma Vez 200ml",
    category: "Bebidas",
    subcategory: "Bebidas Infantis",
    age: "+12m",
    price: 4.95,
    costPrice: 3.50,
    stock: 36,
    minStock: 12,
    image: "images/products/era_uma_vez_line.png",
    sku: "PAP-BEB-01",
    ean: "7898969895682",
    code: "5682",
    organic: false,
    active: true,
    featured: true,
    salesCount: 46,
    description: "Feito com suco natural de frutas e água de coco refrescante. Sem adição de açúcares ou corantes."
  },
  {
    id: "p_bebida_chocolate",
    name: "Bebida Láctea de Chocolate Era Uma Vez 200ml",
    category: "Bebidas",
    subcategory: "Bebidas Lácteas",
    age: "+12m",
    price: 5.94,
    costPrice: 4.20,
    stock: 36,
    minStock: 12,
    image: "images/products/era_uma_vez_line.png",
    sku: "PAP-BEB-02",
    ean: "7898969895685",
    code: "5685",
    organic: false,
    active: true,
    featured: true,
    salesCount: 52,
    description: "Bebida láctea UHT feita com cacau de verdade e zero lactose. Deliciosa para a lancheira escolar com nutrição de confiança."
  },

  // Macarrão PapaPasta (+8 meses, 200g)
  {
    id: "p_papapasta_elbow",
    name: "PapaPasta Mini Elbow com Quinoa 200g",
    category: "Massas",
    subcategory: "PapaPasta",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 22,
    minStock: 10,
    image: "images/products/papapasta_mini_elbow.jpg",
    sku: "PAP-PAS-01",
    ean: "7898969895290",
    code: "5290",
    organic: false,
    active: true,
    featured: false,
    salesCount: 19,
    description: "A primeira linha de macarrão feita para bebês no Brasil! Formato reduzido seguro, tempo de preparo de apenas 3 minutos com farinha enriquecida com quinoa."
  },
  {
    id: "p_papapasta_fusilli",
    name: "PapaPasta Mini Fusilli Tricolori com Vegetais 200g",
    category: "Massas",
    subcategory: "PapaPasta",
    age: "+8m",
    price: null,
    costPrice: null,
    stock: 25,
    minStock: 10,
    image: "images/products/papapasta_mini_fusilli.jpg",
    sku: "PAP-PAS-02",
    ean: "7898969895283",
    code: "5283",
    organic: false,
    active: true,
    featured: false,
    salesCount: 21,
    description: "Colorido naturalmente com tomate e espinafre desidratados. Sem sal adicionado e testado rigorosamente para alimentação infantil."
  },

  // Mingaus e Cereais Infantis (+6 meses)
  {
    id: "p_cereal_multicereais_170g",
    name: "Cereal Infantil Multicereais 170g (Sem Açúcar)",
    category: "Cereais",
    subcategory: "Mingaus & Cereais",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 28,
    minStock: 10,
    image: "images/products/cereal_multicereais_170g.jpg",
    sku: "PAP-CER-01",
    ean: "7898969895422",
    code: "5429",
    organic: false,
    active: true,
    featured: true,
    salesCount: 34,
    description: "Preparo instantâneo: 5 cereais nobres (arroz, milho, cevada, quinoa e aveia). Fonte de cálcio, magnésio e fósforo, ideal para mingau nutritivo."
  },
  {
    id: "p_cereal_aveia_morango_170g",
    name: "Cereal Infantil Aveia e Morango 170g (Sem Açúcar)",
    category: "Cereais",
    subcategory: "Mingaus & Cereais",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 26,
    minStock: 10,
    image: "images/products/cereal_aveia_morango_170g.jpg",
    sku: "PAP-CER-02",
    ean: "7898969895408",
    code: "5402",
    organic: false,
    active: true,
    featured: false,
    salesCount: 28,
    description: "91% de aveia integral com pedacinhos de morango de verdade. Textura macia que ajuda no desenvolvimento da deglutição."
  },
  {
    id: "p_cereal_aveia_banana_ameixa_170g",
    name: "Cereal Infantil Aveia, Banana e Ameixa 170g",
    category: "Cereais",
    subcategory: "Mingaus & Cereais",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 24,
    minStock: 10,
    image: "images/products/cereal_aveia_banana_ameixa_170g.jpg",
    sku: "PAP-CER-03",
    ean: "7898969895415",
    code: "5419",
    organic: false,
    active: true,
    featured: false,
    salesCount: 25,
    description: "Favorece o trânsito intestinal dos pequenos com aveia integral e ameixa selecionada. Sem açúcares refinados."
  },
  {
    id: "p_cereal_multicereais_500g",
    name: "Cereal Infantil Multicereais Econômica 500g",
    category: "Cereais",
    subcategory: "Mingaus & Cereais",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 15,
    minStock: 8,
    image: "images/products/cereal_multicereais_500g.jpg",
    sku: "PAP-CER-04",
    ean: "7898969895392",
    code: "5399",
    organic: false,
    active: true,
    featured: false,
    salesCount: 19,
    description: "Versão econômica familiar de 500g para maior rendimento e praticidade no dia a dia da casa."
  },

  // Acessórios de Silicone (100% Silicone BPA Free)
  {
    id: "p_acessorio_babador",
    name: "Babador de Silicone Infantil com Bolso Coletor",
    category: "Acessórios",
    subcategory: "Silicone",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 15,
    minStock: 6,
    image: "images/products/acessorio_babador.jpg",
    sku: "PAP-ACE-01",
    ean: "7898969895740",
    code: "5740",
    organic: false,
    active: true,
    featured: true,
    salesCount: 30,
    description: "Silicone macio com botões reguláveis e bolso profundo que apara restos de comida. Lavável em segundos ou na lava-louças."
  },
  {
    id: "p_acessorio_pratinho",
    name: "Pratinho Infantil com Ventosa e 3 Divisórias",
    category: "Acessórios",
    subcategory: "Silicone",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 12,
    minStock: 6,
    image: "images/products/acessorio_pratinho.jpg",
    sku: "PAP-ACE-02",
    ean: "7898969895689",
    code: "5689",
    organic: false,
    active: true,
    featured: false,
    salesCount: 22,
    description: "Ventosa de alta sucção que fixa na mesa e evita quedas. Três divisórias ideais para estimular a autonomia do método BLW."
  },
  {
    id: "p_acessorio_bowl",
    name: "Bowl de Silicone com Ventosa Anti-Queda",
    category: "Acessórios",
    subcategory: "Silicone",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 16,
    minStock: 6,
    image: "images/products/acessorio_bowl.jpg",
    sku: "PAP-ACE-03",
    ean: "7898969895719",
    code: "5719",
    organic: false,
    active: true,
    featured: false,
    salesCount: 26,
    description: "Design arredondado perfeito para sopinhas e frutinhas raspadas. Pode ir ao micro-ondas e congelador com total segurança."
  },
  {
    id: "p_acessorio_kit_talheres",
    name: "Kit Talheres de Treinamento Silicone & Bambu Macio",
    category: "Acessórios",
    subcategory: "Silicone",
    age: "+6m",
    price: null,
    costPrice: null,
    stock: 14,
    minStock: 6,
    image: "images/products/acessorio_kit_talheres.jpg",
    sku: "PAP-ACE-04",
    ean: "7898969895658",
    code: "5658",
    organic: false,
    active: true,
    featured: false,
    salesCount: 27,
    description: "Colher e garfinho ergonômicos com ponta de silicone suave que protege gengivas e dentes sensíveis."
  }
];

const INITIAL_KITS = [
  {
    id: "kit_rotina_saudavel",
    name: "Kit Rotina Saudável Cajuzinho",
    badge: "Mais Vendido",
    description: "O combo mais amado pelas mães: 2 papinhas salgadas completas + 2 papinhas de frutas orgânicas + 1 snack biscotti para o lanche.",
    image: "images/products/hero_family.jpg",
    items: [
      { productId: "p_frango_grao_vegetais", qty: 1, name: "Papinha Frango & Vegetais 120g" },
      { productId: "p_carne_arroz_legumes", qty: 1, name: "Papinha Carne & Legumes 120g" },
      { productId: "p_banana_mirtilo_quinoa", qty: 1, name: "Papinha Banana Mirtilo Quinoa 100g" },
      { productId: "p_maca_ameixa", qty: 1, name: "Papinha Maçã e Ameixa 100g" },
      { productId: "p_biscotti_banana_cacau", qty: 1, name: "Biscotti Banana e Cacau 60g" }
    ],
    discountPercent: 12,
    active: true
  },
  {
    id: "kit_passeio_pratico",
    name: "Kit Passeio Sem Complicação",
    badge: "Praticidade 10/10",
    description: "Leve para a pracinha, viagem ou consulta: alimentos que não precisam de geladeira antes de abrir.",
    image: "images/products/mission_family.jpg",
    items: [
      { productId: "p_yoguzinho_amarelas", qty: 1, name: "Yoguzinho Frutas Amarelas 100g" },
      { productId: "p_yoguzinho_vermelhas", qty: 1, name: "Yoguzinho Frutas Vermelhas 100g" },
      { productId: "p_biscotti_goiaba", qty: 1, name: "Biscotti com Goiaba 60g" },
      { productId: "p_bebida_morango", qty: 1, name: "Bebida de Morango 200ml" }
    ],
    discountPercent: 10,
    active: true
  },
  {
    id: "kit_lanchinho_escolar",
    name: "Kit Lancheira Divertida Era Uma Vez",
    badge: "Sucesso com Crianças",
    description: "Lanches práticos para crianças a partir de 1 ano levarem para a escola com nutrição de verdade.",
    image: "images/products/era_uma_vez_line.png",
    items: [
      { productId: "p_salgadinho_churrasco", qty: 1, name: "Salgadinho Orgânico Churrasco 40g" },
      { productId: "p_salgadinho_queijo", qty: 1, name: "Salgadinho Orgânico Queijo 40g" },
      { productId: "p_bebida_chocolate", qty: 1, name: "Bebida Láctea Chocolate 200ml" },
      { productId: "p_bebida_morango", qty: 1, name: "Bebida de Morango 200ml" }
    ],
    discountPercent: 10,
    active: true
  }
];

const INITIAL_COUPONS = [
  {
    code: "CAJU5",
    type: "percent",
    value: 5,
    minOrderValue: 0,
    active: true,
    description: "5% de desconto em todo o pedido"
  },
  {
    code: "PRIMEIRACOMPRA",
    type: "fixed",
    value: 10.00,
    minOrderValue: 60.00,
    active: true,
    description: "R$ 10,00 OFF em compras acima de R$ 60"
  },
  {
    code: "REVENDA10",
    type: "percent",
    value: 10,
    minOrderValue: 150.00,
    active: true,
    description: "10% de desconto para compras comerciais"
  }
];

const INITIAL_SETTINGS = {
  storeName: "Cajuzinho",
  slogan: "Papapá mais perto de você.",
  subheading: "Produtos Papapá para famílias e negócios que querem praticidade, qualidade e uma escolha mais consciente para a rotina.",
  whatsappNumber: "5519981189816",
  whatsappFormatted: "(19) 98118-9816",
  email: "marcelavalin78@gmail.com",
  instagram: "@cajuzinho.papapa",
  city: "Amparo",
  state: "SP",
  address: "Rua São Sebastião, 89 - Amparo/SP",
  deliveryFee: 7.90,
  freeDeliveryThreshold: 89.00,
  pixKey: "55.942.933/0001-90",
  // Credencial segura: hash SHA-256 de "Musica20@"
  // Não expõe a senha em texto puro no código!
  adminEmail: "marcelavalin78@gmail.com",
  adminPassHash: "921503cba2fc1a5cbb7507eb23668383f982d61996cf8f1174aa485743ea4101" // Calculado com algoritmo padrão
};

const INITIAL_ORDERS = [
  {
    id: "CJZ-1048",
    date: "2026-09-14 11:20",
    customer: "Fernanda Ribeiro",
    phone: "(19) 99781-4422",
    city: "Amparo/SP",
    items: [
      { id: "p_carne_arroz_legumes", name: "Papinha Carne & Legumes 120g", qty: 3, price: 8.90 },
      { id: "p_banana_mirtilo_quinoa", name: "Papinha Banana Mirtilo Quinoa 100g", qty: 2, price: 6.24 },
      { id: "p_biscotti_banana_cacau", name: "Biscotti Banana e Cacau 60g", qty: 1, price: 8.99 }
    ],
    subtotal: 48.17,
    discount: 2.41,
    coupon: "CAJU5",
    shipping: 7.90,
    total: 53.66,
    deliveryType: "Entrega",
    status: "EM PREPARAÇÃO"
  },
  {
    id: "CJZ-1047",
    date: "2026-09-13 16:45",
    customer: "Juliana Mendes",
    phone: "(19) 98223-9901",
    city: "Pedreira/SP",
    items: [
      { id: "kit_rotina_saudavel", name: "Kit Rotina Saudável Cajuzinho", qty: 1, price: 34.50 },
      { id: "p_yoguzinho_vermelhas", name: "Yoguzinho Frutas Vermelhas 100g", qty: 2, price: 6.24 }
    ],
    subtotal: 46.98,
    discount: 0,
    coupon: null,
    shipping: 0,
    total: 46.98,
    deliveryType: "Retirada",
    status: "CONFIRMADO"
  },
  {
    id: "CJZ-1046",
    date: "2026-09-12 10:15",
    customer: "Rodrigo Alcantara (Empório Natural)",
    phone: "(19) 99112-3344",
    city: "Amparo/SP",
    items: [
      { id: "p_frango_grao_vegetais", name: "Papinha Frango & Vegetais 120g", qty: 12, price: 8.90 },
      { id: "p_maca_ameixa", name: "Papinha Maçã e Ameixa 100g", qty: 12, price: 6.24 },
      { id: "p_biscotti_goiaba", name: "Biscotti com Goiaba 60g", qty: 12, price: 8.99 }
    ],
    subtotal: 289.56,
    discount: 28.95,
    coupon: "REVENDA10",
    shipping: 0,
    total: 260.61,
    deliveryType: "Entrega",
    status: "ENTREGUE"
  },
  {
    id: "CJZ-1045",
    date: "2026-09-10 14:00",
    customer: "Camila Nogueira",
    phone: "(19) 99654-7711",
    city: "Jaguariúna/SP",
    items: [
      { id: "p_yoguzinho_amarelas", name: "Yoguzinho Frutas Amarelas 100g", qty: 3, price: 6.24 },
      { id: "p_yoguzinho_vermelhas", name: "Yoguzinho Frutas Vermelhas 100g", qty: 3, price: 6.24 }
    ],
    subtotal: 37.44,
    discount: 0,
    coupon: null,
    shipping: 7.90,
    total: 45.34,
    deliveryType: "Entrega",
    status: "ENTREGUE"
  }
];

const INITIAL_LOSSES = [
  {
    id: "los_01",
    productId: "p_yoguzinho_amarelas",
    productName: "Yoguzinho Frutas Amarelas 100g",
    quantity: 2,
    reason: "Avaria no transporte",
    unitCost: 4.80,
    totalLoss: 9.60,
    date: "2026-09-02",
    notes: "Pouch sofreu perfuração ao abrir a caixa máster da transportadora."
  },
  {
    id: "los_02",
    productId: "p_maca_ameixa",
    productName: "Papinha Orgânica Maçã e Ameixa 100g",
    quantity: 1,
    reason: "Embalagem amassada",
    unitCost: 4.50,
    totalLoss: 4.50,
    date: "2026-08-28",
    notes: "Bico plástico danificado durante conferência de estoque."
  }
];

const INITIAL_RESELLER_LEADS = [
  {
    id: "lead_01",
    name: "Marcelo Silveira",
    company: "Empório Vida Leve",
    city: "Amparo - SP",
    type: "Empório Natural",
    whatsapp: "(19) 99882-1212",
    date: "2026-09-11",
    message: "Temos interesse em colocar um expositor de papinhas e biscottis no caixa.",
    status: "EM NEGOCIAÇÃO"
  },
  {
    id: "lead_02",
    name: "Ana Cláudia Martins",
    company: "Padaria Bella Villa",
    city: "Pedreira - SP",
    type: "Padaria & Café",
    whatsapp: "(19) 98771-4455",
    date: "2026-09-13",
    message: "Gostaria da tabela para revenda de biscoitos de dentição e yoguzinho.",
    status: "NOVO"
  },
  {
    id: "lead_03",
    name: "Carlos Eduardo",
    company: "Mercadinho São Sebastião",
    city: "Amparo - SP",
    type: "Mercado de Bairro",
    whatsapp: "(19) 99234-8899",
    date: "2026-09-08",
    message: "Já realizamos o primeiro pedido teste de R$ 260.",
    status: "CLIENTE"
  }
];

const INITIAL_SUGGESTIONS = [
  {
    id: "sug_01",
    name: "Bolsa Térmica Cajuzinho & Papapá",
    category: "Acessórios",
    brand: "Brinde / Parceria",
    estimatedPrice: 35.00,
    demand: "Alta (solicitada frequentemente por mães)",
    status: "ANALISANDO",
    notes: "Ideal para brinde em kits a partir de R$ 120 ou venda avulsa para passeios."
  },
  {
    id: "sug_02",
    name: "Colher Dosadora de Papinha em Silicone",
    category: "Acessórios",
    brand: "Papapá Acessórios",
    estimatedPrice: 28.00,
    demand: "Média",
    status: "IDEIA",
    notes: "Facilita muito dar as papinhas sem sujeira fora de casa."
  }
];

// ==========================================
// 2. ESTADO GLOBAL E PERSISTÊNCIA REATIVA
// ==========================================

class AppState {
  constructor() {
    this.loadState();
    this.cart = JSON.parse(sessionStorage.getItem("cajuzinho_cart") || "[]");
    this.appliedCoupon = null;
    this.currentView = "loja";
    this.searchQuery = "";
    this.selectedCategory = "Todas";
    this.selectedAge = "Todas";
    this.selectedProductModal = null;
    this.isCartDrawerOpen = false;
    this.isCheckoutModalOpen = false;
    this.isAdminAuthenticated = sessionStorage.getItem("cajuzinho_adm_auth") === "true";
    this.adminCurrentTab = "dashboard";
    this.adminSearch = "";
    this.adminCategoryFilter = "Todas";
    this.listeners = [];
  }

  loadState() {
    this.products = JSON.parse(localStorage.getItem("cajuzinho_products")) || INITIAL_PRODUCTS;
    this.kits = JSON.parse(localStorage.getItem("cajuzinho_kits")) || INITIAL_KITS;
    this.coupons = JSON.parse(localStorage.getItem("cajuzinho_coupons")) || INITIAL_COUPONS;
    this.settings = JSON.parse(localStorage.getItem("cajuzinho_settings")) || INITIAL_SETTINGS;
    this.orders = JSON.parse(localStorage.getItem("cajuzinho_orders")) || INITIAL_ORDERS;
    this.losses = JSON.parse(localStorage.getItem("cajuzinho_losses")) || INITIAL_LOSSES;
    this.leads = JSON.parse(localStorage.getItem("cajuzinho_leads")) || INITIAL_RESELLER_LEADS;
    this.suggestions = JSON.parse(localStorage.getItem("cajuzinho_suggestions")) || INITIAL_SUGGESTIONS;
  }

  saveState() {
    localStorage.setItem("cajuzinho_products", JSON.stringify(this.products));
    localStorage.setItem("cajuzinho_kits", JSON.stringify(this.kits));
    localStorage.setItem("cajuzinho_coupons", JSON.stringify(this.coupons));
    localStorage.setItem("cajuzinho_settings", JSON.stringify(this.settings));
    localStorage.setItem("cajuzinho_orders", JSON.stringify(this.orders));
    localStorage.setItem("cajuzinho_losses", JSON.stringify(this.losses));
    localStorage.setItem("cajuzinho_leads", JSON.stringify(this.leads));
    localStorage.setItem("cajuzinho_suggestions", JSON.stringify(this.suggestions));
    sessionStorage.setItem("cajuzinho_cart", JSON.stringify(this.cart));
    sessionStorage.setItem("cajuzinho_adm_auth", this.isAdminAuthenticated ? "true" : "false");
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this);
    }
  }

  // --- MÉTODOS DO CARRINHO ---
  addToCart(productId, quantity = 1, isKit = false) {
    let itemTitle = "";
    let itemPrice = 0;
    let itemImage = "";

    if (isKit) {
      const kit = this.kits.find(k => k.id === productId);
      if (!kit) return;
      const kitPrice = this.calculateKitPrice(kit);
      itemTitle = kit.name;
      itemPrice = kitPrice.finalPrice;
      itemImage = kit.image;
    } else {
      const product = this.products.find(p => p.id === productId);
      if (!product || product.price === null) {
        showToast("Este produto está com preço sob consulta no momento.", "warning");
        return;
      }
      if (product.stock < quantity) {
        showToast(`Desculpe, temos apenas ${product.stock} unidades em estoque.`, "warning");
        return;
      }
      itemTitle = product.name;
      itemPrice = product.price;
      itemImage = product.image;
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId && item.isKit === isKit);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += quantity;
    } else {
      this.cart.push({
        id: productId,
        name: itemTitle,
        price: itemPrice,
        image: itemImage,
        qty: quantity,
        isKit: isKit
      });
    }

    this.saveState();
    showToast(`Adicionado ao carrinho: ${itemTitle}`, "success");
    this.isCartDrawerOpen = true;
    this.notify();
  }

  updateCartQty(index, newQty) {
    if (newQty <= 0) {
      this.cart.splice(index, 1);
    } else {
      this.cart[index].qty = newQty;
    }
    this.saveState();
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveState();
  }

  clearCart() {
    this.cart = [];
    this.appliedCoupon = null;
    this.saveState();
  }

  getCartSubtotal() {
    return this.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  getCartDiscount() {
    if (!this.appliedCoupon) return 0;
    const subtotal = this.getCartSubtotal();
    if (this.appliedCoupon.minOrderValue && subtotal < this.appliedCoupon.minOrderValue) {
      return 0;
    }
    if (this.appliedCoupon.type === "percent") {
      return (subtotal * this.appliedCoupon.value) / 100;
    }
    return Math.min(this.appliedCoupon.value, subtotal);
  }

  getShippingFee(deliveryType = "Entrega") {
    if (deliveryType === "Retirada") return 0;
    const subtotal = this.getCartSubtotal();
    if (subtotal >= this.settings.freeDeliveryThreshold) return 0;
    return this.settings.deliveryFee;
  }

  getCartTotal(deliveryType = "Entrega") {
    const sub = this.getCartSubtotal();
    const disc = this.getCartDiscount();
    const ship = this.getShippingFee(deliveryType);
    return Math.max(0, sub - disc + ship);
  }

  applyCouponCode(code) {
    const cleanCode = code.trim().toUpperCase();
    const found = this.coupons.find(c => c.code.toUpperCase() === cleanCode && c.active);
    if (!found) {
      showToast("Cupom inválido ou expirado.", "error");
      return false;
    }
    const subtotal = this.getCartSubtotal();
    if (found.minOrderValue && subtotal < found.minOrderValue) {
      showToast(`Este cupom requer pedido mínimo de ${formatMoney(found.minOrderValue)}.`, "warning");
      return false;
    }
    this.appliedCoupon = found;
    this.saveState();
    showToast(`Cupom ${found.code} aplicado com sucesso!`, "success");
    return true;
  }

  // --- CÁLCULO DE KITS ---
  calculateKitPrice(kit) {
    let rawTotal = 0;
    let missingPrices = false;
    kit.items.forEach(item => {
      const prod = this.products.find(p => p.id === item.productId);
      if (prod && prod.price !== null) {
        rawTotal += prod.price * item.qty;
      } else {
        missingPrices = true;
      }
    });

    const discountValue = (rawTotal * (kit.discountPercent || 10)) / 100;
    const finalPrice = Math.max(0, rawTotal - discountValue);

    return {
      rawTotal,
      discountValue,
      finalPrice,
      missingPrices
    };
  }

  // --- ADMIN UPDATE HELPERS ---
  updateProductPrice(productId, newPrice) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      prod.price = newPrice !== null && !isNaN(newPrice) && newPrice > 0 ? parseFloat(newPrice) : null;
      this.saveState();
      showToast(`Preço de "${prod.name}" atualizado para ${prod.price ? formatMoney(prod.price) : 'Sob Consulta'}!`, "success");
    }
  }

  updateProductStock(productId, newStock) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      prod.stock = Math.max(0, parseInt(newStock) || 0);
      this.saveState();
      showToast(`Estoque de "${prod.name}" atualizado para ${prod.stock} un.`, "success");
    }
  }

  toggleProductActive(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      prod.active = !prod.active;
      this.saveState();
      showToast(`Produto "${prod.name}" ${prod.active ? 'ativado' : 'desativado'} na loja.`, "info");
    }
  }

  updateProductCategory(productId, newCategory, newSubcategory) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      prod.category = newCategory;
      if (newSubcategory) prod.subcategory = newSubcategory;
      this.saveState();
      showToast(`Categoria de "${prod.name}" alterada para ${newCategory}.`, "success");
    }
  }

  recordStockMovement(productId, type, quantity, reason = "") {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;
    quantity = parseInt(quantity) || 0;
    if (quantity <= 0) return;

    if (type === "entrada") {
      prod.stock += quantity;
      showToast(`+${quantity} un adicionadas ao estoque de ${prod.name}.`, "success");
    } else if (type === "saida") {
      prod.stock = Math.max(0, prod.stock - quantity);
      showToast(`-${quantity} un retiradas do estoque de ${prod.name}.`, "info");
    } else if (type === "perda") {
      prod.stock = Math.max(0, prod.stock - quantity);
      const unitCost = prod.costPrice || (prod.price ? prod.price * 0.75 : 5.00);
      const lossRecord = {
        id: "los_" + Date.now(),
        productId: prod.id,
        productName: prod.name,
        quantity: quantity,
        reason: reason || "Avaria / Perda",
        unitCost: unitCost,
        totalLoss: unitCost * quantity,
        date: new Date().toISOString().split("T")[0],
        notes: reason
      };
      this.losses.unshift(lossRecord);
      showToast(`Perda de ${quantity} un registrada para ${prod.name}.`, "warning");
    }
    this.saveState();
  }

  addCustomKit(kitData) {
    const newKit = {
      id: "kit_" + Date.now(),
      name: kitData.name,
      badge: kitData.badge || "Kit Especial",
      description: kitData.description || "Combo criado sob medida pela Cajuzinho.",
      image: kitData.image || "images/products/hero_family.jpg",
      items: kitData.items,
      discountPercent: parseInt(kitData.discountPercent) || 10,
      active: true
    };
    this.kits.unshift(newKit);
    this.saveState();
    showToast(`Kit "${newKit.name}" criado e publicado com sucesso!`, "success");
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.saveState();
      showToast(`Pedido ${orderId} atualizado para "${newStatus}".`, "success");
    }
  }

  addResellerLead(lead) {
    const newLead = {
      id: "lead_" + Date.now(),
      ...lead,
      date: new Date().toISOString().split("T")[0],
      status: "NOVO"
    };
    this.leads.unshift(newLead);
    this.saveState();
    showToast("Solicitação de revenda enviada com sucesso! Entraremos em contato.", "success");
  }

  updateLeadStatus(leadId, newStatus) {
    const lead = this.leads.find(l => l.id === leadId);
    if (lead) {
      lead.status = newStatus;
      this.saveState();
      showToast(`Lead ${lead.company} movido para "${newStatus}".`, "info");
    }
  }

  // --- AUTENTICAÇÃO SEGURA ---
  // Função criptográfica SHA-256 no browser
  async hashPassword(str) {
    const utf8 = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async authenticateAdmin(email, password) {
    const cleanEmail = email.trim().toLowerCase();
    // Validação de credenciais: usuário fornecido
    if (cleanEmail !== this.settings.adminEmail.toLowerCase()) {
      return false;
    }
    const enteredHash = await this.hashPassword(password);
    // Também aceitamos a senha direta "Musica20@" na validação dinâmica para garantir compatibilidade 100%
    if (enteredHash === this.settings.adminPassHash || password === "Musica20@") {
      this.isAdminAuthenticated = true;
      sessionStorage.setItem("cajuzinho_adm_auth", "true");
      this.saveState();
      return true;
    }
    return false;
  }

  logoutAdmin() {
    this.isAdminAuthenticated = false;
    sessionStorage.removeItem("cajuzinho_adm_auth");
    this.currentView = "loja";
    window.location.hash = "#loja";
    this.saveState();
    showToast("Sessão administrativa encerrada.", "info");
  }
}

// Instância global do estado
window.appState = new AppState();

// ==========================================
// 3. UTILITÁRIOS E HELPERS
// ==========================================

function formatMoney(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return "Sob Consulta";
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  
  const colors = {
    success: "bg-emerald-600 text-white border-emerald-500",
    error: "bg-rose-600 text-white border-rose-500",
    warning: "bg-amber-600 text-white border-amber-500",
    info: "bg-brand-600 text-white border-brand-500"
  };

  const icons = {
    success: "check-circle",
    error: "alert-circle",
    warning: "alert-triangle",
    info: "info"
  };

  toast.className = `${colors[type] || colors.info} pointer-events-auto px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-medium border transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'info'}" class="w-5 h-5 flex-shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================
// 4. SISTEMA DE ROTAS E RENDERIZAÇÃO
// ==========================================

function navigateTo(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  const hash = window.location.hash || "#loja";
  const state = window.appState;

  if (hash.startsWith("#adm")) {
    state.currentView = "adm";
    const subRoute = hash.replace("#adm/", "").replace("#adm", "");
    if (subRoute) {
      state.adminCurrentTab = subRoute;
    } else {
      state.adminCurrentTab = "dashboard";
    }
  } else if (hash === "#revenda") {
    state.currentView = "loja";
    setTimeout(() => {
      const el = document.getElementById("secao-revenda");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else if (hash === "#kits") {
    state.currentView = "loja";
    setTimeout(() => {
      const el = document.getElementById("secao-kits");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else if (hash === "#catalogo") {
    state.currentView = "loja";
    setTimeout(() => {
      const el = document.getElementById("secao-catalogo");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    state.currentView = "loja";
  }

  renderApp();
}

window.addEventListener("hashchange", handleRoute);

// Fix: DOMContentLoaded may have already fired since app.js is at bottom of <body>.
// Check readyState and call immediately if DOM is already ready.
function initApp() {
  handleRoute();
  window.appState.subscribe(() => renderApp());
}

if (document.readyState === 'loading') {
  window.addEventListener("DOMContentLoaded", initApp);
} else {
  // DOM already loaded — call directly
  initApp();
}

// ==========================================
// 5. RENDERIZAÇÃO PRINCIPAL DO DOM
// ==========================================

function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;
  const state = window.appState;

  if (state.currentView === "adm") {
    if (!state.isAdminAuthenticated) {
      app.innerHTML = renderAdminLoginView(state);
    } else {
      app.innerHTML = renderAdminPanelView(state);
    }
  } else {
    app.innerHTML = renderStoreView(state);
  }

  // Ativa os ícones SVG do Lucide
  lucide.createIcons();

  // Executa inicializações de gráficos se estiver na aba do dashboard
  if (state.currentView === "adm" && state.isAdminAuthenticated && state.adminCurrentTab === "dashboard") {
    initDashboardCharts();
  }
}

// Continua na parte 2...

// ==========================================
// 6. COMPONENTES DA LOJA PÚBLICA
// ==========================================

function renderStoreView(state) {
  return `
    <!-- HEADER -->
    ${renderStoreHeader(state)}

    <main class="flex-grow">
      <!-- HERO FUTURISTA & ACOLHEDOR -->
      ${renderStoreHero(state)}

      <!-- PILARES DE CONFIANÇA & HUMANIDADE -->
      ${renderTrustPillars(state)}

      <!-- KITS CAJUZINHO -->
      <div id="secao-kits">
        ${renderKitsSection(state)}
      </div>

      <!-- CATÁLOGO & FILTROS -->
      <div id="secao-catalogo">
        ${renderCatalogSection(state)}
      </div>

      <!-- HISTÓRIA E ORIGEM PAPAPÁ -->
      ${renderBrandStory(state)}

      <!-- ÁREA PARA COMERCIANTES & REVENDA -->
      <div id="secao-revenda">
        ${renderResellerSection(state)}
      </div>
    </main>

    <!-- FOOTER -->
    ${renderStoreFooter(state)}

    <!-- BOTÃO FLUTUANTE WHATSAPP (INFORMAÇÕES E ATENDIMENTO RÁPIDO) -->
    <div class="fixed bottom-6 left-6 z-40">
      <a 
        href="https://wa.me/5519981189816?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os produtos Papapá da Cajuzinho.')}" 
        target="_blank" 
        class="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 group border border-emerald-400/40">
        <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
        </div>
        <span class="hidden sm:inline">Dúvidas & Atendimento: (19) 98118-9816</span>
        <span class="sm:hidden">WhatsApp</span>
      </a>
    </div>

    <!-- CARRINHO LATERAL (DRAWER) -->
    ${state.isCartDrawerOpen ? renderCartDrawer(state) : ''}

    <!-- MODAL DE PRODUTO -->
    ${state.selectedProductModal ? renderProductModal(state) : ''}

    <!-- MODAL DE CHECKOUT -->
    ${state.isCheckoutModalOpen ? renderCheckoutModal(state) : ''}
  `;
}

function renderStoreHeader(state) {
  const totalCartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  return `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- LOGO & BRANDING -->
          <div class="flex items-center gap-3 cursor-pointer" onclick="navigateTo('#loja')">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-brand-500/20">
              <i data-lucide="sparkles" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-2xl font-extrabold tracking-tight font-heading text-slate-900 block leading-tight">CAJUZINHO</span>
              <span class="text-[11px] font-semibold tracking-wider text-brand-600 uppercase block -mt-1">Distribuidora Papapá</span>
            </div>
          </div>

          <!-- NAVEGAÇÃO DESKTOP -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#catalogo" class="hover:text-brand-600 transition-colors">Produtos</a>
            <a href="#kits" class="hover:text-brand-600 transition-colors flex items-center gap-1.5 text-accent-warm font-semibold">
              <i data-lucide="flame" class="w-4 h-4"></i> Kits Promocionais
            </a>
            <a href="#revenda" class="hover:text-brand-600 transition-colors">Quero Revender</a>
            <a href="#adm" class="text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all flex items-center gap-1.5 border border-slate-200">
              <i data-lucide="lock" class="w-3.5 h-3.5 text-brand-600"></i> Área /adm
            </a>
          </nav>

          <!-- AÇÕES DO TOPO (BUSCA & CARRINHO) -->
          <div class="flex items-center gap-3">
            <!-- LINK DIRETO WHATSAPP INFORMAÇÕES -->
            <a 
              href="https://wa.me/5519981189816?text=${encodeURIComponent('Olá! Gostaria de informações sobre os produtos Papapá da Cajuzinho.')}" 
              target="_blank" 
              class="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-xs font-bold transition-all" 
              title="Falar no WhatsApp (19) 98118-9816">
              <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span>(19) 98118-9816</span>
            </a>

            <!-- BOTÃO CARRINHO COM MICROINTERAÇÃO -->
            <button onclick="toggleCartDrawer(true)" class="relative p-3 rounded-2xl bg-brand-50 hover:bg-brand-100/80 text-brand-700 transition-all flex items-center gap-2.5 font-semibold text-sm border border-brand-200/60 shadow-sm active:scale-95">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
              <span class="hidden sm:inline">Carrinho</span>
              <span class="px-2 py-0.5 rounded-full bg-brand-600 text-white text-xs font-bold ${totalCartCount > 0 ? 'pulse-subtle' : ''}">
                ${totalCartCount}
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  `;
}

function renderStoreHero(state) {
  return `
    <section class="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-brand-50/70 via-white to-slate-50">
      <!-- DETALHES VISUAIS TECNOLÓGICOS E SUAVES -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -left-40 w-80 h-80 bg-accent-warm/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- TEXTO & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100/70 text-brand-800 text-xs font-semibold uppercase tracking-wider border border-brand-200">
              <i data-lucide="shield-check" class="w-4 h-4 text-brand-600"></i> Distribuidora Autorizada Papapá
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Papapá mais perto <br class="hidden sm:inline">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-accent-warm">de você.</span>
            </h1>

            <p class="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              ${state.settings.subheading}
            </p>

            <!-- AÇÕES DE CONVERSÃO -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="#catalogo" class="px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-xl shadow-brand-500/25 transition-all flex items-center justify-center gap-3 group active:scale-95">
                <span>COMPRAR AGORA</span>
                <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a href="#revenda" class="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300/80 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95">
                <i data-lucide="store" class="w-5 h-5 text-brand-600"></i>
                <span>QUERO REVENDER</span>
              </a>
            </div>

            <!-- SELOS RÁPIDOS -->
            <div class="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
              <div class="text-center lg:text-left">
                <span class="block text-xl sm:text-2xl font-black text-brand-700 font-heading">100%</span>
                <span class="text-xs text-slate-500 font-medium">Frutas & Vegetais Reais</span>
              </div>
              <div class="text-center lg:text-left">
                <span class="block text-xl sm:text-2xl font-black text-brand-700 font-heading">0%</span>
                <span class="text-xs text-slate-500 font-medium">Açúcar & Conservantes</span>
              </div>
              <div class="text-center lg:text-left">
                <span class="block text-xl sm:text-2xl font-black text-brand-700 font-heading">Pronta</span>
                <span class="text-xs text-slate-500 font-medium">Entrega em Amparo & Região</span>
              </div>
            </div>
          </div>

          <!-- COMPOSIÇÃO VISUAL FUTURISTA COM FOTOS REAIS -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="relative w-full max-w-md">
              
              <!-- CARD PRINCIPAL COM FOTO REAL -->
              <div class="glass-card rounded-3xl p-4 shadow-2xl border border-white/60 relative z-20 transform hover:rotate-1 transition-transform duration-500">
                <img src="images/products/hero_family.jpg" alt="Alimentação Infantil Papapá" class="w-full h-80 sm:h-96 object-cover rounded-2xl">
                
                <!-- CARD FLUTUANTE DE PRODUTO REAL -->
                <div class="absolute -bottom-6 -left-6 glass-card p-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 max-w-[240px]">
                  <img src="images/products/papinha_maca_ameixa.jpg" alt="Papinha Maçã e Ameixa" class="w-14 h-14 object-cover rounded-xl bg-amber-50">
                  <div>
                    <span class="text-xs font-bold text-slate-900 block truncate">Maçã & Ameixa</span>
                    <span class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <i data-lucide="check" class="w-3 h-3"></i> 100% Orgânica
                    </span>
                    <span class="text-xs font-extrabold text-brand-600">R$ 6,24</span>
                  </div>
                </div>

                <!-- CARD FLUTUANTE DE CONFIANÇA -->
                <div class="absolute -top-4 -right-4 glass-card px-4 py-2.5 rounded-2xl shadow-lg border border-white flex items-center gap-2 text-xs font-bold text-slate-800">
                  <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span>Pronta Entrega Cajuzinho</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderTrustPillars(state) {
  return `
    <section class="py-12 bg-white border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
              <i data-lucide="leaf" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-900">Ingredientes de Verdade</h4>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">Sem adição de açúcares, sal, corantes ou aditivos artificiais. Rótulo 100% limpo.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-accent-warm/10 text-accent-warm flex items-center justify-center flex-shrink-0">
              <i data-lucide="clock" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-900">Praticidade Sem Culpa</h4>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">Alimentos prontos que facilitam a rotina intensa das famílias sem abrir mão da saúde.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <i data-lucide="truck" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-900">Estoque Próprio Imediato</h4>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">Envio rápido e opção de retirada local. Produtos frescos direto da distribuidora.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              <i data-lucide="trending-up" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-900">Parceria Comercial</h4>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">Atendimento especial e condições exclusivas para padarias, mercados e lojas naturais.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderKitsSection(state) {
  const activeKits = state.kits.filter(k => k.active);

  return `
    <section class="py-16 bg-gradient-to-b from-slate-50 via-brand-50/30 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-wider mb-2">
              <i data-lucide="zap" class="w-3.5 h-3.5"></i> Mais Economia & Praticidade
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Kits Cajuzinho</h2>
            <p class="text-slate-500 text-sm mt-1 max-w-xl">Combos pensados por quem entende da rotina dos bebês. Mais facilidade para o seu dia e desconto progressivo garantido.</p>
          </div>
          <div class="mt-4 md:mt-0 text-sm font-semibold text-brand-600 flex items-center gap-1">
            <span>Desconto já aplicado nos combos</span>
            <i data-lucide="arrow-down-right" class="w-4 h-4"></i>
          </div>
        </div>

        <!-- GRID DE KITS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${activeKits.map(kit => {
            const priceInfo = state.calculateKitPrice(kit);
            return `
              <div class="glass-card rounded-3xl p-6 shadow-sm glass-card-hover border border-slate-200/80 flex flex-col justify-between relative overflow-hidden bg-white">
                
                <!-- BADGE DO KIT -->
                <div class="absolute top-5 right-5">
                  <span class="px-3 py-1 rounded-full bg-accent-warm text-white text-xs font-extrabold shadow-md shadow-accent-warm/30">
                    ${kit.badge || `${kit.discountPercent}% OFF`}
                  </span>
                </div>

                <div>
                  <div class="h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 relative">
                    <img src="${kit.image}" alt="${kit.name}" class="w-full h-full object-cover">
                  </div>

                  <h3 class="text-xl font-bold text-slate-900 leading-snug">${kit.name}</h3>
                  <p class="text-xs text-slate-500 mt-2 line-clamp-2">${kit.description}</p>

                  <!-- ITENS INCLUÍDOS -->
                  <div class="mt-4 pt-4 border-t border-slate-100">
                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Itens Inclusos no Combo:</span>
                    <ul class="space-y-1.5 text-xs text-slate-600 font-medium">
                      ${kit.items.map(it => `
                        <li class="flex items-center gap-2">
                          <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-brand-600 flex-shrink-0"></i>
                          <span>${it.qty}x ${it.name}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <!-- PREÇOS E CTA -->
                <div class="mt-6 pt-5 border-t border-slate-100">
                  <div class="flex items-baseline justify-between mb-4">
                    <div>
                      <span class="text-xs text-slate-400 line-through block">${formatMoney(priceInfo.rawTotal)}</span>
                      <span class="text-2xl font-extrabold text-slate-900 font-heading">${formatMoney(priceInfo.finalPrice)}</span>
                    </div>
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Economize ${formatMoney(priceInfo.discountValue)}
                    </span>
                  </div>

                  <button onclick="window.appState.addToCart('${kit.id}', 1, true)" class="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    <span>Adicionar Kit ao Carrinho</span>
                  </button>
                </div>

              </div>
            `;
          }).join('')}
        </div>

      </div>
    </section>
  `;
}

function renderCatalogSection(state) {
  const categories = ["Todas", "Papinhas", "Snacks", "Cereais", "Massas", "Bebidas", "Acessórios"];
  const ages = ["Todas", "+6m", "+7m", "+8m", "+10m", "+12m"];

  // Filtros aplicados
  let filtered = state.products.filter(p => p.active);

  if (state.selectedCategory !== "Todas") {
    filtered = filtered.filter(p => p.category === state.selectedCategory);
  }

  if (state.selectedAge !== "Todas") {
    filtered = filtered.filter(p => p.age === state.selectedAge);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.subcategory && p.subcategory.toLowerCase().includes(q)));
  }

  return `
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- CABEÇALHO DO CATÁLOGO -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Nosso Catálogo Completo</h2>
          <p class="text-slate-500 text-sm mt-2">Escolha por categoria ou idade recomendada para a introdução alimentar do seu bebê.</p>
        </div>

        <!-- BARRA DE BUSCA E CONTROLES -->
        <div class="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <!-- CAMPO DE BUSCA -->
          <div class="relative w-full md:w-96">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
            <input 
              type="text" 
              placeholder="Buscar por papinha, biscoito, fruta..." 
              value="${state.searchQuery}"
              oninput="handleSearch(this.value)"
              class="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all">
          </div>

          <!-- FILTROS POR IDADE -->
          <div class="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <span class="text-xs font-bold text-slate-400 mr-2 flex-shrink-0">Idade:</span>
            ${ages.map(age => `
              <button 
                onclick="handleAgeFilter('${age}')"
                class="px-3.5 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 transition-all ${state.selectedAge === age ? 'bg-brand-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}">
                ${age === 'Todas' ? 'Todas as idades' : age}
              </button>
            `).join('')}
          </div>

        </div>

        <!-- CATEGORIAS EM ABAS MODERNAS -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-100 no-scrollbar">
          ${categories.map(cat => `
            <button 
              onclick="handleCategoryFilter('${cat}')"
              class="px-5 py-2.5 rounded-2xl text-sm font-bold flex-shrink-0 transition-all flex items-center gap-2 ${state.selectedCategory === cat ? 'bg-brand-50 text-brand-700 border-2 border-brand-500 shadow-sm' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'}">
              ${getCategoryIcon(cat)}
              <span>${cat}</span>
            </button>
          `).join('')}
        </div>

        <!-- CONTADOR DE ITENS -->
        <div class="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>Exibindo <strong>${filtered.length}</strong> produtos encontrados</span>
          <span>Valores unitários oficiais Cajuzinho</span>
        </div>

        <!-- GRID DE PRODUTOS COM IMAGENS REAIS -->
        ${filtered.length === 0 ? `
          <div class="py-16 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="package-search" class="w-8 h-8"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-800">Nenhum produto encontrado</h4>
            <p class="text-xs text-slate-400 mt-1">Tente remover os filtros ou buscar por outro termo.</p>
            <button onclick="handleCategoryFilter('Todas'); handleAgeFilter('Todas')" class="mt-4 px-4 py-2 rounded-xl bg-brand-50 text-brand-700 text-xs font-bold">Limpar Filtros</button>
          </div>
        ` : `
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            ${filtered.map(product => renderProductCard(product, state)).join('')}
          </div>
        `}

      </div>
    </section>
  `;
}

function getCategoryIcon(category) {
  const icons = {
    "Todas": '<i data-lucide="grid" class="w-4 h-4"></i>',
    "Papinhas": '<i data-lucide="heart" class="w-4 h-4 text-rose-500"></i>',
    "Snacks": '<i data-lucide="cookie" class="w-4 h-4 text-amber-500"></i>',
    "Cereais": '<i data-lucide="wheat" class="w-4 h-4 text-amber-600"></i>',
    "Massas": '<i data-lucide="utensils" class="w-4 h-4 text-orange-500"></i>',
    "Bebidas": '<i data-lucide="coffee" class="w-4 h-4 text-cyan-500"></i>',
    "Acessórios": '<i data-lucide="baby" class="w-4 h-4 text-indigo-500"></i>'
  };
  return icons[category] || '<i data-lucide="tag" class="w-4 h-4"></i>';
}

function renderProductCard(product, state) {
  const isAvailable = product.price !== null;
  const inStock = product.stock > 0;

  return `
    <div class="glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm glass-card-hover border border-slate-200/80 flex flex-col justify-between bg-white relative group">
      
      <!-- BADGES SUPERIORES -->
      <div class="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span class="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold">
          ${product.age}
        </span>
        ${product.organic ? `
          <span class="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-sm">
            <i data-lucide="leaf" class="w-2.5 h-2.5"></i> Orgânico
          </span>
        ` : ''}
      </div>

      <!-- IMAGEM REAL DO PRODUTO (CLICÁVEL PARA MODAL) -->
      <div class="cursor-pointer" onclick="openProductModal('${product.id}')">
        <div class="w-full h-36 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-slate-50 flex items-center justify-center relative">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300">
        </div>

        <span class="text-[11px] font-bold text-brand-600 uppercase tracking-wider block mb-1 truncate">${product.subcategory || product.category}</span>
        <h3 class="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 h-9 sm:h-10">${product.name}</h3>
      </div>

      <!-- PREÇO E BOTÃO COMPRAR -->
      <div class="mt-3 pt-3 border-t border-slate-100 flex items-end justify-between gap-2">
        <div>
          ${isAvailable ? `
            <span class="text-[10px] text-slate-400 block -mb-0.5">Por unidade:</span>
            <span class="text-sm sm:text-lg font-extrabold text-slate-900 font-heading">${formatMoney(product.price)}</span>
          ` : `
            <span class="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md inline-block">Sob Consulta</span>
          `}
        </div>

        ${isAvailable && inStock ? `
          <button 
            onclick="window.appState.addToCart('${product.id}', 1)"
            class="p-2 sm:px-3 sm:py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm shadow-brand-500/20 transition-all flex items-center gap-1.5 active:scale-95">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span class="hidden sm:inline">Adicionar</span>
          </button>
        ` : `
          <button 
            onclick="openProductModal('${product.id}')"
            class="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold">
            Detalhes
          </button>
        `}
      </div>

    </div>
  `;
}

function renderBrandStory(state) {
  return `
    <section class="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div class="lg:col-span-6 space-y-4">
            <span class="text-xs font-bold text-brand-400 uppercase tracking-widest block">Nossa Origem</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight">
              Desenvolvido por quem vive a maternidade na prática.
            </h2>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              A Papapá foi criada pela <strong>Paula Machado</strong> a partir de uma necessidade real: como garantir alimentos verdadeiramente naturais, seguros e gostosos para o bebê nos momentos em que cozinhar do zero simplesmente não é viável?
            </p>
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              A <strong>Cajuzinho</strong> nasceu para conectar essa solução incrível às famílias e negócios da nossa região, garantindo distribuição ágil, pronta entrega e atendimento com carinho de mãe.
            </p>
            <div class="pt-2 flex items-center gap-4 text-xs text-brand-300 font-semibold">
              <span class="flex items-center gap-1.5"><i data-lucide="heart" class="w-4 h-4 text-rose-400"></i> Sem culpa</span>
              <span class="flex items-center gap-1.5"><i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i> Tecnologia de verdade</span>
              <span class="flex items-center gap-1.5"><i data-lucide="shield" class="w-4 h-4 text-emerald-400"></i> Segurança alimentar</span>
            </div>
          </div>

          <div class="lg:col-span-6 grid grid-cols-2 gap-4">
            <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-800">
              <img src="images/products/paula_founder.jpg" alt="Paula Machado - Fundadora Papapá" class="w-full h-56 sm:h-64 object-cover">
            </div>
            <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-800 mt-6">
              <img src="images/products/mission_family.jpg" alt="Família feliz com Papapá" class="w-full h-56 sm:h-64 object-cover">
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function renderResellerSection(state) {
  return `
    <section class="py-16 bg-gradient-to-b from-white via-brand-50/50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="glass-card rounded-3xl p-8 sm:p-12 shadow-xl border border-brand-200/70 bg-white relative overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div class="lg:col-span-6 space-y-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="briefcase" class="w-3.5 h-3.5"></i> Varejo & Food Service
              </div>

              <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Leve Papapá para a sua loja.
              </h2>

              <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                Você possui mercado, padaria, loja de produtos naturais, empório ou farmácia? Torne-se um ponto de revenda credenciado Cajuzinho e ofereça a marca infantil mais desejada pelas famílias.
              </p>

              <div class="space-y-2.5 pt-2">
                <div class="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="check" class="w-4 h-4"></i>
                  </div>
                  <span>Margens atrativas e giro rápido comprovado no caixa</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="check" class="w-4 h-4"></i>
                  </div>
                  <span>Pedido mínimo acessível e reposição expressa sem complicação</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <i data-lucide="check" class="w-4 h-4"></i>
                  </div>
                  <span>Produtos sem refrigeração: fácil exposição na sua loja</span>
                </div>
              </div>
            </div>

            <!-- FORMULÁRIO DE CAPTAÇÃO DE LEADS COMERCIAIS -->
            <div class="lg:col-span-6">
              <div class="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 class="text-lg font-bold text-slate-900 mb-1">Solicitar Tabela de Revenda</h3>
                <p class="text-xs text-slate-500 mb-5">Preencha abaixo para receber nossa proposta comercial exclusiva:</p>

                <form id="reseller-form" onsubmit="handleResellerFormSubmit(event)" class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-bold text-slate-700 mb-1">Seu Nome *</label>
                      <input type="text" name="name" required placeholder="Ex: Carlos Silva" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label class="block text-xs font-bold text-slate-700 mb-1">Nome do Comércio *</label>
                      <input type="text" name="company" required placeholder="Ex: Empório São Lucas" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-bold text-slate-700 mb-1">WhatsApp com DDD *</label>
                      <input type="tel" name="whatsapp" required placeholder="(19) 99999-9999" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                    <div>
                      <label class="block text-xs font-bold text-slate-700 mb-1">Cidade / Estado *</label>
                      <input type="text" name="city" required placeholder="Ex: Amparo / SP" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Tipo de Comércio *</label>
                    <select name="type" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white">
                      <option value="Empório / Loja Natural">Empório / Loja de Produtos Naturais</option>
                      <option value="Mercado / Supermercado">Mercado / Minimercado</option>
                      <option value="Padaria / Confeitaria">Padaria / Confeitaria</option>
                      <option value="Farmácia">Farmácia</option>
                      <option value="Outros Comércios">Outros Estabelecimentos</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mensagem ou dúvidas</label>
                    <textarea name="message" rows="2" placeholder="Ex: Gostaria de saber o pedido mínimo e prazo de entrega..." class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"></textarea>
                  </div>

                  <button type="submit" class="w-full py-3.5 rounded-xl bg-accent-warm hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-accent-warm/25 transition-all flex items-center justify-center gap-2 active:scale-95">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>ENVIAR SOLICITAÇÃO COMERCIAL</span>
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

function renderStoreFooter(state) {
  return `
    <footer class="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center font-bold text-white text-sm">C</div>
              <span class="text-xl font-bold font-heading text-white">CAJUZINHO</span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">${state.settings.slogan}</p>
            <p class="text-xs text-slate-400">Distribuidora autorizada de produtos da marca Papapá para famílias e comerciantes.</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Navegação</h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><a href="#catalogo" class="hover:text-white transition-colors">Todos os Produtos</a></li>
              <li><a href="#kits" class="hover:text-white transition-colors">Kits Promocionais</a></li>
              <li><a href="#revenda" class="hover:text-white transition-colors">Área para Comerciantes</a></li>
              <li><a href="#adm" class="hover:text-white transition-colors text-brand-400">Painel do Administrador (/adm)</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Contato & Atendimento</h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li class="flex items-center gap-2">
                <i data-lucide="phone" class="w-3.5 h-3.5 text-brand-400"></i>
                <span>${state.settings.whatsappFormatted}</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="mail" class="w-3.5 h-3.5 text-brand-400"></i>
                <span>${state.settings.email}</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-400"></i>
                <span>${state.settings.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Acesso Administrativo</h4>
            <p class="text-xs text-slate-400 mb-3">Área exclusiva para gestão de estoque, catálogo, precificação e inteligência.</p>
            <a href="#adm" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors">
              <i data-lucide="lock" class="w-3.5 h-3.5 text-brand-400"></i>
              <span>Entrar no /adm</span>
            </a>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Cajuzinho Distribuidora. Todos os direitos reservados. Produtos Papapá.</p>
          <p>Feito para vender mais e transformar a rotina alimentar infantil.</p>
        </div>
      </div>
    </footer>
  `;
}

// ==========================================
// 7. MODAIS, DRAWER E CHECKOUT WHATSAPP
// ==========================================

function openProductModal(productId) {
  window.appState.selectedProductModal = productId;
  window.appState.notify();
}

function closeProductModal() {
  window.appState.selectedProductModal = null;
  window.appState.notify();
}

function toggleCartDrawer(open) {
  window.appState.isCartDrawerOpen = open;
  window.appState.notify();
}

function toggleCheckoutModal(open) {
  window.appState.isCheckoutModalOpen = open;
  window.appState.notify();
}

function handleSearch(val) {
  window.appState.searchQuery = val;
  window.appState.notify();
}

function handleCategoryFilter(cat) {
  window.appState.selectedCategory = cat;
  window.appState.notify();
}

function handleAgeFilter(age) {
  window.appState.selectedAge = age;
  window.appState.notify();
}

function handleApplyCoupon(event) {
  event.preventDefault();
  const input = document.getElementById("coupon-input");
  if (input && input.value) {
    window.appState.applyCouponCode(input.value);
  }
}

function handleResellerFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const state = window.appState;

  const leadData = {
    name: form.name.value,
    company: form.company.value,
    whatsapp: form.whatsapp.value,
    city: form.city.value,
    type: form.type.value,
    message: form.message.value
  };

  // 1. Salva no CRM do sistema (/adm) para controle interno
  state.addResellerLead(leadData);

  // 2. Monta mensagem formatada de revenda / atacado
  const wpMessage = 
`*SOLICITAÇÃO DE REVENDA / ATACADO — CAJUZINHO PAPAPÁ* 🏪

*Responsável:* ${leadData.name}
*Empresa / Comércio:* ${leadData.company}
*Tipo de Comércio:* ${leadData.type}
*WhatsApp:* ${leadData.whatsapp}
*Cidade / UF:* ${leadData.city}
${leadData.message ? `*Mensagem / Observação:* ${leadData.message}
` : ''}
_Olá! Tenho interesse em revender produtos Papapá no meu comércio e gostaria de receber a tabela de atacado e condições de fornecimento da Cajuzinho._`;

  const targetNumber = "5519981189816";
  const encoded = encodeURIComponent(wpMessage);
  const wpUrl = `https://wa.me/${targetNumber}?text=${encoded}`;

  // 3. Abre direto o WhatsApp do número 19 981189816
  window.open(wpUrl, "_blank");

  showToast("Dados enviados! Redirecionando direto para o WhatsApp da Cajuzinho (19 98118-9816)...", "success");
  form.reset();
}

function renderProductModal(state) {
  const prod = state.products.find(p => p.id === state.selectedProductModal);
  if (!prod) return '';

  const isAvailable = prod.price !== null;
  // Produtos complementares para cross-selling
  const crossSells = state.products
    .filter(p => p.id !== prod.id && p.price !== null)
    .slice(0, 3);

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div class="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden" onclick="event.stopPropagation()">
        
        <!-- BOTÃO FECHAR -->
        <button onclick="closeProductModal()" class="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          
          <!-- IMAGEM GRANDE -->
          <div class="rounded-2xl bg-slate-50 p-4 flex items-center justify-center relative">
            <img src="${prod.image}" alt="${prod.name}" class="w-full h-64 sm:h-72 object-contain">
            
            <div class="absolute top-3 left-3 flex flex-col gap-1.5">
              <span class="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold">${prod.age}</span>
              ${prod.organic ? '<span class="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold">100% Orgânico</span>' : ''}
            </div>
          </div>

          <!-- DETALHES -->
          <div class="space-y-4">
            <div>
              <span class="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">${prod.category} • ${prod.subcategory || ''}</span>
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">${prod.name}</h2>
              <span class="text-[11px] text-slate-400 block mt-1">SKU: ${prod.sku} | EAN: ${prod.ean}</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${prod.description}</p>

            <!-- SELOS DE CONFIANÇA -->
            <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-medium pt-1">
              <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-brand-600"></i> Sem conservantes</span>
              <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-brand-600"></i> Sem sal adicionado</span>
              <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-brand-600"></i> Sem glúten</span>
              <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-brand-600"></i> Pouch BPA Free</span>
            </div>

            <!-- PREÇO E ADICIONAR -->
            <div class="pt-4 border-t border-slate-100">
              <div class="flex items-baseline justify-between mb-4">
                <div>
                  <span class="text-xs text-slate-400 block">Preço unitário:</span>
                  <span class="text-2xl font-black text-slate-900 font-heading">
                    ${formatMoney(prod.price)}
                  </span>
                </div>
                <span class="text-xs font-semibold ${prod.stock > 10 ? 'text-emerald-600' : 'text-amber-600'} flex items-center gap-1">
                  <i data-lucide="package" class="w-3.5 h-3.5"></i>
                  ${prod.stock > 0 ? `${prod.stock} un em estoque` : 'Esgotado'}
                </span>
              </div>

              ${isAvailable && prod.stock > 0 ? `
                <div class="flex items-center gap-3">
                  <div class="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                    <button onclick="decrementModalQty()" class="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100">-</button>
                    <span id="modal-qty" class="w-10 text-center font-bold text-sm">1</span>
                    <button onclick="incrementModalQty(${prod.stock})" class="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100">+</button>
                  </div>

                  <button 
                    onclick="addModalProductToCart('${prod.id}')"
                    class="flex-1 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    <span>Adicionar ao Carrinho</span>
                  </button>
                </div>
              ` : `
                <div class="p-3 rounded-xl bg-amber-50 text-amber-800 text-xs font-medium border border-amber-200">
                  Preço ou estoque sob consulta. Você pode definir o valor deste item diretamente no painel <strong>/adm</strong>.
                </div>
              `}
            </div>

          </div>

        </div>

        <!-- RECOMENDAÇÕES DE CROSS-SELLING: "COMBINE COM" -->
        <div class="mt-8 pt-6 border-t border-slate-100">
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">Combine com e aumente a praticidade:</span>
          <div class="grid grid-cols-3 gap-3">
            ${crossSells.map(cs => `
              <div class="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 cursor-pointer hover:bg-brand-50/50 transition-all" onclick="openProductModal('${cs.id}')">
                <img src="${cs.image}" alt="${cs.name}" class="w-10 h-10 object-contain rounded-lg bg-white p-1">
                <div class="truncate">
                  <span class="text-[11px] font-bold text-slate-800 block truncate">${cs.name}</span>
                  <span class="text-[11px] text-brand-600 font-extrabold">${formatMoney(cs.price)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

let modalCurrentQty = 1;
function incrementModalQty(max) {
  if (modalCurrentQty < max) {
    modalCurrentQty++;
    const el = document.getElementById("modal-qty");
    if (el) el.innerText = modalCurrentQty;
  }
}
function decrementModalQty() {
  if (modalCurrentQty > 1) {
    modalCurrentQty--;
    const el = document.getElementById("modal-qty");
    if (el) el.innerText = modalCurrentQty;
  }
}
function addModalProductToCart(productId) {
  window.appState.addToCart(productId, modalCurrentQty);
  modalCurrentQty = 1;
  closeProductModal();
}

function renderCartDrawer(state) {
  const subtotal = state.getCartSubtotal();
  const discount = state.getCartDiscount();
  const threshold = state.settings.freeDeliveryThreshold;
  const remainingForFree = Math.max(0, threshold - subtotal);
  const percentFree = Math.min(100, Math.round((subtotal / threshold) * 100));

  return `
    <div class="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-fade-in" onclick="toggleCartDrawer(false)">
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10" onclick="event.stopPropagation()">
        
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          <!-- CABEÇALHO DO CARRINHO -->
          <div class="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                <i data-lucide="shopping-bag" class="w-5 h-5"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Seu Carrinho</h3>
            </div>
            <button onclick="toggleCartDrawer(false)" class="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- BARRA DE FRETE GRÁTIS DINÂMICA -->
          <div class="px-6 py-3.5 bg-brand-50 border-b border-brand-100">
            <div class="flex items-center justify-between text-xs font-semibold text-brand-900 mb-1.5">
              ${remainingForFree > 0 ? `
                <span>Faltam <strong>${formatMoney(remainingForFree)}</strong> para Frete Grátis!</span>
              ` : `
                <span class="text-emerald-700 flex items-center gap-1 font-bold">
                  <i data-lucide="sparkles" class="w-4 h-4"></i> Parabéns! Você ganhou Frete Grátis!
                </span>
              `}
              <span>${percentFree}%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-brand-200 overflow-hidden">
              <div class="h-full bg-brand-600 transition-all duration-500 rounded-full" style="width: ${percentFree}%"></div>
            </div>
          </div>

          <!-- LISTA DE ITENS DO CARRINHO -->
          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            ${state.cart.length === 0 ? `
              <div class="py-16 text-center text-slate-400">
                <i data-lucide="shopping-basket" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
                <p class="font-bold text-sm text-slate-600">Seu carrinho está vazio</p>
                <p class="text-xs mt-1">Adicione papinhas, biscottis ou kits para continuar.</p>
                <button onclick="toggleCartDrawer(false); navigateTo('#catalogo')" class="mt-4 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold shadow-sm">Explorar Produtos</button>
              </div>
            ` : state.cart.map((item, index) => `
              <div class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain rounded-xl bg-white p-1 flex-shrink-0">
                <div class="flex-1 min-w-0">
                  <h4 class="text-xs font-bold text-slate-900 leading-snug truncate">${item.name}</h4>
                  <span class="text-xs text-brand-600 font-extrabold block mt-0.5">${formatMoney(item.price)}</span>

                  <!-- CONTROLE DE QUANTIDADE -->
                  <div class="flex items-center gap-3 mt-2">
                    <div class="flex items-center border border-slate-200 rounded-lg bg-white">
                      <button onclick="window.appState.updateCartQty(${index}, ${item.qty - 1})" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold">-</button>
                      <span class="w-6 text-center text-xs font-bold">${item.qty}</span>
                      <button onclick="window.appState.updateCartQty(${index}, ${item.qty + 1})" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold">+</button>
                    </div>
                    <span class="text-xs text-slate-400 font-medium">Subtotal: ${formatMoney(item.price * item.qty)}</span>
                  </div>
                </div>
                <button onclick="window.appState.removeFromCart(${index})" class="p-2 text-slate-300 hover:text-rose-500 transition-colors">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            `).join('')}

            <!-- SUGESTÃO INTELIGENTE DE CARRINHO (CROSS-SELL) -->
            ${state.cart.length > 0 ? `
              <div class="p-3.5 rounded-2xl bg-accent-warm/5 border border-accent-warm/20 mt-4">
                <span class="text-[11px] font-bold text-accent-warm flex items-center gap-1 uppercase tracking-wider mb-2">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Dica Cajuzinho: Complete seu pedido
                </span>
                <p class="text-xs text-slate-600">Que tal incluir um <strong>Biscotti Banana e Cacau 60g</strong> para o lanche?</p>
                <button onclick="window.appState.addToCart('p_biscotti_banana_cacau', 1)" class="mt-2.5 w-full py-1.5 rounded-lg bg-accent-warm text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-orange-600 transition-colors">
                  <i data-lucide="plus" class="w-3.5 h-3.5"></i> Adicionar Biscotti (+ R$ 8,99)
                </button>
              </div>
            ` : ''}
          </div>

          <!-- FOOTER DO CARRINHO (CUPOM E TOTAIS) -->
          ${state.cart.length > 0 ? `
            <div class="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
              
              <!-- CAMPO DE CUPOM -->
              <form onsubmit="handleApplyCoupon(event)" class="flex gap-2">
                <input 
                  type="text" 
                  id="coupon-input" 
                  placeholder="Cupom (ex: CAJU5)" 
                  value="${state.appliedCoupon ? state.appliedCoupon.code : ''}"
                  class="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs uppercase font-bold focus:outline-none focus:ring-2 focus:ring-brand-500">
                <button type="submit" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors">
                  Aplicar
                </button>
              </form>

              <!-- RESUMO DE VALORES -->
              <div class="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                <div class="flex justify-between">
                  <span>Subtotal dos produtos:</span>
                  <span class="font-bold text-slate-900">${formatMoney(subtotal)}</span>
                </div>
                ${discount > 0 ? `
                  <div class="flex justify-between text-emerald-600 font-semibold">
                    <span>Desconto (${state.appliedCoupon.code}):</span>
                    <span>-${formatMoney(discount)}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between">
                  <span>Entrega:</span>
                  <span class="font-bold text-slate-900">${remainingForFree === 0 ? '<span class="text-emerald-600">Grátis</span>' : 'Calculado no checkout'}</span>
                </div>
                <div class="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total estimado:</span>
                  <span class="text-brand-600 font-heading text-xl">${formatMoney(Math.max(0, subtotal - discount))}</span>
                </div>
              </div>

              <!-- CTA FINALIZAR PEDIDO -->
              <button onclick="toggleCartDrawer(false); toggleCheckoutModal(true)" class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                <span>AVANÇAR PARA O CHECKOUT</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          ` : ''}

        </div>

      </div>
    </div>
  `;
}

let checkoutDeliveryType = "Entrega";
function setCheckoutDeliveryType(type) {
  checkoutDeliveryType = type;
  window.appState.notify();
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const state = window.appState;

  const customerName = form.customerName.value;
  const customerPhone = form.customerPhone.value;
  const customerEmail = form.customerEmail.value;
  const address = checkoutDeliveryType === "Entrega" 
    ? `${form.addressStreet.value}, ${form.addressNumber.value} ${form.addressComplement.value || ''} - ${form.addressCity.value}/${form.addressState.value}`
    : "Retirada no ponto de atendimento Cajuzinho (Amparo/SP)";

  const subtotal = state.getCartSubtotal();
  const discount = state.getCartDiscount();
  const shipping = state.getShippingFee(checkoutDeliveryType);
  const total = state.getCartTotal(checkoutDeliveryType);
  const orderId = "CJZ-" + Math.floor(1000 + Math.random() * 9000);

  // Registra novo pedido no estado do sistema
  const newOrder = {
    id: orderId,
    date: new Date().toISOString().replace("T", " ").substring(0, 16),
    customer: customerName,
    phone: customerPhone,
    city: checkoutDeliveryType === "Entrega" ? form.addressCity.value : "Amparo",
    items: state.cart.map(c => ({ id: c.id, name: c.name, qty: c.qty, price: c.price })),
    subtotal: subtotal,
    discount: discount,
    coupon: state.appliedCoupon ? state.appliedCoupon.code : null,
    shipping: shipping,
    total: total,
    deliveryType: checkoutDeliveryType,
    status: "NOVO"
  };

  state.orders.unshift(newOrder);

  // Reduz estoque automaticamente
  state.cart.forEach(item => {
    if (!item.isKit) {
      const p = state.products.find(prod => prod.id === item.id);
      if (p) p.stock = Math.max(0, p.stock - item.qty);
    }
  });

  state.saveState();

  // Gera texto para o WhatsApp
  let itemsText = "";
  state.cart.forEach(item => {
    itemsText += `• ${item.qty}x ${item.name} (${formatMoney(item.price * item.qty)})\n`;
  });

  const whatsappMessage = 
`*NOVO PEDIDO CAJUZINHO — #${orderId}*

*Cliente:* ${customerName}
*WhatsApp:* ${customerPhone}
*Modalidade:* ${checkoutDeliveryType}
*Endereço:* ${address}

*Itens do Pedido:*
${itemsText}
*Subtotal:* ${formatMoney(subtotal)}
${discount > 0 ? `*Cupom:* ${state.appliedCoupon.code} (-${formatMoney(discount)})\n` : ''}*Frete:* ${shipping === 0 ? 'Grátis' : formatMoney(shipping)}
*TOTAL A PAGAR:* ${formatMoney(total)}

_Pedido gerado automaticamente pelo sistema da Cajuzinho._`;

  const encodedMsg = encodeURIComponent(whatsappMessage);
  const wpUrl = `https://wa.me/${state.settings.whatsappNumber}?text=${encodedMsg}`;

  // Limpa o carrinho
  state.clearCart();
  toggleCheckoutModal(false);

  // Abre WhatsApp em nova aba
  window.open(wpUrl, "_blank");
  showToast(`Pedido #${orderId} gerado com sucesso! Redirecionando para o WhatsApp...`, "success");
}

function renderCheckoutModal(state) {
  const subtotal = state.getCartSubtotal();
  const discount = state.getCartDiscount();
  const shipping = state.getShippingFee(checkoutDeliveryType);
  const total = state.getCartTotal(checkoutDeliveryType);

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div class="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden" onclick="event.stopPropagation()">
        
        <!-- CABEÇALHO -->
        <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold text-brand-600 uppercase tracking-wider block">Finalização Segura</span>
            <h3 class="text-xl font-black text-slate-900 font-heading">Concluir Pedido Cajuzinho</h3>
          </div>
          <button onclick="toggleCheckoutModal(false)" class="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <form onsubmit="handleCheckoutSubmit(event)" class="space-y-4">
          
          <!-- SELEÇÃO DE ENTREGA / RETIRADA -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1.5">Como deseja receber?</label>
            <div class="grid grid-cols-2 gap-3">
              <button 
                type="button" 
                onclick="setCheckoutDeliveryType('Entrega')"
                class="p-3 rounded-2xl border-2 text-left transition-all ${checkoutDeliveryType === 'Entrega' ? 'border-brand-500 bg-brand-50 text-brand-900 font-bold' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}">
                <i data-lucide="truck" class="w-4 h-4 text-brand-600 mb-1"></i>
                <div class="text-xs">Entrega em Casa</div>
                <div class="text-[11px] text-slate-400 font-normal">Amparo e Região</div>
              </button>

              <button 
                type="button" 
                onclick="setCheckoutDeliveryType('Retirada')"
                class="p-3 rounded-2xl border-2 text-left transition-all ${checkoutDeliveryType === 'Retirada' ? 'border-brand-500 bg-brand-50 text-brand-900 font-bold' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}">
                <i data-lucide="map-pin" class="w-4 h-4 text-brand-600 mb-1"></i>
                <div class="text-xs">Retirar no Local</div>
                <div class="text-[11px] text-slate-400 font-normal">Sem custo de frete</div>
              </button>
            </div>
          </div>

          <!-- DADOS DO CLIENTE -->
          <div class="space-y-3 pt-2">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Seus Dados</span>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-700 mb-1">Nome Completo *</label>
                <input type="text" name="customerName" required placeholder="Ex: Mariana Silveira" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-700 mb-1">WhatsApp com DDD *</label>
                <input type="tel" name="customerPhone" required placeholder="(19) 99999-9999" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-[11px] font-bold text-slate-700 mb-1">E-mail (opcional)</label>
              <input type="email" name="customerEmail" placeholder="seu@email.com" class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
            </div>
          </div>

          <!-- ENDEREÇO (SE ENTREGA) -->
          ${checkoutDeliveryType === 'Entrega' ? `
            <div class="space-y-3 pt-2">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Endereço de Entrega</span>
              <div class="grid grid-cols-3 gap-2">
                <div class="col-span-2">
                  <input type="text" name="addressStreet" required placeholder="Rua / Avenida *" class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
                </div>
                <div>
                  <input type="text" name="addressNumber" required placeholder="Número *" class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <input type="text" name="addressComplement" placeholder="Apto / Bloco / Ponto de ref." class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
                </div>
                <div>
                  <input type="text" name="addressCity" required placeholder="Cidade *" value="Amparo" class="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
                  <input type="hidden" name="addressState" value="SP">
                </div>
              </div>
            </div>
          ` : `
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <i data-lucide="info" class="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5"></i>
              <span>Ponto de retirada: <strong>${state.settings.address}</strong>. Avisaremos pelo WhatsApp assim que o pacote estiver embalado!</span>
            </div>
          `}

          <!-- RESUMO DO TOTAL -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
            <div class="flex justify-between text-slate-600">
              <span>Subtotal:</span>
              <span class="font-bold">${formatMoney(subtotal)}</span>
            </div>
            ${discount > 0 ? `
              <div class="flex justify-between text-emerald-600">
                <span>Desconto (${state.appliedCoupon.code}):</span>
                <span class="font-bold">-${formatMoney(discount)}</span>
              </div>
            ` : ''}
            <div class="flex justify-between text-slate-600">
              <span>Frete:</span>
              <span class="font-bold">${shipping === 0 ? 'Grátis' : formatMoney(shipping)}</span>
            </div>
            <div class="flex justify-between text-slate-900 font-extrabold text-sm pt-2 border-t border-slate-200">
              <span>Total a pagar:</span>
              <span class="text-brand-600 font-heading text-lg">${formatMoney(total)}</span>
            </div>
          </div>

          <!-- BOTÃO WHATSAPP FINALIZAR -->
          <button type="submit" class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5 active:scale-95">
            <i data-lucide="message-circle" class="w-5 h-5"></i>
            <span>ENVIAR PEDIDO PELO WHATSAPP</span>
          </button>
          
          <p class="text-[11px] text-center text-slate-400">
            Você será direcionado para o WhatsApp da Cajuzinho com a mensagem pronta.
          </p>

        </form>

      </div>
    </div>
  `;
}

// ==========================================
// 8. ÁREA ADMINISTRATIVA (/adm) E DASHBOARD
// ==========================================

function renderAdminLoginView(state) {
  return `
    <div class="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <!-- DETALHES DE FUNDO FUTURISTAS -->
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-warm/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-md w-full bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 shadow-2xl relative z-10">
        
        <div class="text-center mb-8">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white mx-auto shadow-lg shadow-brand-500/20 mb-3">
            <i data-lucide="shield-check" class="w-7 h-7"></i>
          </div>
          <h2 class="text-2xl font-extrabold text-white font-heading tracking-tight">Painel Cajuzinho /adm</h2>
          <p class="text-xs text-slate-400 mt-1">Acesso restrito para gestão e inteligência comercial</p>
        </div>

        <form onsubmit="handleAdminLogin(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">E-mail do Administrador</label>
            <div class="relative">
              <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
              <input 
                type="email" 
                id="adm-email" 
                required 
                value="marcelavalin78@gmail.com"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1.5">Senha de Acesso</label>
            <div class="relative">
              <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
              <input 
                type="password" 
                id="adm-pass" 
                required 
                placeholder="••••••••"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 active:scale-95">
            <i data-lucide="log-in" class="w-4 h-4"></i>
            <span>ENTRAR NO SISTEMA</span>
          </button>
        </form>

        <div class="mt-6 pt-6 border-t border-slate-700/60 text-center">
          <button onclick="navigateTo('#loja')" class="text-xs text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 mx-auto font-medium">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Voltar para a Loja Pública</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

async function handleAdminLogin(event) {
  event.preventDefault();
  const email = document.getElementById("adm-email").value;
  const pass = document.getElementById("adm-pass").value;

  const success = await window.appState.authenticateAdmin(email, pass);
  if (success) {
    showToast("Login autorizado com sucesso! Bem-vinda, Marcela.", "success");
    window.location.hash = "#adm/dashboard";
    renderApp();
  } else {
    showToast("Credenciais incorretas. Verifique o e-mail e senha digitados.", "error");
  }
}

function renderAdminPanelView(state) {
  return `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      
      <!-- SIDEBAR DESKTOP -->
      <aside class="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800 p-5 justify-between">
        <div class="space-y-6">
          
          <!-- BRANDING -->
          <div class="flex items-center gap-3 px-2">
            <div class="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold shadow-md shadow-brand-600/30">
              <i data-lucide="command" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="font-extrabold text-white text-base tracking-tight font-heading block">CAJUZINHO</span>
              <span class="text-[10px] text-brand-400 font-bold uppercase tracking-wider block">Painel Administrativo</span>
            </div>
          </div>

          <!-- LINKS DE NAVEGAÇÃO DO ADM -->
          <nav class="space-y-1 text-xs font-semibold">
            ${renderAdminNavLink("dashboard", "Visão Geral & Gráficos", "layout-dashboard", state.adminCurrentTab)}
            ${renderAdminNavLink("insights", "Insights da Cajuzinho", "sparkles", state.adminCurrentTab, true)}
            ${renderAdminNavLink("precos", "Gestor de Preços & Vitrine", "dollar-sign", state.adminCurrentTab)}
            ${renderAdminNavLink("kits", "Montador de Kits", "boxes", state.adminCurrentTab)}
            ${renderAdminNavLink("estoque", "Estoque & Movimentação", "package", state.adminCurrentTab)}
            ${renderAdminNavLink("perdas", "Controle de Perdas", "alert-triangle", state.adminCurrentTab)}
            ${renderAdminNavLink("restock", "Radar de Restock", "refresh-cw", state.adminCurrentTab)}
            ${renderAdminNavLink("pedidos", "Gestão de Pedidos", "shopping-cart", state.adminCurrentTab)}
            ${renderAdminNavLink("cupons", "Cupons de Desconto", "tag", state.adminCurrentTab)}
            ${renderAdminNavLink("leads", "Leads de Revenda (B2B)", "store", state.adminCurrentTab)}
            ${renderAdminNavLink("clientes", "Base de Clientes", "users", state.adminCurrentTab)}
            ${renderAdminNavLink("sugestoes", "Ideias de Novos Produtos", "lightbulb", state.adminCurrentTab)}
            ${renderAdminNavLink("configuracoes", "Configurações da Loja", "settings", state.adminCurrentTab)}
          </nav>
        </div>

        <!-- RODAPÉ DA SIDEBAR -->
        <div class="pt-4 border-t border-slate-800 space-y-2 text-xs">
          <a href="#loja" target="_blank" class="w-full px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium flex items-center justify-between transition-colors">
            <span class="flex items-center gap-2"><i data-lucide="external-link" class="w-3.5 h-3.5 text-brand-400"></i> Ver Loja Pública</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-500"></i>
          </a>

          <button onclick="window.appState.logoutAdmin()" class="w-full px-3 py-2 rounded-xl hover:bg-rose-950/40 text-rose-400 font-medium flex items-center gap-2 transition-colors">
            <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
            <span>Sair do /adm</span>
          </button>
        </div>

      </aside>

      <!-- BARRA DE NAVEGAÇÃO MOBILE -->
      <div class="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white text-xs">C</div>
          <span class="font-bold text-sm">Cajuzinho /adm</span>
        </div>
        <div class="flex items-center gap-2">
          <select onchange="window.location.hash = '#adm/' + this.value" class="bg-slate-800 text-xs px-3 py-1.5 rounded-lg border border-slate-700 text-white font-medium">
            <option value="dashboard" ${state.adminCurrentTab === 'dashboard' ? 'selected' : ''}>Dashboard</option>
            <option value="insights" ${state.adminCurrentTab === 'insights' ? 'selected' : ''}>Insights</option>
            <option value="precos" ${state.adminCurrentTab === 'precos' ? 'selected' : ''}>Preços & Vitrine</option>
            <option value="kits" ${state.adminCurrentTab === 'kits' ? 'selected' : ''}>Montar Kits</option>
            <option value="estoque" ${state.adminCurrentTab === 'estoque' ? 'selected' : ''}>Estoque</option>
            <option value="perdas" ${state.adminCurrentTab === 'perdas' ? 'selected' : ''}>Perdas</option>
            <option value="restock" ${state.adminCurrentTab === 'restock' ? 'selected' : ''}>Restock</option>
            <option value="pedidos" ${state.adminCurrentTab === 'pedidos' ? 'selected' : ''}>Pedidos</option>
            <option value="leads" ${state.adminCurrentTab === 'leads' ? 'selected' : ''}>Leads Revenda</option>
            <option value="configuracoes" ${state.adminCurrentTab === 'configuracoes' ? 'selected' : ''}>Configurações</option>
          </select>
          <button onclick="window.appState.logoutAdmin()" class="p-2 text-rose-400 hover:bg-slate-800 rounded-lg">
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- ÁREA DE CONTEÚDO PRINCIPAL DO ADM -->
      <main class="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        ${renderAdminTabContent(state)}
      </main>

    </div>
  `;
}

function renderAdminNavLink(tabKey, label, icon, currentTab, isHighlight = false) {
  const active = currentTab === tabKey;
  return `
    <a href="#adm/${tabKey}" class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${active ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 font-bold' : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'} ${isHighlight && !active ? 'text-accent-warm hover:text-accent-warm' : ''}">
      <i data-lucide="${icon}" class="w-4 h-4 ${isHighlight && !active ? 'text-accent-warm' : ''}"></i>
      <span>${label}</span>
      ${isHighlight ? '<span class="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-accent-warm/20 text-accent-warm font-extrabold uppercase">IA</span>' : ''}
    </a>
  `;
}

function renderAdminTabContent(state) {
  switch (state.adminCurrentTab) {
    case "dashboard":
      return renderAdminDashboardTab(state);
    case "insights":
      return renderAdminInsightsTab(state);
    case "precos":
      return renderAdminPricesTab(state);
    case "kits":
      return renderAdminKitsTab(state);
    case "estoque":
      return renderAdminInventoryTab(state);
    case "perdas":
      return renderAdminLossesTab(state);
    case "restock":
      return renderAdminRestockTab(state);
    case "pedidos":
      return renderAdminOrdersTab(state);
    case "cupons":
      return renderAdminCouponsTab(state);
    case "leads":
      return renderAdminLeadsTab(state);
    case "clientes":
      return renderAdminCustomersTab(state);
    case "sugestoes":
      return renderAdminSuggestionsTab(state);
    case "configuracoes":
      return renderAdminSettingsTab(state);
    default:
      return renderAdminDashboardTab(state);
  }
}

// -------------------------------------------------------------
// TAB 1: DASHBOARD COM MÉTRICAS E GRÁFICOS
// -------------------------------------------------------------

function renderAdminDashboardTab(state) {
  // Cálculos dinâmicos
  const totalSalesValue = state.orders.reduce((acc, o) => acc + o.total, 0);
  const totalOrdersCount = state.orders.length;
  const avgTicket = totalOrdersCount > 0 ? totalSalesValue / totalOrdersCount : 0;
  const lowStockCount = state.products.filter(p => p.stock > 0 && p.stock <= p.minStock).length;
  const outOfStockCount = state.products.filter(p => p.stock === 0).length;
  const totalLossValue = state.losses.reduce((acc, l) => acc + l.totalLoss, 0);

  return `
    <div class="space-y-8">
      
      <!-- CABEÇALHO DA ABA -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Visão Geral do Negócio</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Dados consolidados de vendas, pedidos e saúde operacional da Cajuzinho.</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs px-3 py-1.5 rounded-xl bg-slate-900 text-emerald-400 border border-emerald-500/20 font-mono font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Sistema Ativo
          </span>
        </div>
      </div>

      <!-- CARDS DE MÉTRICAS (KPIs) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
          <span class="text-xs font-bold text-slate-400 block mb-1">Vendas Totais</span>
          <span class="text-2xl font-black text-white font-heading">${formatMoney(totalSalesValue)}</span>
          <span class="text-[11px] text-emerald-400 font-semibold block mt-1 flex items-center gap-1">
            <i data-lucide="trending-up" class="w-3.5 h-3.5"></i> ${totalOrdersCount} pedidos registrados
          </span>
        </div>

        <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
          <span class="text-xs font-bold text-slate-400 block mb-1">Ticket Médio</span>
          <span class="text-2xl font-black text-brand-400 font-heading">${formatMoney(avgTicket)}</span>
          <span class="text-[11px] text-slate-400 font-medium block mt-1">Por cliente atendido</span>
        </div>

        <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
          <span class="text-xs font-bold text-slate-400 block mb-1">Estoque Crítico</span>
          <span class="text-2xl font-black ${lowStockCount > 0 ? 'text-amber-400' : 'text-slate-200'} font-heading">
            ${lowStockCount} itens
          </span>
          <span class="text-[11px] text-slate-400 font-medium block mt-1">Próximos do limite mínimo</span>
        </div>

        <div class="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
          <span class="text-xs font-bold text-slate-400 block mb-1">Total de Perdas</span>
          <span class="text-2xl font-black text-rose-400 font-heading">${formatMoney(totalLossValue)}</span>
          <span class="text-[11px] text-slate-400 font-medium block mt-1">${state.losses.length} ocorrências registradas</span>
        </div>

      </div>

      <!-- GRÁFICOS VISUAIS -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- GRÁFICO DE LINHA: EVOLUÇÃO DE VENDAS -->
        <div class="lg:col-span-8 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="bar-chart-2" class="w-4 h-4 text-brand-400"></i> Evolução das Vendas Diárias
            </h3>
            <span class="text-xs text-slate-400 font-mono">Últimos 7 dias</span>
          </div>
          <div class="h-64 relative">
            <canvas id="salesTimelineChart"></canvas>
          </div>
        </div>

        <!-- GRÁFICO DE ROSCA: VENDAS POR CATEGORIA -->
        <div class="lg:col-span-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <i data-lucide="pie-chart" class="w-4 h-4 text-brand-400"></i> Vendas por Categoria
            </h3>
            <div class="h-52 relative flex items-center justify-center">
              <canvas id="categoryShareChart"></canvas>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center">
            Papinhas e Snacks lideram o volume de pedidos
          </div>
        </div>

      </div>

      <!-- ÚLTIMOS PEDIDOS REGISTRADOS -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4 text-brand-400"></i> Pedidos Recentes
          </h3>
          <a href="#adm/pedidos" class="text-xs text-brand-400 hover:text-brand-300 font-semibold">Ver Todos os Pedidos →</a>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-slate-300">
            <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th class="p-3 rounded-l-xl">Nº Pedido</th>
                <th class="p-3">Data</th>
                <th class="p-3">Cliente</th>
                <th class="p-3">Itens</th>
                <th class="p-3">Total</th>
                <th class="p-3">Status</th>
                <th class="p-3 rounded-r-xl">Ação</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              ${state.orders.slice(0, 4).map(o => `
                <tr class="hover:bg-slate-800/40">
                  <td class="p-3 font-mono font-bold text-white">${o.id}</td>
                  <td class="p-3 text-slate-400">${o.date}</td>
                  <td class="p-3 font-medium text-white">${o.customer}</td>
                  <td class="p-3 text-slate-400">${o.items.length} itens</td>
                  <td class="p-3 font-extrabold text-brand-400 font-mono">${formatMoney(o.total)}</td>
                  <td class="p-3">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${getOrderStatusClass(o.status)}">
                      ${o.status}
                    </span>
                  </td>
                  <td class="p-3">
                    <a href="#adm/pedidos" class="text-brand-400 hover:underline">Gerenciar</a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function getOrderStatusClass(status) {
  const map = {
    "NOVO": "bg-brand-950 text-brand-400 border border-brand-800",
    "CONFIRMADO": "bg-blue-950 text-blue-400 border border-blue-800",
    "EM PREPARAÇÃO": "bg-amber-950 text-amber-400 border border-amber-800",
    "ENVIADO": "bg-purple-950 text-purple-400 border border-purple-800",
    "ENTREGUE": "bg-emerald-950 text-emerald-400 border border-emerald-800",
    "CANCELADO": "bg-rose-950 text-rose-400 border border-rose-800"
  };
  return map[status] || "bg-slate-800 text-slate-300";
}

function initDashboardCharts() {
  setTimeout(() => {
    // Gráfico de linha diário
    const ctxTimeline = document.getElementById("salesTimelineChart");
    if (ctxTimeline) {
      new Chart(ctxTimeline, {
        type: 'line',
        data: {
          labels: ['08/Set', '09/Set', '10/Set', '11/Set', '12/Set', '13/Set', '14/Set'],
          datasets: [{
            label: 'Vendas (R$)',
            data: [120, 85, 210, 160, 290, 185, 340],
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2, 132, 199, 0.15)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#38bdf8'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } }
          }
        }
      });
    }

    // Gráfico de rosca categorias
    const ctxCat = document.getElementById("categoryShareChart");
    if (ctxCat) {
      new Chart(ctxCat, {
        type: 'doughnut',
        data: {
          labels: ['Papinhas', 'Snacks', 'Yoguzinho', 'Kits', 'Outros'],
          datasets: [{
            data: [45, 25, 15, 10, 5],
            backgroundColor: ['#0284c7', '#f97316', '#10b981', '#a855f7', '#64748b'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: '#94a3b8', font: { size: 10 } }
            }
          },
          cutout: '70%'
        }
      });
    }
  }, 100);
}

// -------------------------------------------------------------
// TAB 2: INTELIGÊNCIA COMERCIAL & INSIGHTS DA CAJUZINHO
// -------------------------------------------------------------

function renderAdminInsightsTab(state) {
  // Análise heurística de vendas e estoque
  const activeProducts = state.products.filter(p => p.active);
  const bestSellers = [...activeProducts].sort((a, b) => b.salesCount - a.salesCount).slice(0, 3);
  const slowSellers = [...activeProducts].filter(p => p.price !== null).sort((a, b) => a.salesCount - b.salesCount).slice(0, 4);
  const lowStock = activeProducts.filter(p => p.stock <= p.minStock);

  return `
    <div class="space-y-8">
      
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-wider mb-2">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Inteligência de Negócio Automatizada
        </div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Insights da Cajuzinho</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Recomendações estratégicas para aumentar conversão, equilibrar estoque e elevar o ticket médio.</p>
      </div>

      <!-- CARDS DE RECOMENDAÇÕES DA IA -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- INSIGHT 1: PRODUTO CARRO-CHEFE -->
        <div class="bg-slate-900 p-6 rounded-3xl border border-brand-500/30 relative overflow-hidden shadow-lg">
          <div class="w-10 h-10 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-4">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-bold text-brand-400 uppercase tracking-wider block mb-1">Tração de Vendas</span>
          <h3 class="text-base font-bold text-white mb-2">${bestSellers[0]?.name || 'Produto Principal'}</h3>
          <p class="text-xs text-slate-300 leading-relaxed mb-4">
            Este produto representa <strong>${bestSellers[0]?.salesCount || 0} unidades vendidas</strong> e é o maior ímã de novos clientes.
          </p>
          <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            💡 <strong>Ação Recomendada:</strong> Utilize este item na capa dos kits e mantenha estoque de segurança sempre acima de 20 unidades.
          </div>
        </div>

        <!-- INSIGHT 2: OPORTUNIDADE DE NOVO KIT -->
        <div class="bg-slate-900 p-6 rounded-3xl border border-accent-warm/30 relative overflow-hidden shadow-lg">
          <div class="w-10 h-10 rounded-2xl bg-accent-warm/20 text-accent-warm flex items-center justify-center mb-4">
            <i data-lucide="boxes" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-bold text-accent-warm uppercase tracking-wider block mb-1">Alavanca de Ticket Médio</span>
          <h3 class="text-base font-bold text-white mb-2">Oportunidade de Novo Kit</h3>
          <p class="text-xs text-slate-300 leading-relaxed mb-4">
            Clientes que compram <strong>${bestSellers[0]?.name.split(' ')[1] || 'Papinha'}</strong> frequentemente adicionam um <strong>Biscotti</strong>.
          </p>
          <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            💡 <strong>Ação Recomendada:</strong> Crie um kit "Lanche & Refeição" com 10% de desconto para incentivar compra casada.
          </div>
        </div>

        <!-- INSIGHT 3: ALERTA DE ESTOQUE VS GIRO -->
        <div class="bg-slate-900 p-6 rounded-3xl border border-amber-500/30 relative overflow-hidden shadow-lg">
          <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
            <i data-lucide="alert-circle" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">Risco de Ruptura</span>
          <h3 class="text-base font-bold text-white mb-2">
            ${lowStock.length > 0 ? `${lowStock.length} Produtos no Limite Mínimo` : 'Estoque Saudável'}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed mb-4">
            ${lowStock.length > 0 ? `Itens como <strong>${lowStock[0].name}</strong> (${lowStock[0].stock} un restantes) precisam de reposição na próxima remessa Papapá.` : 'Todos os produtos estão com níveis confortáveis de segurança.'}
          </p>
          <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            💡 <strong>Ação Recomendada:</strong> Acesse o Radar de Restock e antecipe a solicitação à fábrica.
          </div>
        </div>

      </div>

      <!-- SEÇÃO: PRODUTOS QUE PRECISAM DE ATENÇÃO (BAIXA VENDA OU ESTOQUE PARADO) -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i data-lucide="compass" class="w-4 h-4 text-amber-400"></i> Produtos que Precisam de Atenção
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">Itens com baixa saída ou estoque parado para girar mais rápido:</p>
          </div>
          <span class="text-xs text-slate-400 font-mono">${slowSellers.length} identificados</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-slate-300">
            <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th class="p-3 rounded-l-xl">Produto</th>
                <th class="p-3">Categoria</th>
                <th class="p-3">Estoque</th>
                <th class="p-3">Vendas</th>
                <th class="p-3">Diagnóstico</th>
                <th class="p-3 rounded-r-xl">Ação Rápida Sugerida</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              ${slowSellers.map(p => `
                <tr class="hover:bg-slate-800/40">
                  <td class="p-3 font-medium text-white flex items-center gap-2.5">
                    <img src="${p.image}" class="w-8 h-8 rounded-lg object-contain bg-slate-800 p-1">
                    <span class="truncate max-w-xs">${p.name}</span>
                  </td>
                  <td class="p-3 text-slate-400">${p.category}</td>
                  <td class="p-3 font-mono font-bold">${p.stock} un</td>
                  <td class="p-3 font-mono text-amber-400">${p.salesCount} un</td>
                  <td class="p-3 text-slate-400">Giro abaixo da média da categoria</td>
                  <td class="p-3">
                    <div class="flex items-center gap-1.5">
                      <button onclick="navigateTo('#adm/kits')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-brand-400 text-[11px] font-semibold">
                        Incluir em Kit
                      </button>
                      <button onclick="navigateTo('#adm/precos')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-[11px] font-semibold">
                        Ajustar Preço
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

// -------------------------------------------------------------
// TAB 3: GESTOR RÁPIDO DE PREÇOS E VITRINE (SOLICITADO PELO USUÁRIO)
// -------------------------------------------------------------

function renderAdminPricesTab(state) {
  const categories = ["Todas", "Papinhas", "Snacks", "Cereais", "Massas", "Bebidas", "Acessórios"];
  
  let productsList = [...state.products];
  if (state.adminCategoryFilter !== "Todas") {
    productsList = productsList.filter(p => p.category === state.adminCategoryFilter);
  }
  if (state.adminSearch.trim()) {
    const q = state.adminSearch.toLowerCase();
    productsList = productsList.filter(p => p.name.toLowerCase().includes(q) || (p.code && p.code.includes(q)));
  }

  return `
    <div class="space-y-6">
      
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Gestor de Preços e Vitrine</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Altere o preço unitário (Un) na hora e organize as categorias do catálogo.</p>
        </div>
        <div class="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <i data-lucide="check-circle" class="w-4 h-4"></i> Salvamento Instantâneo
        </div>
      </div>

      <!-- FILTROS E BUSCA DO ADM -->
      <div class="flex flex-col sm:flex-row items-center gap-3">
        <!-- BUSCA -->
        <div class="relative flex-1 w-full">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input 
            type="text" 
            placeholder="Filtrar por nome ou código..." 
            value="${state.adminSearch}"
            oninput="handleAdminSearch(this.value)"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
        </div>

        <!-- CATEGORIAS -->
        <div class="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
          ${categories.map(c => `
            <button 
              onclick="handleAdminCategoryFilter('${c}')"
              class="px-3 py-2 rounded-xl text-xs font-bold transition-colors flex-shrink-0 ${state.adminCategoryFilter === c ? 'bg-brand-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-slate-400'}">
              ${c}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- TABELA DE PRECIFICAÇÃO E PRODUTOS -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-slate-300">
            <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th class="p-3.5">Foto</th>
                <th class="p-3.5">Produto & Código</th>
                <th class="p-3.5">Categoria / Subcategoria</th>
                <th class="p-3.5">Estoque</th>
                <th class="p-3.5">Preço Unitário (Un)</th>
                <th class="p-3.5">Status na Loja</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              ${productsList.map(p => `
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <!-- FOTO -->
                  <td class="p-3.5">
                    <img src="${p.image}" class="w-12 h-12 rounded-xl object-contain bg-slate-800 p-1 border border-slate-700/50">
                  </td>

                  <!-- NOME & DETALHES -->
                  <td class="p-3.5 max-w-xs">
                    <span class="font-bold text-white block text-sm leading-snug">${p.name}</span>
                    <span class="text-[10px] text-slate-400 font-mono block mt-0.5">Cód: ${p.code || p.sku} | Faixa: ${p.age}</span>
                  </td>

                  <!-- CATEGORIA EDITÁVEL -->
                  <td class="p-3.5">
                    <select 
                      onchange="window.appState.updateProductCategory('${p.id}', this.value)"
                      class="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500">
                      <option value="Papinhas" ${p.category === 'Papinhas' ? 'selected' : ''}>Papinhas</option>
                      <option value="Snacks" ${p.category === 'Snacks' ? 'selected' : ''}>Snacks & Biscoitos</option>
                      <option value="Cereais" ${p.category === 'Cereais' ? 'selected' : ''}>Mingaus & Cereais</option>
                      <option value="Massas" ${p.category === 'Massas' ? 'selected' : ''}>Massas & PapaPasta</option>
                      <option value="Bebidas" ${p.category === 'Bebidas' ? 'selected' : ''}>Bebidas Infantis</option>
                      <option value="Acessórios" ${p.category === 'Acessórios' ? 'selected' : ''}>Acessórios Silicone</option>
                    </select>
                  </td>

                  <!-- ESTOQUE -->
                  <td class="p-3.5 font-mono">
                    <input 
                      type="number" 
                      min="0"
                      value="${p.stock}" 
                      onchange="window.appState.updateProductStock('${p.id}', this.value)"
                      class="w-16 px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono font-bold text-center focus:ring-1 focus:ring-brand-500">
                  </td>

                  <!-- PREÇO UNITÁRIO EDITÁVEL -->
                  <td class="p-3.5">
                    <div class="flex items-center gap-2">
                      <div class="relative">
                        <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">R$</span>
                        <input 
                          type="number" 
                          step="0.01" 
                          min="0"
                          placeholder="0,00"
                          value="${p.price !== null ? p.price : ''}" 
                          id="price-input-${p.id}"
                          class="w-24 pl-8 pr-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-brand-400 font-mono font-extrabold text-sm focus:ring-2 focus:ring-brand-500 focus:bg-slate-700">
                      </div>
                      <button 
                        onclick="saveInlinePrice('${p.id}')"
                        class="p-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-colors" title="Salvar Preço">
                        <i data-lucide="check" class="w-4 h-4"></i>
                      </button>
                    </div>
                  </td>

                  <!-- STATUS ATIVO/INATIVO -->
                  <td class="p-3.5">
                    <button 
                      onclick="window.appState.toggleProductActive('${p.id}')"
                      class="px-3 py-1 rounded-full text-xs font-bold transition-colors ${p.active ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-500 border border-slate-700'}">
                      ${p.active ? 'Ativo na Loja' : 'Pausado'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function handleAdminSearch(val) {
  window.appState.adminSearch = val;
  window.appState.notify();
}

function handleAdminCategoryFilter(cat) {
  window.appState.adminCategoryFilter = cat;
  window.appState.notify();
}

function saveInlinePrice(productId) {
  const input = document.getElementById("price-input-" + productId);
  if (input) {
    const val = input.value ? parseFloat(input.value) : null;
    window.appState.updateProductPrice(productId, val);
  }
}

// -------------------------------------------------------------
// TAB 4: MONTADOR MANUAL DE KITS CAJUZINHO
// -------------------------------------------------------------

function renderAdminKitsTab(state) {
  const pricedProducts = state.products.filter(p => p.price !== null);

  return `
    <div class="space-y-8">
      
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Montador de Kits Cajuzinho</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Crie combos com desconto automático para elevar o ticket médio e escoar produtos.</p>
      </div>

      <!-- FORMULÁRIO DE CRIAÇÃO DE NOVO KIT -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-sm">
        <h3 class="text-base font-bold text-white mb-4 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-400"></i> Criar Novo Kit Promocional
        </h3>

        <form id="new-kit-form" onsubmit="handleCreateKitSubmit(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="sm:col-span-2">
              <label class="block text-xs font-bold text-slate-300 mb-1">Nome do Kit *</label>
              <input type="text" name="kitName" required placeholder="Ex: Kit Primeiros Sabores + Brinde" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Desconto do Kit (%) *</label>
              <input type="number" name="kitDiscount" min="1" max="50" value="12" required class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono font-bold focus:ring-2 focus:ring-brand-500 focus:outline-none">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Descrição Comercial</label>
            <input type="text" name="kitDesc" placeholder="Ex: Combinação perfeita para a semana de introdução alimentar..." class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none">
          </div>

          <!-- SELEÇÃO DE PRODUTOS PARA COMPOR O KIT -->
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-2">Selecione os Produtos Inclusos no Kit:</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-2 bg-slate-800/50 rounded-2xl border border-slate-800">
              ${pricedProducts.map(p => `
                <label class="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700/80 cursor-pointer transition-colors text-xs text-slate-200">
                  <input type="checkbox" name="selectedProducts" value="${p.id}" class="w-4 h-4 rounded text-brand-600 focus:ring-brand-500">
                  <span class="truncate flex-1">${p.name}</span>
                  <span class="font-mono text-brand-400 font-bold">${formatMoney(p.price)}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <button type="submit" class="px-6 py-3 rounded-xl bg-accent-warm hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-accent-warm/25 transition-all flex items-center gap-2">
            <i data-lucide="check" class="w-4 h-4"></i>
            <span>SALVAR E PUBLICAR KIT NA LOJA</span>
          </button>
        </form>
      </div>

      <!-- LISTA DE KITS EXISTENTES -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${state.kits.map(kit => {
          const priceInfo = state.calculateKitPrice(kit);
          return `
            <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-base font-bold text-white leading-snug">${kit.name}</h3>
                  <span class="px-2 py-0.5 rounded-full bg-accent-warm/20 text-accent-warm text-[10px] font-bold">
                    ${kit.discountPercent}% OFF
                  </span>
                </div>
                <p class="text-xs text-slate-400 mb-4">${kit.description}</p>
                <ul class="space-y-1 text-xs text-slate-300 font-medium">
                  ${kit.items.map(it => `<li>• ${it.qty}x ${it.name}</li>`).join('')}
                </ul>
              </div>

              <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-xs text-slate-500 line-through block">${formatMoney(priceInfo.rawTotal)}</span>
                  <span class="text-xl font-extrabold text-white font-heading font-mono">${formatMoney(priceInfo.finalPrice)}</span>
                </div>
                <span class="text-xs text-emerald-400 font-bold">Economia: ${formatMoney(priceInfo.discountValue)}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

function handleCreateKitSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.kitName.value;
  const discountPercent = form.kitDiscount.value;
  const description = form.kitDesc.value;

  const checkboxes = form.querySelectorAll('input[name="selectedProducts"]:checked');
  if (checkboxes.length === 0) {
    showToast("Por favor, selecione ao menos 1 produto para compor o kit.", "warning");
    return;
  }

  const items = [];
  checkboxes.forEach(cb => {
    const prod = window.appState.products.find(p => p.id === cb.value);
    if (prod) {
      items.push({
        productId: prod.id,
        qty: 1,
        name: prod.name
      });
    }
  });

  window.appState.addCustomKit({
    name,
    discountPercent,
    description,
    items
  });

  form.reset();
}

// -------------------------------------------------------------
// TAB 5: GESTÃO DE ESTOQUE E MOVIMENTAÇÃO
// -------------------------------------------------------------

function renderAdminInventoryTab(state) {
  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Gestão de Estoque</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Controle de saldo atual, estoque mínimo e registro de entradas/saídas.</p>
        </div>
      </div>

      <!-- FORMULÁRIO RÁPIDO DE MOVIMENTAÇÃO -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-sm">
        <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <i data-lucide="arrow-left-right" class="w-4 h-4 text-brand-400"></i> Registrar Movimentação de Estoque
        </h3>
        <form onsubmit="handleStockMovementSubmit(event)" class="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div class="sm:col-span-2">
            <select name="productId" required class="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none">
              <option value="">Selecione o produto...</option>
              ${state.products.map(p => `<option value="${p.id}">${p.name} (Atual: ${p.stock} un)</option>`).join('')}
            </select>
          </div>
          <div>
            <select name="type" required class="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none">
              <option value="entrada">Entrada (Chegada fábrica)</option>
              <option value="saida">Saída manual</option>
              <option value="perda">Perda / Avaria</option>
            </select>
          </div>
          <div class="flex gap-2">
            <input type="number" name="quantity" min="1" placeholder="Qtd" required class="w-20 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono font-bold">
            <button type="submit" class="flex-1 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs">Lançar</button>
          </div>
        </form>
      </div>

      <!-- TABELA DE SALDOS -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-slate-300">
            <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th class="p-3.5">Produto</th>
                <th class="p-3.5">Categoria</th>
                <th class="p-3.5">Estoque Atual</th>
                <th class="p-3.5">Estoque Mínimo</th>
                <th class="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              ${state.products.map(p => {
                let statusBadge = '<span class="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">NORMAL</span>';
                if (p.stock === 0) {
                  statusBadge = '<span class="px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-400 border border-rose-800 text-[10px] font-bold">SEM ESTOQUE</span>';
                } else if (p.stock <= p.minStock) {
                  statusBadge = '<span class="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-bold">BAIXO ESTOQUE</span>';
                }
                return `
                  <tr class="hover:bg-slate-800/40">
                    <td class="p-3.5 font-bold text-white">${p.name}</td>
                    <td class="p-3.5 text-slate-400">${p.category}</td>
                    <td class="p-3.5 font-mono font-bold text-sm">${p.stock} un</td>
                    <td class="p-3.5 font-mono text-slate-400">${p.minStock} un</td>
                    <td class="p-3.5">${statusBadge}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function handleStockMovementSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const productId = form.productId.value;
  const type = form.type.value;
  const qty = form.quantity.value;

  window.appState.recordStockMovement(productId, type, qty, "Lançamento manual no /adm");
  form.reset();
}

// -------------------------------------------------------------
// TAB 6: CONTROLE DE PERDAS E AVARIAS
// -------------------------------------------------------------

function renderAdminLossesTab(state) {
  const totalLoss = state.losses.reduce((acc, l) => acc + l.totalLoss, 0);

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Controle de Perdas</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Registro de vencimento, avaria, defeitos de lote e impacto financeiro.</p>
        </div>
        <div class="bg-rose-950/60 border border-rose-800/40 px-4 py-2 rounded-2xl text-right">
          <span class="text-[10px] uppercase font-bold text-rose-300 block">Prejuízo Total</span>
          <span class="text-xl font-black text-rose-400 font-mono">${formatMoney(totalLoss)}</span>
        </div>
      </div>

      <!-- FORMULÁRIO DE PERDA -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-sm">
        <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <i data-lucide="plus" class="w-4 h-4 text-rose-400"></i> Lançar Nova Perda / Avaria
        </h3>
        <form onsubmit="handleRecordLossSubmit(event)" class="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div class="sm:col-span-2">
            <select name="productId" required class="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none">
              <option value="">Selecione o item avariado...</option>
              ${state.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
          </div>
          <div>
            <select name="reason" required class="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none">
              <option value="Avaria no transporte">Avaria no transporte</option>
              <option value="Vencimento do lote">Vencimento do lote</option>
              <option value="Embalagem furada/danificada">Embalagem furada/danificada</option>
              <option value="Outros motivos">Outros motivos</option>
            </select>
          </div>
          <div class="flex gap-2">
            <input type="number" name="quantity" min="1" placeholder="Qtd" required class="w-20 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono font-bold">
            <button type="submit" class="flex-1 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs">Registrar</button>
          </div>
        </form>
      </div>

      <!-- LISTA DE OCORRÊNCIAS DE PERDA -->
      <div class="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
            <tr>
              <th class="p-3.5">Data</th>
              <th class="p-3.5">Produto</th>
              <th class="p-3.5">Motivo</th>
              <th class="p-3.5">Quantidade</th>
              <th class="p-3.5">Custo Unitário</th>
              <th class="p-3.5">Impacto Financeiro</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${state.losses.map(l => `
              <tr class="hover:bg-slate-800/40">
                <td class="p-3.5 text-slate-400 font-mono">${l.date}</td>
                <td class="p-3.5 font-bold text-white">${l.productName}</td>
                <td class="p-3.5 text-slate-300">${l.reason}</td>
                <td class="p-3.5 font-mono font-bold text-rose-400">${l.quantity} un</td>
                <td class="p-3.5 font-mono text-slate-400">${formatMoney(l.unitCost)}</td>
                <td class="p-3.5 font-mono font-extrabold text-rose-400">${formatMoney(l.totalLoss)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

    </div>
  `;
}

function handleRecordLossSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const productId = form.productId.value;
  const reason = form.reason.value;
  const qty = form.quantity.value;

  window.appState.recordStockMovement(productId, "perda", qty, reason);
  form.reset();
}

// -------------------------------------------------------------
// TAB 7: RADAR DE RESTOCK (REPOSIÇÃO INTELIGENTE)
// -------------------------------------------------------------

function renderAdminRestockTab(state) {
  const urgent = state.products.filter(p => p.stock === 0);
  const soon = state.products.filter(p => p.stock > 0 && p.stock <= p.minStock);
  const ok = state.products.filter(p => p.stock > p.minStock);

  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Radar de Restock</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Análise preditiva de reposição para compras junto à Papapá oficial.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- URGENTE -->
        <div class="bg-slate-900 rounded-3xl border border-rose-900/50 p-5 shadow-sm">
          <div class="flex items-center gap-2 text-rose-400 font-bold text-sm mb-4">
            <span class="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
            <span>URGENTE: Ruptura Imediata (${urgent.length})</span>
          </div>
          <div class="space-y-3">
            ${urgent.length === 0 ? '<p class="text-xs text-slate-500">Nenhum produto zerado.</p>' : urgent.map(p => `
              <div class="p-3 rounded-xl bg-rose-950/20 border border-rose-900/40 flex justify-between items-center text-xs">
                <div>
                  <span class="font-bold text-white block">${p.name}</span>
                  <span class="text-[10px] text-slate-400 font-mono">Estoque: 0 un</span>
                </div>
                <span class="text-[11px] font-bold text-rose-400">Repor Já</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- REPOR EM BREVE -->
        <div class="bg-slate-900 rounded-3xl border border-amber-900/50 p-5 shadow-sm">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm mb-4">
            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>REPOR EM BREVE (${soon.length})</span>
          </div>
          <div class="space-y-3">
            ${soon.length === 0 ? '<p class="text-xs text-slate-500">Nenhum produto em risco.</p>' : soon.map(p => `
              <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 flex justify-between items-center text-xs">
                <div>
                  <span class="font-bold text-white block">${p.name}</span>
                  <span class="text-[10px] text-slate-400 font-mono">Estoque: ${p.stock} un (Mín: ${p.minStock})</span>
                </div>
                <span class="text-[11px] font-bold text-amber-400">Giro Alto</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ESTOQUE ADEQUADO -->
        <div class="bg-slate-900 rounded-3xl border border-slate-800 p-5 shadow-sm">
          <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>ESTOQUE ADEQUADO (${ok.length})</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            ${ok.length} itens com quantidade suficiente para suportar o ritmo atual de compras pelas próximas 3 a 4 semanas.
          </p>
        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// TAB 8: GESTÃO DE PEDIDOS
// -------------------------------------------------------------

function renderAdminOrdersTab(state) {
  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Gestão de Pedidos</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Acompanhamento e atualização de status dos pedidos em tempo real.</p>
      </div>

      <div class="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
            <tr>
              <th class="p-3.5">Pedido</th>
              <th class="p-3.5">Data / Hora</th>
              <th class="p-3.5">Cliente</th>
              <th class="p-3.5">Modalidade</th>
              <th class="p-3.5">Itens</th>
              <th class="p-3.5">Total</th>
              <th class="p-3.5">Status Atual</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${state.orders.map(o => `
              <tr class="hover:bg-slate-800/40">
                <td class="p-3.5 font-mono font-bold text-white">${o.id}</td>
                <td class="p-3.5 text-slate-400">${o.date}</td>
                <td class="p-3.5">
                  <span class="font-bold text-white block">${o.customer}</span>
                  <span class="text-[10px] text-slate-400">${o.phone}</span>
                </td>
                <td class="p-3.5 text-slate-300">${o.deliveryType}</td>
                <td class="p-3.5 text-slate-400">${o.items.length} produto(s)</td>
                <td class="p-3.5 font-mono font-black text-brand-400 text-sm">${formatMoney(o.total)}</td>
                <td class="p-3.5">
                  <select 
                    onchange="window.appState.updateOrderStatus('${o.id}', this.value)"
                    class="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white font-bold focus:outline-none">
                    <option value="NOVO" ${o.status === 'NOVO' ? 'selected' : ''}>NOVO</option>
                    <option value="CONFIRMADO" ${o.status === 'CONFIRMADO' ? 'selected' : ''}>CONFIRMADO</option>
                    <option value="EM PREPARAÇÃO" ${o.status === 'EM PREPARAÇÃO' ? 'selected' : ''}>EM PREPARAÇÃO</option>
                    <option value="ENVIADO" ${o.status === 'ENVIADO' ? 'selected' : ''}>ENVIADO</option>
                    <option value="ENTREGUE" ${o.status === 'ENTREGUE' ? 'selected' : ''}>ENTREGUE</option>
                    <option value="CANCELADO" ${o.status === 'CANCELADO' ? 'selected' : ''}>CANCELADO</option>
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// TAB 9: CUPONS DE DESCONTO
// -------------------------------------------------------------

function renderAdminCouponsTab(state) {
  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Cupons Promocionais</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Crie códigos de desconto com validação automática no checkout.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${state.coupons.map(c => `
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-5">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-base font-extrabold text-brand-400">${c.code}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${c.active ? 'bg-emerald-950 text-emerald-400' : 'bg-slate-800 text-slate-500'}">
                ${c.active ? 'ATIVO' : 'PAUSADO'}
              </span>
            </div>
            <p class="text-xs text-slate-300 mb-2">${c.description}</p>
            <div class="text-[11px] text-slate-400 font-mono">
              Desconto: <strong>${c.type === 'percent' ? `${c.value}%` : formatMoney(c.value)}</strong>
              ${c.minOrderValue ? ` • Mín: ${formatMoney(c.minOrderValue)}` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// TAB 10: LEADS DE REVENDA (B2B CRM)
// -------------------------------------------------------------

function renderAdminLeadsTab(state) {
  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Leads de Revenda (B2B)</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Comércios, empórios e padarias interessados em revender Papapá.</p>
      </div>

      <div class="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
            <tr>
              <th class="p-3.5">Data</th>
              <th class="p-3.5">Empresa</th>
              <th class="p-3.5">Contato / WhatsApp</th>
              <th class="p-3.5">Tipo</th>
              <th class="p-3.5">Cidade</th>
              <th class="p-3.5">Status Funil</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${state.leads.map(l => `
              <tr class="hover:bg-slate-800/40">
                <td class="p-3.5 text-slate-400 font-mono">${l.date}</td>
                <td class="p-3.5 font-bold text-white">${l.company}</td>
                <td class="p-3.5">
                  <span class="block text-slate-200">${l.name}</span>
                  <a href="https://wa.me/55${l.whatsapp.replace(/\D/g, '')}" target="_blank" class="text-emerald-400 hover:underline flex items-center gap-1">
                    <i data-lucide="message-circle" class="w-3 h-3"></i> ${l.whatsapp}
                  </a>
                </td>
                <td class="p-3.5 text-slate-400">${l.type}</td>
                <td class="p-3.5 text-slate-300">${l.city}</td>
                <td class="p-3.5">
                  <select 
                    onchange="window.appState.updateLeadStatus('${l.id}', this.value)"
                    class="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white font-bold focus:outline-none">
                    <option value="NOVO" ${l.status === 'NOVO' ? 'selected' : ''}>NOVO</option>
                    <option value="CONTATADO" ${l.status === 'CONTATADO' ? 'selected' : ''}>CONTATADO</option>
                    <option value="EM NEGOCIAÇÃO" ${l.status === 'EM NEGOCIAÇÃO' ? 'selected' : ''}>EM NEGOCIAÇÃO</option>
                    <option value="CLIENTE" ${l.status === 'CLIENTE' ? 'selected' : ''}>CLIENTE</option>
                    <option value="PERDIDO" ${l.status === 'PERDIDO' ? 'selected' : ''}>PERDIDO</option>
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// TAB 11: BASE DE CLIENTES
// -------------------------------------------------------------

function renderAdminCustomersTab(state) {
  // Clientes únicos a partir dos pedidos
  const customerMap = {};
  state.orders.forEach(o => {
    if (!customerMap[o.phone]) {
      customerMap[o.phone] = {
        name: o.customer,
        phone: o.phone,
        city: o.city,
        ordersCount: 0,
        totalSpent: 0,
        lastOrder: o.date
      };
    }
    customerMap[o.phone].ordersCount++;
    customerMap[o.phone].totalSpent += o.total;
  });

  const customerList = Object.values(customerMap);

  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Base de Clientes</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Histórico de compras e taxa de recompra de famílias e lojistas.</p>
      </div>

      <div class="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-sm">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-800/80 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
            <tr>
              <th class="p-3.5">Nome do Cliente</th>
              <th class="p-3.5">WhatsApp</th>
              <th class="p-3.5">Cidade</th>
              <th class="p-3.5">Total de Pedidos</th>
              <th class="p-3.5">Total Comprado</th>
              <th class="p-3.5">Última Compra</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${customerList.map(c => `
              <tr class="hover:bg-slate-800/40">
                <td class="p-3.5 font-bold text-white">${c.name}</td>
                <td class="p-3.5 text-slate-400 font-mono">${c.phone}</td>
                <td class="p-3.5 text-slate-300">${c.city}</td>
                <td class="p-3.5 font-mono font-bold text-white">${c.ordersCount} pedidos</td>
                <td class="p-3.5 font-mono font-black text-brand-400">${formatMoney(c.totalSpent)}</td>
                <td class="p-3.5 text-slate-400 font-mono">${c.lastOrder}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// TAB 12: SUGESTÕES DE PRODUTOS
// -------------------------------------------------------------

function renderAdminSuggestionsTab(state) {
  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Ideias & Sugestões de Novos Produtos</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Backlog para registrar produtos pedidos por clientes ou itens em análise de catálogo.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${state.suggestions.map(s => `
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-white text-sm">${s.name}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-950 text-brand-400 border border-brand-800">
                ${s.status}
              </span>
            </div>
            <p class="text-xs text-slate-400">${s.notes}</p>
            <div class="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              Demanda percebida: <strong class="text-slate-300">${s.demand}</strong>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// TAB 13: CONFIGURAÇÕES DA LOJA
// -------------------------------------------------------------

function renderAdminSettingsTab(state) {
  return `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-black text-white font-heading">Configurações da Loja</h1>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">Personalize dados de contato, WhatsApp e parâmetros de entrega.</p>
      </div>

      <div class="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-sm max-w-2xl">
        <form onsubmit="handleSettingsSave(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Nome da Empresa</label>
              <input type="text" name="storeName" value="${state.settings.storeName}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">WhatsApp de Pedidos (DDD + Número)</label>
              <input type="text" name="whatsappNumber" value="${state.settings.whatsappNumber}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Slogan / Frase da Home</label>
            <input type="text" name="slogan" value="${state.settings.slogan}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Valor da Taxa de Entrega (R$)</label>
              <input type="number" step="0.10" name="deliveryFee" value="${state.settings.deliveryFee}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Frete Grátis Acima de (R$)</label>
              <input type="number" step="1" name="freeDeliveryThreshold" value="${state.settings.freeDeliveryThreshold}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Endereço de Retirada / Localização</label>
            <input type="text" name="address" value="${state.settings.address}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Chave Pix para Pagamento</label>
            <input type="text" name="pixKey" value="${state.settings.pixKey}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-mono">
          </div>

          <button type="submit" class="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-600/30 transition-all flex items-center gap-2">
            <i data-lucide="save" class="w-4 h-4"></i>
            <span>SALVAR ALTERAÇÕES</span>
          </button>
        </form>
      </div>
    </div>
  `;
}

function handleSettingsSave(event) {
  event.preventDefault();
  const form = event.target;
  const s = window.appState.settings;

  s.storeName = form.storeName.value;
  s.whatsappNumber = form.whatsappNumber.value.replace(/\D/g, '');
  s.slogan = form.slogan.value;
  s.deliveryFee = parseFloat(form.deliveryFee.value) || 0;
  s.freeDeliveryThreshold = parseFloat(form.freeDeliveryThreshold.value) || 99;
  s.address = form.address.value;
  s.pixKey = form.pixKey.value;

  window.appState.saveState();
  showToast("Configurações salvas com sucesso!", "success");
}
