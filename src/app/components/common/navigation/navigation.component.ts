import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  public timer : number = 0;
  public intervalTimer! : any;

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.intervalTimer);
    alert(`${this.timer} secondes se sont écoulés!`)
  }

  ngOnInit(): void {
    this.intervalTimer = setInterval(
      ()=> {
        this.timer++;
        console.log(this.timer);
      }, 1000);
  }

}
