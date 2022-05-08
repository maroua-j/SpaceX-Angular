import { Component, Input, OnInit } from '@angular/core';
import { Capsule } from '../model/Capsule';

@Component({
  selector: 'app-capsulecard',
  templateUrl: './capsulecard.component.html',
  styleUrls: ['./capsulecard.component.scss']
})
export class CapsulecardComponent implements OnInit {

  @Input()
  capsule: any;

  constructor() { }

  ngOnInit(): void {
  }

}
