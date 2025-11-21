export const translations = {
  en: {
    navbar: {
      logo: 'KumoMTA-UI',
      features: 'Features',
      gettingStarted: 'Getting Started',
      github: 'GitHub',
    },
    hero: {
      badges: {
        aiPowered: '🤖 AI-Powered',
        openSource: '🌟 Open Source',
        productionReady: '🚀 Production Ready',
      },
      mainTitle1: 'Modern Web UI for',
      mainTitle2: 'KumoMTA',
      subtitle: 'Powerful, responsive mail server management interface. Real-time monitoring, AI-enhanced search, and comprehensive queue management.',
      ctaGithub: 'Star on GitHub',
      ctaGetStarted: 'Get Started',
      descriptionLine1: 'Built for KumoMTA - Enterprise-class Open Source MTA',
      descriptionLine2: 'Independent project - Not affiliated with KumoMTA official organization',
    },
    features: {
      sectionTitle: 'Powerful Features',
      sectionSubtitle: 'Everything you need to manage your enterprise email infrastructure',
      items: [
        {
          icon: '🤖',
          title: 'AI-Powered Semantic Search',
          description: 'Natural language search powered by Claude 3.5 Sonnet, across emails, configs, and logs with real-time suggestions.',
          bgColor: 'bg-primary-50',
        },
        {
          icon: '📧',
          title: 'Mail Queue Management',
          description: 'Real-time dashboard with 8 key metrics, 9 mail lifecycle status tracking, and bulk queue operations.',
          bgColor: 'bg-accent-50',
        },
        {
          icon: '📊',
          title: 'Real-Time Monitoring',
          description: 'Live metrics display, 24-hour throughput charts, and performance KPI tracking for complete visibility.',
          bgColor: 'bg-purple-50',
        },
        {
          icon: '⚡',
          title: 'High Performance',
          description: 'Built with React 18, TypeScript, and Vite for blazing fast performance and optimal user experience.',
          bgColor: 'bg-yellow-50',
        },
        {
          icon: '📱',
          title: 'Offline-First Architecture',
          description: 'Responsive design with offline capabilities and full WCAG 2.1 accessibility compliance.',
          bgColor: 'bg-emerald-50',
        },
        {
          icon: '🗄️',
          title: 'Multi-Vector DB Support',
          description: 'Flexible integration with Faiss, Pinecone, Weaviate, and Qdrant for semantic search capabilities.',
          bgColor: 'bg-pink-50',
        },
      ],
      ctaTitle: 'Like what you see?',
      ctaSubtitle: 'Star the repository to show your support!',
      ctaButton: 'Star on GitHub',
    },
    techStack: {
      sectionTitle: 'Built with Modern Technology',
      sectionSubtitle: 'Leveraging cutting-edge tools and frameworks for reliability and performance',
      categories: [
        {
          category: 'Frontend Stack',
          icon: '💻',
          items: [
            'React 18.3 with TypeScript 5.5',
            'Vite 5.4 Lightning-fast Build',
            'TailwindCSS & Headless UI',
            'Zustand & TanStack Query',
          ],
        },
        {
          category: 'Testing & Quality',
          icon: '🧪',
          items: [
            'Vitest Unit Testing',
            'Playwright E2E Testing',
            'WCAG 2.1 Accessibility Compliance',
            'Production-Ready Architecture',
          ],
        },
        {
          category: 'AI Integration',
          icon: '🤖',
          items: [
            'OpenRouter API Integration',
            'Claude 3.5 Sonnet Semantic Search',
            'Multi-Vector Database Support',
            'Real-Time Natural Language Queries',
          ],
        },
        {
          category: 'Production Features',
          icon: '🚀',
          items: [
            'Optional PostgreSQL Support',
            'Redis Caching Capabilities',
            'Offline-First Design',
            'Fully Responsive Across Devices',
          ],
        },
      ],
    },
    gettingStarted: {
      sectionTitle: 'Get Started in Minutes',
      sectionSubtitle: 'Simple setup process to get your KumoMTA UI up and running',
      steps: [
        {
          number: '1',
          title: 'Prerequisites',
          description: 'Ensure you have the following installed:',
          items: [
            'Node.js 18.x or higher',
            'KumoMTA server with management API enabled',
            'Optional: PostgreSQL, Redis for production',
          ],
        },
        {
          number: '2',
          title: 'Clone & Install',
          code: `git clone https://github.com/smsvip/KumoMTA-Web
cd kumo-mta-ui
npm install`,
        },
        {
          number: '3',
          title: 'Configure',
          code: `cp .env.example .env
# Edit .env with your settings`,
        },
        {
          number: '4',
          title: 'Run',
          code: `npm run dev`,
          description: 'Access the UI at http://localhost:5173',
        },
      ],
      copyButton: 'Copy',
      ctaTitle: 'Love this project? Give it a star!',
      ctaSubtitle: 'Starring the repository helps the project grow and shows your support for open-source development.',
      ctaButtons: {
        starGithub: 'Star on GitHub',
        viewDocs: 'View Documentation',
        learnKumo: 'Learn About KumoMTA',
      },
    },
    footer: {
      logoTitle: 'KumoMTA-UI',
      about: 'Modern, powerful Web management interface for KumoMTA mail server.',
      quickLinks: {
        title: 'Quick Links',
        features: 'Features',
        gettingStarted: 'Getting Started',
        github: 'GitHub',
        kumoOfficial: 'KumoMTA Official',
      },
      support: {
        title: 'Support Open Source',
        description: 'KumoMTA-UI is free and open source. If you find it useful, please consider starring the repository on GitHub.',
        button: 'Give us a Star',
      },
      copyright: {
        line1: 'KumoMTA-UI. Independent open-source project, not affiliated with KumoMTA official.',
        line2: 'Built with React, TypeScript, and TailwindCSS with ❤️',
      },
    },
    language: {
      switchTo: 'Switch Language',
      en: 'EN',
      zh: '中',
    },
  },
  zh: {
    navbar: {
      logo: 'KumoMTA-UI',
      features: '功能特性',
      gettingStarted: '快速开始',
      github: 'GitHub',
    },
    hero: {
      badges: {
        aiPowered: '🤖 AI驱动',
        openSource: '🌟 开源',
        productionReady: '🚀 生产就绪',
      },
      mainTitle1: 'KumoMTA 的现代化',
      mainTitle2: 'Web 管理界面',
      subtitle: '强大、响应式的邮件服务器管理界面。实时监控、AI增强搜索和全面的队列管理。',
      ctaGithub: '在 GitHub 上加星',
      ctaGetStarted: '快速开始',
      descriptionLine1: '为 KumoMTA 构建 - 企业级开源 MTA',
      descriptionLine2: '独立项目 - 非 KumoMTA 官方组织附属',
    },
    features: {
      sectionTitle: '强大的功能',
      sectionSubtitle: '管理企业邮件基础设施所需的一切',
      items: [
        {
          icon: '🤖',
          title: 'AI驱动的语义搜索',
          description: '使用 Claude 3.5 Sonnet 支持的自然语言搜索,可跨邮件、配置和日志进行搜索,并提供实时建议。',
          bgColor: 'bg-primary-50',
        },
        {
          icon: '📧',
          title: '邮件队列管理',
          description: '实时仪表板提供8个关键指标、9种邮件生命周期状态跟踪和批量队列操作。',
          bgColor: 'bg-accent-50',
        },
        {
          icon: '📊',
          title: '实时监控',
          description: '实时指标显示、24小时吞吐量图表和性能KPI跟踪,实现完全可见性。',
          bgColor: 'bg-purple-50',
        },
        {
          icon: '⚡',
          title: '高性能',
          description: '基于 React 18、TypeScript 和 Vite 构建,提供极快的性能和最佳的用户体验。',
          bgColor: 'bg-yellow-50',
        },
        {
          icon: '📱',
          title: '离线优先架构',
          description: '响应式设计,支持离线功能和完全符合 WCAG 2.1 的无障碍访问。',
          bgColor: 'bg-emerald-50',
        },
        {
          icon: '🗄️',
          title: '多向量数据库支持',
          description: '灵活集成 Faiss、Pinecone、Weaviate 和 Qdrant,实现语义搜索功能。',
          bgColor: 'bg-pink-50',
        },
      ],
      ctaTitle: '喜欢您看到的内容吗?',
      ctaSubtitle: '给仓库加星以表示您的支持!',
      ctaButton: '在 GitHub 上加星',
    },
    techStack: {
      sectionTitle: '使用现代技术构建',
      sectionSubtitle: '利用前沿工具和框架,确保可靠性和性能',
      categories: [
        {
          category: '前端技术栈',
          icon: '💻',
          items: [
            'React 18.3 with TypeScript 5.5',
            'Vite 5.4 极速构建',
            'TailwindCSS & Headless UI',
            'Zustand & TanStack Query',
          ],
        },
        {
          category: '测试与质量',
          icon: '🧪',
          items: [
            'Vitest 单元测试',
            'Playwright E2E 测试',
            'WCAG 2.1 无障碍合规',
            '生产就绪架构',
          ],
        },
        {
          category: 'AI 集成',
          icon: '🤖',
          items: [
            'OpenRouter API 集成',
            'Claude 3.5 Sonnet 语义搜索',
            '多向量数据库支持',
            '实时自然语言查询',
          ],
        },
        {
          category: '生产功能',
          icon: '🚀',
          items: [
            '可选 PostgreSQL 支持',
            'Redis 缓存能力',
            '离线优先设计',
            '全设备响应式',
          ],
        },
      ],
    },
    gettingStarted: {
      sectionTitle: '几分钟内快速开始',
      sectionSubtitle: '简单的设置流程,让您的 KumoMTA UI 运行起来',
      steps: [
        {
          number: '1',
          title: '前置要求',
          description: '确保已安装以下内容:',
          items: [
            'Node.js 18.x 或更高版本',
            '启用管理 API 的 KumoMTA 服务器',
            '可选:PostgreSQL、Redis(用于生产环境)',
          ],
        },
        {
          number: '2',
          title: '克隆与安装',
          code: `git clone https://github.com/smsvip/KumoMTA-Web
cd kumo-mta-ui
npm install`,
        },
        {
          number: '3',
          title: '配置',
          code: `cp .env.example .env
# 使用您的设置编辑 .env`,
        },
        {
          number: '4',
          title: '运行',
          code: `npm run dev`,
          description: '在 http://localhost:5173 访问 UI',
        },
      ],
      copyButton: '复制',
      ctaTitle: '喜欢这个项目?给它加星!',
      ctaSubtitle: '为仓库加星有助于项目发展,并表明您对开源开发的支持。',
      ctaButtons: {
        starGithub: '在 GitHub 上加星',
        viewDocs: '查看文档',
        learnKumo: '了解 KumoMTA',
      },
    },
    footer: {
      logoTitle: 'KumoMTA-UI',
      about: 'KumoMTA 邮件服务器的现代化、强大的 Web 管理界面。',
      quickLinks: {
        title: '快速链接',
        features: '功能特性',
        gettingStarted: '快速开始',
        github: 'GitHub',
        kumoOfficial: 'KumoMTA 官网',
      },
      support: {
        title: '支持开源',
        description: 'KumoMTA-UI 是免费且开源的。如果您觉得有用,请考虑在 GitHub 上给仓库加星。',
        button: '给我们加星',
      },
      copyright: {
        line1: 'KumoMTA-UI. 独立开源项目,非 KumoMTA 官方附属。',
        line2: '使用 React、TypeScript 和 TailwindCSS 构建,充满 ❤️',
      },
    },
    language: {
      switchTo: '切换语言',
      en: 'EN',
      zh: '中',
    },
  },
};

