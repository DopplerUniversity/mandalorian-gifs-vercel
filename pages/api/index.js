import { Config } from '../../lib/config'
import giphy from '../../lib/giphy-api'

export default async function handler(req, res) {
  const gif = await giphy.getRandomGIF(Config.GIPHY_API_KEY, Config.GIPHY_TAG, Config.GIPHY_RATING)
  res.status(200).json(gif)
}
