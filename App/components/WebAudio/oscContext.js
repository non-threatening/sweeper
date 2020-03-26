import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: []
}

export const reducer = (state, action) => {
  console.log(state.osc)
  console.log(action)
  switch (action.type) {
    case 'NEW_OSC':
      state.osc.push(state.osc.length)
      return {
        osc: state.osc.length ? state.osc : [0]
      }
    case 'KILL_OSC':
      return {
        osc: []
      }
    case 'REMOVE_OSC':
      let removeOsc = () => {
        state.osc.splice(action.payload, 1)
        return state.osc
      }
      console.log(removeOsc())
      return {
        osc: removeOsc()
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
