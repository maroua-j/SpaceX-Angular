import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  public launches: any[];
  public upcomingLaunches: any[];

  constructor(private launchService: SpacexService, private router: Router) {}

  ngOnInit() {
    this.getAllLaunches();
  }

  getAllLaunches(): void {
    this.launchService.getAllLaunches().subscribe(data => {
      this.launches = data;
    });

    this.launchService.getUpcomingLaunch().subscribe(data => {
      this.upcomingLaunches = data;
    });
  }

  navigate(launch: any) {
    this.router.navigateByUrl('/launch/{{launch.flight_number}}');
  }

}