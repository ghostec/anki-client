import React from 'react'
import { css } from 'glamor'
import { colors, fontSize, spacing } from 'ui/common'

const styles = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',
  fontSize: fontSize.xxlarge,
  fontWeight: 600,
  background: colors.background,
  borderBottom: `1px solid ${colors.gray25}`,
  color: 'black',

  '> div:nth-of-type(1)': {
    display: 'flex',
    marginRight: 'auto',
    marginLeft: spacing.large
  },

  '> div:nth-of-type(2)': {
    display: 'flex',
    position: 'absolute',
    margin: 'auto'
  },

  '> div:nth-of-type(3)': {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: spacing.large
  },

  '> div:nth-of-type(1), > div:nth-of-type(3)': {
    '> * + *': {
      marginLeft: spacing.xlarge
    }
  }
})

export default ({ left, center, right }) => (
  <div {...styles}>
    <div>{left}</div>
    <div>{center}</div>
    <div>{right}</div>
  </div>
)
