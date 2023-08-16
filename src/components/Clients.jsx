import React from 'react'
import { clients } from '../constants'
import styles  from '../style'


const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>

      <div className={`${styles.flexCenter} flex-wrap w-full`}>

        {clients.map((client) => (

          <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] feedback-card py-4 rounded-full`}>

            <img src={client.logo} alt="client" className='sm:w-[192] w-[100px] object-contain bg-text-gradient' />

          </div>
          
        ) )}

      </div>

    </section>
  )


export default Clients