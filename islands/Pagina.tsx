import { FunctionComponent } from "preact";
import { paginas } from "../types.ts";
import { useSignal } from "@preact/signals";
import { Tarea } from "../types.ts";
import { estado_columna } from "../types.ts";
import Columna from "../components/Columna.tsx";

const Pagina: FunctionComponent = () => {
    const pages = useSignal<paginas>(paginas.vacio)
    const Listatareas = useSignal<Tarea[]>([])
    const estados = useSignal<estado_columna>(estado_columna.to_do)
    const Tarea = useSignal<Tarea>({nombre: "", estado: estado_columna.to_do})

    return(
        <div>
            <Columna Listatareas={Listatareas} pages={pages} estados={estados} Tarea={Tarea}/>
        </div>
    )
}

export default Pagina