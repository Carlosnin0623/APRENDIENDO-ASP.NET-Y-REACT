export default function LiteralesDeObjetosMejorado(){

    let apellido = 'Gavilán';

    const paisPro = 'pais';
    const paisValor = 'RD';

    let persona = {
        nombre: 'Felipe',
        apellido,
        funcionNormal(){},
        funcionFlecha: () => {},
        [paisPro]: paisValor
    }

    const retornarValorPropiedadPersona = (propiedad) => persona[propiedad];

    console.log(retornarValorPropiedadPersona('apellido'));

    console.log(persona);
}