import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: [],
}

export const reducer = (state, action) => {
  const newOsc = (kind) => {
    let incOsc = Number.isFinite(Math.max(...state.osc))
      ? Math.max(...state.osc) + 1
      : 0
    const nextOsc = [...state.osc, incOsc]
    return state.osc.length ? nextOsc : [0]
  }

  const removeOsc = (removed) => {
    const newArr = [...state.osc]
    removed = newArr.indexOf(removed)
    newArr.splice(removed, 1)
    return newArr.length ? newArr : []
  }

  switch (action.type) {
    case 'NEW_OSC':
      return {
        osc: newOsc(action.kind),
      }
    case 'KILL_OSC':
      return {
        osc: [],
      }
    case 'REMOVE_OSC':
      return {
        osc: removeOsc(action.payload),
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
