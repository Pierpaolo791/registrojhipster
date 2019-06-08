import { NgModule } from '@angular/core';

import { RegistroSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [RegistroSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [RegistroSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RegistroSharedCommonModule {}
