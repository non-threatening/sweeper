import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: [],
}

export const reducer = (state, action) => {
  const newOsc = (kind) => {
    let incOsc = Number.isFinite(
      Math.max(...state.osc.map((thing) => thing[0])),
    )
      ? Math.max(...state.osc.map((thing) => thing[0])) + 1
      : 0
    state.osc.push([incOsc, kind])
    const arrayOsc = [...state.osc]
    return state.osc.length ? arrayOsc : [0, kind]
  }

  const removeOsc = (removed) => {
    const newArr = [...state.osc]
    const del = [...state.osc.map((thing) => thing[0])]
    removed = del.indexOf(removed)
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
