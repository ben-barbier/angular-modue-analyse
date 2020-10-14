import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page2RoutingModule} from './page2-routing.module';
import {Page2Component} from './page2.component';
import {ComponentCComponent} from './component-c/component-c.component';
import {ComponentEModule} from '../../shared/component-e/component-e.module';
import {ComponentFModule} from '../../shared/component-f/component-f.module';

@NgModule({
    declarations: [Page2Component, ComponentCComponent],
    imports: [
        CommonModule,
        Page2RoutingModule,
        ComponentEModule,
        ComponentFModule,
    ]
})
export class Page2Module {
}
