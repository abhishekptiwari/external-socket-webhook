import React from 'react';

function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeader;
