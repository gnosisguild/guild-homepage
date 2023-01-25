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
          <a href="https://zodiac.wiki/index.php/Introduction:_Zodiac_Protocol">
            <ZodiacPaper
              style={{ padding: '1em', width: 'auto' }}
              borderStyle="double"
            >
              Learn More
            </ZodiacPaper>
          </a>
          <a href="https://zodiac.wiki/index.php/Category:Documentation">
            <ZodiacPaper
              style={{ padding: '1em', width: 'auto' }}
              borderStyle="double"
            >
              View Docs
            </ZodiacPaper>
          </a>
          <a href="https://zodiac.wiki/index.php/FAQ:_Zodiac_Protocol">
            <ZodiacPaper
              style={{ padding: '1em', width: 'auto' }}
              borderStyle="double"
            >
              FAQ
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
                  <a href="https://zodiac.wiki/index.php/Category:Reality_Module">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Learn More
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Reality_Module:_Operator_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Operator Tutorial
                    </ZodiacPaper>
                  </a>
                  <a href="https://github.com/gnosis/zodiac-module-reality">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Developer Tutorial
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
                  <a href="https://zodiac.wiki/index.php/Category:Exit_Pattern">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Learn More
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Exit_App:_Member_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Member Tutorial
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Exit_Pattern:_Operator_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Operator Tutorial
                    </ZodiacPaper>
                  </a>
                  <a href="https://github.com/gnosis/zodiac-module-exit">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Developer Tutorial
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
                  <a href="https://zodiac.wiki/index.php/Category:Bridge_Module">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Learn More
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Bridge_Module:_Operator_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Operator Tutorial
                    </ZodiacPaper>
                  </a>
                  <a href="https://github.com/gnosis/zodiac-module-bridge">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Developer Tutorial
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
                  <a href="https://zodiac.wiki/index.php/Category:Delay_Modifier">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Learn More
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Delay_Modifier:_Operator_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Operator Tutorial
                    </ZodiacPaper>
                  </a>
                  <a href="https://github.com/gnosis/zodiac-modifier-delay">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Developer Tutorial
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
                  <a href="https://zodiac.wiki/index.php/Category:Roles_Modifier">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Learn More
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Roles_Modifier:_Operator_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Operator Tutorial
                    </ZodiacPaper>
                  </a>
                  <a href="https://github.com/gnosis/zodiac-modifier-roles">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Developer Tutorial
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
                <BadgeIcon icon="ozGov" size={80} />
              </div>
              <div className="module-info">
                <h3>Governor Module</h3>
                <p className="description">
                  Use an Open-Zepellin style Governor contract to control an
                  Avatar
                </p>
                <div className="links">
                  <a href="https://zodiac.wiki/index.php/Category:Governor_Module">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Learn More
                    </ZodiacPaper>
                  </a>
                  <a href="https://zodiac.wiki/index.php/Governor_Module:_Operator_Tutorial">
                    <ZodiacPaper
                      style={{ padding: '1em', width: 'auto' }}
                      borderStyle="double"
                    >
                      Operator Tutorial
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
