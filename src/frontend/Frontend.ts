import { Config } from '../types/Config'

// Global or injected variable declarations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const moment: any

Module.register<Config>('MMM-OpenBirdhouse', {
  defaults: {
    updateIntervalInSeconds: 120,
    apiUrl: 'http://localhost'
  },

  getStyles() {
    return ['MMM-OpenBirdhouse.css']
  },

  getScripts: () => {
    return ['moment.js']
  },

  getTranslations() {
    return {
      en: 'translations/en.json',
      de: 'translations/de.json'
    }
  },

  getTemplate() {
    return 'templates/MMM-OpenBirdhouse.njk'
  },

  getTemplateData() {
    return {
      config: this.config,
      gallery: this.gallery,
      moment
    }
  },

  start() {
    this.loadData()
    this.scheduleUpdate()
    this.updateDom()
  },

  scheduleUpdate() {
    setInterval(() => {
      this.loadData()
    }, this.config.updateIntervalInSeconds * 1000)
  },

  loadData() {
    this.sendSocketNotification('OPENBIRDHOUSE_REQUEST', this.config)
  },

  socketNotificationReceived(notificationIdentifier: string, payload: unknown) {
    if (notificationIdentifier === 'OPENBIRDHOUSE_RESPONSE') {
      this.gallery = payload
      console.log('Gallery', payload)
      this.updateDom()
    }
  }
})
