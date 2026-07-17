'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ReadMore = () => {
  return (
    <section className="site-cta">
      <div className="site-cta-container">
        <h2 className="site-cta-title">Want to Know the Person Behind the Apps?</h2>
        <p className="site-cta-text">
          Explore my full portfolio: skills, projects, and 9 years of building systems at scale.
        </p>
        <a href="https://abishekmosesraj.com/" className="site-cta-link">
          <span>Read more at abishekmosesraj.com</span>
          <ArrowRight size={16} className="site-cta-arrow" />
        </a>
      </div>
    </section>
  );
};

export default ReadMore;
