import * as React from 'react'
import { render } from 'react-dom'

import { useState } from 'react'

import { LeftPanel } from './components/left-panel'
import { RightPanel } from './components/right-panel'
import { Header } from './components/header'

import { useWindowDimensions } from './state/useWindowDimensions'

import { getContentComponent, PAGES, Pages } from './components/get-content'

type Page = Pages[number]

const Application: React.FunctionComponent = () => {

  const [currentPage, setPage] = useState<Page>("Contact")

  const dimensions = useWindowDimensions()
  const { height, width } = dimensions

  const ContentPage = getContentComponent(currentPage)

  return (
    <div style={{ width, height, flex: 1, flexDirection: "row", display: "flex", textAlign: "center" }}>
      <div style={{ width: "50%", display: "flex", flexDirection: "column", margin: 4, padding: 2 }}>
        <Header dimensions={{ height: "10%" }} pages={PAGES} setPage={setPage} />
        <LeftPanel dimensions={{ height: "90%" }} >
          <ContentPage />
        </LeftPanel>
      </div>
      <div style={{ height: "100%", width: "50%" }}>
        <RightPanel currentPage={currentPage} />
      </div>
    </div>
  )
}

render(<Application />, document.getElementById('root'))