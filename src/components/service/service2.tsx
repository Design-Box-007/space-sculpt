"use client";

import React from "react";

interface Service {
  heading: HeadingItem[];
  sections: SectionItem[];
  section2: Section2Item[];
}

interface HeadingItem {
  title?: string;
  description?: string[];
}

interface SectionItem {
  title?: string;
  header?: string;
  points?: string[];
  footer?: string;
}

interface Section2Item {
  title?: string;
  description?: string[];
}

const Services: React.FC<Service> = ({ heading, sections, section2 }) => {
  return (
    <div className="mx-auto px-5 space-y-5">
      {/* Heading Section */}
      {heading.map((item, idx) => (
        <div key={idx} className="space-y-2">
          {item.title && (
            <h2 className="text-2xl md:text-4xl font-semibold text-black font-cinzel">{item.title}</h2>
          )}
          {item.description?.map((desc, i) => (
            <p key={i} className="font-montserrat">
              {desc}
            </p>
          ))}
        </div>
      ))}

      {/* Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-3">
          {section.title && (
            <h3 className="text-2xl md:text-4xl font-semibold font-cinzel text-black">{section.title}</h3>
          )}
          {section.header && (
            <h3 className="text-lg md:text-xl font-cinzel text-black">{section.header}</h3>
          )}
          <ul>
            {section.points?.map((point, i) => (
              <li key={i} className="list-disc list-inside md:text-lg font-montserrat">
                {point}
              </li>
            ))}
          </ul>
          {section.footer && <p className="md:text-xl font-cinzel">{section.footer}</p>}
        </div>
      ))}

      {/* Section2 */}
      {section2.map((sec, idx) => (
        <div key={idx} className="space-y-2">
          {sec.title && (
            <h3 className="text-2xl md:text-4xl font-semibold font-cinzel text-black">{sec.title}</h3>
          )}
          {sec.description?.map((desc, i) => (
            <p key={i} className="font-montserrat md:text-xl">
              {desc}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Services;
