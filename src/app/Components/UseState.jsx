"use client"
import { useState } from "react";


export default function UseState() {
    const [item, setItem] = useState('')
    // const datas = data2.filter(course => course.name.includes(item.toLowerCase()))
    
    function onChange(e){
        return setItem(e.target.value)
    }
  return (
    <input type="text" name="text" id="text" placeholder="Search for a country" className="
    outline-none w-1/2 m-auto p-3 my-5  border-sky-500 border-4 rounded-lg flex items-center"
   value={item}
   onChange={onChange} />
  )
}
