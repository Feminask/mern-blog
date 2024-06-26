import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='min-h-screen mt-20 p-5'>
     <div className='flex p-3 max-width-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
            {/* left */} 
            <div className='flex-1'>
     <Link
        to="/"
        className="   font-bold dark:text-white text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Femi's
        </span>
        Blog
      </Link>
<p className='text-sm mt-5'>Join our vibrant community and share your thoughts with the world! BlogNexus is a powerful and fully responsive MERN stack web application where you can create, manage, and engage with posts and comments. Whether you're an avid writer or an enthusiastic reader, BlogNexus offers a seamless experience across all your devices. Sign up now to start your blogging journey with us!</p>
     </div>
           {/* //right */}
<div className='flex-1'>
  <form className='flex flex-col gap-4' >
    <div className=''>
      <Label value='Your username'></Label>
      <TextInput
      type='text'
      placeholder='username'
      id='username'

      ></TextInput>
    </div>
    <div className=''>
      <Label value='Your email'></Label>
      <TextInput
      type='email'
      placeholder='name@company.com'
      id='email'

      ></TextInput>
    </div>
    <div className=''>
      <Label value='Your password'></Label>
      <TextInput
      type='text'
      placeholder='Password'
      id='password'

      ></TextInput>
    </div>
<Button gradientDuoTone='purpleToPink' type='submit'>
  Sign Up
</Button>
  </form>
  <div className='flex gap-2 tex-sm mt-5'>
    <span>Have an account?</span>
    <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
  </div>
</div>
     </div>
    </div>
  )
}

export default SignUp
