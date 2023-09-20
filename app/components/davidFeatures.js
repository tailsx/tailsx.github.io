import React from 'react';
import Headshot from './headshot';

const features = ['React', 'Tailwind', 'TypeScript', 'NextJS', 'ExpressJS', 'NodeJS'];

export default function DavidFeatures() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto py-8 px-4 bg-secondary">
      <div className="mb-4 lg:mb-0 lg:w-2/5">
        <Headshot />
      </div>
      
      <div className="flex flex-col lg:w-3/5">
        <h3 className="text-3xl font-bold text-center lg:text-left mb-4 text-primary">Introducing Your Next High-Impact Developer</h3>
        
        <div className="relative rounded-lg py-4 border-white text-base mb-4">
          <div className="grid grid-cols-2 gap-2 text-center">
            {features.map((feature, i) => (
              <span key={i} className="font-bold bg-accent text-accent-foreground p-2 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-primary">
          <p>Skills that get the job done, backed by experience.</p>
        </div>
      </div>
    </div>
  );
}
