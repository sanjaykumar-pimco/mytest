import { Injectable, Injector } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { NotificationService } from './services/notification.service';


@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const notifier = this.injector.get(NotificationService);
        request = request.clone({ setHeaders: { 'Accept': 'application/json' }, 'withCredentials': true });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('result--->>>', event);
                    notifier.showSuccess(event.statusText);
                }
                return event;
            }),
            retry(2),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                console.log('error-->>>', data);
                return throwError(error);
            }));
    }
}
