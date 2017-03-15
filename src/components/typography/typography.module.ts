import { NgModule, ModuleWithProviders } from '@angular/core';

import { Typography } from './typography';

@NgModule({
  declarations: [
    Typography
  ],
  exports: [
    Typography
  ]
})
export class TypographyModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TypographyModule, providers: []
    };
  }
}
