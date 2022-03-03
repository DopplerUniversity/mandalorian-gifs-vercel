import secrets from 'gitops-secrets/vercel'
import cipherText from './secrets.enc'

let APP_CONFIG = null

class Config {
  constructor(env) {
    this.APP_URL = `${process.env.VERCEL_ENV === 'development' ? 'http' : 'https'}://${process.env.VERCEL_URL}`
    this.API_URL = `${this.APP_URL}/api`
    this.DOPPLER_PROJECT = env.DOPPLER_PROJECT
    this.DOPPLER_CONFIG = env.DOPPLER_CONFIG
    this.GIPHY_API_KEY = env.GIPHY_API_KEY !== 'null' ? env.GIPHY_API_KEY : ''
    this.GIPHY_TAG = env.GIPHY_TAG
    this.GIPHY_RATING = env.GIPHY_RATING
    this.DEBUG_CONFIG = env.DEBUG_CONFIG === 'yes'
    this.GIPHY_CACHE = env.GIPHY_CACHE ? JSON.parse(env.GIPHY_CACHE) : {}
  }

  static load() {
    return APP_CONFIG
  }
}

APP_CONFIG = (() => {
  const data = process.env.GITOPS_SECRETS_MASTER_KEY ? secrets.decryptJSON(cipherText) : process.env
  return new Config(data)
})()

export default Config
