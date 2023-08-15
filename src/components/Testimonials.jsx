import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeadbackCard from "./FeedbackCard"

const Testimonials = () =>
 (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      {/*TODO */}

      <div/>

      <div className='w-full flex justify-between items-center md:flex-row flex:col sm:mb-16 mb-6 relative z-[1]'>

        <h1 className={styles.heading2}>What are people saying <br  className='sm:block hidden'/>
         about Blink Bank</h1>

         <div className='w-full md:mt-0 mt-6'>

          <p>
            Whatsover you need to accept card payment is here, gorw your business
          </p>

         </div>

      </div>

    </section>

  )

export default Testimonials