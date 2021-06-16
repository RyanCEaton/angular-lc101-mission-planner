import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mission-overview',
  templateUrl: './mission-overview.component.html',
  styleUrls: ['./mission-overview.component.css']
})
export class MissionOverviewComponent implements OnInit {

    missionName: string = "Mars 2030";
    rocketName: string = "Plasma Max";
    
  constructor() { }

  ngOnInit() {
  }

}
