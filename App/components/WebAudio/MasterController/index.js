import React from 'react'
// import { MasterDB } from './Controls/MasterDB'
import { KillAllOscButton } from './Controls/KillAllOsc'
import { AddSweeper } from './Controls/AddSweeper'

export const MasterController = () => {
  return (
    <>
      <KillAllOscButton />
      <AddSweeper />
      {/* <MasterDB /> */}
    </>
  )
}
