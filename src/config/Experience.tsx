export interface Experience {
  company: string;
  position: string;
  context?: string;
  client?: string;
  location?: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  technologies: string[];
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Embitel Technologies',
    position: 'Software Engineer',
    client: 'DTICI (Daimler Truck)',
    location: 'Bengaluru, India (On-site)',
    startDate: 'April 2026',
    endDate: 'Present',
    isCurrent: true,
    technologies: [
      'Android',
      'Kotlin',
      'Android Studio',
      'VS Code',
      'Figma',
      'Jetpack Compose',
      'AOSP',
    ],
    description: [],
  },
  {
    company: 'Accenture',
    position: 'Android Developer',
    context: 'German OEM',
    startDate: 'February 2024',
    endDate: 'March 2026',
    isCurrent: false,
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'AOSP', 'Android Studio', 'Figma'],
    description: [
      'Customized Car Settings UI with OEM-specific Figma designs using build-time and RRO overlays.',
      'Integrated Jetpack Compose into an app using the Soong build system and traditional Android views.',
      'Updated system UI components, including toast messages, permission dialogs, and the activity chooser, to match OEM branding.',
      'Added deep links between the Car Settings and Memory apps and validated CTS cases for App Info, Storage, and Permission Controller.',
      'Built a Compose UI for the Memory app with controls to uninstall apps, clear storage and cache, and enable or disable apps.',
      'Used a content provider and locale-aware broadcast receiver in the wrapper app for secure data exchange and language updates.',
    ],
  },
  {
    company: 'Accenture',
    position: 'Android Developer',
    context: 'Drive Smart app',
    startDate: 'December 2022',
    endDate: 'February 2024',
    isCurrent: false,
    technologies: ['Android', 'Kotlin', 'AAOS', 'VHAL', 'Raspberry Pi', 'AWS', 'CTS'],
    description: [
      'Developed IVI interfaces for HVAC and tire-pressure features using VHAL properties.',
      'Brought up Android Automotive OS 11 and 12 on Raspberry Pi 4 for rapid prototyping.',
      'Maintained AWS-based x86 and ARM test environments, giving more than 30 developers remote access.',
      'Deployed a remote test farm, ran CTS compliance tests, and presented 15+ client demos, including at Bharat Mobility Conference 2024.',
    ],
  },
  {
    company: 'Accenture',
    position: 'Android Developer',
    context: 'Satellite messaging & billing gateway app',
    startDate: 'October 2021',
    endDate: 'December 2022',
    isCurrent: false,
    technologies: ['Android', 'Kotlin', 'AOSP', 'Raspberry Pi', 'Android testing'],
    description: [
      'Set up a remote Android test farm with Raspberry Pi 4 for continuous access across teams, improving test efficiency by 40%.',
      'Flashed and validated custom Android builds on two MTP devices.',
      'Executed 40+ automated and manual test cases and delivered 3+ client demos.',
    ],
  },
];
