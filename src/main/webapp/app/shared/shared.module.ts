import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegistroSharedLibsModule, RegistroSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RegistroSharedLibsModule, RegistroSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [RegistroSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistroSharedModule {
  static forRoot() {
    return {
      ngModule: RegistroSharedModule
    };
  }
}
