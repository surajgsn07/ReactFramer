import React from 'react'

function Background() {
  return (
    <div className='absolute w-full h-screen z-[1] '>
        <div className='flex justify-center text-xl  text-zinc-400 py-4 font-semibold '>Document</div>
        <h1 className='text-zinc-900 text-[13vw] tracking-tight leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background