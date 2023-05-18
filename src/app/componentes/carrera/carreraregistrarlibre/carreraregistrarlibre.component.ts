import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../../../modelos/usuario-dto';
import { DepartamentoI, CiudadI } from 'src/app/modelos/ciudades';
import { FormControl, Validators } from '@angular/forms';
import { CarreraService } from '../../../servicios/carrera.service';
import { DepartamentosService } from '../../../servicios/departamentos.service';

import Swal from 'sweetalert2'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-carreraregistrarlibre',
  templateUrl: './carreraregistrarlibre.component.html',
  styleUrls: ['./carreraregistrarlibre.component.css']
})
export class CarreraregistrarlibreComponent {

  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { variable1: '', variable2: '', variable3: '', variable4: '', variable5: '', variable6: '', variable7: '', variable8: '', variable9: '', variable10: '', variable11: '', variable12: '', variable13: '', variable14: '', variable15: '', variable16: '', evento: 'carrera3k', };
  terminos = ""
  terminosprincipal = ""
  pdfnombremenor = ""
  pdfnombreadulto = ""



  menores = ""

  confircorreo = ""
  imagenPrevia: any;
  files: any = []
  terminosver = true
  registro = false


  tipoidemenor = ""
  generomenor = ""
  discapacidadmenor = ""
  sangremenor = ""

  comuna = ""

  tipoidadulto = ""
  generoadulto = ""
  discapacidadadulto = ""
  sangreadulto = ""



  min = 100000;
  max = 900000;
  x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  SendDataonChange(event: any) {
    console.log(event.target.value);
  }

  variable2 = new FormControl('', Validators.required);
  formulariomenor = true
  formulariomayor = false
  numero = 0;
  emailval = ""
  fechaval = ""
  public seleccionarDepartamento: DepartamentoI = { id: 0, name: '' };
  public departamentos: DepartamentoI[] = [];
  public seleccionarCiudad: DepartamentoI = { id: 0, name: '' };
  public ciudades: CiudadI[] = [];


  constructor(
    private carreraService: CarreraService, private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.departamentos = this.departamentosService.getDepartamentos();
    this.ciudades = this.departamentosService.getCiudades();
  }
  onSelect(usarName: number): void {
    this.ciudades = this.departamentosService.getCiudades().filter(item => item.departamentoId == usarName);
  }


