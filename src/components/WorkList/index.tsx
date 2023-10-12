import { BadgeIcon } from 'zodiac-ui-components'

import classes from './WorkList.module.css'
import BoxLink from '../BoxLink'
import { useState } from 'react'
import GuildPaper from '../GuildPaper'

import tabula from '../../assets/tabula.jpg'
import gnosisLogo from '../../assets/gnosis.svg'
import pilot from '../../assets/pilotSmall.jpg'

enum Tabs {
  zodiac,
  tools,
}

const WorkList = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.zodiac)

  return (
    <GuildPaper style={{ padding: '1em' }}>
      <div className={classes.tabs}>
        <ul>
          <li
            className={tab === Tabs.zodiac ? classes.activeTab : ''}
            onClick={() => setTab(Tabs.zodiac)}
          >
            Zodiac Mods
          </li>
          <li
            className={tab === Tabs.tools ? classes.activeTab : ''}
            onClick={() => setTab(Tabs.tools)}
          >
            Tools
          </li>
        </ul>
      </div>
      <GuildPaper style={{ padding: '1em' }}>
        {tab === Tabs.zodiac ? (
          <>
            <p>
              A composable design philosophy for DAOs, Zodiac is a collection of
              tools built according to an open standard.
            </p>
            <div className={classes.links}>
              <BoxLink
                href="https://zodiac.wiki/index.php/Introduction:_Zodiac_Protocol"
                label="Learn More"
              />
              <BoxLink
                href="https://zodiac.wiki/index.php/Category:Documentation"
                label="View Docs"
              />
              <BoxLink
                href="https://zodiac.wiki/index.php/FAQ:_Zodiac_Protocol"
                label="FAQ"
              />
            </div>
            <ul className={classes.moduleList}>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <BadgeIcon icon="reality" size={80} />
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Reality Module</h3>
                    <p className={classes.description}>
                      Enables on-chain execution based on the outcome of events
                      reported by the Reality.eth oracle.
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Category:Reality_Module"
                        label="Learn More"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Reality_Module:_Operator_Tutorial"
                        label="Operator Tutorial"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/zodiac-module-reality"
                        label="Developer Tutorial"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <BadgeIcon icon="exit" size={80} />
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Exit Module</h3>
                    <p className={classes.description}>
                      Enables participants to redeem a designated token for a
                      proportional share of this account’s digital assets
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Category:Exit_Pattern"
                        label="Learn More"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Exit_App:_Member_Tutorial"
                        label="Member Tutorial"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Exit_Pattern:_Operator_Tutorial"
                        label="Operator Tutorial"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/zodiac-module-exit"
                        label="Developer Tutorial"
                      />
                      <BoxLink
                        href="https://exit.gnosisguild.org"
                        label="Use App"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <BadgeIcon icon="bridge" size={80} />
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Bridge Module</h3>
                    <p className={classes.description}>
                      Enables an address on one chain to control an avatar on
                      another chain using an Arbitrary Message Bridge (AMB)
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Category:Bridge_Module"
                        label="Learn More"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Bridge_Module:_Operator_Tutorial"
                        label="Operator Tutorial"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/zodiac-module-bridge"
                        label="Developer Tutorial"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <BadgeIcon icon="delay" size={80} />
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Delay Modifier</h3>
                    <p className={classes.description}>
                      Enables a time delay between when a module initiates a
                      transaction and when it can be executed
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Category:Delay_Modifier"
                        label="Learn More"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Delay_Modifier:_Operator_Tutorial"
                        label="Operator Tutorial"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/zodiac-modifier-delay"
                        label="Developer Tutorial"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <BadgeIcon icon="roles" size={80} />
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Roles Modifier</h3>
                    <p className={classes.description}>
                      Allows avatars to enforce granular, role-based,
                      permissions for attached modules
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Category:Roles_Modifier"
                        label="Learn More"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Roles_Modifier:_Operator_Tutorial"
                        label="Operator Tutorial"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/zodiac-modifier-roles"
                        label="Developer Tutorial"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <BadgeIcon icon="ozGov" size={80} />
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Governor Module</h3>
                    <p className={classes.description}>
                      Use the OpenZeppelin style Governor contract to control an
                      Avatar
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Category:Governor_Module"
                        label="Learn More"
                      />
                      <BoxLink
                        href="https://zodiac.wiki/index.php/Governor_Module:_Operator_Tutorial"
                        label="Operator Tutorial"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
            </ul>
          </>
        ) : (
          <>
            <p>
              In addition to Zodiac mods, we also build and maintain a series of
              tools that work in unison with Zodiac or otherwise enable
              interdependence.
            </p>
            <ul className={classes.moduleList}>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <GuildPaper
                      borderStyle="single"
                      rounded="full"
                      style={{
                        display: 'flex',
                        flexGrow: 1,
                        padding: '0.2em',
                        overflow: 'hidden',
                        width: '80px',
                      }}
                    >
                      <img
                        src={pilot}
                        alt="Pilot's deck conceptual"
                        className={classes.toolImage}
                      />
                    </GuildPaper>
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Pilot Extension</h3>
                    <p className={classes.description}>
                      An extension to make using Safe's much easier. Batch and
                      simulate transactions and submit them for execution or to
                      a Zodiac Module for processing.
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://pilot.gnosisguild.org/"
                        label="Visit"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/zodiac-pilot"
                        label="View codebase"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <GuildPaper
                      borderStyle="single"
                      rounded="full"
                      style={{
                        display: 'flex',
                        flexGrow: 1,
                        padding: '0.2em',
                        overflow: 'hidden',
                        width: '80px',
                      }}
                    >
                      <img
                        src={tabula}
                        alt="illustration of ancient text on clay"
                        className={classes.toolImage}
                      />
                    </GuildPaper>
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Tabula</h3>
                    <p className={classes.description}>
                      Instant web3 publications for writers, DAOs, and any
                      Ethereum-based account. Built on Poster (EIP-3722) and
                      IPFS
                    </p>
                    <div className={classes.links}>
                      <BoxLink href="https://tabula.gg/" label="Visit" />
                      <BoxLink
                        href="https://github.com/gnosis/tabula"
                        label="View codebase"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <GuildPaper
                      borderStyle="single"
                      rounded="full"
                      style={{
                        display: 'flex',
                        flexGrow: 1,
                        padding: '0.2em',
                        overflow: 'hidden',
                        width: '80px',
                      }}
                    >
                      <img
                        src={gnosisLogo}
                        alt="Gnosis Owl Logo"
                        className={classes.toolImage}
                      />
                    </GuildPaper>
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Claim SAFE Tokens</h3>
                    <p className={classes.description}>
                      This app and related infrastructure allows GNO holders to
                      claim the SAFE tokens that are being vested to Gnosis
                    </p>
                    <div className={classes.links}>
                      <BoxLink
                        href="https://claim-safe.gnosis.io/"
                        label="Visit"
                      />
                      <BoxLink
                        href="https://github.com/gnosis/safe-token-distribution"
                        label="View codebase"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
              <li>
                <GuildPaper
                  style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
                >
                  <div>
                    <GuildPaper
                      borderStyle="single"
                      rounded="full"
                      style={{
                        display: 'flex',
                        flexGrow: 1,
                        padding: '0.2em',
                        overflow: 'hidden',
                        width: '80px',
                      }}
                    >
                      <img
                        src={gnosisLogo}
                        alt="Gnosis Owl Logo"
                        className={classes.toolImage}
                      />
                    </GuildPaper>
                  </div>
                  <div className={classes.moduleInfo}>
                    <h3>Lock GNO</h3>
                    <p className={classes.description}>
                      A set of contracts and an app that sets up a locking
                      contract for any ERC-20 token.
                    </p>
                    <div className={classes.links}>
                      <BoxLink href="https://lock.gnosis.io/" label="Visit" />
                      <BoxLink
                        href="https://github.com/gnosis/token-lock"
                        label="View codebase"
                      />
                    </div>
                  </div>
                </GuildPaper>
              </li>
            </ul>
          </>
        )}
      </GuildPaper>
    </GuildPaper>
  )
}

export default WorkList
