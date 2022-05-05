import { Component, OnInit } from '@angular/core';
import { SpaceTentaculeService } from './services/space-tentacule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  isLoader:boolean= true;
  launcher: Observable<any>;
  constructor(private spaceTentaculeService: SpaceTentaculeService) {
  }

  ngOnInit() {
    this.getLauncherByNum();
  }

  getLauncherByNum(params?) {
    this.spaceTentaculeService.getLauncherByNum(params).subscribe((response:Observable<any>) => {
      this.launcher = response;
      this.isLoader = false;
    })

  }
}
