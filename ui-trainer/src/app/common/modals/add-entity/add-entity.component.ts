import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {

  entity_desc: string;
  entitySlotType: string;
  categorical_values: string;
  min_value: number;
  max_value: number;

  constructor(public dialogRef: MatDialogRef<AddEntityComponent>) { }

  ngOnInit() {
  }

  setEntitySlotType(event: any) {
    this.entitySlotType = event.target.innerText;
  }

  saveEntitySlotDetails() {
    let entity_slot_details = {};
    if (this.entitySlotType === 'categorical') {
      entity_slot_details = {type: this.entitySlotType, values: this.categorical_values.split(',')};
    } else if (this.entitySlotType === 'float') {
      entity_slot_details = {type: this.entitySlotType, values: {min_value: this.min_value, max_value: this.max_value}};
    } else {
      entity_slot_details = {type: this.entitySlotType, values: []};
    }
    this.dialogRef.close({entity_desc: this.entity_desc, entity_slot_details: entity_slot_details});
  }

}