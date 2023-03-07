export const environment = {
    urlBAse: "http://167.71.26.121:3000",
    pathUrl: {
        urlVerificarUsuarioPassword: "/api/v1/usuarios/verifyUserByUserAndPassword",
        urlObtenerUsuariosPorUser: "/api/v1/usuarios/getUsersByUserName",

        urlDocentes: {
            obtenerCursos: "/api/v1/cursos/getCursosDocente",
            obtenerActividades: "/api/v1/actividades/getActividadByCurso",
            obtenerIdDocente: "/api/v1/usuarios/getUsersCompleteData/",
            modificarActividad: "/api/v1/actividades/updateActividad",
            agregarActividad: "/api/v1/actividades/addActividad",
            obtenerEntrega: "/api/v1/actividades/entregaActividad",
            obtenerParticipantes: "/api/v1/cursos/getParticipantesCurso",
            borrarActividad: "/api/v1/actividades/deleteActividad"
        },
    },

}