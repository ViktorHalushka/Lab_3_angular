import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'] 
})
export class TodolistComponent implements OnInit {
  taskArray = [{ taskName: 'do lab_3 of framework js ', isCompleted: false }];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);

    const taskName = form.value.task.trim() || 'New To Do List'; // Використовуємо значення або значення за замовчуванням

    this.taskArray.push({
      taskName: taskName,
      isCompleted: false
    });

    form.reset(); // Скидаємо форму
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1); // Видаляє завдання за індексом
  }
}
