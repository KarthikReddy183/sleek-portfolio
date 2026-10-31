import { type Experience } from '@/config/Experience';
import AWS from '@/components/technologies/AWS';
import Figma from '@/components/technologies/Figma';

const toolIcon: Record<string, string> = {
  Android: '/skills/android.svg',
  AOSP: '/skills/android.svg',
  'Android Automotive OS': '/skills/android.svg',
  'Android testing': '/skills/android.svg',
  AAOS: '/skills/android.svg',
  VHAL: '/skills/android.svg',
  CTS: '/skills/android.svg',
  'Android Testing': '/skills/android.svg',
  Kotlin: '/skills/kotlin.svg',
  'Android Studio': '/skills/androidstudio.svg',
  'VS Code': '/skills/vscode.png',
  Figma: '/skills/figma.svg',
  'Jetpack Compose': '/skills/jetpackcompose.svg',
  'Raspberry Pi': '/skills/raspberrypi.svg',
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <details className="ramx-exp" open>
      <summary className="ramx-exp-summary">
        <span className="ramx-exp-main">
          <span className="ramx-exp-company">
            {experience.company}
            {experience.isCurrent && (
              <span className="ramx-status"><i />Working</span>
            )}
          </span>
          <span className="ramx-exp-position">
            {experience.position}
            {experience.context ? ` · ${experience.context}` : ''}
          </span>
        </span>
        <span className="ramx-exp-meta">
          <span>{experience.startDate} – {experience.endDate}</span>
          {experience.location && <span>{experience.location}</span>}
        </span>
      </summary>
      <div className="ramx-exp-details">
        <div className="ramx-exp-divider" />
        {experience.client && <p><strong>Client:</strong> {experience.client}</p>}
        <div>
          <h4>Technologies &amp; Tools</h4>
          <div className="ramx-tool-list" aria-label="Technologies and tools">
            {experience.technologies.map((tool) => (
              <span className={`ramx-tool-icon ${tool === 'AWS' ? 'ramx-tool-icon-aws' : ''}`} aria-label={tool} role="img" tabIndex={0} key={tool}>
                <span className="ramx-tool-mark">
                  {tool === 'Figma' ? <Figma /> : tool === 'AWS' ? <AWS /> : toolIcon[tool] ? <img src={toolIcon[tool]} alt="" /> : <span>{tool.slice(0, 2)}</span>}
                </span>
                <span className="ramx-tool-name" aria-hidden="true">{tool}</span>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4>What I&apos;ve done</h4>
          {experience.description.length > 0 && (
            <ul>{experience.description.map((item) => <li key={item}>{item}</li>)}</ul>
          )}
        </div>
      </div>
    </details>
  );
}
