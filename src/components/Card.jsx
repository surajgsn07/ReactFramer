import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion";

function Card({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} 
    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} 
    dragElastic={0.2} className=' relative w-52 h-60 rounded-3xl bg-zinc-900 p-4  overflow-hidden'>
        <FaFileAlt/>
        <p className='leading-none py-5 text-sm'>{data.desc}</p>
        <div className='absolute bottom-0  left-0 w-full'> 
            <div className='flex item-center justify-between px-2 py-4'>
                <div className='text-xs '>{data.size}</div>
                <span>
                    {data.closed?(<MdDownloadForOffline size="15px"/>):(<IoIosCloseCircleOutline/>)}
                </span>
            </div>

            {data.tag.isOpen?(
            <div className={`py-2 ${data.tag.color==="green"?"bg-green-600":"bg-blue-600"} flex justify-center items-center`}>
                <div className='text-sm font-semibold'>{data.tag.title}</div>
            </div>
            ):null}
            
        </div>
        
    </motion.div>
  )
}

export default Card