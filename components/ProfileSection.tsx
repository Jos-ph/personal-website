import React from 'react';
import { PERSONAL_INFO, CAREER, STACK, SOCIALS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <section className="mb-16 animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <img 
          src={PERSONAL_INFO.avatar} 
          alt={PERSONAL_INFO.name} 
          className="w-20 h-20 rounded-2xl object-cover shadow-sm ring-4 ring-white"
        />
        <div>
          <h1 className="text-3xl font-bold text-stone-900 tracking-tight mb-2">
            Hey 👋 I'm {PERSONAL_INFO.name}
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-lg">
            {PERSONAL_INFO.headline}
          </p>
        </div>
      </div>

      <div className="space-y-6 text-stone-600">
        {/* Career Status */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-base">
          <span>Currently {CAREER.find(c => c.current)?.role} at</span>
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-stone-200 rounded-lg shadow-sm">
            <div className={`w-4 h-4 rounded-full ${CAREER.find(c => c.current)?.logoColor}`} />
            <span className="font-semibold text-stone-900">{CAREER.find(c => c.current)?.company}</span>
          </div>
          <span className="text-stone-400">previously</span>
          <div className="inline-flex items-center gap-2">
            {CAREER.filter(c => !c.current).map((career, index) => (
              <React.Fragment key={career.company}>
                {career.logoUrl ? (
                  <div
                    className="inline-flex items-center justify-center p-1.5 rounded-lg shadow-sm border border-stone-200"
                    style={{ backgroundColor: career.bgColor || '#FFFFFF' }}
                  >
                    <img
                      src={career.logoUrl}
                      alt={career.company}
                      className="h-4 w-4 object-contain"
                    />
                  </div>
                ) : (
                  <span className="font-medium text-stone-500">{career.company}</span>
                )}
                {index < CAREER.filter(c => !c.current).length - 1 && (
                  <span className="text-stone-400">and</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap items-center gap-3">
          <span>I build apps with</span>
          <div className="flex gap-2">
            {STACK.map((tech) => (
              <div
                key={tech.name}
                className="p-1.5 rounded-lg shadow-sm hover:border-orange-200 transition-colors cursor-default border border-stone-200"
                style={{ backgroundColor: tech.bgColor }}
                title={tech.name}
              >
                <img
                  src={tech.logoUrl}
                  alt={tech.name}
                  className="w-4 h-4 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Socials Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span>Follow along on</span>
          <div className="flex gap-2">
            {SOCIALS.filter(s => ['GitHub', 'LinkedIn'].includes(s.platform)).map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="group flex items-center gap-1.5 px-3 py-1 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm font-medium"
              >
                <social.icon size={14} />
                <span>{social.platform}</span>
                <ArrowUpRight size={12} className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;