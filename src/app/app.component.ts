import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('home') home!: HomeComponent;

  title = 'portfolio';
  showHeaderMenu: boolean = false;
  showHeader = false;

  @HostListener('document:scroll', ['$event']) onScrollEvent($event: any) {
    // const windowHeight = window.innerHeight;
    const boundingHomeElm = this.home.content.nativeElement.getBoundingClientRect();
    console.log(window.pageYOffset, boundingHomeElm);
     this.showHeader = boundingHomeElm.bottom < 0;
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log(this.home.content)
  }

  goToSection(elm:any){
    //console.log(elm)
    this.toggleHeaderMenu()
    elm.scrollIntoView({behavior: "smooth"})
  }

  toggleHeaderMenu(){
    this.showHeaderMenu=!this.showHeaderMenu
  }


  spotlightStyle = {};

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.spotlightStyle = {
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    };
    //console.log(this.spotlightStyle)
  }

}
