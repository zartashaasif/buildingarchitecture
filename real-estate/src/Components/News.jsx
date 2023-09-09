import React from 'react'
import Group from '../images/Group.png';
import wires from '../images/wires.png';
import house from '../images/house.png';

function News() {
  return (
    <div className='p-5 max-w-[1200px] mx-auto'>
        <div>
            <h2 className='text-[24px] font-semibold'>News & Update</h2>
            <div className='flex gap-5 overflow-x-auto mt-4 '>
    <div className='flex flex-col gap-2 min-w-[250px]'>
        <div>
            <img class="shadow-sm" src={Group} className='md:w-[370px]' />
        </div>
        <div className='flex gap-4 '>
            <div>
                <h2 className='text-[28px] font-semibold leading-none'>12</h2>
                <p className='text-[14px] font-semibold'>Jan</p>
            </div>
            <div>
                <h6 className='font-semibold text-[16px]'>Elements of Content in Epoxy Paint </h6>
            </div>
        </div>
        <p className='text-[14px] font-medium text-[#C4C4C4] ' >
          Epoxy paint and epoxy floor
          contractor. Have you heard the two
          terms? And what does that have to
          do with the construction of existing
          buildings? Epoxy itself is included in
         the type of resin... 
         <span className='text-[#0A72AD] cursor-pointer'>Read more</span>
        </p>
    </div>
    <div className='flex flex-col gap-2 min-w-[250px]'>
        <div>
            <img class="shadow-sm" src={wires} className='md:w-[370px]' />
        </div>
        <div className='flex gap-4 '>
            <div>
                <h2 className='text-[28px] font-semibold leading-none'>12</h2>
                <p className='text-[14px] font-semibold'>Jan</p>
            </div>
            <div>
                <h6 className='font-semibold text-[16px]'>5 Right Steps in Warehouse Planning and Construction </h6>
            </div>
        </div>
        <p className='text-[14px] font-medium text-[#C4C4C4] ' >
         Planning the construction of a
         warehouse for both industrial,
         personal and other goods storage
         must be done carefully. 
         When the planning is done properly,
         the construction is... 
         <span className='text-[#0A72AD] cursor-pointer'>Read more</span>
        </p>
    </div>
    <div className='flex flex-col gap-2 min-w-[250px]'>
        <div>
            <img class="shadow-sm" src={house} className='md:w-[370px] pt-4' />
        </div>
        <div className='flex gap-4 pt-5'>
            <div>
                <h2 className='text-[28px] font-semibold leading-none'>12</h2>
                <p className='text-[14px] font-semibold'>Jan</p>
            </div>
            <div>
                <h6 className='font-semibold text-[16px]'>The Right Solution to Build a Sturdy Type 45 House </h6>
            </div>
        </div>
        <p className='text-[14px] font-medium text-[#C4C4C4] ' >
        Having a solid home is certainly
        everyone'  s dream. How not, the
         house is a place where the residents
        can rest and take shelter from the
         bad weather...
         <span className='text-[#0A72AD] cursor-pointer'>Read more</span>
        </p>
    </div>

    </div>
    </div>
    </div>
  )
}

export default News