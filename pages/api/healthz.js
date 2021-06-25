const HEALTH_RESPONSES = [
  'I can bring you in warm, or I can bring you in cold.',
  'I like those odds.',
  'I’m a Mandalorian. Weapons are part of my religion.',
  'Stop touching things.',
  'Bad news. You can’t live here anymore.',
  'She’s no good to us dead.',
  'Wherever I go, he goes.',
]

export default async function handler(req, res) {
  res.send(HEALTH_RESPONSES[Math.floor(Math.random() * HEALTH_RESPONSES.length)])
}
