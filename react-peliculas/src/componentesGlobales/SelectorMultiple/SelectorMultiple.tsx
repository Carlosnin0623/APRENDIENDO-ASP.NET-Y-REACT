import type SelectorMultipleModel from "./SelectorMultiple.model";

import styles from './SelectorMultiples.module.css';

export default function SelectorMultiple(props: SelectorMultipleProps){

    const seleccionar = (item: SelectorMultipleModel) => {
        const seleccionados = [...props.seleccionados, item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);


        props.onChange(seleccionados, noSeleccionados);
    }

    const desSeleccionar = (item: SelectorMultipleModel) => {
        const seleccionados = props.seleccionados.filter(valor => valor !== item);
        const noSeleccionados = [...props.noSeleccionados, item];
         props.onChange(seleccionados, noSeleccionados);
      
    }

    const seleccionarTodo = () => {
        const seleccionados = [...props.seleccionados, ...props.noSeleccionados];
        const noSeleccionados: SelectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);
    }

    const desSeleccionarTodo = () => {
        const seleccionados: SelectorMultipleModel[] = []
        const noSeleccionados = [...props.seleccionados, ...props.noSeleccionados];
        props.onChange(seleccionados, noSeleccionados);
    }

    return(
        <>
          <div className={styles.div}>
            <ul>
                {props.noSeleccionados.map(item => <li key={item.llave}
                 onClick={() => seleccionar(item)}
                >{item.descripcion}</li>)}
            </ul>

            <div className={styles.botones}>
                <button type="button" onClick={seleccionarTodo}>{'>>'}</button>
                <button type="button" onClick={desSeleccionarTodo}>{'<<'}</button>
            </div>

            <ul>
                {props.seleccionados.map(item => <li key={item.llave}
                 onClick={() => desSeleccionar(item)}
                >{item.descripcion}</li>)}
            </ul>
          </div>
        </>
    )
}



interface SelectorMultipleProps{
    seleccionados: SelectorMultipleModel[];
    noSeleccionados: SelectorMultipleModel[];
    onChange(seleccionados: SelectorMultipleModel[], noSeleccionados: SelectorMultipleModel[]): void;

}