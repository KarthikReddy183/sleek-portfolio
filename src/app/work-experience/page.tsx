import Container from '@/components/common/Container';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { experiences } from '@/config/Experience';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const metadata: Metadata = {
  ...getMetadata('/work-experience'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } as Robots,
};

export default function WorkExperiencePage() {
  return (
    <Container className="ramx-work-page-container py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1 text-left">
          <h1 className="text-2xl font-bold tracking-tight">
            Work Experience
          </h1>
          <p className="text-muted-foreground text-base">
            My work experiences across different companies and roles.
          </p>
        </div>
        <ExperienceList experiences={experiences} />
      </div>
    </Container>
  );
}
