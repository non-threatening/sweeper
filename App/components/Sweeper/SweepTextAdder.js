import React, { useEffect, useState } from 'react'
import { SweepInputText } from './SweepText'
import { useOscValue } from '../WebAudio'

export const SweepTextAdder = () => {
  const [{ osc }, dispatch] = useOscValue()
  const [knobs, setKnobs] = useState([])

  let newKnobs = knobs.map((item, index) => {
    return <SweepInputText key={item.key} oscNumber={item.key} />
  })

  useEffect(() => {
    console.log(osc)
    if (!osc.length) {
      setKnobs([]) // Clear all knobs
    } else if (osc.length > knobs.length) {
      let addKnob = {
        key: Number.isFinite(Math.max(...osc)) ? Math.max(...osc) : 0,
      }
      setKnobs([...knobs, addKnob]) // Add knob
    } else {
      setKnobs(knobs.filter((value) => osc.includes(value.key))) // Remove knob
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [osc])

  // Add knob on load...
  useEffect(() => {
    _add()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const _add = () => {
    dispatch({
      type: 'NEW_OSC',
      kind: 'sweeper',
    })
  }

  return <>{newKnobs}</>
}
