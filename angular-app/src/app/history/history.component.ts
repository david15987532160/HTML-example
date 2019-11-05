import {Component, OnInit} from '@angular/core';
import {Image} from '../core/models/image';
import {ImageService} from '../core/services/image.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    title = 'Image list';
    image: Image = {
        id: 1,
        name: 'Star Wars',
        date: '1977',
    }
    // images = fakeImages;
    images: Image[];
    selectedImage: Image;

    constructor(private imageService: ImageService) {

    }

    getImagesFromServices(): void {
        this.imageService.getImages().subscribe(updatedImages => this.images = updatedImages);
    }

    ngOnInit() {
        this.getImagesFromServices();
    }

    // Action when select an Image in List item

    onSelect(image: Image): void {
        this.selectedImage = image;
        console.log(`selectedImage = ${JSON.stringify(this.selectedImage)}`);
    }

}
