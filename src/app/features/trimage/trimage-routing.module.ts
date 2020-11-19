import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsComponent} from "../posts/posts.component";
import {PostsListComponent} from "../posts/components/posts-list/posts-list.component";
import {TrimageComponent} from "./trimage.component";
import {TrimageUploadPhotoComponent} from "./component/trimage-upload-photo/trimage-upload-photo.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrimageRoutingModule {
}
