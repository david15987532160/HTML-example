import {Component, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../../core/models/image';
import {ImageService} from '../../../core/services/image.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-history-v3',
    templateUrl: './history-v3.component.html',
    styleUrls: ['./history-v3.component.scss']
})
export class HistoryV3Component implements OnInit, OnDestroy {
    image: Image;
    images: Image[];
    selectedImage: Image;
    displayDialog: boolean;
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
    }

    onSelectImage($event: MouseEvent, image) {
        this.selectedImage = image;
        this.displayDialog = true;
        console.log(`selectedImage = ${JSON.stringify(this.selectedImage)}`);
    }

    onDialogHide() {
        this.selectedImage = null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
