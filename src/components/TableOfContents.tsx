
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
      .map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: parseInt(element.tagName.charAt(1)),
      }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-auto bg-white rounded-lg shadow-sm p-4">
      <div 
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2 className="text-lg font-semibold">Table of Contents</h2>
        {isCollapsed ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronUp className="w-5 h-5" />
        )}
      </div>
      {!isCollapsed && (
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className={`block py-1 text-sm transition-colors ${
                  activeId === heading.id
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default TableOfContents;
