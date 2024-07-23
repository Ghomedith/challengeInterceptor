import { Component, inject } from '@angular/core';
import { DataService } from './../data.service';
import { Data } from './../model/data.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

  datas: Data[] = [];

  private DataService = inject(DataService);

  ngOnInit() : void {
  this.DataService
  .getDatas().subscribe((datasFromJsonFile : Data[])=>{
    this.datas = datasFromJsonFile
    });
  }
}
