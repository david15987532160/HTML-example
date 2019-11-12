import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../../core/models/image';
import {ImageService} from '../../../core/services/image.service';
import {MessageService} from '../../../core/services/message.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy, AfterViewInit {

    title2 = '';
    image: Image = {
        id: 1,
        name: 'ABC',
        date: '1977',
        src: './',
    };
    images: Image[];
    selectedImage: Image;
    subscription: Subscription;

    constructor(private imageService: ImageService, private messageService: MessageService) {

        // this.title2 = messageService.getTitle() + ' is passed';
    }

    getImagesFromServices(): void {
        this.subscription = this.imageService.getImages().subscribe(updatedImages => this.images = updatedImages);
        // this.subscription = this.messageService.title$.subscribe(m => this.titleReceived = true);
    }

    ngOnInit() {
        this.getImagesFromServices();
    }

    ngAfterViewInit(): void {
        this.subscription = this.messageService.title$.subscribe(
            (title: string) => {
                // console.log(title);
                this.title2 = title;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // Action when select an Image in List item
    onSelect(image: Image): void {
        this.selectedImage = image;
        console.log(`selectedImage = ${JSON.stringify(this.selectedImage)}`);
    }
}
