import { Routes, Route } from "react-router";
import IndiceGeneros from "./features/generos/componentes/IndiceGeneros";
import LandingPage from "./features/home/componentes/LandingPage";
import CrearGenero from "./features/generos/componentes/CrearGenero";
import EditarGenero from "./features/generos/componentes/EditarGenero";
import IndiceActores from "./features/actores/componentes/IndiceActores";
import CrearActores from "./features/actores/componentes/CrearActores";
import EditarActores from "./features/actores/componentes/EditarActores";
import IndiceCines from "./features/cines/componentes/IndiceCines";
import CrearCines from "./features/cines/componentes/CrearCines";
import EditarCines from "./features/cines/componentes/EditarCines";
import CrearPelicula from "./features/peliculas/componentes/CrearPelicula";
import EditarPelicula from "./features/peliculas/componentes/EditarPelicula";
import RutaNoEncontrada from "./componentesGlobales/RutaNoEncontrada";
import FiltrarPeliculas from "./features/peliculas/componentes/FiltrarPeliculas";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/generos' element={<IndiceGeneros />} />
            <Route path='/generos/crear' element={<CrearGenero />} />
            <Route path='/generos/editar/:id' element={<EditarGenero />} />

            <Route path='/actores' element={<IndiceActores />} />
            <Route path='/actores/crear' element={<CrearActores />} />
            <Route path='/actores/editar/:id' element={<EditarActores />} />


            <Route path='/cines' element={<IndiceCines />} />
            <Route path='/cines/crear' element={<CrearCines />} />
            <Route path='/cines/editar/:id' element={<EditarCines />} />


            <Route path='/peliculas/crear' element={<CrearPelicula />} />
            <Route path='/peliculas/editar/:id' element={<EditarPelicula/>} />

            <Route path="/peliculas/filtrar" element={<FiltrarPeliculas/>} />
            
            
           <Route path='*' element={<RutaNoEncontrada/>} />
        </Routes>
    )
}