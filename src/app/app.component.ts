import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  showHeaderMenu: boolean = false;

  ngOnInit() {
    
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
  }

}
