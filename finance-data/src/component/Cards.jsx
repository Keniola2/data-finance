import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt= "single customer" />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB storage </p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Up to 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className="w-full bg-gray-100 shadow-xl flex flex-col rounded-lg p-4 md:my-0 my-8 hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent ' src={double} alt= "single customer" />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>3TB storage </p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Up to 10GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black'>Start Trial</button>
            </div>
            <div className="w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt= "single customer" />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>10TB storage </p>
                    <p className='py-2 border-b mx-8'>5 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Up to 20GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards 