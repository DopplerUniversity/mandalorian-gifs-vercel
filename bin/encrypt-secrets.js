import secrets from 'gitops-secrets'

try {
  secrets.encryptToFile('./lib/secrets.enc.js', secrets.providers.doppler.fetch(), { format: 'esm' })
} catch (error) {
  console.log(`Error encrypting secrets file: ${error}`)
  process.exit(1)
}
