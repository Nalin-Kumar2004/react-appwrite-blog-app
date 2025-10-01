import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
      <div className='w-full h-64 bg-white rounded-xl overflow-hidden flex items-center justify-center mb-4'>
          <img 
            src={appwriteService.getFileView(featuredImage)} 
            alt={title}
            className='max-h-full max-w-full object-contain'
          />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard