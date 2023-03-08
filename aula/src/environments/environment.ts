export const environment = {
    urlBAse: "http://167.71.26.121:3000",
    pathUrl: {
        urlVerificarUsuarioPassword: "/api/v1/usuarios/verifyUserByUserAndPassword",
        urlObtenerUsuariosPorUser: "/api/v1/usuarios/getUsersByUserName",
        urlObtenerHorariosporId: "/api/v1/horarios/getHorarioEstudiante",
        urlObtenerHorariosporIdDocente: "/api/v1/horarios/getHorarioDocente",
        urlObtenerHorariosmatricula: "/api/v1/horarios/getAllHorarios",
        UrlObtenerCursos: "/api/v1/cursos/getCursos",
        UrlObtenerParalelos: "/api/v1/paralelos/getParalelos",
        UrlObtenerMaterias: "/api/v1/materias/getItemMaterias",
        UrlObtenerDatosCompletos: "/api/v1/usuarios/getUsersCompleteData",
        UrlObtenerActaByEstudiante: "/api/v1/itemActas/getItemActasByIdEstudiante",
        urlObtenerActaEstudiante: "/api/v1/actas/getActaEstudiante",
        urlObtenerItemMatricula: "/api/v1/matriculas/getItemMatriculasByEstudianteId",
        urlObtenerOrdenPago: "/api/v1/ordenPagoMatriculas/getItemOrdenPagoMatriculasByMatriculaId",
        urlObterCursoEstudiante: "/api/v1/cursos/getCursosEstudiante",
        urlObtenerMaterias: "/api/v1/materias/getItemMateriasByName",
        urlObtenerActividades: "/api/v1/actividades/getActividadByCurso",
        urlUpdateEntregas: "/api/v1/entregas/updateEntrega",
        urlObtenerEntregaActividad: "/api/v1/actividades/entregaActividad",
        urlObtenerAsistenciasByIdEstudiante: "/api/v1/asistencias/getAsistenciasByIdEstudiante",


        urlDocentes: {
            obtenerCursos: "/api/v1/cursos/getCursosDocente",
            obtenerActividades: "/api/v1/actividades/getActividadByCurso",
            obtenerIdDocente: "/api/v1/docentes/getTeacherIdByUserId/",
            obtenerContratoDocente: "/api/v1/contratos/getContratoDocente",
            obtenerDocente: "/api/v1/docentes/getTeachers",
            obtenerDatosDocente: "/api/v1/usuarios/getUsersCompleteData/",
            modificarActividad: "/api/v1/actividades/updateActividad",
            agregarActividad: "/api/v1/actividades/addActividad",
            obtenerPagoDocenteByDocenteId: "/api/v1/pagos/getPagoDocenteByDocenteId"

        },
        urlObtenerParticipantes: "/api/v1/participantes/getParticipantesByActividadId",
        urlObtenerEstudiantes: "/api/v1/estudiantes/getEstudiantes",
        urlModificarEntrega: "/api/v1/entregas/updateEntrega",

    }

}