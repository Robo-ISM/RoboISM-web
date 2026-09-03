export interface Achievement {
  title: string;
  image: string;
  description: string;
  participants: string;
  brief: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  github?: string;
  video?: string;
}

export interface EventItem {
  title: string;
  description: string;
  images: string[];
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
  youtube?: string;
  website?: string;
  backgroundPosition?: string;
}
