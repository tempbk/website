// app/components/InfoSection.tsx
import Image from 'next/image';
import AutoTypingDescription from './autotype';

export default function InfoSection() {
  return (
    <section className="info-section" aria-labelledby="info-title">
      <div className="info-container">
        <div className="info-content">
          <h2 id="info-title" className="info-title">
            About Our Mission
          </h2>
          <AutoTypingDescription />
        </div>
        <div className="info-image">
          <Image
            src="/mission.jpg"
            alt="Team collaborating on a project"
            width={600}
            height={400}
            className="info-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}