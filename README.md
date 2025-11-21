# KumoMTA-UI

A modern, responsive web interface for managing KumoMTA email servers. Real-time monitoring, AI-enhanced search, and comprehensive queue management.

## Features

- **AI-Powered Semantic Search**: Natural language search across emails, configurations, and logs powered by Claude 3.5 Sonnet with real-time suggestions.
- **Email Queue Management**: Real-time dashboard with 8 key metrics, 9-state email lifecycle tracking, and bulk queue operations.
- **Real-Time Monitoring**: Live metrics display, 24-hour throughput charts, and performance KPI tracking for complete visibility.
- **High Performance**: Built with React 18, TypeScript, and Vite for lightning-fast performance and optimal user experience.
- **Offline-First Architecture**: Responsive design with offline capabilities and full WCAG 2.1 accessibility compliance.
- **Multiple Vector DB Support**: Flexible integration with Faiss, Pinecone, Weaviate, and Qdrant for semantic search capabilities.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Testing**: Vitest (unit), Playwright (E2E)
- **AI Integration**: OpenRouter API, Claude 3.5 Sonnet

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- KumoMTA Server with admin API enabled
- Optional: PostgreSQL, Redis (for production)

### Installation

```bash
# Clone the repository
git clone https://github.com/smsvip/KumoMTA-Web.git

cd KumoMTA-Web

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── assets/         # Static assets
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this project useful, please consider giving it a star on GitHub!
