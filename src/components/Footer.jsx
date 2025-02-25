import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-[#FF8F02] flex justify-center sm:px-10 px-2 pt-20 pb-10'>
      <div className='flex items-center text-center sm:text-start w-full sm:flex-row flex-col gap-15 flex-wrap justify-between'>
        <img className='w-32' src="../TastyTrove.svg" />
        <div className='flex items-center'>
          <div className='h-32 ml-10 mr-7 my-auto w-[1px] opacity-30 hidden sm:block bg-black'></div>
          <div className='flex flex-col gap-3 text-sm opacity-70'>
            <div className='flex gap-5 sm:mr-20'>
              <h4>About</h4>
              <h4>Benefits</h4>
              <h4>Career</h4>
              <h4>Support</h4>
            </div>
            <p>© 2025 TastyTrove. All right reserved.</p>
          </div>
        </div>
        <div className='opacity-70'>
          <div className='flex gap-5 mb-2'>
            <img className='w-5' src="https://img.icons8.com/?size=50&id=32292&format=png" />
            <img className='w-5' src="https://img.icons8.com/?size=50&id=16712&format=png" />
          </div>
          <h2 className='text-sm'>Support: abubakarmarri007@gmail.com</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer