import React from 'react';
import { SOCIALS } from '../constants';
import { Card } from './ui/Card';
import { Mail } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const email = SOCIALS.find(s => s.platform === 'Email');

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold text-stone-900">Wanna chat?</h2>
        <Mail className="w-5 h-5 text-orange-500" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {SOCIALS.map((social) => (
          <Card key={social.platform} href={social.url} className="!p-4 flex flex-col items-center justify-center gap-2 hover:!border-orange-200 group">
            <social.icon className="w-6 h-6 text-stone-400 group-hover:text-stone-800 transition-colors" />
            <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900">{social.platform}</span>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;