import {ImageURISource} from 'react-native';
import {NavigatorScreenParams} from '@react-navigation/native';

export type DocenteParams={
    cedula:string
    Nombre:string
    Apellido1:string
    Apellido2: string
    Calificacion: string 
    Email: string
    
}

export type CursoParams={
    nombre:string
    NumeroCurso:string
    ProfesorDelCurso:string
}

export type EstudianteParams={
    cedula:string
    Nombre:string
    Apellido1:string
    Apellido2:string
    Email:string
    Grado:string
}

export type LoginNavigator={
    Login:undefined
    HomeAdministrador:undefined
    NavigatorProfesor:undefined
    NavigatorStudent:undefined
}

//Para moverse del screen al modal de editar
export type ModalNavigatorDocenteParamsList={
    GestionDocente:DocenteParams,
    Datos:{nombre:string;apellido1:string;apellido2:string;calificacion:string; email:string}
}

export type ModalNavigatorEstudianteParamsList={
    GestionCurso:CursoParams,
    Datos:{nombre:string;apellido1:string;apellido2:string;email:string;grado:string;cedula:string}
}
export type ModalNavigatorCursoParamsList={
    GestionCurso:EstudianteParams,
    Datos:{nombre:string;grupo:string;profesor:string;horario:string;id:string;grado:string}
}

export type DocNavigatorParamsList={
    //Docentes
    gestionDocente:undefined
    editarDocente:undefined
    infoDocente: undefined
}

export type EstNavigatorParamsList={
    //Docentes
    gestionEstudiante:undefined
    editarEstudiante:undefined
    infoEstudiante: undefined
}
export type CurNavigatorParamsList={
    //Cursos
    gestionCurso:undefined
    editarCurso:undefined
    infoCurso: undefined

}
    
export type DocenteNavigatorParamsList={
    Main:NavigatorScreenParams<DocNavigatorParamsList>
    Modal:NavigatorScreenParams<ModalNavigatorDocenteParamsList>
}

export type EstudinateNavigatorParamsList={
    Main:NavigatorScreenParams<EstNavigatorParamsList>
    Modal:NavigatorScreenParams<ModalNavigatorEstudianteParamsList>
}
export type CursoNavigatorParamsList={
    Main:NavigatorScreenParams<CurNavigatorParamsList>
    Modal:NavigatorScreenParams<ModalNavigatorCursoParamsList>
}