# TsuryPhone Card - Frontend

A modern, feature-rich Home Assistant Lovelace card for the TsuryPhone integration. This repository contains the frontend TypeScript/Lit-based custom card component.

## 🎯 Project Overview

This card provides a complete phone management interface within Home Assistant, including:
- Call history with filtering and grouping
- Interactive keypad for dialing
- Contact management with quick dial
- Blocked number management
- Incoming call handling with swipe-to-answer UI
- Priority caller badges
- Full light/dark mode support

## 🏗️ Architecture

### Tech Stack
- **TypeScript** - Type-safe development
- **Lit** - Lightweight web components
- **Rollup** - Module bundler
- **Home Assistant** - Integration platform

### Project Structure
```
src/
├── components/          # UI Components
│   ├── blocked/        # Blocked numbers view
│   ├── contacts/       # Contacts management
│   ├── home/          # Call history & dashboard
│   ├── keypad/        # Dialing interface
│   ├── modals/        # Modal dialogs
│   ├── navigation/    # Bottom navigation
│   └── shared/        # Reusable components
├── styles/            # Shared CSS & theming
├── types/             # TypeScript definitions
└── utils/             # Helper functions

.github/workflows/     # CI/CD automation
```

## 🛠️ Development

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- Home Assistant instance with TsuryPhone integration

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Tsury/ha-tsuryphone-frontend.git
cd ha-tsuryphone-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Build the card:
```bash
npm run build
```

4. For development with watch mode:
```bash
npm run dev
```

### Development Workflow

The build output (`dist/tsuryphone-card.js`) can be copied to your Home Assistant `config/www/` directory for testing.

For rapid development:
1. Run `npm run dev` to enable watch mode
2. Copy `dist/tsuryphone-card.js` to your HA instance
3. Hard refresh your browser (Ctrl+Shift+R) after changes
4. Enable debug logging in browser console for troubleshooting

## 📦 Building & Releasing

### Automated Releases

This repository uses GitHub Actions for automated releases:

1. **On every push to `main`**:
   - Version is auto-bumped (patch)
   - Code is built and bundled
   - Release package is created
   - GitHub release is published
   - Tag is created

2. **Skip auto-release**: Add `[skip-release]` to your commit message

3. **Manual release**: Bump version in `package.json` and push

### Manual Build

```bash
npm run build
```

Output files:
- `dist/tsuryphone-card.js` - Bundled card
- `dist/tsuryphone-card.js.map` - Source map

## 🧪 Code Quality

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript strict mode is enabled for type safety.

## 🎨 Styling Guidelines

- Use Home Assistant CSS variables for theming
- Support both light and dark modes
- Follow Material Design principles
- Ensure mobile responsiveness
- Use semantic color variables (`--primary-color`, `--error-color`, etc.)

Example:
```css
background: var(--card-background-color);
color: var(--primary-text-color);
box-shadow: var(--ha-card-box-shadow);
```

## 🔌 Integration with Backend

This card requires the [TsuryPhone integration](https://github.com/Tsury/ha-tsuryphone) to be installed and configured in Home Assistant.

**Entity Requirements:**
- `sensor.{device_id}_phone_state` - Main phone state entity
- Attributes include: call history, contacts, blocked numbers, etc.

**Services Used:**
- `tsuryphone.dial` - Initiate calls
- `tsuryphone.answer` - Answer incoming calls
- `tsuryphone.hangup` - End calls
- `tsuryphone.add_contact` - Add quick dial contact
- `tsuryphone.block_number` - Block caller

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure code builds and passes linting
5. Commit with descriptive messages
6. Push to your fork
7. Open a Pull Request

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test additions/changes
- `chore:` - Build process or auxiliary tool changes

## 🐛 Debugging

Enable verbose logging in browser console:
```javascript
localStorage.setItem('tsuryphone-debug', 'true');
```

Common issues:
- **Card not loading**: Check browser console for errors
- **Entity not found**: Verify TsuryPhone integration is installed
- **Styles broken**: Hard refresh browser cache
- **Haptic feedback not working**: Check device/browser support

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🔗 Related Projects

- [TsuryPhone Integration](https://github.com/Tsury/ha-tsuryphone) - Backend custom component
- [TsuryPhone Hardware](https://github.com/Tsury/TsuryPhone) - ESP32-based phone hardware

## 👤 Author

**Tsury**
- GitHub: [@Tsury](https://github.com/Tsury)

## 🙏 Acknowledgments

- Home Assistant community
- Lit framework contributors
- All users and testers

---

**For end-user installation and usage instructions, see [info.md](info.md)**
