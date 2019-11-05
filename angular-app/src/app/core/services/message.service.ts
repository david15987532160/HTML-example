import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = [];

  add(message: string) {
    this.message.push(message);
  }

  deleteAllMessages() {
    this.message = [];
  }

  constructor() {
  }
}
