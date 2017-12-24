import React from 'react'
import Header from 'ui/header'
import Icon from 'ui/icon'

export default () => (
  <Header
    left={
      <Icon name='plusSquare' size='xxlarge' />
    }
    center='Anki'
    right={[
      <Icon key='1' name='plusSquare' size='xxlarge' />,
      <Icon key='2' name='plusSquare' size='xxlarge' />
    ]}
  />
)
