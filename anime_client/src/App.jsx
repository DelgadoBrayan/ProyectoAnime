
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Animes } from './pages/Animes'
import { SearchAnime } from './pages/SearchAnime'
import { Register } from './components/Register'
import { Datos } from './components/Datos'
import { DatosContext } from './components/useDatosContext'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DetailAnime } from './pages/DetailAnime'

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co', // Reemplaza con la URL de la API de Anime List
    cache: new InMemoryCache(),
  });

  const AppRouter = ()=>{
    const router = useRoutes([
      {path:'/', element:<Login/>},
      {path:'/animes', element:<Animes/>},
      {path:'/searchanime', element: <SearchAnime/>},
      {path:'/datos', element: <Datos/>},
      {path:'/registro', element:<Register/>},
      {path: '/animes/:id', element: <DetailAnime/>}
    ])

    return router
  }

  return (
    <>
    <ApolloProvider client={client}>
    <BrowserRouter>
  <DatosContext>
  <AppRouter/>
  </DatosContext>
   
    </BrowserRouter>
    </ApolloProvider>
    </>
  )
}

export default App
