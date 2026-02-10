import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    title: 'Personal Cybersecurity Lab',
    description:
      'Designed a lab environment to simulate real-world attack and defense scenarios using Linux virtual machines. Performed web and API security testing aligned with OWASP Top 10.',
    tags: ['Linux', 'OWASP', 'ELK Stack', 'Prometheus'],
    status: 'ONGOING',
    statusColor: 'text-cyan border-cyan/30 bg-cyan/10',
    link: '#',
  },
  {
    title: 'Linux Kernel Security Research (Rootkit PoC)',
    description:
      'Developed a Linux Loadable Kernel Module to intercept system calls and implement stealth techniques in a controlled research environment. Automated build, testing, and deployment processes using Bash.',
    tags: ['Linux Kernel', 'LKM', 'Bash', 'System Security'],
    status: 'ONGOING',
    statusColor: 'text-cyan border-cyan/30 bg-cyan/10',
    link: '#',
  },
  {
    title: 'SAST/DAST CI/CD Integration',
    description:
      'Integrated SAST and DAST security testing into CI/CD pipelines to identify vulnerabilities in web applications and APIs. Built AI-based agents to automate security testing workflows.',
    tags: ['SAST', 'DAST', 'CI/CD', 'Python', 'AI'],
    status: 'COMPLETED',
    statusColor: 'text-success border-success/30 bg-success/10',
    link: '#',
  },
  {
    title: 'Bug Bounty Program',
    description:
      'Active Bug Bounty hunter on HackerOne, identifying and responsibly reporting security vulnerabilities. Continuous practice in web exploitation and privilege escalation.',
    tags: ['Bug Bounty', 'HackerOne', 'Web Security', 'Penetration Testing'],
    status: 'ACTIVE',
    statusColor: 'text-success border-success/30 bg-success/10',
    link: '#',
  },
  {
    title: 'Offensive Security Labs',
    description:
      'Completed offensive security labs and challenges on Hack The Box and TryHackMe. Practiced adversary simulation mapped to MITRE ATT&CK framework.',
    tags: ['Hack The Box', 'TryHackMe', 'MITRE ATT&CK', 'Penetration Testing'],
    status: 'ONGOING',
    statusColor: 'text-cyan border-cyan/30 bg-cyan/10',
    link: '#',
  },
  {
    title: 'Centralized Logging & Monitoring',
    description:
      'Implemented centralized logging and monitoring using ELK Stack and Prometheus. Analyzed system behavior and security events in Google Cloud.',
    tags: ['ELK Stack', 'Prometheus', 'Google Cloud', 'Monitoring'],
    status: 'COMPLETED',
    statusColor: 'text-success border-success/30 bg-success/10',
    link: '#',
  },
];

