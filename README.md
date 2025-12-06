# AnirudhLabs Portfolio Site

Full-stack portfolio website for www.anirudhlabs.in built with Next.js frontend and Strapi CMS, deployed to Google Cloud Run.

## Architecture

- **Frontend**: Next.js 14+ with TypeScript, Tailwind CSS, and MDX support
- **CMS**: Strapi headless CMS for content management
- **Database**: Cloud SQL (PostgreSQL) for Strapi data
- **Storage**: Google Cloud Storage for media uploads
- **Deployment**: Google Cloud Run
- **CI/CD**: GitHub Actions + Cloud Build
- **Automation**: n8n workflows for social media automation

## Project Structure

```
.
├── frontend/          # Next.js frontend application
├── cms/              # Strapi CMS application
├── .github/
│   └── workflows/    # CI/CD workflows
├── docs/             # Project documentation
└── docker-compose.yml # Local development setup
```

## Getting Started

### Local Development

1. Clone the repository
2. Start services with Docker Compose:
   ```bash
   docker-compose up
   ```
3. Access:
   - Frontend: http://localhost:3000
   - Strapi Admin: http://localhost:1337/admin

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Google Cloud SDK (for deployment)
- GCP project with billing enabled

## Deployment

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed deployment instructions.

## Development Workflow

1. Create feature branch from `dev`
2. Make changes and test locally
3. Create PR to `dev` branch
4. After review, merge to `dev`
5. Deploy to staging
6. After approval, merge `dev` → `main` for production deployment

## License

MIT License - see [LICENSE](./LICENSE) file for details.

