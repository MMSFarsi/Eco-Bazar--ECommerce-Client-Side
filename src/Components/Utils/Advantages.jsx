import React from 'react'

const Advantages = ({image,title,des}) => {
  return (
    <div className='text-center shadow-lg my-4 py-7'>
        <img className='mx-auto' src={image} alt="" />
        <h1 className='font-bold text-xl'>{title}</h1>
        <p>{des}</p>

    </div>
  )
}

export default Advantages