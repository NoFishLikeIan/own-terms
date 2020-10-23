import * as React from 'react'
import { render } from 'react-dom'

import { LeftPanel } from './components/left-panel'
import { RightPanel } from './components/right-panel'
import { Header } from './components/header'

import { useWindowDimensions } from './state/useWindowDimensions'
import { style } from './constant'

const H = .05

const Application: React.FunctionComponent = () => {

  const dimensions = useWindowDimensions()
  const { height, width } = dimensions

  const netHeight = height - 2 * style.borderWidth


  const headerH = netHeight * H
  const leftPanelH = netHeight * (1 - H)
  const totalH = headerH + leftPanelH


  return (
    <div style={{ width: "100%", height: netHeight, flex: 1, flexDirection: "row", display: "flex" }}>
      <div style={{ width: "50%", height: totalH }}>
        <Header dimensions={{ height: headerH }} />
        <LeftPanel dimensions={{ height: leftPanelH }} />
      </div>
      <div style={{ width: "50%", height: totalH }}>
        <RightPanel />
      </div>
    </div>
  )
}

render(<Application />, document.getElementById('root'))