import {Component, OnInit} from '@angular/core';
import {promptGlobalAnalytics} from "@angular/cli/models/analytics";
import {TrimageService} from "../../services/trimage.service";

@Component({
  selector: 'app-trimage-upload-photo',
  templateUrl: './trimage-upload-photo.component.html',
  styleUrls: ['./trimage-upload-photo.component.scss']
})
export class TrimageUploadPhotoComponent implements OnInit {

  uploadedWithSuccess = false;

  constructor(
    private trimageService: TrimageService
  ) {
  }

  files: File[] = [];

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
    this.onUpload()
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    this.trimageService.uploadFile(this.files[0]).subscribe(response => {
      // do something, if upload success
      // @ts-ignore
      this.trimageService.filename = response.data.filename
      this.uploadedWithSuccess = true;
    }, error => {
      console.log(error);
      this.uploadedWithSuccess = false;
    });
  }
}
