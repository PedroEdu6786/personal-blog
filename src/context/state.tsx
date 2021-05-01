import { createContext, useContext } from 'react'

const AppContext = createContext([])

export const AppWrapper = ({ children }) => {
  const theme = []

  return <AppContext.Provider value={theme}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
