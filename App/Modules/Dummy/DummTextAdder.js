import React, { useEffect, useState } from 'react'
import { DummInputText } from './DummText'
import { useOscValue } from '../../WebAudio'

export const DummTextAdder = () => {
  const [{ osc }, dispatch] = useOscValue()
  const [knobs, setKnobs] = useState([])

  let newKnobs = knobs.reverse().map((item, index) => {
    return <DummInputText key={item.key} oscNumber={item.key} />
  })

  useEffect(() => {
    const swOsc = osc.filter((thing) => thing.includes('dummy'))
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
    console.log(osc)
  }, [osc]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Add knob on load...
    dispatch({
      type: 'NEW_OSC',
      kind: 'dummy',
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <>{newKnobs}</>
}
