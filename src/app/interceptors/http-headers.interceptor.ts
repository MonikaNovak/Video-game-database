import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// TODO learning - learn more about interceptors and understan fully what is happening here

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            url: req.url,
            setParams: {
                key: '1b8799dc37254559b5bd2e696ce2a713',
            }
        });
        return next.handle(req);
    }
}






