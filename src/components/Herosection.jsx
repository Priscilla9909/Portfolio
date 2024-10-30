import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
      <div>
        <h1 className='text-[30px] font-bold'>Hi, I am Kareem, <br/>
        Creative Technologist
        </h1>
        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor odit id <br/> quae perspiciatis sed voluptates eum perferendis reiciendis consequatur <br/> incidunt numquam, tenetur animi deserunt officiis facere ullam saepe delectus.</p>

        <button className='bg-red-500 p-2 mt-6 text-sm text-white hover:bg-red-600'>Download Resume</button>
      </div>

      <div>
        <img src="/images/img.jpg" alt="photo" className='w-60 h-60 rounded-full'/>
      </div>

      
    </div>
  )
}
