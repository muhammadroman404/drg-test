import { Component, OnInit } from '@angular/core';
import { ImageService, img } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { log } from 'console';
import { CommonModule, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-image-details',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.css'
})
export class ImageDetailsComponent implements OnInit {
  id!: number;
  imgDetail!: Observable<img>
  constructor(private _img: ImageService, private _activatedRoute: ActivatedRoute) {
    _img.isDetailPage.next(true)
  }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((resp: any) => {
      this.id = resp['id']
      this.imgDetail = this._img.getImageById(this.id)
      this.imgDetail.subscribe((resp:any)=>{
        console.log(resp);
        
      })
    })
  }
}
