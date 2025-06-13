// app/Services/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Lock, Wrench } from 'lucide-react';
import AnimatedSection from '@/components/animatesec';

export const metadata = {
  title: 'Services - AI, Cybersecurity, Computer Upgrades',
  description: 'Explore our expert services in AI research, cybersecurity, and computer fixing and upgrades for defense and business needs.',
};

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero" aria-labelledby="services-hero-title">
        <div className="services-hero-container">
          <AnimatedSection>
            <h1 id="services-hero-title" className="services-hero-title">
              Expert Services for a Secure Future
            </h1>
            <p className="services-hero-description">
              Leverage our expertise in AI research, cybersecurity, and computer upgrades to drive innovation and performance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Research Section */}
      <section className="service-section" aria-labelledby="ai-research-title">
        <div className="service-container">
          <AnimatedSection>
            <div className="service-content">
              <h2 id="ai-research-title" className="service-title">
                AI Research
              </h2>
              <p className="service-description">
                Our AI research services focus on developing cutting-edge machine learning models for predictive analytics, automation, and autonomous systems. From defense applications to business optimization, we create tailored AI solutions that deliver actionable insights and efficiency.
              </p>
              <ul className="service-benefits">
                <li><Brain size={20} className="inline mr-2" /> Custom AI algorithms for specific use cases.</li>
                <li><Brain size={20} className="inline mr-2" /> Integration with existing systems for seamless adoption.</li>
                <li><Brain size={20} className="inline mr-2" /> Scalable models for real-time decision-making.</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/ai-research.jpg"
                alt="AI research lab with data visualizations"
                width={600}
                height={400}
                className="service-img"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="service-section service-reverse" aria-labelledby="cybersecurity-title">
        <div className="service-container">
          <AnimatedSection>
            <div className="service-content">
              <h2 id="cybersecurity-title" className="service-title">
                Cybersecurity
              </h2>
              <p className="service-description">
                Protect your critical infrastructure with our advanced cybersecurity services. We design robust security frameworks, conduct threat assessments, and implement real-time monitoring to safeguard against cyber threats, ensuring compliance and resilience.
              </p>
              <ul className="service-benefits">
                <li><Lock size={20} className="inline mr-2" /> End-to-end encryption and secure protocols.</li>
                <li><Lock size={20} className="inline mr-2" /> Proactive threat detection and response.</li>
                <li><Lock size={20} className="inline mr-2" /> Customized security for defense and enterprise.</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/cybersecurity.jpg"
                alt="Cybersecurity operations center"
                width={600}
                height={400}
                className="service-img"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Computer Fixing and Upgrades Section */}
      <section className="service-section" aria-labelledby="computer-upgrade-title">
        <div className="service-container">
          <AnimatedSection>
            <div className="service-content">
              <h2 id="computer-upgrade-title" className="service-title">
                Computer Fixing and Upgrades
              </h2>
              <p className="service-description">
                Optimize your hardware with our computer fixing and upgrade services. We diagnose and repair issues, upgrade components for enhanced performance, and provide maintenance to ensure reliability for both business and defense applications.
              </p>
              <ul className="service-benefits">
                <li><Wrench size={20} className="inline mr-2" /> Fast diagnostics and repairs for minimal downtime.</li>
                <li><Wrench size={20} className="inline mr-2" /> High-performance upgrades (CPU, GPU, storage).</li>
                <li><Wrench size={20} className="inline mr-2" /> Preventive maintenance for long-term reliability.</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/computer-upgrade.jpg"
                alt="Technician upgrading computer hardware"
                width={600}
                height={400}
                className="service-img"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta" aria-labelledby="services-cta-title">
        <div className="services-cta-container">
          <AnimatedSection>
            <h2 id="services-cta-title" className="services-cta-title">
              Ready to Transform Your Operations?
            </h2>
            <p className="services-cta-description">
              Contact us to explore how our AI, cybersecurity, and computer upgrade services can meet your needs.
            </p>
            <Link href="/ContactUs" className="services-cta-button">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}