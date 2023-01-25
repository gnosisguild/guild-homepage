import React from 'react'
import classnames from 'classnames'
import { PaperProps as MuiPaperProps } from '@material-ui/core'
import { ZodiacPaper } from 'zodiac-ui-components'

export interface PaperProps extends MuiPaperProps {
  borderStyle?: 'double' | 'single'
  rounded?: 'left' | 'top' | 'right' | 'bottom' | 'full'
}

const GuildPaper = React.forwardRef<any, PaperProps>(
  ({ borderStyle = 'double', rounded, children, ...props }, ref) => {
    return (
      <ZodiacPaper
        {...props}
        ref={ref}
        style={{
          backgroundColor: 'rgba(217, 212, 173, 0.02)',
          backdropFilter: 'blur(4px)',
          ...props.style,
        }}
        className={classnames(
          borderStyle === 'double' ? 'border--double' : undefined,
          rounded === 'left' && 'roundedLeft',
          rounded === 'top' && 'roundedTop',
          rounded === 'right' && 'roundedRight',
          rounded === 'bottom' && 'roundedBottom',
          rounded === 'full' && 'roundedFull',
          props.className
        )}
      >
        {children}
      </ZodiacPaper>
    )
  }
)

export default GuildPaper
