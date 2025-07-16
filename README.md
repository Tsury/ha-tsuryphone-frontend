# TsuryPhone Entity Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub Release][releases-shield]][releases]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE)

A comprehensive Lovelace entity card for TsuryPhone devices providing call controls, status monitoring, configuration management, and statistics display.

## Features

- **📞 Call Controls**: Dial, answer, hangup, and switch calls
- **📊 Real-time Status**: Monitor call state, device status, and system health
- **⚙️ Configuration**: Audio settings, DND schedules, and quick configuration
- **📈 Statistics**: Call history, talk time, and device metrics
- **📱 Responsive Design**: Optimized for desktop and mobile

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to "Frontend" tab
3. Click the "+" button
4. Search for "TsuryPhone Entity Card"
5. Install the card
6. Add the card to your dashboard

### Manual Installation

1. Download `tsuryphone-entity-card.js` from the [latest release](https://github.com/Tsury/ha-tsuryphone-frontend/releases)
2. Copy the file to `<config>/www/community/tsuryphone-entity-card/`
3. Add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /hacsfiles/tsuryphone-entity-card/tsuryphone-entity-card.js
    type: module
```

## Usage

### Basic Configuration

```yaml
type: custom:tsuryphone-entity-card
entity: sensor.tsuryphone_device
name: "My TsuryPhone"
```

### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `entity` | string | yes | - | The TsuryPhone sensor entity |
| `name` | string | no | "TsuryPhone Device" | Display name for the card |

### Example Card Configuration

```yaml
type: custom:tsuryphone-entity-card
entity: sensor.my_tsuryphone
name: "Office Phone"
```

## Card Features

### Status Tab
- Call status (Active, Dialing, Ringing, Idle)
- Current/waiting call numbers
- Maintenance and DND modes
- System uptime and memory usage
- WiFi signal strength

### Controls Tab
- **Call Controls**: Dial number, answer, hangup, switch calls
- **Quick Actions**: Quick dial, ring phone
- **System Controls**: Toggle maintenance mode, DND, refresh data, reset device

### Configuration Tab
- **Audio Settings**: Earpiece/speaker volume and gain (1-7)
- **DND Schedule**: Set start/end times and enable scheduling
- **Quick Config**: View ring patterns, quick dial entries, blocked numbers

### Statistics Tab
- Call counters (total, incoming, outgoing, blocked)
- Total talk time
- Device reset count
- Last call information

## Requirements

- Home Assistant 2023.1 or newer
- [TsuryPhone Integration](https://github.com/Tsury/ha-tsuryphone) installed and configured
- A configured TsuryPhone device

## Compatibility

This card is designed to work with the TsuryPhone Home Assistant integration. Make sure you have:

1. The TsuryPhone integration installed from HACS
2. A TsuryPhone device properly configured
3. The main sensor entity available in Home Assistant

## Support

- [Issues](https://github.com/Tsury/ha-tsuryphone-frontend/issues)
- [Discussions](https://github.com/Tsury/ha-tsuryphone-frontend/discussions)
- [TsuryPhone Integration](https://github.com/Tsury/ha-tsuryphone)

## Screenshots

<!-- Add screenshots here when available -->

## Development

### Building from Source

```bash
git clone https://github.com/Tsury/ha-tsuryphone-frontend.git
cd ha-tsuryphone-frontend
# The card is pure JavaScript, no build process needed
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with your Home Assistant instance
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [RELEASES](https://github.com/Tsury/ha-tsuryphone-frontend/releases) for version history.

[commits-shield]: https://img.shields.io/github/commit-activity/y/Tsury/ha-tsuryphone-frontend.svg
[commits]: https://github.com/Tsury/ha-tsuryphone-frontend/commits/main
[license-shield]: https://img.shields.io/github/license/Tsury/ha-tsuryphone-frontend.svg
[releases-shield]: https://img.shields.io/github/release/Tsury/ha-tsuryphone-frontend.svg
[releases]: https://github.com/Tsury/ha-tsuryphone-frontend/releases
