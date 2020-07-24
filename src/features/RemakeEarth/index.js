import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Remake from "./Remake";
import { GridProvider } from "./components/GridContext";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import './index.css'

const index = () => {
  return (
    <DndProvider backend={HTML5Backend}>
    <GridProvider>
      <BackgroundVideo />
      <Remake />
    </GridProvider>
  </DndProvider>
  )
}
export default index;
