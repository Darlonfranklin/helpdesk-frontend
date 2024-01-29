import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Technique } from '../../models/technique';

@Component({
  selector: 'app-technique',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './technique.component.html',
  styleUrl: './technique.component.css'
})
export class TechniqueComponent implements AfterViewInit {

  ELEMENT_DATA: Technique[] = [
    {
      id: 1,
      name: "darlon",
      cpf: '123.456.789-10',
      creationDate: '29/01/2024',
      password: '1234',
      email: 'darlonfranklin@email.com',
      profiles: ['0']
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<Technique>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



