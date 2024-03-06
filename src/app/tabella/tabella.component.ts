import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Person } from '../model/person';


@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {
  displayedColumns: string[] = ['name', 'surname', 'age'];

  personList: Person[] = [
    {name: "Lollo", surname: "Lasa", age: 100},
    {name: "Mattia", surname: "Tina", age: 150},
    {name: "Bobo", surname: "Mosca", age: 200}  
  ]
}
