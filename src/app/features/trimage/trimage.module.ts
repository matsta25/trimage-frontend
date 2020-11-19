import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrimageRoutingModule } from './trimage-routing.module';
import { TrimageUploadPhotoComponent } from './component/trimage-upload-photo/trimage-upload-photo.component';
import {TrimageComponent} from "./trimage.component";


@NgModule({
  declarations: [TrimageComponent, TrimageUploadPhotoComponent],
  imports: [
    CommonModule,
    TrimageRoutingModule
  ]
})
export class TrimageModule { }
