import * as React from 'react'
import { render } from 'react-dom'

import { Main } from './components/main'
import { Header } from './components/header'

import { useWindowDimensions } from './state/useWindowDimensions'


const Application: React.FunctionComponent = () => {

  const dimensions = useWindowDimensions()


  return (
    <div>
      <div>
        <Header dimensions={dimensions} />
      </div>
      <Main />
    </div>
  )
}

render(<Application />, document.getElementById('root'))