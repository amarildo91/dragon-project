import { Injectable } from "@angular/core";
import { DragonModule } from "../model/dragonModule";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


const API_DRAGON = 'http://localhost:8080/api/dragons';

@Injectable()
export class DashboardPageService{

    private dragons: DragonModule[];    
    private dragon: DragonModule;

    constructor(private httpClient: HttpClient){
    }

    retrieve(){
        return this.httpClient.get(API_DRAGON);
    }
    retrieveOne(slug: string){
        return this.httpClient.get<DragonModule>(API_DRAGON + '/' + slug); 
    }

    update(slug: string, dragon:DragonModule){
        return this.httpClient.put(API_DRAGON + '/' + slug, dragon); 
    }

    delete(slug: string){
        return this.httpClient.delete(API_DRAGON + '/' + slug);
    }
}