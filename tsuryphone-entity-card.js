import { LitElement, html, css } from "https://unpkg.com/lit@3.1.0/index.js?module";

// Card constants
const CARD_CUSTOM_ELEMENT_NAME = "tsuryphone-entity-card";
const EDITOR_CUSTOM_ELEMENT_NAME = "tsuryphone-entity-card-editor";

// Version and info for HACS
const CARD_VERSION = "1.0.0";
const CARD_DESCRIPTION = "A comprehensive entity card for TsuryPhone devices with call controls, status monitoring, and configuration";

// Console message for debugging
console.info(
    `%c  TsuryPhone Entity Card  %c  v${CARD_VERSION}          `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray",
);

class TsuryPhoneEntityCard extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
      _activeTab: { type: String, state: true },
    };
  }

  static getConfigElement() {
    return document.createElement(EDITOR_CUSTOM_ELEMENT_NAME);
  }

  static getStubConfig() {
    return {
      type: `custom:${CARD_CUSTOM_ELEMENT_NAME}`,
      entity: "",
      name: "TsuryPhone Device",
    };
  }

  static getDescription() {
    return CARD_DESCRIPTION;
  }

  constructor() {
    super();
    this._activeTab = "status";
  }

  static styles = css`
    :host {
      display: block;
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(
        --ha-card-box-shadow,
        0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12)
      );
      overflow: hidden;
    }

    .card-header {
      padding: 16px;
      background: linear-gradient(
        135deg,
        var(--primary-color),
        var(--accent-color)
      );
      color: var(--text-primary-color);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .device-icon {
      font-size: 32px;
    }

    .device-info h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
    }

    .device-info .state {
      font-size: 14px;
      opacity: 0.9;
      margin-top: 4px;
    }

    .tabs {
      display: flex;
      background: var(--divider-color);
      overflow-x: auto;
    }

    .tab {
      padding: 12px 16px;
      background: none;
      border: none;
      color: var(--primary-text-color);
      cursor: pointer;
      white-space: nowrap;
      font-size: 14px;
      transition: all 0.2s;
      border-bottom: 2px solid transparent;
    }

    .tab.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
      background: var(--card-background-color);
    }

    .tab:hover {
      background: var(--secondary-background-color);
    }

    .tab-content {
      padding: 16px;
      min-height: 300px;
    }

    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }

    .status-item {
      padding: 12px;
      background: var(--secondary-background-color);
      border-radius: 8px;
      border-left: 4px solid var(--primary-color);
    }

    .status-item .label {
      font-size: 12px;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .status-item .value {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      word-break: break-all;
    }

    .status-item.call-active {
      border-left-color: var(--success-color);
      background: var(
        --success-color-background,
        var(--secondary-background-color)
      );
    }

    .status-item.maintenance {
      border-left-color: var(--warning-color);
      background: var(
        --warning-color-background,
        var(--secondary-background-color)
      );
    }

    .status-item.dnd-active {
      border-left-color: var(--error-color);
      background: var(
        --error-color-background,
        var(--secondary-background-color)
      );
    }

    .controls-section {
      margin-bottom: 24px;
    }

    .controls-section h3 {
      margin: 0 0 12px 0;
      font-size: 16px;
      color: var(--primary-text-color);
    }

    .controls-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 8px;
    }

    .control-button {
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .control-button:hover {
      background: var(--primary-color-dark, var(--primary-color));
      transform: translateY(-1px);
    }

    .control-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .control-button.secondary {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
    }

    .control-button.success {
      background: var(--success-color);
    }

    .control-button.warning {
      background: var(--warning-color);
    }

    .control-button.danger {
      background: var(--error-color);
    }

    .input-group {
      margin-bottom: 16px;
    }

    .input-group label {
      display: block;
      margin-bottom: 4px;
      font-size: 14px;
      color: var(--primary-text-color);
    }

    .input-group input,
    .input-group select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }

    .statistics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 12px;
    }

    .stat-card {
      text-align: center;
      padding: 16px;
      background: var(--secondary-background-color);
      border-radius: 8px;
    }

    .stat-card .icon {
      font-size: 24px;
      color: var(--primary-color);
      margin-bottom: 8px;
    }

    .stat-card .value {
      font-size: 24px;
      font-weight: bold;
      color: var(--primary-text-color);
      margin-bottom: 4px;
    }

    .stat-card .label {
      font-size: 12px;
      color: var(--secondary-text-color);
      text-transform: uppercase;
    }

    .config-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .config-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid var(--divider-color);
    }

    .config-item:last-child {
      border-bottom: none;
    }

    .config-label {
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .config-value {
      color: var(--secondary-text-color);
      font-family: monospace;
    }

    .error {
      color: var(--error-color);
      font-size: 14px;
      margin-top: 8px;
    }

    .success {
      color: var(--success-color);
      font-size: 14px;
      margin-top: 8px;
    }

    @media (max-width: 600px) {
      .status-grid,
      .controls-grid {
        grid-template-columns: 1fr;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  getCardSize() {
    return 8;
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const deviceName = this._getEntityState("device_name") || this.config.name || "TsuryPhone";
    const phoneState = this._getEntityState("state_name") || "Unknown";
    const callActive = this._getEntityState("call_active") === "True";
    const maintenanceMode = this._getEntityState("maintenance_mode") === "True";

    return html`
      <div class="card-header">
        <ha-icon class="device-icon" icon="mdi:phone"></ha-icon>
        <div class="device-info">
          <h2>${deviceName}</h2>
          <div class="state">
            ${phoneState}${callActive ? " - Call Active" : ""}
          </div>
        </div>
      </div>

      <div class="tabs">
        <button
          class="tab ${this._activeTab === "status" ? "active" : ""}"
          @click=${() => (this._activeTab = "status")}
        >
          Status
        </button>
        <button
          class="tab ${this._activeTab === "controls" ? "active" : ""}"
          @click=${() => (this._activeTab = "controls")}
        >
          Controls
        </button>
        <button
          class="tab ${this._activeTab === "config" ? "active" : ""}"
          @click=${() => (this._activeTab = "config")}
        >
          Configuration
        </button>
        <button
          class="tab ${this._activeTab === "stats" ? "active" : ""}"
          @click=${() => (this._activeTab = "stats")}
        >
          Statistics
        </button>
      </div>

      <div class="tab-content">
        ${this._activeTab === "status" ? this._renderStatusTab() : ""}
        ${this._activeTab === "controls" ? this._renderControlsTab() : ""}
        ${this._activeTab === "config" ? this._renderConfigTab() : ""}
        ${this._activeTab === "stats" ? this._renderStatsTab() : ""}
      </div>
    `;
  }

  _renderStatusTab() {
    const callActive = this._getEntityState("call_active") === "True";
    const dialing = this._getEntityState("dialing") === "True";
    const ringing = this._getEntityState("ringing") === "True";
    const maintenanceMode = this._getEntityState("maintenance_mode") === "True";
    const dndActive = this._getEntityState("dnd_active") === "True";
    const callNumber = this._getEntityState("call_number") || "None";
    const callWaiting = this._getEntityState("call_waiting") === "True";
    const uptime = this._formatUptime(this._getEntityState("uptime"));
    const freeHeap = this._formatBytes(this._getEntityState("free_heap"));
    const wifiRssi = this._getEntityState("wifi_rssi");

    return html`
      <div class="status-grid">
        <div class="status-item ${callActive ? "call-active" : ""}">
          <div class="label">Call Status</div>
          <div class="value">
            ${callActive
              ? "Active"
              : dialing
              ? "Dialing"
              : ringing
              ? "Ringing"
              : "Idle"}
          </div>
        </div>

        ${callActive || dialing
          ? html`
              <div class="status-item">
                <div class="label">Current Number</div>
                <div class="value">${callNumber}</div>
              </div>
            `
          : ""}
        ${callWaiting
          ? html`
              <div class="status-item">
                <div class="label">Call Waiting</div>
                <div class="value">
                  ${this._getEntityState("call_waiting_number") || "Yes"}
                </div>
              </div>
            `
          : ""}

        <div class="status-item ${maintenanceMode ? "maintenance" : ""}">
          <div class="label">Maintenance Mode</div>
          <div class="value">${maintenanceMode ? "Active" : "Inactive"}</div>
        </div>

        <div class="status-item ${dndActive ? "dnd-active" : ""}">
          <div class="label">Do Not Disturb</div>
          <div class="value">${dndActive ? "Active" : "Inactive"}</div>
        </div>

        <div class="status-item">
          <div class="label">Uptime</div>
          <div class="value">${uptime}</div>
        </div>

        <div class="status-item">
          <div class="label">Free Memory</div>
          <div class="value">${freeHeap}</div>
        </div>

        ${wifiRssi
          ? html`
              <div class="status-item">
                <div class="label">WiFi Signal</div>
                <div class="value">${wifiRssi} dBm</div>
              </div>
            `
          : ""}
      </div>
    `;
  }

  _renderControlsTab() {
    const callActive = this._getEntityState("call_active") === "True";
    const ringing = this._getEntityState("ringing") === "True";
    const callWaiting = this._getEntityState("call_waiting") === "True";

    return html`
      <div class="controls-section">
        <h3>Call Controls</h3>
        <div class="controls-grid">
          <button
            class="control-button success"
            @click=${this._dialNumber}
            ?disabled=${callActive}
          >
            <ha-icon icon="mdi:phone-dial"></ha-icon>
            Dial Number
          </button>

          <button
            class="control-button success"
            @click=${this._answerCall}
            ?disabled=${!ringing}
          >
            <ha-icon icon="mdi:phone"></ha-icon>
            Answer Call
          </button>

          <button
            class="control-button danger"
            @click=${this._hangupCall}
            ?disabled=${!callActive}
          >
            <ha-icon icon="mdi:phone-hangup"></ha-icon>
            Hangup
          </button>

          <button
            class="control-button"
            @click=${this._switchCallWaiting}
            ?disabled=${!callWaiting}
          >
            <ha-icon icon="mdi:phone-plus"></ha-icon>
            Switch Call
          </button>

          <button
            class="control-button secondary"
            @click=${this._dialQuickDial}
          >
            <ha-icon icon="mdi:phone-plus"></ha-icon>
            Quick Dial
          </button>

          <button class="control-button warning" @click=${this._ringPhone}>
            <ha-icon icon="mdi:phone-ring"></ha-icon>
            Ring Phone
          </button>
        </div>
      </div>

      <div class="controls-section">
        <h3>System Controls</h3>
        <div class="controls-grid">
          <button class="control-button" @click=${this._toggleMaintenanceMode}>
            <ha-icon icon="mdi:wrench"></ha-icon>
            ${this._getEntityState("maintenance_mode") === "True"
              ? "Exit"
              : "Enter"}
            Maintenance
          </button>

          <button class="control-button" @click=${this._toggleDND}>
            <ha-icon icon="mdi:phone-off"></ha-icon>
            ${this._getEntityState("dnd_active") === "True"
              ? "Disable"
              : "Enable"}
            DND
          </button>

          <button class="control-button secondary" @click=${this._refreshData}>
            <ha-icon icon="mdi:refresh"></ha-icon>
            Refresh Data
          </button>

          <button class="control-button danger" @click=${this._resetDevice}>
            <ha-icon icon="mdi:restart"></ha-icon>
            Reset Device
          </button>
        </div>
      </div>
    `;
  }

  _renderConfigTab() {
    return html`
      <div class="controls-section">
        <h3>Audio Configuration</h3>
        <div class="form-grid">
          <div class="input-group">
            <label>Earpiece Volume (1-7)</label>
            <input
              type="number"
              min="1"
              max="7"
              .value=${this._getEntityState("earpiece_volume") || 4}
              id="earpieceVolume"
            />
          </div>
          <div class="input-group">
            <label>Earpiece Gain (1-7)</label>
            <input
              type="number"
              min="1"
              max="7"
              .value=${this._getEntityState("earpiece_gain") || 4}
              id="earpieceGain"
            />
          </div>
          <div class="input-group">
            <label>Speaker Volume (1-7)</label>
            <input
              type="number"
              min="1"
              max="7"
              .value=${this._getEntityState("speaker_volume") || 4}
              id="speakerVolume"
            />
          </div>
          <div class="input-group">
            <label>Speaker Gain (1-7)</label>
            <input
              type="number"
              min="1"
              max="7"
              .value=${this._getEntityState("speaker_gain") || 4}
              id="speakerGain"
            />
          </div>
        </div>
        <button class="control-button" @click=${this._updateAudioConfig}>
          <ha-icon icon="mdi:volume-high"></ha-icon>
          Update Audio Settings
        </button>
      </div>

      <div class="controls-section">
        <h3>Do Not Disturb Schedule</h3>
        <div class="form-grid">
          <div class="input-group">
            <label>Start Time</label>
            <input
              type="time"
              .value=${this._getEntityState("dnd_start_time") || "22:00"}
              id="dndStartTime"
            />
          </div>
          <div class="input-group">
            <label>End Time</label>
            <input
              type="time"
              .value=${this._getEntityState("dnd_end_time") || "08:00"}
              id="dndEndTime"
            />
          </div>
        </div>
        <label>
          <input
            type="checkbox"
            ?checked=${this._getEntityState("dnd_scheduled") === "True"}
            id="dndScheduled"
          />
          Enable scheduled DND
        </label>
        <br /><br />
        <button class="control-button" @click=${this._updateDNDSchedule}>
          <ha-icon icon="mdi:clock-check"></ha-icon>
          Update DND Schedule
        </button>
      </div>

      <div class="controls-section">
        <h3>Quick Configuration</h3>
        <ul class="config-list">
          <li class="config-item">
            <span class="config-label">Ring Pattern</span>
            <span class="config-value"
              >${this._getEntityState("ring_pattern") || "Default"}</span
            >
          </li>
          <li class="config-item">
            <span class="config-label">Quick Dial Entries</span>
            <span class="config-value"
              >${this._getEntityState("quick_dial_entries") || "None"}</span
            >
          </li>
          <li class="config-item">
            <span class="config-label">Blocked Numbers</span>
            <span class="config-value"
              >${this._getEntityState("blocked_numbers_entries") ||
              "None"}</span
            >
          </li>
          <li class="config-item">
            <span class="config-label">Webhook Actions</span>
            <span class="config-value"
              >${this._getEntityState("webhook_actions_entries") ||
              "None"}</span
            >
          </li>
        </ul>
      </div>
    `;
  }

  _renderStatsTab() {
    return html`
      <div class="statistics-grid">
        <div class="stat-card">
          <div class="icon">📞</div>
          <div class="value">${this._getEntityState("total_calls") || 0}</div>
          <div class="label">Total Calls</div>
        </div>

        <div class="stat-card">
          <div class="icon">📥</div>
          <div class="value">
            ${this._getEntityState("incoming_calls") || 0}
          </div>
          <div class="label">Incoming</div>
        </div>

        <div class="stat-card">
          <div class="icon">📤</div>
          <div class="value">
            ${this._getEntityState("outgoing_calls") || 0}
          </div>
          <div class="label">Outgoing</div>
        </div>

        <div class="stat-card">
          <div class="icon">🚫</div>
          <div class="value">${this._getEntityState("blocked_calls") || 0}</div>
          <div class="label">Blocked</div>
        </div>

        <div class="stat-card">
          <div class="icon">⏱️</div>
          <div class="value">
            ${this._formatDuration(this._getEntityState("total_talk_time"))}
          </div>
          <div class="label">Talk Time</div>
        </div>

        <div class="stat-card">
          <div class="icon">🔄</div>
          <div class="value">${this._getEntityState("reset_count") || 0}</div>
          <div class="label">Resets</div>
        </div>
      </div>

      <div class="controls-section">
        <h3>Last Call Information</h3>
        <ul class="config-list">
          <li class="config-item">
            <span class="config-label">Last Call</span>
            <span class="config-value"
              >${this._getEntityState("last_call_formatted") ||
              "No calls"}</span
            >
          </li>
          <li class="config-item">
            <span class="config-label">Current Call Duration</span>
            <span class="config-value"
              >${this._formatDuration(
                this._getEntityState("current_call_duration")
              )}</span
            >
          </li>
        </ul>
      </div>
    `;
  }

  _getEntityState(key) {
    if (!this.config.entity) return null;
    
    // Try multiple naming patterns to find the entity
    const patterns = [
      `sensor.tsuryphone_${key}`,           // New prefixed pattern
      `sensor.${key}`,                      // Current generic pattern
    ];
    
    // If config.entity is provided, also try using it as a base
    if (this.config.entity) {
      const baseEntity = this.config.entity.replace(/^sensor\./, "");
      patterns.unshift(`sensor.${baseEntity}_${key}`);  // Try config-based pattern first
    }
    
    // Try each pattern until we find an existing entity
    for (const entityId of patterns) {
      const entity = this.hass.states[entityId];
      if (entity) {
        return entity.state;
      }
    }
    
    return null;
  }

  async _callService(service, data = {}) {
    try {
      await this.hass.callService("tsuryphone", service, data);
      this._showMessage(`${service} executed successfully`, "success");
    } catch (error) {
      this._showMessage(
        `Error executing ${service}: ${error.message}`,
        "error"
      );
    }
  }

  async _dialNumber() {
    const number = prompt("Enter phone number to dial:");
    if (number) {
      await this._callService("dial_number", { number });
    }
  }

  async _answerCall() {
    await this._callService("answer_call");
  }

  async _hangupCall() {
    await this._callService("hangup_call");
  }

  async _switchCallWaiting() {
    await this._callService("switch_call_waiting");
  }

  async _dialQuickDial() {
    const code = prompt("Enter quick dial code:");
    if (code) {
      await this._callService("dial_quick_dial", { code });
    }
  }

  async _ringPhone() {
    const pattern = prompt("Enter ring pattern (optional):");
    await this._callService("ring", pattern ? { pattern } : {});
  }

  async _toggleMaintenanceMode() {
    const enabled = this._getEntityState("maintenance_mode") !== "True";
    await this._callService("set_maintenance_mode", { enabled });
  }

  async _toggleDND() {
    const force = this._getEntityState("dnd_active") !== "True";
    await this._callService("set_dnd", { force });
  }

  async _refreshData() {
    await this._callService("refetch_data");
  }

  async _resetDevice() {
    if (
      confirm(
        "Are you sure you want to reset the device? This will restart the phone."
      )
    ) {
      await this._callService("reset_device");
    }
  }

  async _updateAudioConfig() {
    const earpieceVolume = parseInt(
      this.shadowRoot.getElementById("earpieceVolume").value
    );
    const earpieceGain = parseInt(
      this.shadowRoot.getElementById("earpieceGain").value
    );
    const speakerVolume = parseInt(
      this.shadowRoot.getElementById("speakerVolume").value
    );
    const speakerGain = parseInt(
      this.shadowRoot.getElementById("speakerGain").value
    );

    await this._callService("set_audio_config", {
      earpiece_volume: earpieceVolume,
      earpiece_gain: earpieceGain,
      speaker_volume: speakerVolume,
      speaker_gain: speakerGain,
    });
  }

  async _updateDNDSchedule() {
    const startTime = this.shadowRoot.getElementById("dndStartTime").value;
    const endTime = this.shadowRoot.getElementById("dndEndTime").value;
    const scheduled = this.shadowRoot.getElementById("dndScheduled").checked;

    const [startHour, startMinute] = startTime
      .split(":")
      .map((n) => parseInt(n));
    const [endHour, endMinute] = endTime.split(":").map((n) => parseInt(n));

    await this._callService("set_dnd", {
      scheduled,
      start_hour: startHour,
      start_minute: startMinute,
      end_hour: endHour,
      end_minute: endMinute,
    });
  }

  _formatUptime(seconds) {
    if (!seconds) return "Unknown";
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }

  _formatDuration(seconds) {
    if (!seconds || seconds === 0) return "0s";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  }

  _formatBytes(bytes) {
    if (!bytes) return "Unknown";
    const kb = bytes / 1024;
    const mb = kb / 1024;

    if (mb >= 1) return `${mb.toFixed(1)} MB`;
    return `${kb.toFixed(1)} KB`;
  }

  _showMessage(message, type) {
    // Create a temporary message element
    const messageEl = document.createElement("div");
    messageEl.className = type;
    messageEl.textContent = message;
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 16px;
      border-radius: 4px;
      color: white;
      background: ${
        type === "success" ? "var(--success-color)" : "var(--error-color)"
      };
      z-index: 10000;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(messageEl);
    setTimeout(() => {
      messageEl.remove();
    }, 3000);
  }
}

// Simple card editor for configuration
class TsuryPhoneEntityCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
    };
  }

  static styles = css`
    .card-config {
      padding: 16px;
    }

    .config-row {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }

    .config-row label {
      flex: 0 0 120px;
      margin-right: 12px;
      font-weight: 500;
    }

    .config-row input,
    .config-row ha-entity-picker {
      flex: 1;
    }

    .description {
      color: var(--secondary-text-color);
      font-size: 14px;
      margin-bottom: 16px;
    }
  `;

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div class="description">
          Configure your TsuryPhone entity card. Select the main TsuryPhone sensor entity.
        </div>
        <div class="config-row">
          <label for="entity">Entity:</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this.config.entity || ""}
            .configValue=${"entity"}
            @value-changed=${this._valueChanged}
            allow-custom-entity
            .includeFilter=${(entity) => entity.entity_id.startsWith("sensor.") && entity.entity_id.includes("tsuryphone")}
          ></ha-entity-picker>
        </div>
        <div class="config-row">
          <label for="name">Name:</label>
          <input
            type="text"
            .value=${this.config.name || ""}
            .configValue=${"name"}
            @input=${this._valueChanged}
            placeholder="TsuryPhone Device"
          />
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this.config || !this.hass) {
      return;
    }

    const target = ev.target;
    const configValue = target.configValue;
    const value = target.value;

    if (this.config[configValue] === value) {
      return;
    }

    const newConfig = { ...this.config };
    if (value === "") {
      delete newConfig[configValue];
    } else {
      newConfig[configValue] = value;
    }

    const event = new Event("config-changed", {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  setConfig(config) {
    this.config = config;
  }
}

// Define the editor element
customElements.define(EDITOR_CUSTOM_ELEMENT_NAME, TsuryPhoneEntityCardEditor);

// Register the card with Home Assistant following the official HACS plugin pattern
const windowWithCards = window;
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: CARD_CUSTOM_ELEMENT_NAME,
  name: "TsuryPhone Entity Card",
  description: CARD_DESCRIPTION,
  preview: false,
  documentationURL: "https://github.com/Tsury/ha-tsuryphone-frontend",
});

// Define the main card element
customElements.define(CARD_CUSTOM_ELEMENT_NAME, TsuryPhoneEntityCard);

console.info("✅ TsuryPhone Entity Card loaded and registered successfully!");
