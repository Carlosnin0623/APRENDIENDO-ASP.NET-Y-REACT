export default function Paginacion(){


}



interface PaginacionProps{
    paginaActual: number;
    registrosPorPagina: number;
    cantidadTotalRgistros: number;
    registroPorPaginaOpciones: number[];
    onCambioPaginacion: (pagina: number, registrosPorPagina: number) => void;
}