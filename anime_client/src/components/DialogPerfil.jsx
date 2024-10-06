import React from 'react'

export const DialogPerfil = ({dialog, user}) => {
  return (
    <dialog className='w-80 pt-7 pb-5'  open={dialog}>
        <header className='flex justify-center items-center gap-5 '>
            <h1 className='font-bold text-xl'>Anime Audi</h1>
            <img src="src/assets/logoAnime.png" alt="" className='w-20' />
        </header>
        <article className='ml-5 flex flex-col gap-3 p-3'>
            <h1 className='font-bold'>Nombre <p className='font-mono'>{user.name}</p>  </h1>
            <h1 className='font-bold'>email <p className='font-mono'>{user.email}</p>  </h1>
            <h1 className='font-bold'>telefono <p className='font-mono'>{user.number}</p>  </h1>
            <h1 className='font-bold'>hoobies <p className='font-mono'>{user.hobbies}</p>  </h1>
        </article>
        
    </dialog>
  )
}
