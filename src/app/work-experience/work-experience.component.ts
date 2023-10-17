import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  public imoSkills:any = ["Angular", "Python", "PostgreSQL", "HTML5", "CSS3", "Kendo", "Octopus", "AWS"];
  public amplifiSkills:any = ["Angular", "Java","Spring MVC", "Spring Boot", "MySQL", "HTML5", "CSS3", "Jenkins", "AWS"];
  public mipSkills:any = ["JavaScript","jQuery","JSP", "Java", "PostgreSQL", "HTML5", "CSS", "Kendo", "Octopus", "AWS"];
  public amazonSkills:any = ["Angular", "Python", "PostgreSQL", "HTML5", "CSS", "Kendo", "Octopus", "AWS"];
  public capgeminiSkills:any = ["Angular", "Python", "PostgreSQL", "HTML5", "CSS", "Kendo", "Octopus", "AWS"];

}
