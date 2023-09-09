import React from 'react'
import serviceroom from '../images/serviceroom.png';
import serviceinside from '../images/serviceinside.png';
import serviceoutside from '../images/serviceoutside.png';

function Services() {

  return (
    <section className='P-5 max-w-[1200px] mx-auto md:mt-10'>
    <div className='flex flex-col gap-2 text-center'>
    <div className='flex flex-col gap-2 md:flex-row justify-between'>
        <h2 className='text-[24px] font-semibold text-[ #242527] '>Our Excellent Services</h2>
        <p className='text-[14px] font-medium text-[#C4C4C4] md:max-w-[561px] text-justify ' >Check out our best service you can possibly orders in building
        your company and don't forget to ask via our email or our
        customer service if you are interested in using our services</p>
    </div>
        
    </div>
    <div className='flex gap-5 overflow-x-auto mt-4 max-w-[1200px] mx-auto md:mt-20 '>
    <div className='flex flex-col gap-2 min-w-[260px]'>
        <div>
            <img class="shadow-sm" src={serviceroom} className='md:w-[370px]' />
        </div>
        <h3 className='text-[24px] font-semibold text-[ #242527] '>Industrial</h3>
        <p className='text-[14px] font-medium text-[#C4C4C4] ' >
        Industrial development is our main
        line of business. We do Factory
        Construction, Warehouse and others
        </p>
    </div>
    <div className='flex flex-col gap-2 min-w-[260px]'>
        <div>
            <img class="shadow-sm" src={serviceinside} className='md:w-[370px]' />
        </div>
        <h3 className='text-[24px] font-semibold text-[ #242527] '>Commerical</h3>
        <p className='text-[14px] font-medium text-[#C4C4C4] ' >
        Our experience building in the
       Commercial field includes Showrooms,
       Supermalls and Office Buildings
        </p>
    </div>
    <div className='flex flex-col gap-2 min-w-[260px]'>
        <div>
            <img class="shadow-sm" src={serviceoutside} className='md:w-[370px]' />
        </div>
        <h3 className='text-[24px] font-semibold text-[ #242527] '>Resedential</h3>
        <p className='text-[14px] font-medium text-[#C4C4C4] ' >
        Residential development is the
        beginning that has shaped us to this
        day. Our development includes
        Houses & Apartments
        </p>
    </div>

    </div>
    
    </section>

  )
}

export default Services