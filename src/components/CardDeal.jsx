import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () =>  (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>

        <h2 className={styles.heading2}>
          Find a better card <br /> deal easily
        </h2>

        <p className={`${styles.paragraph} max-w[470px] mt-5`}>
          We offer a much more cheaper and flexible card retrieval structure, at blink bank you are our priority
        </p>
      
      <Button styles="mt-10 w-[150px]"  />

      </div>

      <div className={layout.sectionImg}>
        <img src={card}  alt='card' className='w-[80%] h-[100%] '/>

      </div>


    </section>
  )


export default CardDeal