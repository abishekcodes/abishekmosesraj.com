'use client';

import React from 'react';
import { LayoutGrid } from 'lucide-react';
import BrandIcon from '@/components/UI/BrandIcon';
import { usePageMode } from '@/context/PageModeContext';
import useIsAppsDomain from '@/hooks/useIsAppsDomain';

const Footer = () => {
    const { mode } = usePageMode();
    const isAppsDomain = useIsAppsDomain();
    const isProfessional = mode === 'professional';

    return (
      <footer id="contact" className="footer">
        <div className="container">
          {isProfessional && !isAppsDomain && (
            <div className="footer-pitch">
              <h2 className="footer-pitch-title">Let's Build Something That Scales</h2>
              <p className="footer-pitch-text">
                From AI agents to cloud architecture — if you need someone who has shipped it,
                run it in production, and kept it running, let's talk.
              </p>
            </div>
          )}
          <div className="footer-cta">
            {isProfessional ? (
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/abishekmosesraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-connect"
                  aria-label="Connect on LinkedIn"
                >
                  <span className="social-icon-circle linkedin">
                    <BrandIcon name="linkedin" size={20} />
                  </span>
                  <span className="social-text">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/abishekcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-connect"
                  aria-label="View GitHub profile"
                >
                  <span className="social-icon-circle github">
                    <BrandIcon name="github" size={20} />
                  </span>
                  <span className="social-text">GitHub</span>
                </a>
                {!isAppsDomain && (
                  <a
                    href="https://app.abishekmosesraj.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-connect"
                    aria-label="Explore my apps"
                  >
                    <span className="social-icon-circle apps-link">
                      <LayoutGrid size={20} />
                    </span>
                    <span className="social-text">My Apps</span>
                  </a>
                )}
              </div>
            ) : (
              <a
                href="https://medium.com/@RiversOfThought"
                target="_blank"
                rel="noopener noreferrer"
                className="social-connect"
              >
                <span className="social-icon-circle medium">
                  <BrandIcon name="medium" size={20} />
                </span>
                <span className="social-text">Connect on Medium</span>
              </a>
            )}
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Abishek Moses Raj. {isProfessional ? 'Crafted with passion for technology.' : 'Words from the heart.'}
          </p>
        </div>
      </footer>
    );
  };

export default Footer;
