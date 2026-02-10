import type { SkillCategory } from '../types';

export const skillsData: Omit<SkillCategory, 'icon'> & { icon: string }[] = [
  {
    category: 'Application Security',
    icon: 'Shield',
    skills: ['OWASP Top 10', 'Web & API Testing', 'SAST/DAST', 'Burp Suite', 'OWASP ZAP'],
  },
  {
    category: 'Pentesting Tools',
    icon: 'Terminal',
    skills: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Kali Linux'],
  },
  {
    category: 'Scripting & Automation',
    icon: 'Code2',
    skills: ['Python', 'Bash', 'PowerShell', 'CI/CD Integration', 'AI Agents'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: 'Cloud',
    skills: ['Google Cloud', 'Docker', 'Linux Administration', 'Networking', 'IAM'],
  },
  {
    category: 'Security Platforms',
    icon: 'Database',
    skills: ['ELK Stack', 'Prometheus', 'Nessus/OpenVAS', 'SIEM', 'Logging & Monitoring'],
  },
  {
    category: 'Methodologies',
    icon: 'Wrench',
    skills: ['OWASP', 'MITRE ATT&CK', 'Vulnerability Management', 'Incident Response'],
  },
];

