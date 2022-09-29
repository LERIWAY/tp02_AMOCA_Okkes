import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentAffichage',
  templateUrl: './componentAffichage.component.html',
  styleUrls: ['./componentAffichage.component.css']
})
export class ComponentAffichageComponent implements OnInit {

  constructor() { }
  @Input() prenom : String = "";
  @Input() nom : String = "";
  @Input() genre : String = "";
  @Input() adresse : String = "";
  @Input() ville : String = "";
  @Input() cp : String = "";
  @Input() pays : String = "";
  @Input() email : String = "";
  @Input() tel : String = "";
  @Input() login : String = "";
  @Input() password : String = ""; 
  @Output() change: EventEmitter<String> = new EventEmitter<String>();
  
  ngOnInit(): void {
  }
}
