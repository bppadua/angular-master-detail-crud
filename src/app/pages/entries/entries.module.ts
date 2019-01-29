import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';

import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [
    EntriesRoutingModule,
    CalendarModule,
    IMaskModule,
    SharedModule
  ]
})
export class EntriesModule { }
