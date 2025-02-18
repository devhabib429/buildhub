export interface Developer {
  id: number;
  name: string;
  role: string;
  avatar: string;
  location: string;
  bio: string;
  skills: string[];
  github: string;
  twitter?: string;
  website?: string;
  projects: number;
  followers: number;
  contributions: number;
  featured: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tech: string[];
  stars: number;
  forks: number;
  author: {
    name: string;
    avatar: string;
    github: string;
  };
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  categories: string[];
  status: string;
} 