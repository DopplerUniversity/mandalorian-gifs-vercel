import Config from '../../lib/config'
import giphy from '../../lib/giphy-api'

export default async function handler(req, res) {
  const config = Config.load()
  const gif = await giphy.getRandomGIF(config.GIPHY_API_KEY, config.GIPHY_TAG, config.GIPHY_RATING)
  res.status(200).json(gif)
}