  terminosvalidar() {

    if (this.terminosprincipal == "") {

      Swal.fire('Se debe aceptar los terminos y condiciones de las consideraciones y reglas de la carrera atletico recreativa')

    } else {
      this.terminosver = false
      this.registro = true
    }


  }


  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }


  async createPdf() {

    console.log(this.nuevoUsuario)
    console.log(this.comuna)
    console.log(this.pdfnombreadulto)
    console.log(this.pdfnombremenor)


    const pdfDefinition: any = {
      background: [
        {
          image: await this.getBase64ImageFromURL("../../assets/membrete.jpg"),
          width: 600,
          height: 850,
          opacity: 1,
        }
      ],
      content: [
        { text: 'Registro Exitoso Carrera 3K', fontSize: 27, bold: true, margin: [0, 100, 0, 0]  },

        { text: 'Datos Del Participante:', fontSize: 20, bold: true, margin: [0, 10, 0, 10] },
        {
          style: 'tableExample',
          table: {
            headerRows: 0,
            body: [
              [{ text: 'Nombre del Menor:', style: 'tableHeader', bold: true }, this.pdfnombremenor],
              [{ text: 'Nombre del Adulto:', style: 'tableHeader', bold: true }, this.pdfnombreadulto],
              [{ text: 'Código unico de registro: ', style: 'tableHeader', bold: true }, this.x],


            ]
          },
          layout: 'lightHorizontalLines',
          margin: [0, 10, 0, 20],
          fontSize: 15
        },

        {
          width: '100%',
          text: 'Gracias por inscribirte al evento Ciclovida Run 7k de la familia, con tu participación promociona el deporte en uno de los territorios de inclusión y oportunidades de nuestra ciudad como es la comuna 20 y tiene como objetivo incentivar la reactivación económica con la exposición de las iniciativas sociales como son el turismo, el deporte, la cultura de este territorio #CaliCiudadDeportiva.', margin: [0, 10, 0, 10],
        },

        {
          width: '100%',
          text: 'La carrera se realizará el 28 de mayo con su distancia 7k  y 3k aprox. No olvides verificar el horario de salida.', margin: [0, 10, 0, 10],
        },


        { text: 'ENTREGA DE KITS:', fontSize: 20, bold: true, margin: [0, 10, 0, 10] },
        {
          style: 'tableExample',
          table: {
            headerRows: 0,
            body: [
              [{ text: 'Lugar del Entrega de kits:', style: 'tableHeader', bold: true }, ' Unidad Deportiva Alberto Galindo en el Velodromo Alcides Nieto carrera 54 Oeste #3-50'],
              [{ text: 'Hora de inicio de Entrega de kits:', style: 'tableHeader', bold: true }, 'Sabado 27 de mayo de 2023 08:00 am'],
              [{ text: 'Hora de Finalizacion de Entrega de kits: ', style: 'tableHeader', bold: true }, 'Sabado 27  de mayo de 2023 06:00 pm'],

            ]
          },
          layout: 'lightHorizontalLines',
          margin: [0, 10, 0, 10],
          fontSize: 15
        },
        {
          width: '100%',
          text: 'Importante: recuerda que si no te es posible a la entrega de kits, la persona que reclame el kit por ti debe presentar fotocopia de la cédula y una carta de autorización..', margin: [0, 10, 0, 10],
        },

        {
          width: '100%',
          text: 'La Secretaría del Deporte y la Recreación invita a todos los participantes a realizarse un examen médico antes de la participación al evento', margin: [0, 10, 0, 10],
        },



      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download('Carrera3k.pdf');
  }



  public formulariomenorvalidar() {


    this.nuevoUsuario.variable15 = String(this.x)
    this.nuevoUsuario.variable6 = this.tipoidemenor + this.generomenor + this.discapacidadmenor + this.sangremenor
    this.nuevoUsuario.variable12 = this.tipoidadulto + this.generoadulto + this.discapacidadadulto + this.sangreadulto + this.seleccionarDepartamento + this.seleccionarCiudad + this.comuna
    this.pdfnombremenor = this.nuevoUsuario.variable2
    this.pdfnombreadulto = this.nuevoUsuario.variable7





    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    console.log(this.nuevoUsuario)
    if (this.nuevoUsuario.variable2 == "") {
      Swal.fire('El nombre del menor debe ser diligenciado')
    }

    else if (this.tipoidemenor == "") {

      Swal.fire('El tipo de identificación del menor debe ser diligenciado')



    } else if (this.nuevoUsuario.variable1 == "") {

      Swal.fire('La identificacion del menor no debe ser diligenciado')

    } else if (this.nuevoUsuario.variable3 == "") {
      Swal.fire('La Edad del menor debe ser diligenciado')


    } else if (this.generomenor == "") {

      Swal.fire('El genero del menor debe ser diligenciado')

    } else if (this.discapacidadmenor == "") {
      Swal.fire('Es necesario colocar si tiene algun tipo de discapacidad')


    } else if (this.nuevoUsuario.variable4 == "") {
      Swal.fire('La eps del menor debe ser diligenciada')


    } else if (this.sangremenor == "") {
      Swal.fire('El tipo de sangre del menor debe ser diligenciado')


    } else if (this.nuevoUsuario.variable5 == "") {
      Swal.fire('La talla de la camisa del menor debe ser diligenciada ')

    } else if (this.nuevoUsuario.variable7 == "") {
      Swal.fire('El nombre del adulto debe ser diligenciado ')

    } else if (this.tipoidadulto == "") {
      Swal.fire('El tipo de documento del adulto debe ser diligenciado ')

    } else if (this.nuevoUsuario.variable8 == "") {
      Swal.fire('El numero de identificacion del documento debe ser diligenciado ')

    } else if (this.nuevoUsuario.variable9 == "") {

      Swal.fire('La edad del adulto debe ser diligenciado')

    }




    else if (this.generoadulto == "") {

      Swal.fire('El genero del adulto debe ser diligenciado')


    }






    else if (this.discapacidadadulto == "") {

      Swal.fire('Debes diligenciar si tiene alguna discapacidad')

    }
    else if (this.nuevoUsuario.variable10 == "") {

      Swal.fire('Debes diligenciar la eps del adulto')

    }
    else if (this.sangreadulto == "") {

      Swal.fire('Debes diligenciar el tipo de sangre del adulto')

    }
    else if (this.nuevoUsuario.variable11 == "") {

      Swal.fire('Debes diligenciar la talla de camisa dela dulto')

    } else if (String(this.seleccionarDepartamento) == "") {
      Swal.fire('El departamento debe ser diligenciado ')

    } else if (String(this.seleccionarCiudad).length > 500) {
      Swal.fire('Debes diligenciar el departamento y la ciudad ')
    }

    else if (this.nuevoUsuario.variable13?.length != 10) {

      Swal.fire('El célular debe ser de 10 digitos')

    } else if (this.nuevoUsuario.variable14 == "") {

      Swal.fire('Correo electrónico no diligenciado')

    } else if (validEmail.test(this.nuevoUsuario.variable14) == false) {

      Swal.fire('Por favor diligenciar un correo valido. Ejemplo: caliciudaddeportiva@gmail.com')

    }
    else if (this.comuna == "") {

      Swal.fire('Se debe seleccionar la comuna')

    }
    else if (this.terminos == "") {

      Swal.fire('Se debe aceptar los terminos y condiciones de las consideraciones y reglas de la carrera atletico recreativa')

    }

    else if (this.menores == "") {

      Swal.fire('Se debe aceptar la exoneracion  de menores')

    }
    else {
      console.log(this.nuevoUsuario)
      this.carreraService.createUserCarrera(this.nuevoUsuario).subscribe(
        (data: any) => {
          if (data.status == 200) {
            Swal.fire('Felicidades ya se encuentran participando en el evento con numero de registro: ' + this.x)
            this.createPdf()
            this.nuevoUsuario.variable1 = ""
            this.nuevoUsuario.variable2 = ""
            this.nuevoUsuario.variable3 = ""
            this.nuevoUsuario.variable4 = ""
            this.nuevoUsuario.variable5 = ""
            this.nuevoUsuario.variable6 = ""
            this.nuevoUsuario.variable7 = ""
            this.nuevoUsuario.variable8 = ""
            this.nuevoUsuario.variable9 = ""
            this.nuevoUsuario.variable10 = ""
            this.nuevoUsuario.variable11 = ""
            this.nuevoUsuario.variable12 = ""
            this.nuevoUsuario.variable13 = ""
            this.nuevoUsuario.variable14 = ""
            this.nuevoUsuario.variable15 = ""
            this.nuevoUsuario.variable16 = ""
            this.emailval = ""
            this.fechaval = ""
            this.tipoidemenor = ""
            this.generomenor = ""
            this.discapacidadmenor = ""
            this.sangremenor = ""
            this.terminosprincipal = ""

            this.comuna = ""

            this.tipoidadulto = ""
            this.generoadulto = ""
            this.discapacidadadulto = ""
            this.sangreadulto = ""

            this.x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);


          } else {

            Swal.fire(data.payload.message)

            this.formulariomenor = true
            this.formulariomayor = false
          }
        }, (error) => {
          console.log(error);
          Swal.fire('error al intentar registrate por favor intentalo mas tarde')
          this.formulariomenor = true
          this.formulariomayor = false
          this.nuevoUsuario.variable1 = ""
          this.nuevoUsuario.variable2 = ""
          this.nuevoUsuario.variable3 = ""
          this.nuevoUsuario.variable4 = ""
          this.nuevoUsuario.variable5 = ""
          this.nuevoUsuario.variable6 = ""
          this.nuevoUsuario.variable7 = ""
          this.nuevoUsuario.variable8 = ""
          this.nuevoUsuario.variable9 = ""
          this.nuevoUsuario.variable10 = ""
          this.nuevoUsuario.variable11 = ""
          this.nuevoUsuario.variable12 = ""
          this.nuevoUsuario.variable13 = ""
          this.nuevoUsuario.variable14 = ""
          this.nuevoUsuario.variable15 = ""
          this.nuevoUsuario.variable16 = ""
          this.emailval = ""
          this.fechaval = ""
          this.tipoidemenor = ""
          this.generomenor = ""
          this.discapacidadmenor = ""
          this.sangremenor = ""
          this.terminosprincipal = ""

          this.comuna = ""

          this.tipoidadulto = ""
          this.generoadulto = ""
          this.discapacidadadulto = ""
          this.sangreadulto = ""

          this.x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);


          this.emailval = ""
          this.fechaval = ""


        }
      );


    }



  }


}
