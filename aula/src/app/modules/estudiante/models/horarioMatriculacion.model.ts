export interface horarioMatriculacion{

    paralelo_curso: string;
    cupo_curso: number;
    horario_ordenado:Horario_Ordenado[];
    
}

export interface Horario_Ordenado{
dia_horario: string;
horaInicio_horario: string;
horaFin_horario: string;

}

    

