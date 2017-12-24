import React from 'react'
import Header from 'ui/header'
import Icon from 'ui/icon'
import Decks from 'containers/decks'

export default () => (
  [
    <Header
      key='header'
      left={
        <Icon name='practice' size='xxlarge' />
      }
      center='Anki'
      right={[
        <Icon key='add' name='plusSquare' size='xxlarge' />
      ]}
    />,
    <Decks key='decks' />
  ]
)
