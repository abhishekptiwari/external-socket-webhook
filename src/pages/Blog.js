import React from 'react';
import SectionHeader from '../components/SectionHeader';

const posts = [
  {
    title: 'How external client teams stay agile',
    date: 'Mar 12, 2024',
    description: 'Tips for keeping delivery velocity high while managing stakeholders.',
  },
  {
    title: 'Design systems that scale with clients',
    date: 'Feb 05, 2024',
    description: 'How we build reusable UI libraries for multi-project teams.',
  },
  {
    title: 'Launching MVPs in 6 weeks',
    date: 'Jan 22, 2024',
    description: 'Our blueprint for rapid discovery and lean product delivery.',
  },
];

function Blog() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Blog"
          title="Insights for client-focused product teams"
          subtitle="Playbooks, stories, and delivery lessons from external client work."
        />
        <div className="grid grid--3">
          {posts.map((post) => (
            <div key={post.title} className="glass-card">
              <span className="post-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button className="text-link" type="button">Read more →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
