import React from 'react';
import { PROJECTS } from '../constants';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const ProjectsSection: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold text-stone-900">What I've Built</h2>
        <span className="text-red-500 animate-pulse">❤️</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <Card key={project.id} href={project.link} className="h-full flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-stone-50 rounded-lg group-hover:bg-orange-50 transition-colors">
                  {project.icon && <project.icon className="w-5 h-5 text-stone-700 group-hover:text-orange-600" />}
                </div>
                <Badge className="bg-stone-100 text-stone-500 group-hover:bg-stone-200">{project.category}</Badge>
              </div>
              
              <h3 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-stone-500 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
        
        {/* Placeholder for "Coming Soon" or generic CTA */}
        <Card className="flex flex-col items-center justify-center text-center p-8 bg-stone-50/50 border-dashed border-stone-300">
          <p className="font-semibold text-stone-600 mb-1">More loading...</p>
          <p className="text-xs text-stone-400">Working on the next big thing</p>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;