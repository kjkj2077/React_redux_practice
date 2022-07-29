import React from 'react'
import { useSelector } from 'react-redux'
import { GrandSonBox } from './GrandSonBox'
export const  Box = () => {
    let count =useSelector(state=>state.count)
  return (
    <div>
        this is {count}th Box<br/><br/>
        <GrandSonBox/>
    </div>
  )
}
