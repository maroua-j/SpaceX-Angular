import { CapsuleService } from '../../../services/capsule.service';
import { Capsule } from '../model/Capsule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capsulelist',
  templateUrl: './capsulelist.component.html',
  styleUrls: ['./capsulelist.component.scss']
})
export class CapsulelistComponent implements OnInit {
  capsules?: Capsule[];

  constructor(private capsuleService: CapsuleService) { 
    
  }
ngOnInit(): void {
  this.getCapsule();
}
getCapsule(){
    this.capsuleService.getAllCapsules().subscribe(capsules => this.capsules = capsules);
}

}
