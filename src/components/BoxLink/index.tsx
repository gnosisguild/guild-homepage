import React from 'react'

import classes from './BoxLink.module.css'
import GuildPaper from '../GuildPaper'

interface Props {
  href: string
  label: string
}

const BoxLink: React.FC<Props> = ({ href, label }) => {
  return (
    <a href={href} className={classes.boxLink}>
      <GuildPaper
        style={{ padding: '1em', width: 'auto' }}
        borderStyle="double"
      >
        {label}
      </GuildPaper>
    </a>
  )
}

export default BoxLink
