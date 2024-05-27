import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService, img } from '../image.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule,RouterModule,NgOptimizedImage],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent {
  images:Observable<img[]> =  this._image.getImages()
  constructor(private _image:ImageService){
  }
  getMinutes(){
    return Math.ceil(Math.random() * (59 - 1) + 1) ;
  }
}
