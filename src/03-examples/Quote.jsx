import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({title, description}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    
    setBoxSize({height, width})

  }, [])


  return (
    <>
      <blockquote 
      style={{ display: 'flex'}}
      className='blockquote text-end'>
          <p 
          ref={pRef}
          className='mb-3'
          >{title}</p>
          <footer className='blockquote-footer'> {description} </footer>
      </blockquote>

      {JSON.stringify(boxSize)}
    </>
  )
}
