import React, { useEffect, useRef } from 'react'
import bgVid from './assets/bg2.mp4'
import TwitterImg from './assets/twitter.svg'
import DiscordImg from './assets/discord.svg'
import MirrorImg from './assets/mirror.svg'
import CalendarImg from './assets/calendar.svg'
import PatternImg from './assets/patterns.jpeg'
import FirstFrame from './assets/firstFrame.jpg'
import classes from './App.module.css'
import GuildBadge from './components/GuildBadge'
import WorkList from './components/WorkList'
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
                        <p>
                          Society for interdependent software & keeper of the
                          Zodiac open standard
                        </p>
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
                          href="https://bit.ly/gnosisguilddiscord"
                        >
                          <img src={DiscordImg} alt="Discord logo" />
                          <span>Discord</span>
                        </a>
                      </GuildPaper>
                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="https://twitter.com/gnosisguild"
                        >
                          <img src={TwitterImg} alt="twitter logo" />
                          <span>Twitter</span>
                        </a>
                      </GuildPaper>
                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="https://gnosisguild.mirror.xyz/"
                        >
                          <img src={MirrorImg} alt="mirror logo" />
                          <span>Blog</span>
                        </a>
                      </GuildPaper>
                      <GuildPaper style={{ flexGrow: '1', minWidth: '80px' }}>
                        <a
                          className={classes.socialLink}
                          href="https://bit.ly/3CPpacx"
                        >
                          <img
                            src={CalendarImg}
                            alt="icon of satellites orbiting an spheroid"
                          />
                          <span>Calendar</span>
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
                      <a href="https://zodiac.wiki">
                        <h3>Zodiac Wiki</h3>
                      </a>
                      <p>
                        zodiac.wiki is a living resource for DAOs. The wiki
                        houses documentation, a library, and a pattern language
                        for organizations.
                      </p>
                      <figure className={classes.viriditas}>
                        <blockquote>
                          <p>
                            Glance at the sun. See the moon and the stars. Gaze
                            at the beauty of the Earth's greenings. Now, think.
                          </p>
                        </blockquote>
                        <figcaption>— Hildegard of Bingen</figcaption>
                      </figure>
                    </div>

                    <figure className={classes.wikiImg}>
                      <img src={PatternImg} alt="graph of building elements" />
                      <figcaption>
                        The Timeless Way of Building (1979)
                      </figcaption>
                    </figure>
                  </div>
                </GuildPaper>
              </GuildPaper>
              <WorkList />
            </section>
          </GuildPaper>
        </section>
      </main>
    </div>
  )
}

export default App
