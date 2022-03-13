import * as NodeHelper from 'node_helper'
import fetch from 'node-fetch'
import { Config } from '../types/Config'

module.exports = NodeHelper.create({
  start() {
    console.log(`${this.name} helper method started...`)
  },

  async socketNotificationReceived(notification: string, payload: unknown) {
    if (notification === 'OPENBIRDHOUSE_REQUEST') {
      try {
        const config = payload as Config
        const response = await fetch(`${config.apiUrl}/api/gallery`)
        if (!response.ok) {
          throw Error(`API Request error`)
        }
        const gallery = await response.json()
        this.sendSocketNotification('OPENBIRDHOUSE_RESPONSE', gallery)
      } catch (err) {
        console.error(err.message)
        this.sendSocketNotification('OPENBIRDHOUSE_ERROR_RESPONSE', {
          type: 'WARNING',
          message: err.message
        })
      }
    } else {
      console.warn(`${notification} is invalid notification`)
    }
  }
})
