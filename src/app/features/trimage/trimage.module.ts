import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrimageRoutingModule } from './trimage-routing.module';
import { TrimageUploadPhotoComponent } from './component/trimage-upload-photo/trimage-upload-photo.component';
import {TrimageComponent} from "./trimage.component";
import {NgxDropzoneModule} from "ngx-dropzone";
import {SharedModule} from "../../shared/shared.module";
import { TrimageSetParamsComponent } from './component/trimage-set-params/trimage-set-params.component';
import { TrimageRenderComponent } from './component/trimage-render/trimage-render.component';
import {myRxStompConfig} from "./config/my-rx-stomp.config";
import { InjectableRxStompConfig, rxStompServiceFactory, RxStompService } from '@stomp/ng2-stompjs';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [TrimageComponent, TrimageUploadPhotoComponent, TrimageSetParamsComponent, TrimageRenderComponent],
  imports: [
    CommonModule,
    TrimageRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
  ]
})
export class TrimageModule { }
