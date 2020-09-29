//import './src/css/main.css'
/*import { wrapRootElement as wrap } from './root-wrapper'

export const wrapRootElement = wrap*/

import React from 'react'
import { GatsbyProvider } from './src/context/context'

export const wrapRootElement = ({ element }) => {
  return <GatsbyProvider>{element}</GatsbyProvider>
}