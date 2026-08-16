'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, Check } from 'lucide-react';
import appsData from '@/data/apps';
import useScrollReveal from '@/hooks/useScrollReveal';
import type { ShowcaseApp } from '@/types';

interface AppCardProps {
  app: ShowcaseApp;
  index: number;
}

const AppCard = ({ app, index }: AppCardProps) => {
  const [cardRef, isVisible] = useScrollReveal<HTMLDivElement>({ delay: index * 150 });

  return (
    <div
      ref={cardRef}
      className={`app-card app-card-${app.accent} ${isVisible ? 'app-card-visible' : ''}`}
    >
      <div className="app-card-header">
        <img
          src={app.logo}
          alt={`${app.name} logo`}
          className="app-card-logo"
          width={84}
          height={84}
          loading="lazy"
        />
        <span className="app-card-status">Live</span>
      </div>
      <div className="app-card-content">
        <h3 className="app-card-title">{app.name}</h3>
        <p className="app-card-tagline">{app.tagline}</p>
        <p className="app-card-description">{app.description}</p>

        <ul className="app-card-features">
          {app.features.map((feature, idx) => (
            <li key={idx}>
              <Check size={14} className="feature-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="tech-stack">
          {app.techStack.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="app-card-privacy">
          <ShieldCheck size={14} />
          <span>Your data stays in your own Google Drive</span>
        </div>

        <a
          className="app-card-cta"
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Launch App</span>
          <ExternalLink size={14} className="cta-icon" />
        </a>

        <div className="app-card-legal">
          <a href={app.privacyUrl} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span className="legal-divider">·</span>
          <a href={app.termsUrl} target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

const Apps = () => {
  return (
    <section id="apps" className="apps">
      <div className="apps-container">
        <div className="apps-header">
          <p className="apps-eyebrow">App Showcase</p>
          <h2 className="apps-title">Apps I've Built</h2>
          <p className="apps-subtitle">
            Privacy-first personal apps, live and free to use
          </p>
        </div>
        <div className="apps-grid">
          {appsData.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
