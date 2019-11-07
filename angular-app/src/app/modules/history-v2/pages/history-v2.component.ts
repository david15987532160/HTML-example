import {Component, OnInit} from '@angular/core';
import {Image} from '../../../core/models/image';
import {ImageService} from '../../../core/services/image.service';

@Component({
    selector: 'app-history-v2',
    templateUrl: './history-v2.component.html',
    styleUrls: ['./history-v2.component.scss']
})

export class HistoryV2Component implements OnInit {

    images: Image[];

    selectedImage: Image;

    displayDialog: boolean;

    constructor(private imageService: ImageService) {
    }

    getImagesFromServices(): void {
        this.imageService.getImagesReq().subscribe(updateImages => this.images = updateImages);
    }

    ngOnInit() {
        this.getImagesFromServices();
    }

    selectImage(image: Image) {
        this.selectedImage = image;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedImage = null;
    }

    onSelect(image: Image): void {
        this.selectedImage = image;
        console.log(`selectedImage = ${JSON.stringify(this.selectedImage)}`);
    }

}
