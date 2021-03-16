import Head from 'next/head'
import { CONFIG } from '../lib/config'
import { getRandomGIF } from '../lib/giphy'

const title = 'Mandalorion GIFs'
export default function Index({ gif, config }) {
    return (
        <div className="page-container text-center text-white bg-dark">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Ryan Blunden" />
                <meta name="description" content="Mandalorian GIF Generator" />
                <title>{title}</title>
                <meta name="theme-color" content="#7952b3" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                    crossOrigin="anonymous"
                />
                <meta property="og:image" content={`${CONFIG.APP_URL}/images/og-image.jpg`} />
                <meta name="og:title" content={title} />
                <meta name="twitter:card" content={`${CONFIG.APP_URL}/images/og-image.jpg`} />

                <link rel="shortcut icon" href="/images/doppler-fav-icon-logo.png" />
                <link rel="icon" type="image/png" href="/images/doppler-fav-icon-logo.png" />
            </Head>

            <header>
                <div className="container pb-2">
                    <div className="row justify-content-center">
                        <div className="col text-center">
                            <a href="https://doppler.com" target="_blank" className="d-block pt-5">
                                <img src="/images/doppler-logo.png" className="doppler-logo" />
                            </a>
                            <img src="/images/mandalorion-logo.png" className="d-block mx-auto mt-4 logo img img-fluid" />
                            <h1 className="mt-2 mb-0 text-uppercase h5">
                                <span className="sr-only">Mandalorian</span>GIF Generator
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <video
                                width={gif.width}
                                height={gif.height}
                                className="mt-5 shadow-lg rounded position-relative"
                                muted
                                autoPlay
                                loop
                            >
                                <source src={gif.mp4} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="container mt-3 text-white-50">
                    <div className="mt-5 row justify-content-center">
                        <div className="col-5">
                            <h2 className="h5 mb-3 text-white border-bottom pb-1">App Config & Secrets</h2>
                            {!config.DOPPLER_PROJECT && !config.DOPPLER_CONFIG && (
                                <p className="small alert alert-dark" role="alert">
                                    Doppler secrets sync not active.{' '}
                                    <a href="https://docs.doppler.com/docs/vercel" target="_blank">
                                        Set up now!
                                    </a>
                                </p>
                            )}
                            <table className="small table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Key</th>
                                        <th scope="col">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {config.DOPPLER_PROJECT && config.DOPPLER_CONFIG && (
                                        <>
                                            <tr>
                                                <th scope="row">Doppler Project</th>
                                                <td>{config.DOPPLER_PROJECT}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Doppler Config</th>
                                                <td>{config.DOPPLER_CONFIG}</td>
                                            </tr>
                                        </>
                                    )}
                                    <tr>
                                        <th scope="row">GIPHY API Key</th>
                                        <td>
                                            {config.GIPHY_API_KEY_SET ? (
                                                <>yes</>
                                            ) : (
                                                <>
                                                    No<sup>*</sup> (
                                                    <a
                                                        href="https://developers.giphy.com/docs/api/#quick-start-guide"
                                                        className="text-white"
                                                        target="_blank"
                                                    >
                                                        Create one here
                                                    </a>
                                                    )
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GIPHY Tag</th>
                                        <td>{config.GIPHY_TAG}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GIPHY Rating</th>
                                        <td>{config.GIPHY_RATING}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {!config.GIPHY_API_KEY_SET && (
                        <p>
                            <sup>*</sup> Showing GIFS from pre-cached API responses
                        </p>
                    )}

                    <p className="small mt-5">
                        Powered by{' '}
                        <a href="https://giphy.com/search/mandalorian" className="text-white" target="_blank">
                            GIPHY
                        </a>{' '}
                        and the{' '}
                        <a href="https://doppler.com/" className="text-white" target="_blank">
                            Doppler Universal Secrets Manager
                        </a>
                    </p>
                    <p className="small mt-1 mb-0">
                        Mandalorian logo by{' '}
                        <a
                            href="https://www.deviantart.com/kiofficialart/art/Star-Wars-Mandalorian-logo-title-Fanmade-795171000"
                            className="text-white"
                            target="_blank"
                        >
                            KIOfficialArt
                        </a>
                    </p>
                    <p className="mt-0 pb-5">
                        <a
                            href="https://github.com/DopplerHQ/mandalorion-gifs"
                            className="small text-white nav-link"
                            target="_blank"
                        >
                            <span className="px-1">View on GitHub</span>
                            <img src="/images/github-logo.png" />
                        </a>
                    </p>
                </div>
            </footer>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
                integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
                crossOrigin="anonymous"
            ></script>
        </div>
    )
}

export async function getServerSideProps(context) {
    const gif = await getRandomGIF()
    return {
        props: {
            gif: gif.toJSON(),
            config: {
                DOPPLER_PROJECT: CONFIG.DOPPLER_PROJECT || null,
                DOPPLER_CONFIG: CONFIG.DOPPLER_CONFIG || null,
                GIPHY_API_KEY_SET: Boolean(CONFIG.GIPHY_API_KEY),
                GIPHY_TAG: CONFIG.GIPHY_TAG,
                GIPHY_RATING: CONFIG.GIPHY_RATING,
            },
        },
    }
}
