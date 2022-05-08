import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailedLaunch: any;

  constructor(private route: ActivatedRoute, private launchService: SpacexService) { }

  ngOnInit() {
    let snapshot = this.route.snapshot;
    this.launchService.getLaunchByNum(snapshot.params.num).toPromise().then(launch => {
      this.detailedLaunch=launch;
    });
    
  }

  checkSuccess() {
    if (this.detailedLaunch?.launch_success) {
      return "Successful";
    } else {
      return "Failure";
    }
  }

}
