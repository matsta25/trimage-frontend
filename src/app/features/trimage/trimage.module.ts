import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrimageRoutingModule } from './trimage-routing.module';
import { TrimageUploadPhotoComponent } from './component/trimage-upload-photo/trimage-upload-photo.component';
import {TrimageComponent} from "./trimage.component";
import {NgxDropzoneModule} from "ngx-dropzone";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [TrimageComponent, TrimageUploadPhotoComponent],
  imports: [
    CommonModule,
    TrimageRoutingModule,
    SharedModule,
    NgxDropzoneModule
  ]
})
export class TrimageModule { }
