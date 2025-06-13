// app/About/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Code, Shield, Server } from 'lucide-react';
import AnimatedSection from '@/components/animatesec';

export default function About() {
  return (
    <main className="about-page" >
      {/* Hero Section */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-container">
          <AnimatedSection>
            <h1 id="about-hero-title" className="about-hero-title">
              IT to AI Research : Innovating for Impact
            </h1>
            <p className="about-hero-description">
              Transforming expertise in IT solutions and AI research into groundbreaking technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story-container">
          <AnimatedSection>
            <div className="about-story-content">
              <h2 id="about-story-title" className="about-story-title">
                Our Journey
              </h2>
              <p className="about-story-description">
                Starting in IT solutions, we built robust systems that powered businesses. Our curiosity led to AI research, where we developed algorithms for predictive analytics and automation. Now, we’re applying that expertise technology, creating secure, intelligent solutions to safeguard the future. Our mission is to innovate with purpose, blending technical excellence with real-world impact.
              </p>
            </div>
            <div className="about-story-image">
              <Image
                src="/about-story.jpg"
                alt="Team working on defense tech prototype"
                width={600}
                height={400}
                className="about-story-img"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="about-expertise" aria-labelledby="about-expertise-title">
        <div className="about-expertise-container">
          <AnimatedSection>
            <h2 id="about-expertise-title" className="about-expertise-title">
              Our Expertise
            </h2>
            <div className="about-expertise-grid">
              <div className="expertise-card">
                <Server className="expertise-icon" size={32} />
                <h3 className="expertise-card-title">IT Solutions</h3>
                <p className="expertise-card-description">
                  Scalable, secure IT infrastructure for mission-critical systems.
                </p>
              </div>
              <div className="expertise-card">
                <Code className="expertise-icon" size={32} />
                <h3 className="expertise-card-title">AI Research</h3>
                <p className="expertise-card-description">
                  Advanced machine learning for autonomous and predictive applications.
                </p>
              </div>
              <div className="expertise-card">
                <Shield className="expertise-icon" size={32} />
                <h3 className="expertise-card-title"> Tech</h3>
                <p className="expertise-card-description">
                  Innovative, Train AI , and persue.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta-container">
          <AnimatedSection>
            <h2 id="about-cta-title" className="about-cta-title">
              Let’s Build the Future
            </h2>
            <p className="about-cta-description">
              Ready to collaborate on next-gen  technology? Connect with us today.
            </p>
            <Link href="/ContactUs" className="about-cta-button">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}