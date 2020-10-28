import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { LeftPanel } from './components/left-panel'
import { RightPanel } from './components/right-panel'
import { Header } from './components/header'

import { useWindowDimensions } from './state/useWindowDimensions'
import { LeftContent, pages } from './components/left-content'

const Application: React.FunctionComponent = () => {


  const dimensions = useWindowDimensions()
  const { height, width } = dimensions


  return (
    <div style={{ width, height, flex: 1, flexDirection: "row", display: "flex", textAlign: "center" }}>
      <Router>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", margin: 4, padding: 2 }}>
          <Header dimensions={{ height: "10%" }} pages={Object.keys(pages)}
          />
          <LeftPanel dimensions={{ height: "90%" }} >
            <LeftContent />
          </LeftPanel>
        </div>
        <div style={{ height: "100%", width: "50%" }}>
          <RightPanel />
        </div>
      </Router>
    </div>
  )
}

render(<Application />, document.getElementById('root'))