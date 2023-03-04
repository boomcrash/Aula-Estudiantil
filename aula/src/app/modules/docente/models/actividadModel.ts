export interface ActividadModel {
    id_actividad: number,
    curso_actividad: number,
    fechaPublicacion_actividad: Date,
    fechaVencimiento_actividad: Date,
    nombre_actividad: string,
    descripcion_actividad : string,
    archivosPermitidos_actividad : string,
    tipo_actividad : string,
    envios : number,
}
