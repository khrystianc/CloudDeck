# CloudDeck

CloudDeck is an Infrastructure-as-Code dashboard that lets developers launch full-stack environments using GitHub Codespaces, Docker, and GitHub Actions.

## Features

- Launch Flask + React templates with one click
- Automatically generate deployment configs
- Built-in CI/CD pipelines via GitHub Actions
- Works seamlessly on iPad, iPhone, or desktop

## Setup

```bash
# Run in Codespaces or locally
docker-compose up --build
```

## Project Structure

- `backend/` - Flask API
- `frontend/` - React UI
- `.devcontainer/` - Codespaces environment
- `.github/workflows/` - CI/CD

## License

MIT