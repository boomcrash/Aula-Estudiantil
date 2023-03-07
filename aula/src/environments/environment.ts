export const environment = {

urlBAse: "http://167.71.26.121:3000",
    pathUrl: {
        urlVerificarUsuarioPassword: "/api/v1/usuarios/verifyUserByUserAndPassword",    
        urlObtenerUsuariosPorUser: "/api/v1/usuarios/getUsersByUserName",    
        urlObtenerHorariosporId: "/api/v1/horarios/getHorarioEstudiante",    
        urlObtenerHorariosmatricula:"/api/v1/horarios/getAllHorarios",
        UrlObtenerCursos: "/api/v1/cursos/getCursos",
        UrlObtenerParalelos:"/api/v1/paralelos/getParalelos",
        UrlObtenerMaterias:"/api/v1/materias/getItemMaterias",
        UrlObtenerDatosCompletos:"/api/v1/usuarios/getUsersCompleteData",
        UrlObtenerActaByEstudiante:"/api/v1/itemActas/getItemActasByIdEstudiante",                
        urlObtenerActaEstudiante: "/api/v1/actas/getActaEstudiante",
        urlObtenerItemMatricula: "/api/v1/matriculas/getItemMatriculasByEstudianteId",
        urlObtenerOrdenPago: "/api/v1/ordenPagoMatriculas/getItemOrdenPagoMatriculasByMatriculaId",
        urlObterCursoEstudiante: "/api/v1/cursos/getCursosEstudiante",
        urlObtenerMaterias: "/api/v1/materias/getItemMateriasByName",
        urlObtenerActividades: "/api/v1/actividades/getActividadByCurso",
        urlUpdateEntregas: "/api/v1/entregas/updateEntrega",
        urlObtenerEntregaActividad: "/api/v1/actividades/entregaActividad",        
        urlObtenerAsistenciasByIdEstudiante: "/api/v1/asistencias/getAsistenciasByIdEstudiante",
        urlDocetes: {
            obtenerCursos: "/api/v1/cursos/getCursosDocente",
            obtenerActividades: "/api/v1/actividades/getActividadByCurso",
        },

        urlDocenteAdmin: {
            obtenerTopDocentes:"/api/v1/docentes/getTop5Teacher",
            obtenerDocentes: "/api/v1/docentes/getTeachers",
            obtenerPagoDocentes: "/api/v1/pagoDocentes/getPagoDocentes",
            obtenerMateriasDocente: "/api/v1/cursos/getCursosDocente",            
        },
        urlEstudianteAdmin: {
            obtenerTopEstudiantes: "/api/v1/estudiantes/getTop5Estudiantes",
            obtenerEstudiantes: "/api/v1/estudiantes/getStudents",
            obtenerMateriasEstudiantes: "/api/v1/cursos/getCursosEstudiante",
            obtenerActividadesCumplidasEstudiantes: "",
            obtenerActividadesNoCumplidasEstudiantes: "",
        },
        
    }
}