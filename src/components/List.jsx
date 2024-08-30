import React from 'react'
import listdata from '../assets/dummydata'
import Card from "./Card"

const List = () => {

  return (
    <div className='h-full' id='listdata'>
       {
        listdata.map((item)=>{
            return (
                <Card key={item.id} item={item} />
            )
        })
       }
    </div>
  )
}

export default List