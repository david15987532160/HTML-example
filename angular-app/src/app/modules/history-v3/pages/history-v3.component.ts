import {Component, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../../core/models/image';
import {ImageService} from '../../../core/services/image.service';
import {Subscription} from 'rxjs';
import {SelectItem} from 'primeng/api';

@Component({
    selector: 'app-history-v3',
    templateUrl: './history-v3.component.html',
    styleUrls: ['./history-v3.component.scss']
})
export class HistoryV3Component implements OnInit, OnDestroy {
    image: Image;
    images: Image[];
    selectedImage: Image;
    displayDialog = false;
    sortOptions: SelectItem[];
    sortKey: string;
    sortOrder: number;
    sortField: string;
    subscription: Subscription;

    constructor(private imageService: ImageService) {
    }

    // get data from local
    // getImagesFromServices(): void {
    //     this.subscription = this.imageService.getImages().subscribe(updatedImages => this.images = updatedImages);
    // }

    // get data from server
    getImagesFromServicesReq(): void {
        this.subscription = this.imageService.getImagesHttp().subscribe(updatedImages => this.images = updatedImages);
    }

    ngOnInit() {
        // this.getImagesFromServices();
        this.getImagesFromServicesReq();
        this.sortOptions = [
            {label: 'Newest First', value: '!date'},
            {label: 'Oldest First', value: 'date'},
            {label: 'Name', value: 'name'}
        ];
    }

    onSortChange(event) {
        const value = event.value;
        // console.log(value);

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
            console.log(this.sortField + ' ' + this.sortOrder + ' ' + this.sortKey);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
            console.log(this.sortField + ' ' + this.sortOrder + ' ' + this.sortKey);
        }
    }

    onSelectImage(event: Event, image) {
        this.selectedImage = image;
        this.displayDialog = true;
        console.log(`selectedImage = ${JSON.stringify(this.selectedImage)}`);
        event.preventDefault();
    }

    downloadImage(selectedImage: Image) {
        // call download api
        console.log(`download Image = ${JSON.stringify(this.selectedImage)}`);
    }

    onDialogHide() {
        this.selectedImage = null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
