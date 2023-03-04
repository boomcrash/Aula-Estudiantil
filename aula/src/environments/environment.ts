export const environment = {
urlBAse: "http://167.71.26.121:3000",
pathUrl: {
    urlVerificarUsuarioPassword: "/api/v1/usuarios/verifyUserByUserAndPassword",    
    urlObtenerUsuariosPorUser: "/api/v1/usuarios/getUsersByUserName",    
    urlObtenerActaEstudiante: "/api/v1/actas/getActaEstudiante",
    urlObtenerItemMatricula: "/api/v1/matriculas/getItemMatriculasByEstudianteId",
    urlObtenerOrdenPago: "/api/v1/ordenPagoMatriculas/getItemOrdenPagoMatriculasByMatriculaId",
    urlObterCursoEstudiante: "/api/v1/cursos/getCursosEstudiante",
    urlObtenerMaterias: "/api/v1/materias/getItemMateriasByName",
    urlObtenerActividades: "/api/v1/actividades/getActividadByCurso",
    urlUpdateEntregas: "/api/v1/entregas/updateEntrega",
    urlObtenerEntregaActividad: "/api/v1/actividades/entregaActividad",
}
}