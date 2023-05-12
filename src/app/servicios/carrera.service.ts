import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioDto } from '../modelos/usuario-dto';
import { CodigoDto } from '../modelos/codigo-dto';
import { RegaloDto } from '../modelos/regalo-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  respuesta = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  //hosteo = 'http://localhost:3306/'
  hosteo = 'https://ccdepor.herokuapp.com/'


  constructor(private httpClient: HttpClient) { }



  public validarpersonaferia(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/validarpersonaferia',
      data,
      this.respuesta
    );
  }
  public validarpersonacluster(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/validarpersonacluster',
      data,
      this.respuesta
    );
  }

  public validarcodigo(data: CodigoDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/validarcodigo',
      data,
      this.respuesta
    );
  }



  public createUsercodigo(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUsercodigo ',
      data,
      this.respuesta
    );
  }

  public createUserferia(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUserferia ',
      data,
      this.respuesta
    );
  }

  public createUsercodigoval(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUsercodigoval ',
      data,
      this.respuesta
    );
  }


  public validarmenor(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/validarmenor',
      data,
      this.respuesta
    );
  }







  public getAllUser(): Observable<any> {
    return this.httpClient.get<UsuarioDto[]>(
      this.hosteo + 'caliciudaddeportiva/getAllUser',
      this.respuesta,

    );
  }
  public getAlCiudadela4(data: UsuarioDto): Observable<any> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/getAllCiudadela4ver',
      data,
      this.respuesta,

    );
  }

  public createUser(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUser',
      data,
      this.respuesta
    );
  }

  public createUserverifi(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUser1',
      data,
      this.respuesta
    );
  }

  public createUsercedula(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createciudadela',
      data,
      this.respuesta
    );
  }

  public createregalo(data: RegaloDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createregalo',
      data,
      this.respuesta
    );
  }


  public validarregalo(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/validarregalo',
      data,
      this.respuesta
    );
  }

  public validarregaloadulto(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/validarregaloadulto',
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





  public BuscarDatosRegalo(data: UsuarioDto): Observable<any> {
    return this.httpClient.post<UsuarioDto[]>(
      this.hosteo + 'caliciudaddeportiva/BuscarDatosRegalo',
      this.respuesta,

    );
  }


  public GetRegalopersona(data: RegaloDto): Observable<any> {
    return this.httpClient.post<RegaloDto[]>(
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
