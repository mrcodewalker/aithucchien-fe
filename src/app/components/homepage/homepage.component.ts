import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  activeTab: string = '2-days';

  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
