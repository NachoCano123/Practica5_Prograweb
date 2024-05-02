import { FunctionComponent } from "preact";
import { Tarea, estado_columna, paginas } from "../types.ts";
import { Signal } from "@preact/signals";
import { useState } from "preact/hooks";
import Pagina from "../islands/Pagina.tsx";

type props = {
    Listatareas: Signal<Tarea[]>
    Estados: Signal<estado_columna>
    Tarea: Signal<Tarea>
    pages: Signal<paginas>
}
const Formulario: FunctionComponent<props> = ({Listatareas, Estados, Tarea, pages}) => {
    const [nombre, setnombre] = useState<string>('')
    const [estado, setestado] = useState<estado_columna>(estado_columna.to_do)
    // estado para cada valor
    // en cada input deberas actualizar el listado
    // 
    const addTarea = (Tarea: Tarea, Listatareas: Tarea[]) => {
        const Nuevalista = [...Listatareas];
        Nuevalista.push(Tarea)
        return Nuevalista;
      };

    return(
        <div onClick={() => <Pagina/>}> {/*Cuando clickas fuera debes de volver a la pagina inicial*/}
            <form class="Formulario" onSubmit={(e) => {
                e.preventDefault()
                const mitarea = { nombre: nombre, estado: estado }
                Listatareas.value = addTarea(mitarea, Listatareas.value)
            }}>
                <label for="nombre"></label>
                <input type="text" id="name" name="name" placeholder={"Nombre de la tarea"} value={nombre} onBlur={
                    (e) => setnombre(e.currentTarget.value)
                } required />

                <label for="estado" placeholder={"Nombre de la tarea"}></label>
                <select id="estado" name="estado" required onBlur={(e) => setestado(e.currentTarget.value as estado_columna)}>
                    <option value={estado_columna.to_do}>TO DO</option>
                    <option value={estado_columna.in_progress}>In progress</option>
                    <option value={estado_columna.in_review}>In review</option>
                    <option value={estado_columna.done}>Done</option>
                </select>

                <button class="CrearTarea" type="submit" onClick={() => <Pagina/>}>Crear</button> {/*Cuando le das al boton para crear la tarea debes volver a la pagina inicial*/}
            </form>
        </div>
    )
}

export default Formulario