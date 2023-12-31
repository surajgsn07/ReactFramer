import React, { useRef } from 'react'
import Card from './Card';

function Foreground() {
    const ref = useRef(null);
    const data  = [
        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel deserunt repellendus!",
            size:"2mb",
            closed:true,
            tag:{
                isOpen:true,
                title:"Download Now ",
                color:"green"
            }
        },        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel deserunt repellendus!",
            size:"2mb",
            closed:true,
            tag:{
                isOpen:true,
                title:"Download Now ",
                color:"red"
            }
        },        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel deserunt repellendus!",
            size:"2mb",
            closed:true,
            tag:{
                isOpen:true,
                title:"Download Now ",
                color:"green"
            }
        },        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel deserunt repellendus!",
            size:"2mb",
            closed:false,
            tag:{
                isOpen:false,
                title:"Download Now ",
                color:"green"
            }
        },
    ]
  return (
    <div ref={ref} className='absolute  w-full h-screen flex gap-5  z-[1] text-white'>
        {data.map((item , index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground