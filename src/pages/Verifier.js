import React from 'react'
import VerifierHeader from '../components/verifer-header/VerifierHeader'
import VerifyTable from '../components/verifer-header/VerifyTable'

const Verifier = () => {
  return (
    <div className='my-10 w-[95%] mx-auto'>
        {/* header */}
        <VerifierHeader/>
        {/* table */}
        <VerifyTable/>
    </div>
  )
}

export default Verifier