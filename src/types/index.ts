// Career Types
export interface CareerItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

// Education Types
export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  gpa: number | null;
  status: string;
  courses: string[];
}

// Project Types
export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: string;
  statusColor: string;
  link: string;
}

// Certification Types
export interface Certification {
  name: string;
  fullName: string;
  issuer: string;
  date: string;
  id: string;
  logo: string;
}

// Organization Types
export interface Organization {
  name: string;
  fullName: string;
  role: string;
  description: string;
  status: string;
}

// Volunteering Types
export interface VolunteeringItem {
  title: string;
  org: string;
  role: string;
  description: string;
  status: string;
}

// Skill Category Types
export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

