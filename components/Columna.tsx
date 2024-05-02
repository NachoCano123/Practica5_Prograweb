import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Tarea, paginas } from "../types.ts";
import { estado_columna } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Formulario from "./Formulario.tsx";

type props = {
    Listatareas: Signal<Tarea[]>
    pages: Signal<paginas>
    estados: Signal<estado_columna>
    Tarea: Signal<Tarea>
}

const Columna: FunctionComponent<props> = ({Listatareas, pages, estados, Tarea}) => {
    return(
        <div class="fondo">
            
            <div class="Columna">
                <ul>
                    {Listatareas.value.map((t)=>{
                    if(t.estado === estado_columna.to_do){
                        return (<div class="Tarea"><p> Nombre: {t.nombre}</p><p> Estado: {t.estado}</p></div>)
                    }})}
                </ul>
            </div>
            <div class="Columna">
                <ul>
                    {Listatareas.value.map((t)=>{
                    if(t.estado === estado_columna.in_progress){
                        return (<div class="Tarea"><p> Nombre: {t.nombre}</p><p> Estado: {t.estado}</p></div>)
                    }})}
                </ul>
            </div>
            <div class="Columna">
                <ul>
                    {Listatareas.value.map((t)=>{
                    if(t.estado === estado_columna.in_review){
                        return (<div class="Tarea"><p> Nombre: {t.nombre}</p><p> Estado: {t.estado}</p></div>)
                    }})}
                </ul>
            </div>
            <div class="Columna">
                <ul>
                    {Listatareas.value.map((t)=>{
                    if(t.estado === estado_columna.done){
                        return (<div class="Tarea"><p> Nombre: {t.nombre}</p><p> Estado: {t.estado}</p></div>)
                    }})}
                </ul>
            </div>
            <button class="BotonFormulario" onClick={() => {pages.value = paginas.Formulario}}> Crear </button> {/*Al hacer click en el me tiene que llevar a la pagina del formulario*/}
            {IS_BROWSER && pages.value === paginas.Formulario && (<Formulario Listatareas={Listatareas} Estados={estados} Tarea={Tarea} pages={pages}/>)}
        </div>
    )
}

export default Columna