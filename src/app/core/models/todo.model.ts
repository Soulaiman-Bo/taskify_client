import { ITodoType } from '../../shared/components/todo-card/todo-card.component';

export interface IResponse<T> {
  data: T[];
  message?: string;
}

export interface ITodo {
  id?: number;
  title: string;
  body: string;
  status: ITodoType;
}



// - this is the json structure i recieve from the api after i fetch in Angular 

// [
//   {
//       "id": 75,
//       "title": "task one",
//       "body": "this a task One",
//       "status": "to-do"
//   },
//   {
//       "id": 76,
//       "title": "task two",
//       "body": "this a task two",
//       "status": "to-do"
//   }
// ]

// - and this is the Itodo interface

// export interface ITodo {
//   id?: number;
//   title: string;
//   body: string;
//   status: ITodoType;
// }

// export type ITodoType = 'to-do' | 'in-progress' | 'done';


// - this the old reponse interface

// export interface IResponse<T> {
//   data: T;
//   message?: string;
// }

// - make to matche the response that i recieve from the api 