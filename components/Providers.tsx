"use client"

import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({children}: { children: ReactNode}) => {
  return <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    {children}
  </ThemeProvider>
}

export default Providers