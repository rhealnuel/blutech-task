import React from 'react'
import logo from '../assets/logo.png'
import doctor from "../assets/doctor.png"

const Navbar = (props) => {


  return (
    <div className='flex justify-between p-3 px-6 bg-white'>
      <div className='flex gap-24'>
        <div>
          <img src={logo} alt="" className='h-[30px]' />
        </div>
        <div className='border border-gray-200 rounded-md flex items-center px-6 w-[350px]'>
          <svg className='cursor-pointer' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M11.6151 12.8879C10.3959 13.8356 8.86384 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.86384 13.8356 10.3959 12.8879 11.6151L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L11.6151 12.8879ZM12.6 7.2C12.6 10.1823 10.1823 12.6 7.2 12.6C4.21766 12.6 1.8 10.1823 1.8 7.2C1.8 4.21766 4.21766 1.8 7.2 1.8C10.1823 1.8 12.6 4.21766 12.6 7.2Z" 
              fill="#9AA0A8" 
            />
          </svg>
          <input 
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
            type="text" 
            placeholder='Search by patients...'  
            className='ml-6 w-[300px] h-6 outline-none'
          />
        </div>
      </div>
      <div className='profile flex items-center gap-4'>
        <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12.4051 21.05C13.428 21.05 14.2564 20.2215 14.2564 19.1987H10.5538C10.5538 20.2215 11.3823 21.05 12.4051 21.05ZM17.959 15.4962V10.8679C17.959 8.0216 16.4456 5.64733 13.7936 5.0179V4.38846C13.7936 3.62018 13.1734 3 12.4051 3C11.6368 3 11.0167 3.62018 11.0167 4.38846V5.0179C8.36471 5.64733 6.85128 8.0216 6.85128 10.8679V15.4962L5 17.3474V18.2731H19.8103V17.3474L17.959 15.4962Z" 
            fill="#9B9FAB" 
          />
          <circle cx="17" cy="7" r="3" fill="white" />
          <circle cx="17" cy="7" r="2" fill="#FF3D3D" />
        </svg>
        <img src={doctor} alt="" className='rounded-full w-10 h-10'/>
        <span>Decko</span>
        <svg className='cursor-pointer' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M7.41944 7.37079L13.0694 1.71079C13.1632 1.61783 13.2376 1.50723 13.2883 1.38537C13.3391 1.26351 13.3652 1.1328 13.3652 1.00079C13.3652 0.868781 13.3391 0.738075 13.2883 0.616216C13.2376 0.494356 13.1632 0.383755 13.0694 0.290792C12.8821 0.104542 12.6286 -3.21984e-08 12.3644 -4.37463e-08C12.1003 -5.52942e-08 11.8468 0.104541 11.6594 0.290792L6.65944 5.24079L1.70944 0.290792C1.52207 0.104541 1.26862 -5.2876e-07 1.00444 -5.40308e-07C0.740251 -5.51856e-07 0.486799 0.104541 0.299437 0.290792C0.204948 0.383407 0.129778 0.493852 0.0782814 0.615727C0.0267849 0.737602 -1.33894e-05 0.868485 -0.000562712 1.00079C-1.3401e-05 1.1331 0.0267848 1.26398 0.0782813 1.38586C0.129778 1.50773 0.204948 1.61818 0.299436 1.71079L5.94944 7.37079C6.04308 7.4723 6.15673 7.55331 6.28323 7.60871C6.40973 7.66412 6.54633 7.69272 6.68444 7.69272C6.82254 7.69272 6.95914 7.66412 7.08564 7.60871C7.21214 7.55331 7.32579 7.4723 7.41944 7.37079Z" 
            fill="#94979E" 
          />
        </svg>
      </div>
    </div>
  )
}

export default Navbar
