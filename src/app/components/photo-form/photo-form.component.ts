import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})

export class PhotoFormComponent {
  file: File
  photoSelected: string | ArrayBuffer
  constructor(private photoService: PhotoService, private router: Router) {

  }
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file)
    }
  }
  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    console.log(title.value, description.value)
    this.photoService.createPhoto(title.value, description.value, this.file)
      .subscribe(
        e => this.router.navigate(['photos']),
        err=>console.log(err)
      )
    return false
  }
}