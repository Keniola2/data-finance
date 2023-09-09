import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-black px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className=' lg:col-span-2 '>
              <h1 className=' font-bold md:text-3xl sm:text-1xl text-xl py-2 '>Want tips and tricks to optimize your flow?</h1> 
              <p>Sign up to our newsletter and stay up to date</p> 
            </div>
            <div className=' my-4 '>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full  '>
                    <input className='p-3 rounded-md flex w-full text-black' type="email" name="/" placeholder='Enter Email' id="" />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Notify me </button>
                </div>
                <p>We care about the protection of your data.Read our <span className='text-[#00df9a] underline'>Privacy policy</span></p>
            </div>
        </div>

    </div>
  )
}

export default Newsletter