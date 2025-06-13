// app/components/FeaturedServices.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedServices() {
  const services = [
 
    {
      title: 'Computer Tech',
      description: 'Upgrade , build .',
      image: '/computerT.png',
      href: '/services/computer-tech',
    },

    
  ];

  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="services-container">
        <h2 id="services-title" className="services-title">
          Our Services
        </h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="service-image"
              />
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <Link href={service.href} className="service-card-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}