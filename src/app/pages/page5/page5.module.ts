import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page5RoutingModule} from './page5-routing.module';
import {ComponentIModule} from '../../shared/component-i/component-i.module';
import {Page5Component} from './page5.component';

@NgModule({
    declarations: [Page5Component],
    imports: [
        CommonModule,
        Page5RoutingModule,
        ComponentIModule,
    ]
})
export class Page5Module {
}
