import { CapsuleService } from '../../../services/capsule.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capsule } from '../model/Capsule';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss']
})
export class CapsuleComponent implements OnInit {

  capsule?: Capsule;
  capsule_serial?: string ;

  constructor(private capsuleService: CapsuleService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params =>
      this.capsule_serial = params['serial']
    )
    this.getCapsule(this.capsule_serial!)
  }
  getCapsule(id: string){
      this.capsuleService.getCapsuleByNum(id).subscribe(capsule => this.capsule = capsule);
      console.log(this.capsule);
  }
}
