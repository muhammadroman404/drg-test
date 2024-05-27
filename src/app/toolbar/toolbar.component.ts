import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { Observable } from 'rxjs';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isDetailPage:Observable<any> = this._img.isDetailPage
  constructor(private _img:ImageService,private _location:Location){
   }
   back(){
    this._location.back();
    this._img.isDetailPage.next(false)
   }
}
