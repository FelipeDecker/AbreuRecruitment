import { Component, OnInit } from '@angular/core';
import { Gallery } from './models';
import { GalleryService } from './gallery.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddGalleryDialogComponent } from './add-gallery-dialog/add-gallery-dialog.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
  galleries: Gallery[] = [];
  displayedColumns: string[] = ['name', 'city', 'manager', 'nbrWorks', 'actions'];

  constructor(private galleryService: GalleryService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('cenas');
    this.loadGalleries();
  }
  

  editGalleryClick(galleryId: string) {
    console.log(galleryId);
  }

  openArtWorksList(galleryId: string) {
    this.router.navigate(['/artworks', galleryId]);
  }

  loadGalleries() {
    this.galleryService.getGalleries().subscribe(galleries => {this.galleries = galleries; console.log(this.galleries);});
  }

  openAddGalleryDialog(): void {
    const dialogRef = this.dialog.open(AddGalleryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.galleryService.addGallery(result).subscribe(() => {
          this.loadGalleries();
        });
      }
    });
  }
}