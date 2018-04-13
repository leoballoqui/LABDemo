import {Request, XHRBackend, XHRConnection} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiXHRBackend extends XHRBackend {
    createConnection(request: Request): XHRConnection {
        if (request.url.startsWith('/')){
            request.url = 'http://localhost:23049' + request.url;
        }
        return super.createConnection(request);
    }
}