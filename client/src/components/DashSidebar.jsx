import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { signoutSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'

function DashSidebar() {
    const location = useLocation()
    const dispatch = useDispatch()
const [tab,setTab]=useState('')

const handleSignout = async () => {
  try {
    const res = await fetch('/api/user/signout', {
      method: 'POST',
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      dispatch(signoutSuccess());
    }
  } catch (error) {
    console.log(error.message);
  }
};

useEffect(()=>{
  const urlParams=new URLSearchParams(location.search)
  const tabFromUrl = urlParams.get('tab')
  if(tabFromUrl){
    setTab(tabFromUrl)
  }
},[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
<Sidebar.Items>
<Sidebar.ItemGroup>
<Link to='/dashboard?tab=profile'>
               <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'}labelColor='dark' as='div'>    Profile
               </Sidebar.Item>
    
</Link>           <Sidebar.Item className='cursor pointer'  icon={HiArrowSmRight} 
        onClick={handleSignout}   >    SignOut
           </Sidebar.Item>

</Sidebar.ItemGroup>    
</Sidebar.Items>    </Sidebar>
  )
}

export default DashSidebar
