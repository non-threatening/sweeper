/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { SweepInputText } from './SweepText'
import { useOscValue } from '../WebAudio'

export const SweepTextAdder = () => {
  const [{ osc }, dispatch] = useOscValue()
  const [knobs, setKnobs] = useState([])

  let newKnobs = knobs.reverse().map((item, index) => {
    return <SweepInputText key={item.key} oscNumber={item.key} />
  })

  useEffect(() => {
    switch (true) {
      case !osc.length: // Clear all knobs
        setKnobs([])
        break
      case osc.length > knobs.length: // Add knob
        let addKnob = {
          key: Number.isFinite(Math.max(...osc)) ? Math.max(...osc) : 0,
        }
        setKnobs([...knobs, addKnob])
        break
      default:
        // Remove knob
        setKnobs(knobs.filter((value) => osc.includes(value.key)))
    }
  }, [osc])

  // Add knob on load...
  useEffect(() => {
    dispatch({
      type: 'NEW_OSC',
      kind: 'sweeper',
    })
  }, [])

  return <>{newKnobs}</>
}
