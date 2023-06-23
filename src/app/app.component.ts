import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appService: AppService) {}
  selectedFile: File[] | null = null;

  linksArr = [];

  loading = false;

  onFileSelected(event: any) {
    this.selectedFile = [];

    for (let i = 0; i < event.target.files.length; i++) {
      this.selectedFile.push(event.target.files[i]);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.selectedFile) {
      this.loading = true;
      const formData = new FormData();
      for (let file of this.selectedFile) formData.append('files', file);

      this.appService.uploadImage(formData).subscribe({
        next: (res) => {
          console.log(res);
          this.linksArr = res;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
      });
    } else {
      console.log('No file selected');
    }
  }
}
