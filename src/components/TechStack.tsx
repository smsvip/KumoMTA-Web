import React from 'react';
import { useTranslation } from '../i18n';

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.techStack.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.techStack.sectionSubtitle}
          </p>
        </div>

        {/* 技术栈网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.techStack.categories.map((stack, index) => (
            <div
              key={index}
              className="p-10 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:border-primary-300 transition-all duration-300"
            >
              <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                <span className="text-5xl mr-4">{stack.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stack.category}
                </h3>
              </div>
              <ul className="space-y-4">
                {stack.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-gray-600"
                  >
                    <svg
                      className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
