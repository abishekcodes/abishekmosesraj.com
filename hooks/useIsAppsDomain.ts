'use client';

import { useState, useEffect } from 'react';

const APPS_HOSTNAME = 'app.abishekmosesraj.com';

// The apps showcase is only shown when the site is served from the apps
// subdomain; the main portfolio stays focused on hiring content.
const useIsAppsDomain = (): boolean => {
  const [isAppsDomain, setIsAppsDomain] = useState(false);

  useEffect(() => {
    setIsAppsDomain(window.location.hostname === APPS_HOSTNAME);
  }, []);

  return isAppsDomain;
};

export default useIsAppsDomain;
