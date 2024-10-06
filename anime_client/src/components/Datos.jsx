import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDatosContext } from './useDatosContext'

export const Datos = () => {
    const {updateData}=useDatosContext()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState:{errors}} = useForm()

    const onSubmit= handleSubmit((data)=>{
        console.log(data)
        updateData(data)
        navigate('/registro')
    })
  return (
    <section className="bg-gradient-to-r from-slate-950 to-slate-900 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-3xl font-semibold text-white dark:text-white">
            <img className="w-20" src="src/assets/logoAnime.png" alt="logo"/>
            Anime Audi    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="text" {...register('name', {required:true})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anime audi" required="" />
                        {errors.name && <p>Name is required.</p>}
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your number</label>
                        <input {...register('number')}type="number" name="number" id="number" placeholder="+ 57" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label htmlFor="hobbies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your hobbies</label>
                        <input {...register('hobbies')} type="hobbies" name="hobbies" id="hobbies" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                    </div>
                    <div className="flex justify-end">
                        <button type='submit'>
                        <img src="src/assets/flecha-correcta.png" alt="" className='w-10' />
                        </button>
                    </div>
                    
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?
                        <Link to={'/'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}
