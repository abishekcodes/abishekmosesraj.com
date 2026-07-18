'use client';

import { useState, useEffect } from 'react';

const APPS_HOSTNAME = 'app.abishekmosesraj.com';

export const isAppsHost = (): boolean =>
  typeof window !== 'undefined' && window.location.hostname === APPS_HOSTNAME;

// The apps showcase is only shown when the site is served from the apps
// subdomain; the main portfolio stays focused on hiring content.
const useIsAppsDomain = (): boolean => {
  const [isAppsDomain, setIsAppsDomain] = useState(false);

  useEffect(() => {
    setIsAppsDomain(isAppsHost());
  }, []);

  // The layout's inline script hides the page on the apps subdomain so the
  // pre-rendered portfolio HTML never flashes; reveal only once the apps view
  // has committed (or immediately on the main domain, where nothing is hidden).
  useEffect(() => {
    if (isAppsDomain || !isAppsHost()) {
      document.documentElement.removeAttribute('data-apps-pending');
    }
  }, [isAppsDomain]);

  return isAppsDomain;
};

export default useIsAppsDomain;
