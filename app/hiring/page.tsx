// app/Hiring/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Lock, Rocket } from 'lucide-react';
import AnimatedSection from '@/components/animatesec';

export const metadata = {
  title: 'Hiring - Join Our innovate Tech Team',
  description: 'Join our mission to innovate  technology. Explore open roles in AI, cybersecurity, and more.',
};

export default function Hiring() {
  return (
    <main className="hiring-page">
      {/* Hero Section */}
      <section className="hiring-hero" aria-labelledby="hiring-hero-title">
        <div className="hiring-hero-container">
          <AnimatedSection>
            <h1 id="hiring-hero-title" className="hiring-hero-title">
              Join Our Tech Revolution
            </h1>
            <p className="hiring-hero-description">
              Be part of a team building secure, intelligent solutions for a safer future.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="hiring-why" aria-labelledby="hiring-why-title">
        <div className="hiring-why-container">
          <AnimatedSection>
            <div className="hiring-why-content">
              <h2 id="hiring-why-title" className="hiring-why-title">
                Why Join Us?
              </h2>
              <p className="hiring-why-description">
                At our core, we’re innovators driven by a mission to protect and empower technology. Join a team where your expertise in AI, cybersecurity, or systems engineering makes a real impact. We offer a collaborative culture, opportunities to work on groundbreaking projects, and benefits that support your growth.
              </p>
              <ul className="hiring-why-list">
                <li><Rocket size={20} className="inline mr-2" /> Work on transformative  tech projects.</li>
                <li><Brain size={20} className="inline mr-2" /> Collaborate with top AI and cybersecurity experts.</li>
                <li><Lock size={20} className="inline mr-2" /> Contribute to national security and global safety.</li>
              </ul>
            </div>
            <div className="hiring-why-image">
              <Image
                src="/hiring-team.jpg"
                alt="Team collaborating in a tech lab"
                width={600}
                height={400}
                className="hiring-why-img"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="hiring-roles" aria-labelledby="hiring-roles-title">
        <div className="hiring-roles-container">
          <AnimatedSection>
            <h2 id="hiring-roles-title" className="hiring-roles-title">
              Open Roles
            </h2>
            <div className="hiring-roles-grid">
              <div className="role-card">
                <h3 className="role-card-title">AI Engineer</h3>
                <p className="role-card-description">
                  Develop machine learning models for autonomous  systems.
                </p>
                <Link href="/apply/ai-engineer" className="role-card-button">
                  Apply Now
                </Link>
              </div>
              <div className="role-card">
                <h3 className="role-card-title">Cybersecurity Specialist</h3>
                <p className="role-card-description">
                  Build secure systems to protect critical infrastructure.
                </p>
                <Link href="/apply/cybersecurity-specialist" className="role-card-button">
                  Apply Now
                </Link>
              </div>
              <div className="role-card">
                <h3 className="role-card-title">Systems Architect</h3>
                <p className="role-card-description">
                  Design scalable IT frameworks for  applications.
                </p>
                <Link href="/apply/systems-architect" className="role-card-button">
                  Apply Now
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hiring-cta" aria-labelledby="hiring-cta-title">
        <div className="hiring-cta-container">
          <AnimatedSection>
            <h2 id="hiring-cta-title" className="hiring-cta-title">
              Ready to Make an Impact?
            </h2>
            <p className="hiring-cta-description">
              Join our team and help shape the future of  technology. Apply now or reach out to learn more.
            </p>
            <Link href="/ContactUs" className="hiring-cta-button">
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}