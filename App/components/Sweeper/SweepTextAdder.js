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
    const swOsc = osc.filter((thing) => thing.includes('sweeper'))
    switch (true) {
      case !swOsc.length:
        setKnobs([])
        break
      case swOsc.length > knobs.length:
        let addKnob = {
          key: Number.isFinite(Math.max(...swOsc.map((thing) => thing[0])))
            ? Math.max(...swOsc.map((thing) => thing[0]))
            : 0,
        }
        setKnobs([...knobs, addKnob])
        break
      default:
        const del = [...swOsc.map((thing) => thing[0])]
        setKnobs(knobs.filter((thing) => del.includes(thing.key)))
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
