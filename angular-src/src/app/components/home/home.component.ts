import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {ImageserviceService} from  '../../services/imageservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges{
@Input() filterBy?: string ='all';

  visibleImages :any[]=[];
  constructor(private imageService:ImageserviceService) {
    this.visibleImages=this.imageService.getImages();
   }

  ngOnInit() {
  }
ngOnChanges(){
  this.visibleImages=this.imageService.getImages();
}
}
