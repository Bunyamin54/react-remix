import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const InstructorDetail = () => {

  let {id}=useParams()

  // let location = useLocation()
  let {state, pathname} = useLocation()

  return (
    <div className='p-3'>
      <p>
        from useParam : I"am instrcutur -
        <span className='text-danger fw-bolder'>{id}</span>
      </p>
      <p>
        from useLocation : I"am instrcutur -
        <span className='text-danger fw-bolder'>{state?.name}</span>
      </p>
      <p>our path is:{pathname}</p>
    </div>
  )
}

export default InstructorDetail