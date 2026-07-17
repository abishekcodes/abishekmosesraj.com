import { Bot, Cloud, Code, Database, Users } from 'lucide-react';
import { Skill } from '@/types';

const skillsData: Skill[] = [
  {
    id: 1,
    icon: Bot,
    title: 'Agentic AI',
    description: 'Contributes to AI chatbots and agentic systems built with LangGraph, CrewAI, and FastAPI, including one in production for an enterprise client — from prompt design to agent orchestration, not just demos.',
    metric: '1',
    metricLabel: 'agent framework in production'
  },
  {
    id: 2,
    icon: Cloud,
    brandIcon: 'aws',
    title: 'AWS Cloud Architecture',
    description: 'Designs infrastructures that scale and bills that shrink. Cut monthly AWS spend from $18K to $9K while running EC2, S3, Lambda, and ECS workloads at 99.995% uptime.',
    metric: '50%',
    metricLabel: 'cloud cost reduction'
  },
  {
    id: 3,
    icon: Code,
    brandIcon: 'python',
    title: 'Python Development',
    description: 'Builds high-performance REST and GraphQL APIs with Flask, Aiohttp, and Ariadne. The systems behind CricketAPI handle 50,000 requests every hour, at average load.',
    metric: '4B+',
    metricLabel: 'lifetime API requests served'
  },
  {
    id: 4,
    icon: Database,
    title: 'Database & Data Management',
    description: 'Engineers storage that survives scale: Cassandra, DynamoDB, Redshift, MySQL, and Athena. Played a key role in designing the system holding 13 years of ball-by-ball cricket match data.',
    metric: '13 yrs',
    metricLabel: 'of sports data engineered'
  },
  {
    id: 5,
    icon: Users,
    title: 'Development Leadership',
    description: 'Grows engineers, not just codebases. Led a team of 5 from junior developers to independent contributors through code reviews, mentoring, and real ownership.',
    metric: '5',
    metricLabel: 'engineers mentored to independence'
  }
];

export default skillsData;
