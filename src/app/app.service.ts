import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  apiURL = 'https://ftsapp.azurewebsites.net/api/Vehicle/UploadImages';

  uploadImage(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.apiURL}`, formData);
  }
}
