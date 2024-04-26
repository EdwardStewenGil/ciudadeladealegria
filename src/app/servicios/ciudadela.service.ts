import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioDto } from '../modelos/usuario-dto';
import { CodigoDto } from '../modelos/codigo-dto';
import { RegaloDto } from '../modelos/regalo-dto';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CiudadelaService {

  respuesta = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  //hosteo = 'http://localhost:3306/'
  hosteo = 'https://ciudadeladealegria-50df4ce1cf33.herokuapp.com/'


  constructor(private httpClient: HttpClient) { }


  
  public getAllUser(): Observable < any > {
    return this.httpClient.get<UsuarioDto[]>(
      this.hosteo + 'caliciudaddeportiva/getAllUser',
      this.respuesta,
  
    );
  }




  public createUserCiudadela(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUserCiudadela ',
      data,
      this.respuesta
    );
  }

  public ValidarMenor(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/ValidarMenor',
      data,
      this.respuesta
    );
  }


  public entregarregalo(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/entregaregalo',
      data,
      this.respuesta

    );
  }

  public buscarultimoregistroregalo(data: RegaloDto): Observable<any> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/buscarultimoregistroregalo',
      data,
      this.respuesta,
    );
  }


  public createregalo(data: RegaloDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createregalo',
      data,
      this.respuesta
    );
  }

  public GetRegalopersona(data: UsuarioDto): Observable<any> {
    return this.httpClient.post<UsuarioDto[]>(
      this.hosteo + 'caliciudaddeportiva/GetRegalopersona',
      data,
      this.respuesta,

    );
  }

  public GetRegalopersonamenor(data: UsuarioDto): Observable<any> {
    return this.httpClient.post<UsuarioDto[]>(
      this.hosteo + 'caliciudaddeportiva/GetRegalopersonamenor',
      data,
      this.respuesta,

    );
  }








}
