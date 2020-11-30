import { Component, OnInit } from '@angular/core';
import {TrimageService} from "../../services/trimage.service";
import { RxStompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-trimage-render',
  templateUrl: './trimage-render.component.html',
  styleUrls: ['./trimage-render.component.scss']
})
export class TrimageRenderComponent implements OnInit {

  public log: string = '';

  constructor(
    private trimageService: TrimageService,
    private rxStompService: RxStompService
  ) { }

  ngOnInit(): void {
    this.trimageService.render(this.trimageService.filename).subscribe(response => {
      // do something, if upload success
      console.log(response)
    }, error => {
      console.log(error);
    });

    this.rxStompService.watch('/topic/chat').subscribe((message: any) => {
      console.log(message)
      if(message.body != null) {
        this.log = message.body;
      }
    });
  }
}
