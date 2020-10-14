import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page3RoutingModule} from './page3-routing.module';
import {Page3Component} from './page3.component';
import {ComponentHComponent} from '../../shared/component-h/component-h.component';
import {ComponentHModule} from '../../shared/component-h/component-h.module';

@NgModule({
    declarations: [Page3Component],
    imports: [
        CommonModule,
        Page3RoutingModule,
        ComponentHModule,
    ]
})
export class Page3Module {
}
