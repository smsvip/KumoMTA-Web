import React from 'react';
import { useTranslation } from '../i18n';

const GettingStarted: React.FC = () => {
  const { t } = useTranslation();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="getting-started" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.gettingStarted.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.gettingStarted.sectionSubtitle}
          </p>
        </div>

        {/* 步骤 */}
        <div className="space-y-8">
          {t.gettingStarted.steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-12 pb-8 border-l-4 border-gradient-to-b from-primary-400 to-accent-400 last:border-transparent"
              style={{
                borderImage: index < t.gettingStarted.steps.length - 1 ? 'linear-gradient(to bottom, rgb(129, 140, 248), rgb(34, 211, 238)) 1' : 'none'
              }}
            >
              {/* 步骤编号 */}
              <div className="absolute -left-8 top-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* 内容 */}
              <div className="ml-6 bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                {step.description && (
                  <p className="text-gray-600 mb-3">{step.description}</p>
                )}

                {step.items && (
                  <ul className="space-y-2 mb-4">
                    {step.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5"
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
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {step.code && (
                  <div className="relative group">
                    <pre className="bg-gray-900 text-gray-100 p-5 rounded-lg overflow-x-auto border border-gray-800">
                      <code className="text-sm font-mono">{step.code}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(step.code!)}
                      className="absolute top-3 right-3 px-3 py-1.5 bg-gray-700 hover:bg-primary-600 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 font-medium"
                    >
                      {t.gettingStarted.copyButton}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center shadow-xl">
          <p className="text-2xl font-bold mb-4">{t.gettingStarted.ctaTitle}</p>
          <p className="text-blue-100 mb-6 text-lg">
            {t.gettingStarted.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/smsvip/KumoMTA-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors border border-blue-500"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {t.gettingStarted.ctaButtons.starGithub}
            </a>
            <a
              href="https://github.com/smsvip/KumoMTA-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors border border-blue-500"
            >
              {t.gettingStarted.ctaButtons.viewDocs}
            </a>
            <a
              href="https://kumomta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors border border-blue-500"
            >
              {t.gettingStarted.ctaButtons.learnKumo}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
