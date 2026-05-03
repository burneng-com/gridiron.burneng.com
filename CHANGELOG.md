# Changelog - Regulus English Playbook

All notable changes to this project will be documented in this file.

## [v20260503.1] - 2026-05-03

### Added
- ✅ CSV export support — exports word-level progress (learned/favorite/weak status per word) with BOM for CJK compatibility
- ✅ CSV import support — imports word progress from CSV with automatic word matching by name, skipped words reported
- ✅ E2E tests with Playwright — verifies page load, tab navigation, dark mode toggle, quiz flow, CSV export/import
- ✅ CHANGELOG.md — versioned change tracking
- ✅ Version system — semantic versioning with date-based tags (vYYYYMMDD.N)

### Previous (v1.0.0 - initial) - 2026-05-03
- Initial release with 5 learning modes
- 96 vocabulary words (76 NFL/football themed)
- 7 bonus features
- i18n (EN / zh-TW)
- Dark mode
- localStorage persistence
- JSON export/import
- Cloudflare Pages deployment
