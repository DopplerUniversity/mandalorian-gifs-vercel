import { CONFIG } from '../../lib/config'
import giphy from './giphy'

export default async function handler(req, res) {
    const gif = await giphy.getRandomGIF(CONFIG.GIPHY_API_KEY, CONFIG.GIPHY_TAG, CONFIG.GIPHY_RATING)
    res.status(200).json(gif)
}
