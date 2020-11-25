import { Component, OnInit } from '@angular/core';
import {TrimageService} from "../../services/trimage.service";

@Component({
  selector: 'app-trimage-render',
  templateUrl: './trimage-render.component.html',
  styleUrls: ['./trimage-render.component.scss']
})
export class TrimageRenderComponent implements OnInit {

  constructor(
    private trimageService: TrimageService
  ) { }

  ngOnInit(): void {
    this.trimageService.render(this.trimageService.filename).subscribe(response => {
      // do something, if upload success
      console.log(response)
    }, error => {
      console.log(error);
    });
  }
}
