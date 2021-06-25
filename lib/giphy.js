import { Config } from './config'

class GIF {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.title = data.title
    this.rating = data.rating
    this.mp4 = data.mp4
    this.width = data.width
    this.height = data.height
  }

  toJSON() {
    const { id, url, title, rating, mp4, width, height } = this
    return { id, url, title, rating, mp4, width, height }
  }
}

async function getRandomGIF() {
  /* eslint no-undef: "error" */
  const response = await fetch(Config.API_URL)
  const data = await response.json()
  return new GIF(data)
}

export { getRandomGIF, GIF }
