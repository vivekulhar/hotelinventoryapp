import { TestBed } from '@angular/core/testing';
import { async } from 'rxjs';
import {Calculator} from './testservice';
import { ConfigService } from './services/config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  HttpTestingController } from '@angular/common/http/testing';
describe('testservice',()=>{
    it('should add 2 numbers',()=>{
        const service = new Calculator();
        expect(service.add(2,2)).toBe(4);
    });
    it('should sub 2 numbers',()=>{
        const service = new Calculator();
        expect(service.subtract(2,2)).toBe(0);
    });

})
