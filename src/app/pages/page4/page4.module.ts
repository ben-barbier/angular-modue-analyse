import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page4RoutingModule} from './page4-routing.module';
import {ComponentIModule} from '../../shared/component-i/component-i.module';
import {Page4Component} from './page4.component';

@NgModule({
    declarations: [Page4Component],
    imports: [
        CommonModule,
        Page4RoutingModule,
        ComponentIModule,
    ]
})
export class Page4Module {
}
