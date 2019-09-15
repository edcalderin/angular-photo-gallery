import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private BASE_URI = "http://localhost:4000/api/photos"

  constructor(private httpClient: HttpClient) { }

  createPhoto(title: string, description: string, photo: File) {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('image', photo)
    return this.httpClient.post(this.BASE_URI, formData)
  }
  getPhotos() {
    return this.httpClient.get<Photo[]>(this.BASE_URI)
  }
  getPhoto(id: string) {
    return this.httpClient.get<Photo>(`${this.BASE_URI}/${id}`)
  }
  deletePhoto(id: string) {
    return this.httpClient.delete<Photo>(`${this.BASE_URI}/${id}`)
  }
  updatePhoto(){
    
  }
}
