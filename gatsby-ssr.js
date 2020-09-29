const React = require('react')
const { GatsbyProvider } = require('./src/context/context')

exports.wrapRootElement = ({ element }) => {
  return (
   <GatsbyProvider>
      {element}
   </GatsbyProvider>
  )
}
