import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: []
}

export const reducer = (state, action) => {
  // console.log(state.osc)
  console.log(action)

  const newOsc = () => {
    const nextOsc = state.osc.length ? Math.max(...state.osc) + 1 : 0
    state.osc.push(nextOsc)
    console.log(`new osc state: ${state.osc}`)
    return state.osc.length ? state.osc : [0]
  }

  const removeOsc = removed => {
    const newArr = [...state.osc]
    removed = newArr.indexOf(removed)
    newArr.splice(removed, 1)
    console.log(`removed osc state: ${newArr}`)
    return newArr.length ? newArr : [0]
  }

  switch (action.type) {
    case 'NEW_OSC':
      return {
        osc: newOsc()
      }
    case 'KILL_OSC':
      return {
        osc: []
      }
    case 'REMOVE_OSC':
      return {
        osc: removeOsc(action.payload)
      }
    default:
      return state
  }
}

export const OscStateContext = createContext()

export const OscProvider = ({ children }) => (
  <OscStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </OscStateContext.Provider>
)

export const useOscValue = () => useContext(OscStateContext)
