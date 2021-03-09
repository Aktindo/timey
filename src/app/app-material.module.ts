import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatTooltipModule
    ]
})

export class MaterialModule { }