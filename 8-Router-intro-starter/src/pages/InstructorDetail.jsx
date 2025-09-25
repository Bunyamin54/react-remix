import React from 'react'
import { useParams } from 'react-router-dom'

const InstructorDetail = () => {

  let {id}=useParams()

  return (
    <div className='p-3'>
      <p>
        from useParam : I"am instrcutur {" "}
        <span className='text-danger fw-bolder'>{id}</span>
      </p>
    </div>
  )
}

export default InstructorDetail