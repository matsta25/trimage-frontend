import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrimageComponent} from "./trimage.component";
import {TrimageUploadPhotoComponent} from "./component/trimage-upload-photo/trimage-upload-photo.component";
import {TrimageSetParamsComponent} from "./component/trimage-set-params/trimage-set-params.component";
import {TrimageRenderComponent} from "./component/trimage-render/trimage-render.component";

const routes: Routes = [
  {
    path: '',
    component: TrimageComponent,
    children: [
      {
        path: '',
        redirectTo: 'upload-photo',
        pathMatch: 'full',
      },
      {
        path: 'upload-photo',
        component: TrimageUploadPhotoComponent,
      },
      {
        path: 'set-params',
        component: TrimageSetParamsComponent,
      },
      {
        path: 'render',
        component: TrimageRenderComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrimageRoutingModule {
}
