import { Component, OnInit } from '@angular/core';
import { DashboardPageService } from '../dashboard-page.service';
import { DragonModule } from '../../model/dragonModule';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-dashboard-page-edit',
  templateUrl: './dashboard-page-edit.component.html',
  styleUrls: ['./dashboard-page-edit.component.css'],
  providers: [DashboardPageService]
})
export class DashboardPageEditComponent implements OnInit {

  name: string;
  type: string;
  histories: string[];
  slug: string;
  dragon: DragonModule;

  constructor(private dashboardPageService: DashboardPageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.params.slug;
    this.dashboardPageService.retrieveOne(this.slug).subscribe(dragonResponse => {
      this.dragon = dragonResponse;      
      this.name = dragonResponse.name;
      this.histories = dragonResponse.histories;
      this.type = dragonResponse.type;      
    });    
  }

  salvar(){
    console.log(this.slug);   
    this.dragon.name = this.name;
    this.dragon.type = this.type;
    this.dragon.histories = this.histories;
    this.dashboardPageService.update(this.slug, this.dragon).subscribe(res => {
      if (res['ok'] === 1){
        Swal('Sucesso.', 'Dragão salvo com sucesso!', 'success');
        this.router.navigate(['/dashboard']);
      }
    }, err => {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    })
  }
}
