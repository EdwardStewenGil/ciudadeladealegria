import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../../../modelos/usuario-dto';
import { FormControl, Validators } from '@angular/forms';
import { CiudadelaService } from '../../../servicios/ciudadela.service';
import { DepartamentosService } from '../../../servicios/departamentos.service';

import Swal from 'sweetalert2'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-ciudadelaregistrarlibre',
  templateUrl: './ciudadelaregistrarlibre.component.html',
  styleUrls: ['./ciudadelaregistrarlibre.component.css']
})
export class CiudadelaregistrarlibreComponent {

  usuarioDto: UsuarioDto[] = [];
  nuevoUsuario: UsuarioDto = { variable1: '', variable2: '', variable3: '', variable4: '', variable5: '', variable6: '', variable7: '', variable8: '', variable9: '', variable10: '', variable11: '', variable12: '', variable13: '', variable14: '', variable15: '', variable16: '', variable17: '', variable18: '', variable19: '', variable20: '', variable21: '', variable22: '', variable23: '', evento: 'ciud28042024', };
  terminos = ""
  confircorreo = ""
  imagenPrevia: any;
  files: any = []
  nombremenor = ""

  min = 100000;
  max = 900000;
  x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  SendDataonChange(event: any) {
    console.log(event.target.value);
  }


  emailval = ""
  fechavalmenor = ""
  fechavaladulto = ""



  constructor(
    private ciudadelaService: CiudadelaService,) { }

  ngOnInit(): void {

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
        { text: 'Registro Exitoso Ciudadela de la alegria ', fontSize: 40, bold: true, margin: [0, 450, 0, 0] },

        { text: 'Datos Del Participante:', fontSize: 20, bold: true, margin: [0, 30, 0, 10] },
        {
          style: 'tableExample',
          table: {
            headerRows: 0,
            body: [

              [{ text: 'Nombre del Participante:', style: 'tableHeader', bold: true }, this.nuevoUsuario.variable2],

              [{ text: 'Código unico de registro: ', style: 'tableHeader', bold: true }, this.x],


            ]
          },
          layout: 'lightHorizontalLines',
          margin: [0, 30, 0, 20],
          fontSize: 15
        },






      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download('Ciudadela.pdf');

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
    this.nuevoUsuario.variable17 = ""
    this.nuevoUsuario.variable18 = ""
    this.nuevoUsuario.variable19 = ""
    this.nuevoUsuario.variable20 = ""
    this.emailval = ""
    this.fechavalmenor = ""
    this.fechavaladulto = ""

    this.x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }


  public formulariomenorvalidar1() { this.createPdf() }

  public formulariomenorvalidar() {
    this.nuevoUsuario.variable5 = this.fechavalmenor
    this.nuevoUsuario.variable13 = this.fechavaladulto


    this.nuevoUsuario.variable20 = String(this.x)

    this.nombremenor = this.nuevoUsuario.variable2 + " " + this.nuevoUsuario.variable3


    this.nuevoUsuario.variable21 = "pendiente"

    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    console.log(this.nuevoUsuario)

    if (this.nuevoUsuario.variable2 == "") {

      Swal.fire('El nombre del menor debe ser diligenciado')

    }
    else if (this.nuevoUsuario.variable3 == "") {

      Swal.fire('El apellido del menor debe ser diligenciado')



    } else if (this.nuevoUsuario.variable4 == "") {

      Swal.fire('El tipo de documento del menor debe ser diligenciado')



    } else if (this.nuevoUsuario.variable1 == "") {
      Swal.fire('El número de documento del menor debe ser diligenciado')

    } else if (this.nuevoUsuario.variable5 == "") {
      Swal.fire('La fecha del nacimiento del menor debe ser diligenciada')


    } else if (this.nuevoUsuario.variable7 == "") {
      Swal.fire('El sexo de nacimiento del menor debe ser diligenciado')


    } else if (this.nuevoUsuario.variable8 == "") {
      Swal.fire('El autoreconocimiendo del menor debe ser diligenciado ')

    }
    else if (this.nuevoUsuario.variable9 == "") {

      Swal.fire('El nombre del adulto debe ser diligenciado')

    }
    else if (this.nuevoUsuario.variable10 == "") {

      Swal.fire('El apellido del adulto debe ser diligenciado')



    } else if (this.nuevoUsuario.variable11 == "") {

      Swal.fire('El tipo de documento del adulto debe ser diligenciado')
    }

    else if (this.nuevoUsuario.variable12 == "") {

      Swal.fire('El numero de documento del adulto debe ser diligenciado')



    } else if (this.nuevoUsuario.variable13 == "") {
      Swal.fire('La fecha del nacimiento del adulto debe ser diligenciada')


    } else if (this.nuevoUsuario.variable14 == "") {

      Swal.fire('La comuna del adulto debe ser diligenciada ')

    } else if (this.nuevoUsuario.variable15 == "") {
      Swal.fire('El sexo de nacimiento del adulto debe ser diligenciado')


    } else if (this.nuevoUsuario.variable16 == "") {
      Swal.fire('El autoreconocimiendo del adulto debe ser diligenciado ')

    }
    else if (this.nuevoUsuario.variable17 == "") {

      Swal.fire('El Telefono del adulto debe ser diligenciado')


    }

    else if (this.nuevoUsuario.variable18 == "") {

      Swal.fire('Correo electrónico no diligenciado')

    } else if (validEmail.test(this.nuevoUsuario.variable18) == false) {

      Swal.fire('Por favor diligenciar un correo valido. Ejemplo: ciudaddealegria@gmail.com')

    }


    else if (this.nuevoUsuario.variable19 == "") {

      Swal.fire('El parentesco con el menor debe ser diligenciado')

    } else if (this.terminos == "") {

      Swal.fire('Se debe aceptar los terminos y condiciones')

    } else {

      console.log(this.nuevoUsuario)
      this.ciudadelaService.createUserCiudadela(this.nuevoUsuario).subscribe(
        (data: any) => {
          if (data.status == 200) {
            Swal.fire('Felicidades ya el menor ya se encuentra participando en el evento con numero: ' + this.x)
            this.createPdf()



          } else {

            Swal.fire(data.payload.message)


          }
        }, (error) => {
          console.log(error);
          Swal.fire('error al intentar registrate por favor intentalo mas tarde')

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
          this.nuevoUsuario.variable17 = ""
          this.nuevoUsuario.variable18 = ""
          this.nuevoUsuario.variable19 = ""
          this.nuevoUsuario.variable20 = ""
          this.emailval = ""
          this.fechavalmenor = ""
          this.fechavaladulto = ""

          this.x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
      );




    }


  }


}


