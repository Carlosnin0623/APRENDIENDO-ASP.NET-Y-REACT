export default function Boton(props: BotonProps){

  return(
    <button type="button" className="btn btn-primary text-white fw-bold" onClick={props.onClick}>
        {props.children}
    </button>
  )


}




interface BotonProps{
    children: React.ReactNode;
    onClick():void; 
}