import { Component } from '@angular/core';
import { NewGallery } from './models';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-gallery-dialog',
  templateUrl: './add-gallery-dialog.component.html',
  styleUrl: './add-gallery-dialog.component.css'
})
export class AddGalleryDialogComponent {
  newGallery: NewGallery = {name: '', city: '', manager: ''};

  constructor(public dialogRef: MatDialogRef<AddGalleryDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}