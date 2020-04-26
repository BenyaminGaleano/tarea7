import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../../services/webservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ingreso-nota',
  templateUrl: './ingreso-nota.component.html',
  styleUrls: ['./ingreso-nota.component.css']
})
export class IngresoNotaComponent implements OnInit {
  form: FormGroup;

  constructor(private webservice: WebserviceService, private formbuilder: FormBuilder, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      nombre: [''],
      nota_parcial1: [null],
      nota_parcial2: [null],
      nota_final: [null],
    });
   }

  submit(): void {
    if (this.form.value.nombre && this.form.value.nota_final && this.form.value.nota_parcial1 && this.form.value.nota_parcial2) {
      this.webservice.guardar({
        nombre: this.form.value.nombre,
        nota_final: parseFloat(this.form.value.nota_final),
        nota_parcial1: parseFloat(this.form.value.nota_parcial1),
        nota_parcial2: parseFloat(this.form.value.nota_parcial2)
      }).subscribe(
        (data) => {
          this.snack.open(data.comment, 'OK', {
            duration: 2000
          });
        }
      );
      this.form.reset();
    } else {
      this.snack.open('Datos Inválidos', 'OK', {
        duration: 2000
      });
    }
  }
}
