'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import appsData from '@/data/apps';
import useScrollReveal from '@/hooks/useScrollReveal';
import type { ShowcaseApp } from '@/types';

const APPS_HOME = 'https://app.abishekmosesraj.com/';

// The compact card shows only the first few tags; the full list lives on the
// apps site so this section stays a teaser, not a second showcase.
const PREVIEW_TAG_COUNT = 3;

interface AppPreviewCardProps {
  app: ShowcaseApp;
  index: number;
}

const AppPreviewCard = ({ app, index }: AppPreviewCardProps) => {
  const [cardRef, isVisible] = useScrollReveal<HTMLAnchorElement>({ delay: index * 150 });

  return (
    <a
      ref={cardRef}
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`app-preview-card app-preview-card-${app.accent} ${isVisible ? 'app-preview-card-visible' : ''}`}
    >
      <div className="app-preview-top">
        <img
          src={app.logo}
          alt={`${app.name} logo`}
          className="app-preview-logo"
          width={56}
          height={56}
          loading="lazy"
        />
        <span className="app-preview-status">Live</span>
      </div>

      <h3 className="app-preview-name">{app.name}</h3>
      <p className="app-preview-tagline">{app.tagline}</p>

      <div className="app-preview-tags">
        {app.techStack.slice(0, PREVIEW_TAG_COUNT).map((tech) => (
          <span key={tech} className="app-preview-tag">{tech}</span>
        ))}
      </div>

      <span className="app-preview-cta">
        Open app
        <ArrowUpRight size={16} />
      </span>
    </a>
  );
};

const AppsPreview = () => {
  return (
    <section id="apps" className="apps-preview">
      <div className="apps-preview-container">
        <div className="apps-preview-header">
          <p className="apps-preview-eyebrow">Side Projects</p>
          <h2 className="apps-preview-title">Apps I Build and Ship Myself</h2>
          <p className="apps-preview-subtitle">
            Designed, built, and maintained solo. Live, free, and privacy-first.
          </p>
        </div>

        <div className="apps-preview-grid">
          {appsData.map((app, index) => (
            <AppPreviewCard key={app.id} app={app} index={index} />
          ))}
        </div>

        <a
          className="apps-preview-all"
          href={APPS_HOME}
          target="_blank"
          rel="noopener noreferrer"
        >
          See all apps
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default AppsPreview;
