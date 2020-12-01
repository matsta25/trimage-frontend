import {Component, OnInit} from '@angular/core';
import {TrimageService} from "../../services/trimage.service";
import {RxStompService} from '@stomp/ng2-stompjs';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-trimage-render',
  templateUrl: './trimage-render.component.html',
  styleUrls: ['./trimage-render.component.scss']
})
export class TrimageRenderComponent implements OnInit {

  public log: string = '';
  public filenamePath: string = null;

  constructor(
    private trimageService: TrimageService,
    private rxStompService: RxStompService
  ) {
  }

  ngOnInit(): void {
    this.trimageService.render(this.trimageService.filename).subscribe(response => {
      // do something, if upload success
      console.log(response)
    }, error => {
      console.log(error);
    });

    this.rxStompService.watch('/topic/trimage').subscribe((message: any) => {
      if (message.body != null) {
        const messageBody = JSON.parse(message.body);

        if (messageBody.type === 'PROGRESS') {
          this.log = messageBody.content;
        }

        if (messageBody.type === 'STATUS') {
          if (messageBody.content === 'DONE') {
            this.filenamePath = environment.baseUrl + '/trimage/photos/output_' + this.trimageService.filename;
          }
        }
      }
    });
  }
}
