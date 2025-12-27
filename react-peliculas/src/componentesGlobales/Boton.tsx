export default function Boton(props: BotonProps){

  return(
    <button type={props.type ?? 'button'} className="btn btn-primary text-white fw-bold" onClick={props.onClick}
    disabled={props.disabled ?? false}
    >
        {props.children}
    </button>
  )


}




interface BotonProps{
    children: React.ReactNode;
    onClick?():void; 
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean
}