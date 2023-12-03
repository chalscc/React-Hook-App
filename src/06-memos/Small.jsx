import React from 'react'

// Otra forma de ralizar la importación del memo
// import {memo} from 'react'
// export const Small = memo(({value}) => {

export const Small = React.memo(({value}) => {

    console.log('Se llama otra vez el componente')

  return (
    <small>{value}</small>
  )
})
