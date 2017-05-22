import { Component } from '@angular/core';
@Component({
  selector: 'my-list',
  template: '<ul><li *ngFor="#myItem of itemsList" (click)="onItemClicked(myItem)">{{myItem.name}}</li></ul><input type="text" [(ngModel)]="selectedItem.name"><button (click)="onDeleteItem()">Delete</button><br><br><input type="text" #listItem><button (click)="onAddItem(listItem)">Add</button>'
})
export class ItemListComponent {
  public itemsList=[
    {name:"Apple"},
	{name:"orange"},
	{name:"grapes"},
  ];
  public selectedItem={name:""};
  onItemClicked(itemList){
	  this.selectedItem=itemList;
  }
  onAddItem(itemList){
	  this.itemsList.push({name:itemList.value});
  }
  onDeleteItem(){
	  this.itemsList.splice(this.itemsList.indexOf(this.selectedItem), 1);
  }
}