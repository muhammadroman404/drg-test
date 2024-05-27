import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export interface img {
  "albumId": number;
  "id": number;
  "title": string;
  "url": string;
  "thumbnailUrl": string;
}
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  isDetailPage: Subject<boolean> = new Subject()
  baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  constructor(private _htpp: HttpClient) { }
  getImages(): Observable<img[]> {
    return this._htpp.get<img[]>(`${this.baseUrl}photos/?_limit=24`);
  }
  getImageById(id: number): Observable<img> {
    return this._htpp.get<img>(`${this.baseUrl}photos/${id}`)
  }
}
