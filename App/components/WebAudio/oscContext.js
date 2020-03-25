import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  osc: [0]
}

export const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'NEW_OSC':
      return {
        osc: [...state.osc, action.payload]
      }
    case 'KILL_OSC':
      return {
        osc: [0]
      }
    case 'REMOVE_OSC':
      // action.payload
      return {
        osc: state.osc - 1
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
