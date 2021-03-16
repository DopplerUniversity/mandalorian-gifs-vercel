import _ from 'lodash'

class AppConfig {
    appURL() {
        const protocol = process.env.VERCEL_ENV === 'development' ? 'http' : 'https'
        return `${protocol}://${process.env.VERCEL_URL}`
    }

    apiURL() {
        return `${this.appURL()}/api`
    }

    constructor(env) {
        this.APP_URL = this.appURL().toString()
        this.API_URL = this.apiURL().toString()
        this.DOPPLER_PROJECT = process.env.DOPPLER_PROJECT
        this.DOPPLER_CONFIG = process.env.DOPPLER_CONFIG
        this.GIPHY_API_KEY = process.env.GIPHY_API_KEY
        this.GIPHY_TAG = process.env.GIPHY_TAG
        this.GIPHY_RATING = process.env.GIPHY_RATING
    }
}

const CONFIG = new AppConfig(process.env)
export { AppConfig, CONFIG }
