import React from 'react'

const Advantages = ({image,title,des}) => {
  return (
    <div className='text-center border px-8 my-1 lg:my-7 py-2 lg:py-6  '>
        <img className='mx-auto h-12' src={image} alt="" />
        <h1 className='font-bold text-sm'>{title}</h1>
        <p className='text-xs'>{des}</p>

    </div>
  )
}

export default Advantages