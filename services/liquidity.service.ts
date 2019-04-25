import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LiquidityService {

    private getAttributeSummariesUri = '/attribute-catalog/v1/attributesummaries';

    constructor(private http: HttpClient) { }

    /**
     * sample test service will be removed
     *
     * @returns {Observable<AttributeSummary[]>}
     *
     * @memberof IAttributeService
     */
    getAttributeList(): Observable<any[]> {
        const requestData = {'all': null, 'objectId': null, 'name': null, 'displayName': null, 'description': null,
        'dataType': null, 'owners': null, 'tags': null, 'offset': 0, 'limit': 10, 'sourceId': null, 'sortOrder': 'asc'};
        const uri =  environment.serviceURL + this.getAttributeSummariesUri;
        return this.http.post<any[]>(uri, requestData);
    }
}
