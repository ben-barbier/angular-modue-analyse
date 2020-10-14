import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page1RoutingModule} from './page1-routing.module';
import {Page1Component} from './page1.component';
import {ComponentBComponent} from './component-b/component-b.component';
import {ComponentDModule} from '../../shared/component-d/component-d.module';
import {ComponentFModule} from '../../shared/component-f/component-f.module';

@NgModule({
    declarations: [Page1Component, ComponentBComponent],
    imports: [
        CommonModule,
        Page1RoutingModule,
        ComponentDModule,
        ComponentFModule,
    ]
})
export class Page1Module {
}
