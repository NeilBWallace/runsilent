import { Component, OnInit } from '@angular/core';
import {ImageserviceService} from  '../services/imageservice.service';
import {ActivatedRoute} from '@angular/router';
 @Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.css']
})
export class ImagedetailComponent implements OnInit {

  image:any
  constructor(private route: ActivatedRoute,private imageService: ImageserviceService) { }

  ngOnInit() {
this.image = this.imageService.getImage(
  +this.route.snapshot.params['id']
)
  }

}
