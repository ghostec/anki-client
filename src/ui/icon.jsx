import React from 'react'
import { css } from 'glamor'
import { fontSize } from 'ui/common'

const styles = ({ size }) => css({
  fontSize: fontSize[size]
})

const fa = (name, size) => <i className={`fa ${name}`} {...styles({ size })} />

export default ({ name, size }) => ({
  plusSquare: fa('fa-plus-square', size),
  practice: fa('fa-graduation-cap', size)
}[name])
