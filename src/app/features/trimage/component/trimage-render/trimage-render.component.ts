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

  public log: string = '0';
  public filenamePath: string = null;

  constructor(
    private trimageService: TrimageService,
    private rxStompService: RxStompService,
  ) {
  }

  ngOnInit(): void {
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

  onDownload() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.filenamePath);
    link.setAttribute('download', `image.png`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
