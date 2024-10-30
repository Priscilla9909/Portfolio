import React from 'react'

export default function Posts() {
  return (    
      <div className='bg-blue-50 p-4'>
        <div className='flex justify-between'>
        <h1 className='text-md'>Recent posts</h1>
        <button className='text-blue-500'>View all</button><br/>
        </div>
        <div>
          <h2 className='mt-2'>Making a design system from scratch</h2>
        </div>
        <div>
          <h2 className='mt-2'>Creating pixel perfect icons in Figma</h2>
        </div>
    </div>
  )
}
