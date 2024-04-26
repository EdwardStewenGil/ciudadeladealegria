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


  constructor(
  ) { }

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
        { text: 'Registro Exitoso Carrera CICLOVIDA RUN 10K 40 AÑOS', fontSize: 27, bold: true, margin: [0, 100, 0, 0] },

        { text: 'Datos Del Participante:', fontSize: 20, bold: true, margin: [0, 10, 0, 10] },
        {
          style: 'tableExample',
          table: {
            headerRows: 0,
            body: [
              [{ text: 'Nombre del Participante:', style: 'tableHeader', bold: true },],
              [{ text: 'Código unico de registro: ', style: 'tableHeader', bold: true },],


            ]
          },
          layout: 'lightHorizontalLines',
          margin: [0, 10, 0, 20],
          fontSize: 15
        },






      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download('Carrera.pdf');
  }


  public formulariomenorvalidar1() { this.createPdf() }



}

