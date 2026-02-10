import type { VolunteeringItem } from '../types';

export const volunteeringData: VolunteeringItem[] = [
  {
    title: 'Bug Bounty Hunter',
    org: 'HackerOne',
    role: 'Security Researcher',
    description:
      'Active Bug Bounty hunter identifying and responsibly reporting security vulnerabilities. Continuous practice in web exploitation, privilege escalation, and real-world attack scenarios.',
    status: 'ACTIVE',
  },
  {
    title: 'Offensive Security Labs',
    org: 'Hack The Box & TryHackMe',
    role: 'Security Practitioner',
    description:
      'Completed offensive security labs and challenges. Practiced web exploitation, privilege escalation, and adversary simulation mapped to MITRE ATT&CK framework.',
    status: 'ONGOING',
  },
  {
    title: 'Security Research',
    org: 'Personal Lab',
    role: 'Security Researcher',
    description:
      'Designed and maintained a cybersecurity lab environment to simulate real-world attack and defense scenarios. Conducted network enumeration, exploitation, and Linux privilege escalation.',
    status: 'ONGOING',
  },
];

