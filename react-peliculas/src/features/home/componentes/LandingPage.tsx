import { useEffect, useState } from 'react'
import ListadoPeliculas from '../../peliculas/componentes/ListadoPeliculas';
import type Pelicula from '../../peliculas/modelos/pelicula.model';

export default function LandingPage() {

      /*
      const pelicula: Pelicula = {
        id: 1,
        titulo: 'Sonic 3',
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg'
      }
    
      */
    
      const [peliculas, setPeliculas] = useState<LandingPageState>({});
    
      useEffect(() => {
        setTimeout(() => {
          const enCines: Pelicula[] = [
            {
              id: 1,
              titulo: 'Sonic 3',
              poster: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg'
            },
            {
              id: 2,
              titulo: 'John Wick: Capter 4',
              poster: 'https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg'
            }
          ]
    
          const proximosEstrenos: Pelicula[] = [
            {
              id: 3,
              titulo: 'Spider-Man: Far From Home',
              poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
            }
          ]
    
          setPeliculas({ enCines, proximosEstrenos })
        }, 1000)
      }, [])
    

    return (
        <>
            <h3>En Cines</h3>
            <ListadoPeliculas peliculas={peliculas.enCines} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}

interface LandingPageState {
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}
