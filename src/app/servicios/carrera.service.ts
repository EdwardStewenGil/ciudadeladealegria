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
  hosteo = 'https://ciudadeladealegria-50df4ce1cf33.herokuapp.com/'

  constructor(private httpClient: HttpClient) { }


  public createUserCarrera(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUserCarrera ',
      data,
      this.respuesta
    );
  }

  public createUserCarrera7k(data: UsuarioDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createUserCarrera7k ',
      data,
      this.respuesta
    );
  }
  

  public ValidarCarrera(data: UsuarioDto): Observable<boolean> {
    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/ValidarCarrera',
      data,
      this.respuesta
    );
  }


  public GetCupoRegalo(data: UsuarioDto): Observable<any> {
    return this.httpClient.post<UsuarioDto[]>(
      this.hosteo + 'caliciudaddeportiva/GetCupoRegalo',
      data,
      this.respuesta,

    );
  }

  public createcarrera(data: RegaloDto): Observable<boolean> {

    return this.httpClient.post<any>(
      this.hosteo + 'caliciudaddeportiva/createcarrera',
      data,
      this.respuesta
    );
  }
}
