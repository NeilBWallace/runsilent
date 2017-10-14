import { Injectable } from '@angular/core';

@Injectable()
export class ImageserviceService {
visibleImages =[];
getImages(){
  return this.visibleImages = IMAGES.slice(0);
}
getImage(id:number)
{
  return IMAGES.slice(0).find(image => image.id ==id)
}
  constructor() { 

     }
  }



const IMAGES =[
  {"id":1,"category":"camping","url":"/assets/logo.png"},
  {"id":2,"category":"boats","url":"/assets/logo.png"},
  {"id":3,"category":"library","url":"/assets/logo.png"},
  {"id":4,"category":"boats","url":"/assets/logo.png"},
  {"id":5,"category":"boats","url":"/assets/logo.png"},
  {"id":6,"category":"boats","url":"/assets/logo.png"},
  {"id":7,"category":"boats","url":"/assets/logo.png"},
]