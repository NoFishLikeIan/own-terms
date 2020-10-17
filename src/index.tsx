import * as React from 'react'
import { render } from 'react-dom'

import { style } from './constant'

import { Main } from './components/main'
import { Header } from './components/header'

import { useWindowDimensions } from './state/useWindowDimensions'

const H = .05

const DEF_SIZE = {
  height: '100%',
  left: '0px',
  width: '100%',
  overflow: 'hidden'
}

const Application: React.FunctionComponent = () => {

  const dimensions = useWindowDimensions()
  const { height, width } = dimensions

  // FIXME: Height doesn't work! Miss Fugaro :(
  const headerDim = { height: height * H, width: width * .5 }
  const mainDim = { height: height * (0.95 - H), width: width * .5 }

  return (
    <div style={{ ...DEF_SIZE, backgroundColor: style.backgroundColor }}>
      <Header dimensions={headerDim} />
      <Main dimensions={mainDim} />
    </div>
  )
}

render(<Application />, document.getElementById('root'))