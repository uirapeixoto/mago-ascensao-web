import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Personagem';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  //headers
  httpOptions ={
    headers: new HttpHeaders({'content-type':'application/json'})
  }

  buscarUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(environment.urlapi +'/usuario')
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  } 
  buscarUsuarioPorId(id:number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(environment.urlapi +'/usuario/'+id)
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  } 
  buscarUsuarioPorCategoriaId(id:number): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(environment.urlapi +'/usuario?categoriaid='+id)
    .pipe(
      retry(2)
      ,catchError(this.handleError)
    )
  } 
  salvarUsuario(model: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(environment.urlapi +'/Usuarios', JSON.stringify(model), this.httpOptions)
    .pipe(
      retry(1)
      ,catchError(this.handleError)
    )
  }
  atualizarUsuario(model: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(environment.urlapi +'/Usuarios', JSON.stringify(model), this.httpOptions)
      .pipe(
        retry(1)
        ,catchError(this.handleError)
      )
  }
  deletarrUsuario(model: Usuario): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(environment.urlapi +'/usuario/' + model.Id, this.httpOptions)
      .pipe(
        retry(2)
        ,catchError(this.handleError)
      )
  }
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
