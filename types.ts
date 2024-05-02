export type Tarea = {
    nombre: string
    estado: estado_columna
}

export enum estado_columna {
    to_do = "TO DO",
    in_progress = "In progress",
    in_review = "In review",
    done = "Done"
}

export enum paginas {
    Formulario = "formulario",
    Sheet = "sheet",
    vacio = ""
}