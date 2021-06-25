import axios from 'axios'
import { GIF } from './giphy'
import log from './logger'
import gifs from './gifs'

class GIFCache {
  constructor(cache) {
    this.cache = cache || {}
    this.ids = []

    cache.forEach(gif => {
      this.cache[gif.id] = gif
      this.ids.push(gif.id)
    })
  }

  getRandom() {
    return this.cache[Math.floor(Math.random() * this.ids.length)]
  }

  add(gif) {
    this.cache[gif.id] = gif
    this.ids.push(gif.id)
  }
}

const cache = new GIFCache(gifs)

async function getRandomGIF(apiKey, tag, rating) {
  if (!apiKey) {
    log.app('GIPHY API key not set. Serving random cached response.')
    return cache.getRandom()
  }
  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=${rating}`
    )
    const gif = new GIF({
      id: response.data.data.id,
      url: response.data.data.url,
      title: response.data.data.title,
      rating: response.data.data.rating,
      mp4: response.data.data.images.original_mp4.mp4,
      width: response.data.data.images.original_mp4.width,
      height: response.data.data.images.original_mp4.height,
    })
    cache.add(gif)
    return gif
  } catch (error) {
    log.error(`GIPHY API request failed: ${error}`, 'Serving random cached response')
    return cache.getRandom()
  }
}

export default { getRandomGIF }
