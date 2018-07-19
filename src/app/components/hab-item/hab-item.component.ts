import { Component, Input, OnInit } from '@angular/core';
import { HabItem } from '../../models/HabItem';

@Component({
  selector: 'app-hab-item',
  templateUrl: './hab-item.component.html',
  styleUrls: ['./hab-item.component.css']
})
export class HabItemComponent implements OnInit {

  @Input() data: HabItem;

  constructor() { }

  ngOnInit() {

  }

}
