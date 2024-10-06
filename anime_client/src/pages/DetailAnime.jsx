import React, { useEffect, useState } from 'react'
import { GET_ANIME_DETAILS } from '../Queries/animeDetail'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_CHARACTER_DETAILS } from '../Queries/characterDetail'


export const DetailAnime = () => {
    const [anime, setAnime] = useState()
    const { id } = useParams()
    const [character, setCharacter] = useState()
    const [getCharacterDetails, {loading: loandingCharacter, error:errorCharacter, data:dataCharacter}] = useLazyQuery(GET_CHARACTER_DETAILS)
    const handleSubmit = (e)=>{
        e.preventDefault()
        getCharacterDetails({variables:{name:character}})
    }

    const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
        variables: { id }
    })
    useEffect(() => {
        if (data) {
            console.log(data)
            setAnime(data.Media)
        }
    }, [data])
    if (loading) return <p>cargando ...</p>
    if (error) return <p>Error {error.message}</p>
    return (
        <div className='bg-gradient-to-r from-slate-950 to-slate-900 text-white'>
            <h1 className='font-bold text-4xl text-center pt-5 '>DETAIL ANIME</h1>
            <form className="w-96 mb-5 mt-8 " onSubmit={handleSubmit}>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        onChange={(e) => setCharacter(e.target.value)}
                        type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search characters ..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            {anime &&
                <>
                    <img src={anime.bannerImage} alt="Banner" />
                    <h1 className='text-4xl font-bold text-center mt-10 mb-5'>{anime.title.romaji}</h1>
                    <div className='flex gap-10 justify-around'>
                        <p className='w-96'><h1 className='text-2xl font-bold'>Description</h1>{anime.description}</p>
                        <div className='flex flex-col gap-8'>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold '>
                                    Episodes:
                                </h1>
                                {anime.episodes}</p>
                            <p className=' font-normal text-xl'>
                                <h1 className='font-bold'>
                                    Genres:
                                </h1>
                                {anime.genres.join(', ')}</p>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold' >
                                    Average Score:
                                </h1>
                                {anime.averageScore}</p>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold'>
                                    Popularity:
                                </h1>
                                {anime.popularity}</p>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold'>
                                    Start Date:
                                </h1>
                                {anime.startDate.year}-{anime.startDate.month}-{anime.startDate.day}</p>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold'>
                                    End Date:
                                </h1>
                                {anime.endDate.year}-{anime.endDate.month}-{anime.endDate.day}</p>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold'>
                                    Duration:
                                </h1>
                                {anime.duration} minutes per episode</p>
                            <p className='flex font-normal text-xl'>
                                <h1 className='font-bold'>
                                    Status:
                                </h1>
                                {anime.status}</p>
                            <p className='font-normal text-xl w-80'>
                                <h1 className='font-bold'>
                                    Studios:
                                </h1>
                                {anime.studios.edges.map(edge => edge.node.name).join(', ')}</p>
                        </div>
                    </div>
                </>
            }

            <section>

            {loandingCharacter && <p>Loading character details...</p>}
      {errorCharacter && <p>Error in character details: {errorCharacter.message}</p>}
      {dataCharacter && dataCharacter.Character && (
        <div>
          <h2 className='text-5xl font-bold text-center'>{dataCharacter.Character.name.full}</h2>
            <div className='flex gap-10'>
          <img src={dataCharacter.Character.image.large} alt={dataCharacter.Character.name.full} />
          <div className='flex flex-col gap-8 text-xl'>
            <p>Age: {dataCharacter.Character.age}</p>
          <p>Gender: {dataCharacter.Character.gender}</p>
          <p>Birthday: {dataCharacter.Character.dateOfBirth.year}{dataCharacter.Character.dateOfBirth.month}-{dataCharacter.Character.dateOfBirth.day}</p>
          <a className='text-cyan-600 font-bold text-2xl hover:text-3xl' href={dataCharacter.Character.siteUrl} target="_blank" rel="noopener noreferrer">More Info</a>
          </div>
          
            </div>
          <p className='text-justify mt-8 mb-8'>{dataCharacter.Character.description}</p>
          
          <h3 className='text-4xl font-bold mb-5'>Appearances</h3>
          <ul className='flex flex-wrap gap-5 '>
            {dataCharacter.Character.media.edges.map(({ node }) => (
              <li key={node.id}>
                <img className='rounded-lg' src={node.coverImage.large} alt={node.title.romaji} />
                <p className='mt-4 text-2xl w-60'>{node.title.romaji}</p>
                <p className='text-lg w-60'>{node.title.native}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
            </section>
        </div>
    )
}
