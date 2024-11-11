import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gallery } from './models';
import { NewGallery } from './add-gallery-dialog/models';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private baseUrl = 'https://localhost:7042/api/art-galleries'
  constructor(private http: HttpClient) { }

  getGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${this.baseUrl}`);
  }

  addGallery(gallery: NewGallery): Observable<NewGallery> {
    return this.http.post<Gallery>(this.baseUrl, gallery);
  }
}