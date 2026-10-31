import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
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
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-1 text-left">
          <h1 className="text-2xl font-bold tracking-tight">
            Resume
          </h1>
          <p className="text-muted-foreground text-base">
            View and download my professional resume.
          </p>
        </div>
        <Separator />
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={resumeConfig.url} download="Karthik_Reddy_Y_Resume.pdf">
                Download resume
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={resumeConfig.url} target="_blank" rel="noreferrer">
                Open PDF
              </a>
            </Button>
          </div>
          <iframe
            src={`${resumeConfig.url}#view=FitH`}
            title="Karthik Reddy Y professional resume"
            className="min-h-[80vh] w-full rounded-md border"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
