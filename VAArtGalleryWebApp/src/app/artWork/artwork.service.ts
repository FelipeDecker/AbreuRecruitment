import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtWork } from './models';
import { Guid } from 'guid-typescript';
import { NewGallery } from '../gallery/add-gallery-dialog/models';

@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {
  private baseUrl = 'https://localhost:7042/api/art-works'
  constructor(private http: HttpClient) { }
  getArtWorks(galleryId: string): Observable<ArtWork[]> {
    return this.http.get<ArtWork[]>(`${this.baseUrl}/${galleryId}`);
  }
}