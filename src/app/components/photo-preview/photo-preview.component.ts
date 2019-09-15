import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute, private router: Router) { }
  id: string
  photo: Photo
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id
        this.getPhoto(this.id)
      },
      error => console.log(error)
    )
  }
  getPhoto(id: string) {
    this.photoService.getPhoto(id).subscribe(
      res => this.photo = res,
      error => console.log(error)
    )
  }
  deletePhoto(id: string) {
    this.photoService.deletePhoto(id).subscribe(
      res => this.router.navigate(['photos']),
      error => console.log(error)
    )
  }
}
