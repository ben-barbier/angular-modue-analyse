import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentIComponent} from './component-i.component';

@NgModule({
    declarations: [ComponentIComponent],
    imports: [CommonModule],
    exports: [ComponentIComponent],
})
export class ComponentIModule {
}
