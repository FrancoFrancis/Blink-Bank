import React from 'react'

const Button = ( {styles} ) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient mt-5 font-poppins font-medium text-primary outline-none ${styles} rounded-[10px] `}  >

      Get Started

    </button>
  )
}

export default Button