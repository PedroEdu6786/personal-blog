import { createContext, useContext } from 'react'
import { posts } from '../constants/posts'

const AppContext = createContext([])

export const AppWrapper = ({ children }) => {
  return <AppContext.Provider value={posts}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
