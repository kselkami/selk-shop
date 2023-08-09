import React, { useRef } from 'react'

const MouseFollow = () => {
    const mouseElement = useRef();
    
    window.addEventListener("mousemove", event => {
            mouseElement.current.style.left = (event.clientX) + "px";
            mouseElement.current.style.top = (event.clientY) + "px";
    });
  
    return (
    <div ref={mouseElement} className={`h-4 w-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-pink-500 rounded-[50%]`}></div>
  )
}

export default MouseFollow