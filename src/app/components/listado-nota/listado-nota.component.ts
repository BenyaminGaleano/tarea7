import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../../services/webservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from '../../models/estudiante';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listado-nota',
  templateUrl: './listado-nota.component.html',
  styleUrls: ['./listado-nota.component.css']
})
export class ListadoNotaComponent implements OnInit {
  dataSource: MatTableDataSource<Estudiante>;
  cols: Array<string> = ['nombre', 'nota_parcial1', 'nota_parcial2', 'nota_final'];

  constructor(private webservice: WebserviceService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    const list: Array<Estudiante> = new Array<Estudiante>();
    this.dataSource = new MatTableDataSource([]);
    this.webservice.notas().subscribe((datos) => {
      datos.data.forEach( (element: Estudiante) => {
        list.push(element);
      });
      this.snack.open(datos.comment, 'OK', {
        duration: 3000
      });
      this.dataSource.data = list;
    });
    console.log(this.dataSource.data);
  }

}
