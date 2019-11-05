// Services could get data from server, create fake data, get data from local storage
import {Injectable} from '@angular/core';
import {fakeImages} from '../../fake-Images';
import {Image} from '../models/image';

// Get data asynchronous
import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getImages(): Observable<Image[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Get image list`);
    return of(fakeImages);
  }

  constructor(public messageService: MessageService) {
  }

}
