import React from 'react'

const Scorecard = () => {
  return (
    <div className='bg-[#769656] h-[75vh] p-4 rounded-md w-[500px] flex justify-center'>
        <div className='flex flex-col w-full items-center gap-y-12'>
            <p className='text-2xl font-semibold'>
                Score
            </p>
            <div className='flex flex-col items-center w-full space-y-6'>
                <p className='text-xl font-semibold'>Current Player</p>
                <div className='w-full flex justify-evenly'>
                    <p className='text-3xl border border-black px-4 py-2 rounded-md'>Player 1</p>
                    <p className='text-3xl border border-black px-4 py-2 rounded-md'>Player 2</p>
                </div>
            </div>
            <div className='flex flex-col items-center w-full space-y-6'>
                <p className='text-xl font-semibold'>Previous Moves</p>
            </div>
        </div>
    </div>
  )
}

export default Scorecard