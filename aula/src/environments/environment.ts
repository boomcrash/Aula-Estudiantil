export const environment = {
    urlBAse: "http://167.71.26.121:3000",
    pathUrl: {
        urlVerificarUsuarioPassword: "/api/v1/usuarios/verifyUserByUserAndPassword",
        urlObtenerUsuariosPorUser: "/api/v1/usuarios/getUsersByUserName",

        urlDocetes: {
            obtenerCursos: "/api/v1/cursos/getCursosDocente",
            obtenerActividades: "/api/v1/actividades/getActividadByCurso",
        },
    },

}