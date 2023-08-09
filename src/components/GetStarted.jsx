import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[60px] rounded-full bg-blue-gradient p-[5px] cursor-pointer`}>

      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        
        <div className={`${styles.flexStart} flex-row`}>
          <p className='fot-poppins font-medium text-[18px] leading-[23px]'>
  
            <span className='text-gradient'>Sign-up</span>
            <img src={arrowUp} alt=""  className='w-[23px] h-[23px] object-contain' />
          </p>
        </div>

      </div>


    </div>
  )
}

export default GetStarted