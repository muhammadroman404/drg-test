import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageService } from './image.service';
import { CommonModule } from '@angular/common';
import { Observable, filter, map, mergeMap, take, toArray } from 'rxjs';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ToolbarComponent],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rdc-test';
  images:Observable<any> =  this._image.getImages()
  constructor(private _image:ImageService){
  }
}
