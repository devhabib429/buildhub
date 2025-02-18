import { Developer, Project } from '@/types';
import developersData from '@/data/developers.json';
import projectsData from '@/data/projects.json';

export const getDevelopers = (): Developer[] => developersData.developers;
export const getProjects = (): Project[] => projectsData.projects as Project[];

export const getFeaturedDevelopers = (): Developer[] => 
  developersData.developers.filter(dev => dev.featured);

export const getFeaturedProjects = (): Project[] =>
  (projectsData.projects as Project[]).filter(project => project.featured);

export const searchDevelopers = (query: string, skill?: string): Developer[] => {
  return developersData.developers.filter(dev => {
    const matchesQuery = 
      dev.name.toLowerCase().includes(query.toLowerCase()) ||
      dev.role.toLowerCase().includes(query.toLowerCase()) ||
      dev.bio.toLowerCase().includes(query.toLowerCase()) ||
      dev.location.toLowerCase().includes(query.toLowerCase());
    
    const matchesSkill = !skill || dev.skills.includes(skill);
    
    return matchesQuery && matchesSkill;
  });
};

export const searchProjects = (query: string, tech?: string): Project[] => {
  return (projectsData.projects as Project[]).filter(project => {
    const matchesQuery = 
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()) ||
      project.author.name.toLowerCase().includes(query.toLowerCase());
    
    const matchesTech = !tech || project.tech.includes(tech);
    
    return matchesQuery && matchesTech;
  });
}; 