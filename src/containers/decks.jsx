import React from 'react'
import { css } from 'glamor'
import { colors, fontSize, spacing } from 'ui/common'

const styles = css({
  display: 'flex',
  flexDirection: 'column',
  padding: spacing.large,

  '> div': {
    display: 'flex',
    padding: spacing.large,
    background: colors.primary,
    fontSize: fontSize.xlarge,
    color: colors.background,
    borderRadius: '3px',

    '& + div': {
      marginTop: spacing.large
    }
  }
})

const Deck = ({ name }) => (
  <div>
    {name}
  </div>
)

export default props => (
  <div {...styles}>
    <Deck name='English' />
    <Deck name='Cooking' />
  </div>
)
