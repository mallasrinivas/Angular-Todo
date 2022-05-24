import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Item } from '../model/task';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoForm!:FormGroup;
  task:Item[]= []
  inprogess:Item[]=[]
  done:Item[]=[]
  updateIndex:any
  isEditEnable:boolean =false
  todoTask!:any
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : [null,Validators.required]
    })

  }

  onSubmit(): void {
    console.log('submit', this.todoForm.value);
    this.task.push({
      description:this.todoForm.value.item,
      done:false
    })
    localStorage.setItem("task",JSON.stringify(this.task))
    this.todoForm.reset();
  }
  onUpdateTodo(){
    this.task[this.updateIndex].description = this.todoForm.value.item;
    this.task[this.updateIndex].done = false;
    this.updateIndex = null;
    this.isEditEnable = false;
    this.todoForm.reset()
  }
  Onedit(item: Item,i:number){
    this.todoForm.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditEnable = true;
  }
  Ondelete(i:number){
      this.task.splice(i,1);
  }
  OndeleteInprogess(i:number){
    this.inprogess.splice(i,1);
  }
  OndeleteDone(i:number){
    this.done.splice(i,1);
  }
  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
