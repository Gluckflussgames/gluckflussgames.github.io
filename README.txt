Glückfluss Games — publisher website
===================================

Live site: https://gluckflussgames.github.io/
Repository: https://github.com/Gluckflussgames/gluckflussgames.github.io

Requirements
  Node.js 22.13 or later and npm.

Development
  npm ci
  npm run dev
  Open http://127.0.0.1:5173/

Checks
  npm run format:check
  npm run typecheck
  npm run build

Publishing
  Push to main. GitHub Actions builds the static export in out/ and deploys it
  to the organization's GitHub Pages site. No application server is required.

Organization
  app/                         Routes, metadata, and styles
  components/                  Shared navigation, language controls, and icons
  features/publisher/          Publisher introduction and game catalog
  features/war-effort/         War Effort presentation
  features/bulicho-de-campanha/ Bulicho de Campanha guide and gameplay gallery
  lib/i18n/                    English and Portuguese translations
  public/assets/brand/        Publisher logos
  public/assets/fonts/        Self-hosted fonts and their license notices
  public/assets/war-effort/    War Effort images and introduction
  public/assets/bulicho-de-campanha/  Selected development footage and images

Languages
  EN and PT are available on every page. The site initially follows the browser
  language, falling back to English, and remembers the visitor's selection.
  Gameplay footage and game logos retain their original language.

Local-only material
  Original Discord downloads, conversation history, credentials, local notes,
  and generated build output are ignored by Git. Selected web media lives in
  public/assets/. Do not move private channel context into public/.
