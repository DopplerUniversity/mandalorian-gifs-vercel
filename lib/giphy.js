import { CONFIG } from './config'

class GIF {
    constructor(data) {
        this.url = data.url
        this.title = data.title
        this.rating = data.rating
        this.mp4 = data.mp4
        this.width = data.width
        this.height = data.height
    }

    toJSON() {
        let { url, title, rating, mp4, width, height } = this
        return { url, title, rating, mp4, width, height }
    }
}

async function getRandomGIF(id) {
    const response = await fetch(CONFIG.API_URL)
    const data = await response.json()
    return new GIF(data)
}

export { getRandomGIF, GIF }
