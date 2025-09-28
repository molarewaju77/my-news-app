import { Box } from '@mui/material';
import React, { createContext, useState } from 'react'

const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, }}>
        {children}
    </AuthContext.Provider>
  )
}

