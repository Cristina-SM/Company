import { Component, OnInit } from '@angular/core';
import {WorkersService} from '../../../shared/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  Workers:any = '';
  constructor(
    private WorkersService: WorkersService
  ) { }

  ngOnInit(): void {
    this.viewWorkers();    
  }
  viewWorkers(){
    this.WorkersService.getWorkers().subscribe((response)=>{
      this.Workers = response;
      console.log(response);
    })
  }
}
