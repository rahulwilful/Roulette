import React from 'react'

const Container = ({children,py}) => {
  return (
    <div className={`container ${py ? 'py-'+py : 'py-5'}`}>{
        children
    }</div>
  )
}

export default Container