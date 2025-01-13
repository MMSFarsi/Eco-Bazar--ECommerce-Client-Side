import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            
               <h1 className="text-3xl font-bold text-gray-800 mb-4">
                   This Page is Under Construction
               </h1>
               <p className="text-gray-600 mb-8">
                   We're working hard to bring this page to life. Stay tuned for updates!
               </p>
               <Link
                   to="/" 
                   className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition duration-200"
               >
                   Go Back to Home
               </Link>
           </div>
  )
}

export default Blog