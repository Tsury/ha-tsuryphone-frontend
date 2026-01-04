# TsuryPhone Card

A custom Home Assistant Lovelace card for managing calls with the TsuryPhone integration.

## Features

### 📞 Call Management
- **Home Tab**: View call history with filters (All, Missed, Outgoing, Incoming)
- **Keypad Tab**: Dial numbers directly with an interactive keypad
- **Contacts Tab**: Manage quick dial contacts with priority settings
- **Blocked Numbers**: Block unwanted callers

### 🎨 Modern UI
- Clean, intuitive interface optimized for mobile and desktop
- Full light and dark mode support
- Smooth animations and haptic feedback
- Sticky search bar for easy contact filtering
- Priority badges on frequently called contacts

### 🔧 Smart Features
- Frequent contacts section showing your most called numbers
- Grouped call history by time periods
- Contact search and filtering
- Priority caller management
- Call duration tracking
- Incoming call notifications with swipe-to-answer

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to "Frontend"
3. Click the "+" button
4. Search for "TsuryPhone Card"
5. Click "Download"
6. Restart Home Assistant

### Manual Installation

1. Download `tsuryphone-card.js` from the [latest release](https://github.com/Tsury/ha-tsuryphone-frontend/releases)
2. Copy it to your `config/www` folder
3. Add the resource in your Lovelace configuration:
   ```yaml
   resources:
     - url: /local/tsuryphone-card.js
       type: module
   ```
4. Restart Home Assistant

## Configuration

Add the card to your Lovelace dashboard:

```yaml
type: custom:tsuryphone-card
entity: sensor.tsuryphone_phone_state
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **Required** | The TsuryPhone sensor entity ID |
| `device_id` | string | `tsuryphone` | The device ID for the TsuryPhone integration |
| `name` | string | - | Optional card title |

## Requirements

- Home Assistant 2023.1.0 or newer
- [TsuryPhone integration](https://github.com/Tsury/ha-tsuryphone) installed and configured

## Support

For issues, feature requests, or questions:
- [GitHub Issues](https://github.com/Tsury/ha-tsuryphone-frontend/issues)
- [Home Assistant Community](https://community.home-assistant.io/)

## Credits

Developed by [Tsury](https://github.com/Tsury)

## License

MIT License - see LICENSE file for details
