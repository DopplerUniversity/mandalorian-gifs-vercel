import log from './logger'

class AppConfig {
  constructor(env) {
    this.APP_URL = `${process.env.VERCEL_ENV === 'development' ? 'http' : 'https'}://${process.env.VERCEL_URL}`
    this.API_URL = `${this.APP_URL}/api`
    this.DOPPLER_PROJECT = env.DOPPLER_PROJECT
    this.DOPPLER_CONFIG = env.DOPPLER_CONFIG
    this.GIPHY_API_KEY = env.GIPHY_API_KEY
    this.GIPHY_TAG = env.GIPHY_TAG
    this.GIPHY_RATING = env.GIPHY_RATING
    this.DEBUG_CONFIG = env.DEBUG_CONFIG === 'yes'
  }
}

const Config = new AppConfig(process.env)
log.app('App Config and Secrets')
log.table(Config)
export { AppConfig, Config }
