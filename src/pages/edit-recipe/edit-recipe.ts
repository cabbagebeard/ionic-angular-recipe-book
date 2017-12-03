import {Component, OnInit} from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  mode = 'New';

  constructor (private navParams: NavParams) {}

  ngOnInit() {
    this.mode = this.navParams.get('mode');
  }

}
