import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {Administrador,LoginS} from '.';
type administradorParams={
    [Administrador.Home]:undefined;
    [Administrador.Docente]:undefined;
    [Administrador.Estudiante]:undefined;
    [Administrador.Curso]:undefined;
    [Administrador.InfoDocente]:undefined;
    [Administrador.InfoEstudiante]:undefined;
    [Administrador.EstudianteCurso]:undefined;
    [Administrador.EditarCurso]:undefined;
    [Administrador.EditarDocente]:undefined;
    [Administrador.EditarEstudiante]:undefined;
    [Administrador.CrearDocente]:undefined;
    [Administrador.CrearCurso]:undefined;
    [Administrador.CrearEstudiante]:undefined;
    [Administrador.CursoProfesor]:undefined;
}

type LoginParams={
    [LoginS.Home]:undefined;
    [LoginS.AdministradorN]:undefined;
    [LoginS.EstudianteN]:undefined;
    [LoginS.ProfesorN]:undefined;
}

export interface HAdminitrador{
    navigation:StackNavigationProp<administradorParams,Administrador.Home>
    route:RouteProp<administradorParams, Administrador.Home>
}

export interface HLogin{
    navigation:StackNavigationProp<LoginParams,LoginS.Home>
    route:RouteProp<LoginParams,LoginS.Home>
}