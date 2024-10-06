import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
export const Login = () => {
   const navigate = useNavigate()
   const {
    register, 
    handleSubmit,
    formState:{errors}}= useForm()

    const onSubmit = handleSubmit(async(data)=>{
      const response = await axios.post('http://localhost:4444/auth/login',
      {
        email: data.email,
        password: data.password
      })
      
      Cookies.set('token', response.data.token, {expires:7})

      navigate('/animes')
    })
    
  return (
    <section class="bg-gradient-to-r from-slate-950 to-slate-900 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        
            <img className="w-20 mr-2" src="src/assets/logoAnime.png" alt="logo" />
          <h1 className='text-white text-3xl'>
          Anime Audit 
            </h1>   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input {...register('email', {required:true})} type="email" name='email' id='email' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@AnimeAudit.com" required="" />
                        {errors.email && <span className='text-red-500 text-lg'>Email es requerido</span>}
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input {...register('password', {required:true})} type="password" name='password' id='password' placeholder='••••••••' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        {errors.password && <span className='text-red-500 text-lg'>contraseña es requerida</span>}
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                          
                                <input  id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full border-2 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-black  dark:text-gray-400">
                      Don’t have an account yet?
                      <Link className="text-primary-600 font-bold hover:underline dark:text-primary-500" to={'/datos'}> Sing up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
