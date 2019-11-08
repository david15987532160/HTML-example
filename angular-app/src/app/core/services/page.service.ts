import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class PageService {

    constructor() {
    }

    getPaginationText(totalItemsCount, numberOfItemsPerPage, page): string {
        const start = (page - 1) * numberOfItemsPerPage + 1;
        const end = Math.min(start + numberOfItemsPerPage - 1, totalItemsCount);

        return `${start} to ${end} of ${totalItemsCount}`;
    }

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 15) {
        let startPage: number;
        let endPage: number;

        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {

                if ((totalPages - (currentPage - 2)) === 5) {
                    startPage = currentPage - 1;
                    endPage = currentPage + 3;
                } else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                }
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }
}
