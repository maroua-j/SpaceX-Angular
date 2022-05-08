import { CapsuleService } from './../../../services/capsule.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capsule } from 'src/app/components/capsules/model/Capsule';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailedLaunch: any;
  capsules: Capsule[];

  constructor(private route: ActivatedRoute, private launchService: SpacexService, private capsuleService: CapsuleService) { }

  ngOnInit() {
    let snapshot = this.route.snapshot;
    this.launchService.getLaunchByNum(snapshot.params.num).toPromise().then(launch => {
      this.detailedLaunch=launch;
    });
    this.capsuleService.getCapsuleByMission('CRS-1').subscribe(capsules => this.capsules = capsules);
  }

  checkSuccess() {
    if (this.detailedLaunch?.launch_success) {
      return "Successful";
    } else {
      return "Failure";
    }
  }

}
