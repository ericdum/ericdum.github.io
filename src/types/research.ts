export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  tags?: string[];
  startDate?: string;
  endDate?: string;
  status: 'ongoing' | 'completed';
  teamMembers?: string[];
  publications?: string[];
  funding?: string;
} 