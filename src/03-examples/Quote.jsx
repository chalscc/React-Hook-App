import React from 'react'

export const Quote = ({title, description}) => {
  return (
    <blockquote className='blockquote text-end'>
        <p className='mb-3'>{title}</p>
        <footer className='blockquote-footer'> {description} </footer>
    </blockquote>
  )
}
