import { Capsule } from '../../capsules/model/Capsule';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchcard',
  templateUrl: './launchcard.component.html',
  styleUrls: ['./launchcard.component.scss']
})
export class LaunchcardComponent implements OnInit {

  @Input()
  launch: any ;

  constructor() { }

  ngOnInit(): void {

  }

}
