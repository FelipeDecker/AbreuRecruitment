import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ArtWorkService } from './artwork.service';
import { ActivatedRoute } from '@angular/router';
import { ArtWork } from './models';
@Component({
  selector: 'app-art-work',
  templateUrl: './art-work.component.html',
  styleUrl: './art-work.component.css'
})
export class ArtWorkComponent implements OnInit{  
  artWorks: ArtWork[] = [];
  displayedColumns: string[] = ['name', 'author', 'creationYear', 'askPrice'];
  constructor(private route: ActivatedRoute, private artworkService: ArtWorkService) { }
  ngOnInit(): void {
  const galleryId = this.route.snapshot.paramMap.get('id')?.toString() ?? "";
    this.getArtWorks(galleryId)
  }
  getArtWorks(galleryId: string) {    
    this.artworkService.getArtWorks(galleryId).subscribe(artWorks => {
      this.artWorks = artWorks;
    });
  }
}