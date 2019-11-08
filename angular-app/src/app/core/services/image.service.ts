// Services could get data from server, create fake data, get data from local storage
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {fakeImages} from '../../fake-Images';
import {Image} from '../models/image';

// Get data asynchronous
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {MessageService} from './message.service';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient, public messageService: MessageService) {
    }

    private urlImages = 'http://127.0.0.1:3000/images';

    getImages(): Observable<Image[]> {
        this.messageService.add(`${new Date().toLocaleString()}. Get image list`);
        return of(fakeImages);
    }

    getImagesHttp(): Observable<Image[]> {
        return this.http.get<Image[]>(this.urlImages).pipe(
            tap(receivedImages => console.log(`receivedImages = ${JSON.stringify(receivedImages)}`)),
            catchError(error => of([]))
        );
    }

    getImageFromId(id: number): Observable<Image> {
        return of(fakeImages.find(image => image.id === id));
    }

}
