import React from 'react'
import styles from '../style'
import { discount, hands, sandy} from '../assets'
import GetStarted from './GetStarted'


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col overflow-hidden ss:flex sm:flex ${styles.paddingY}`}
    >

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6` }>

        <div className="flex flex-row items-center py-[6px]  px-4 bg-discount-gradient rounded-[10px] mb-2">

          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}

          {/* <p className={`${styles.paragraph}ml-2`}>

          <span className='text-white'> 50%</span> Discount for {" "}
          <span className='text-white'> 2 Months</span> Account
          </p> */}

        </div>

        <div className='flex flex-row justify-between items-center w-full'>

          <h1 className='flex-1 font-poppins font-semibold ss:text-[52px] text-[48px] text-white ss:leading-[60px] leading-[75px]'>
            The Payment <br className='sm:block hidden' /> solution for <br /> {" "} 
            <span className='text-gradient'> Stars</span> {" "} 

            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>

            {/* <GetStarted/> */}

          </div>

        </div>

  

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our experts use a systematic approach to identify credit cards that match your needs, analyzing annual percentage rates and fees meticulously.

        </p>
      </div>

      <div className={` `}>
        <img src={hands} alt="" className='hands w-[100%] h-[100%] relative z-[5] mr-40'/> 

        <div className='absolute z-[0] w-[40%] h-[36%] top-0 pink__gradient'/>
      </div>

      <div className={` ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>

      </div>

    </section>
  )


export default Hero
