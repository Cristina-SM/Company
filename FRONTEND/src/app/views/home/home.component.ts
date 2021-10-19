import { Component, OnInit } from '@angular/core';
import {WorkersService} from '../../shared/services/workers.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Workers:any = '';
  constructor(
    private WorkersService: WorkersService,
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
