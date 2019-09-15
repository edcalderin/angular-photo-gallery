import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/interfaces/photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[]
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe(
      res => this.photos = res,
      error => console.log(error)
    )
  }
  selectedCard(id: string) {
    this.router.navigate(['photos', id])
  }
}
