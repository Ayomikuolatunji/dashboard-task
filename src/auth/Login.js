import React from 'react'

const Login = () => {
  return (
    <div className='bg-[ #E5E5E5] w-full h-screen flex justify-center items-center'>
        {/* form inner container */}
        <div className='w-full max-w-xs'>
            {/* form header */}
            <div className='flex flex-col items-center justify-center h-auto'>
                <img src='/logo.svg' alt='logo' className='w-auto h-16' />
                <p className='text-center text-gray-600 text-sm'>
                    Sign in to your account
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login