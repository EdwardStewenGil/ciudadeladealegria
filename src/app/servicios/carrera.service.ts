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
  hosteo = 'http://localhost:3306/'
 // hosteo = 'https://ccdepor.herokuapp.com/'


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
}
