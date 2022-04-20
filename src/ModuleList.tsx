import { BadgeIcon, ZodiacPaper } from 'zodiac-ui-components'

function ModuleList() {
  return (
    <ZodiacPaper style={{ padding: '1em' }} borderStyle="double">
      <ZodiacPaper style={{ padding: '1em' }} borderStyle="double">
        <h3>Zodiac Protocol</h3>
        <p>
          A composable design philosophy for DAOs, Zodiac is a collection of
          tools built according to an open standard.
        </p>
        <div className="links">
          <a href="https://github.com/gnosis/zodiac">
            <ZodiacPaper
              style={{ padding: '1em', width: 'auto' }}
              borderStyle="double"
            >
              View on Github
            </ZodiacPaper>
          </a>
          <a href="https://gnosis.github.io/zodiac/docs/tutorial-build-a-module/setup/">
            <ZodiacPaper
              style={{ padding: '1em', width: 'auto' }}
              borderStyle="double"
            >
              View Docs
            </ZodiacPaper>
          </a>
        </div>
        <ul className="module-list">
          <li>
            <ZodiacPaper
              style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
              borderStyle="double"
            >
              <div>
                <BadgeIcon icon="reality" size={80} />
              </div>
              <div className="module-info">
                <h3>Reality Module</h3>
                <p className="description">
                  Enables on-chain execution based on the outcome of events
                  reported by the Reality.eth oracle.
                </p>
                <div className="links">
                  <a href="https://github.com/gnosis/zodiac-module-reality">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View on Github
                    </ZodiacPaper>
                  </a>
                  <a href="https://gnosis.github.io/zodiac/docs/tutorial-module-reality/get-started">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View Docs
                    </ZodiacPaper>
                  </a>
                </div>
              </div>
            </ZodiacPaper>
          </li>
          <li>
            <ZodiacPaper
              style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
              borderStyle="double"
            >
              <div>
                <BadgeIcon icon="exit" size={80} />
              </div>
              <div className="module-info">
                <h3>Exit Module</h3>
                <p className="description">
                  Enables participants to redeem a designated token for a
                  proportional share of this account’s digital assets
                </p>
                <div className="links">
                  <a href="https://github.com/gnosis/zodiac-module-exit">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View on Github
                    </ZodiacPaper>
                  </a>
                  <a href="https://gnosis.github.io/zodiac/docs/tutorial-module-exit/get-started">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View Docs
                    </ZodiacPaper>
                  </a>
                  <a href="https://exit.gnosisguild.org">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Use App
                    </ZodiacPaper>
                  </a>
                </div>
              </div>
            </ZodiacPaper>
          </li>
          <li>
            <ZodiacPaper
              style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
              borderStyle="double"
            >
              <div>
                <BadgeIcon icon="bridge" size={80} />
              </div>
              <div className="module-info">
                <h3>Bridge Module</h3>
                <p className="description">
                  Enables an address on one chain to control an avatar on
                  another chain using an Arbitrary Message Bridge (AMB)
                </p>
                <div className="links">
                  <a href="https://github.com/gnosis/zodiac-module-bridge">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View on Github
                    </ZodiacPaper>
                  </a>
                  <a href="https://gnosis.github.io/zodiac/docs/tutorial-module-bridge/get-started">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View Docs
                    </ZodiacPaper>
                  </a>
                </div>
              </div>
            </ZodiacPaper>
          </li>
          <li>
            <ZodiacPaper
              style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
              borderStyle="double"
            >
              <div>
                <BadgeIcon icon="delay" size={80} />
              </div>
              <div className="module-info">
                <h3>Delay Modifier</h3>
                <p className="description">
                  Enables a time delay between when a module initiates a
                  transaction and when it can be executed
                </p>
                <div className="links">
                  <a href="https://github.com/gnosis/zodiac-modifier-delay">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View on Github
                    </ZodiacPaper>
                  </a>
                  <a href="https://gnosis.github.io/zodiac/docs/tutorial-modifier-delay/get-started">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View Docs
                    </ZodiacPaper>
                  </a>
                </div>
              </div>
            </ZodiacPaper>
          </li>
          <li>
            <ZodiacPaper
              style={{ padding: '1em', display: 'flex', columnGap: '1em' }}
              borderStyle="double"
            >
              <div>
                <BadgeIcon icon="roles" size={80} />
              </div>
              <div className="module-info">
                <h3>Roles Modifier</h3>
                <p className="description">
                  Allows avatars to enforce granular, role-based, permissions
                  for attached modules
                </p>
                <div className="links">
                  <a href="https://github.com/gnosis/zodiac-modifier-roles">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View on Github
                    </ZodiacPaper>
                  </a>
                  <a href="https://gnosis.github.io/zodiac/docs/tutorial-modifier-roles/get-started">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      View Docs
                    </ZodiacPaper>
                  </a>
                </div>
              </div>
            </ZodiacPaper>
          </li>
        </ul>
      </ZodiacPaper>
    </ZodiacPaper>
  )
}

export default ModuleList
