import React from 'react';
import { useTranslation } from '../i18n';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          {/* 标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              {t.hero.badges.aiPowered}
            </span>
            <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              {t.hero.badges.openSource}
            </span>
            <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              {t.hero.badges.productionReady}
            </span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            {t.hero.mainTitle1}
            <br />
            <span className="gradient-text">{t.hero.mainTitle2}</span>
          </h1>

          {/* 副标题 */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ lineHeight: '1.6' }}>
            {t.hero.subtitle}
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="https://github.com/smsvip/KumoMTA-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {t.hero.ctaGithub}
            </a>
            <button
              onClick={() => document.querySelector('#getting-started')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3.5 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300"
            >
              {t.hero.ctaGetStarted}
            </button>
          </div>

          {/* 说明文字 */}
          <div className="text-sm text-gray-500 space-y-1">
            <p className="font-medium">{t.hero.descriptionLine1}</p>
            <p className="text-xs">{t.hero.descriptionLine2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
