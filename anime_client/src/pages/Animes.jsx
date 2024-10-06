import Cookies from "js-cookie"
import axios from "axios";
import { useState, useEffect } from "react";
import { DialogPerfil } from "../components/DialogPerfil";
import { gql, useQuery } from "@apollo/client";
import { GET_TOP_ANIMES } from "../Queries/topAnimes";
import { Link } from "react-router-dom";

export const Animes = () => {
  const [dataUser, setDataUser] = useState()
  const [openDialog, setOpenDialog] = useState(false)
  const [topAnimes, setTopAnimes] = useState()

  const token = Cookies.get('token')
  const { loading, error, data } = useQuery(GET_TOP_ANIMES)

  useEffect(() => {
    if (data) {
      setTopAnimes(data.Page.media);
    }
  }, [data]);
  useEffect(() => {
    const obtenerUsuario = async () => {
      const response = await axios.get(`http://localhost:4444/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDataUser(response.data.user);
    };
    obtenerUsuario();
  }, []);

  if (loading) return <p className="text-xl font-bold">Cargando....</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(topAnimes)
  return (
    <aside className="bg-gradient-to-r from-slate-950 to-slate-900 ">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="src/assets/logoAnime.png" alt="" className="w-44 ml-10" />
          <h1 className="text-white text-3xl font-mono">ANIME AUDIT</h1>
        </div>

        <img
          onClick={() => setOpenDialog(!openDialog)}
          src="src/assets/profile-user.png"
          alt=""
          className="w-16 cursor-pointer bg-white rounded-full mr-10" />
      </header>
      {openDialog && <DialogPerfil dialog={openDialog} user={dataUser} />}
      <section className=" w-screen text-white flex justify-around gap-5 flex-wrap">
        {
          topAnimes && topAnimes.map((anime) => (
            <Link to={`/animes/${anime.id}`}> 
          <div key={anime.id} className="border-2 rounded-lg p-5 ">
            <div  className="flex gap-5 ">
              <img className="rounded-lg" src={anime.coverImage.large} alt={anime.title.romaji} />
              <div className="w-52">
              <h2 className="font-bold text-xl">Nombre:
              <p className="font-normal text-lg">
              {anime.title.romaji}
              </p>
              </h2>
              <p className="font-bold text-xl">Episodes:
                <h1 className="font-normal text-lg">
                 {anime.episodes}
                </h1>
                 </p>
              <p className="font-bold text-xl">Genres: 
                <h1 className="font-normal text-lg">
                {anime.genres.join(', ')}
                </h1>
                </p>
              <p className="font-bold text-xl">Average Score:
                <h1 className="font-normal text-lg">
                 {anime.averageScore}
                </h1>
                 </p>
              <p className="font-bold text-xl">Popularity:
                <h1 className="font-normal text-lg">
                 {anime.popularity}
                </h1>
                 </p>
              </div>
            </div>
          </div>
          </Link>
          ))
        }
      </section>
    </aside>
  )
}
