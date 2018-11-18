import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DragonModule } from '../model/dragonModule'
import { DashboardPageService } from './dashboard-page.service';
import  Swal  from 'sweetalert2';


const API_MSG = 'http://localhost:8080/api/dragons';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  providers: [DashboardPageService]
})
export class DashboardPageComponent implements OnInit {

  private dragonArray: DragonModule[];
  private dragon: DragonModule;
  order: number = 1; 
  slug: string;

  constructor(private customerService: CustomerService, 
              private router: Router, 
              private httpClient: HttpClient,
              private dashboardPageService: DashboardPageService) { }

  ngOnInit() {
    this.dashboardPageService.retrieve().subscribe(res => {
        this.dragonArray = res['items'] as DragonModule[];
    });
   }


  edit(slug: string){
    let query: string[] = [];
    query[0] = slug;
    this.slug = slug;
    this.router.navigate(['/dashboard-edit', slug]);
    console.log(this.dragon);
  }

  delete(slug: string){
    Swal({
      title: 'Deseja remover?',
      text: 'Você não poderá recuperar este registro!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, remover!',
      cancelButtonText: 'Não, manter registro'
    }).then((result) => {
      if (result.value) {
        this.dashboardPageService.delete(slug).subscribe(res => {
          if (res['ok'] === 1){
            Swal(
              'Removido!',
              'O registro foi removido com sucesso.',
              'success'
            );
            this.ngOnInit();
          }
        });      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelado',
          'O registro não foi removido',
          'error'
        )
      }
    });
  }
 
}
