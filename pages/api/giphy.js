import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { GIF } from '../../lib/giphy'

class Cache {
    constructor(cache) {
        this.cache = cache || []
    }

    getGIF() {
        return this.cache[Math.floor(Math.random() * this.cache.length)]
    }

    addGIF(data) {
        if (this.cache.length <= 500) {
            this.cache.push(data)
        }
    }
}

const cache = new Cache(JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/gifs.json'), 'utf8')))

async function getRandomGIF(apiKey, tag, rating) {
    const gif = await (async () => {
        if (!apiKey) {
            console.error('[info]: GIPHY API key not set. Serving random cached response.')
            return Promise.resolve(cache.getGIF().data)
        }
        try {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=${rating}`
            )
            cache.getGIF(response.data)
            return response.data.data
        } catch (error) {
            console.error(`[error]: GIPHY API request failed: ${error}`)
            console.log('[info]: Serving random cached response')
            return Promise.resolve(this.cache.getGIF().data)
        }
    })()

    return new GIF({
        url: gif.url,
        title: gif.title,
        rating: gif.rating,
        mp4: gif.images.original_mp4.mp4,
        width: gif.images.original_mp4.width,
        height: gif.images.original_mp4.height,
    })
}

export default { getRandomGIF }
