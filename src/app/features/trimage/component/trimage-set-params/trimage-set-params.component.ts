import { Component, OnInit } from '@angular/core';
import {TrimageService} from "../../services/trimage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trimage-set-params',
  templateUrl: './trimage-set-params.component.html',
  styleUrls: ['./trimage-set-params.component.scss']
})
export class TrimageSetParamsComponent implements OnInit {

  modes: {
    name: string,
    value: number
  }[] = [
    {
      name: 'combo',
      value: 0
    },
    {
      name: 'triangle',
      value: 1
    },
    {
      name: 'rect',
      value: 2
    },
    {
      name: 'ellipse',
      value: 3
    },
    {
      name: 'circle',
      value: 4
    },
    {
      name: 'rotatedrect',
      value: 5
    },
    {
      name: 'beziers',
      value: 6
    },
    {
      name: 'rotatedellipse',
      value: 7
    },
    {
      name: 'polygon',
      value: 8
    },
  ]

  paramsForm = new FormGroup({
    numberOfShapes: new FormControl(100, Validators.required),
    mode: new FormControl(this.modes[1].value ,Validators.required),
  });


  constructor(
    private trimageService: TrimageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.trimageService.render(this.trimageService.filename, this.paramsForm.value?.numberOfShapes.toString(), this.paramsForm.value?.mode.toString()).subscribe(response => {
      this.router.navigate(['/', 'trimage', 'render']);
    }, error => {
      console.log(error);
    });
  }

}
