import React from 'react'
import { UserContext } from './UserContext'

const user = {
  id: 1234,
  name: 'Carles',
  email: 'carlescatalancalabuig@gmail.com',
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={user}>
        { children }
    </UserContext.Provider>
  )
}
