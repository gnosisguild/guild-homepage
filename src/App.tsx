import React, { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import bgVid from './assets/bg2.mp4'
import XImg from './assets/x.png'
import DiscordImg from './assets/discord.svg'
import MirrorImg from './assets/mirror.svg'
import CalendarImg from './assets/calendar.svg'
import FirstFrame from './assets/firstFrame.jpg'
import classes from './App.module.css'
import GuildBadge from './components/GuildBadge'
import GuildPaper from './components/GuildPaper'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current!.playbackRate = 0.7
  }, [])

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.vidBg}>
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted
            loop
            poster={FirstFrame}
          >
            <source src={bgVid} type="video/mp4" />
          </video>
        </div>

        <section className={classes.content}>
          <GuildPaper style={{ padding: '1em' }}>
            <section className={classes.header}>
              <div className={classes.guildBadge}>
                <GuildPaper
                  borderStyle="single"
                  rounded="full"
                  style={{
                    display: 'flex',
                    flexGrow: 1,
                    padding: '0.5em',
                    maxWidth: '220px',
                  }}
                >
                  <GuildBadge />
                </GuildPaper>
              </div>

              <div className={classes.guildInfo}>
                <GuildPaper style={{ padding: '1em' }}>
                  <GuildPaper
                    style={{
                      padding: '1em',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      rowGap: '1em',
                    }}
                  >
                    <div className={classes.tagline}>
                      <GuildPaper style={{ padding: '1em' }}>
                        <h2>Gnosis Guild</h2>
                        <p>Society for interdependent software.</p>
                      </GuildPaper>
                    </div>

                    <GuildPaper
                      style={{
                        padding: '1em',
                        display: 'flex',
                        columnGap: '1em',
                        rowGap: '1em',
                        flexWrap: 'wrap',
                      }}
                    >
                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="https://discord.gnosisguild.org"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={DiscordImg} alt="Discord logo" />
                          <span>Discord</span>
                        </a>
                      </GuildPaper>

                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="https://x.com/gnosisguild"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={XImg} alt="X logo" />
                          <span>X</span>
                        </a>
                      </GuildPaper>

                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="https://gnosisguild.mirror.xyz/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={MirrorImg} alt="Writing icon" />
                          <span>Writing</span>
                        </a>
                      </GuildPaper>

                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="mailto:comms@gnosisguild.org"
                        >
                          <img src={CalendarImg} alt="Email icon" />
                          <span>Email</span>
                        </a>
                      </GuildPaper>
                    </GuildPaper>
                  </GuildPaper>
                </GuildPaper>
              </div>
            </section>

            <section className={classes.infoList}>
              <GuildPaper style={{ padding: '1em', marginBottom: '1em' }}>
                <GuildPaper>
                  <div className={classes.wikiInfo}>
                    <div>
                      <a
                        href="https://www.theinterfold.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>The Interfold</h3>
                      </a>

                      <p>
                        A distributed network for confidential coordination,
                        enabling independent parties to produce shared,
                        verifiable outcomes from private inputs.
                      </p>
                    </div>

                    <figure className={classes.wikiImg}>
                      <img
                        src="/interfold-banner.jpg"
                        alt="The Interfold banner"
                      />
                      <figcaption>
                        <a
                          href="https://www.theinterfold.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Site
                        </a>
                        {' · '}
                        <a
                          href="https://x.com/theInterfold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          X
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </GuildPaper>
              </GuildPaper>

              <GuildPaper style={{ padding: '1em', marginBottom: '1em' }}>
                <GuildPaper>
                  <div className={classes.wikiInfo}>
                    <div>
                      <a
                        href="https://zodiac.eco"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3>Zodiac</h3>
                      </a>

                      <p>
                        Zodiac helps onchain organizations operate Safes with
                        programmable permissions, coordinated execution paths,
                        and safeguards for treasury workflows.
                      </p>
                    </div>

                    <figure className={classes.wikiImg}>
                      <img src="/zodiac-banner.png" alt="Zodiac banner" />
                      <figcaption>
                        <a
                          href="https://zodiac.eco"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Site
                        </a>
                        {' · '}
                        <a
                          href="https://x.com/zodiaceco"
                          target="_blank"
                          rel="noreferrer"
                        >
                          X
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </GuildPaper>
              </GuildPaper>
            </section>
          </GuildPaper>
        </section>
      </main>
      <Analytics />
    </div>
  )
}

export default App
