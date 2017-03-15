import { NgModule, ModuleWithProviders } from '@angular/core';

import { ClickBlock } from './click-block';

@NgModule({
  declarations: [
    ClickBlock
  ],
  exports: [
    ClickBlock
  ]
})
export class ClickBlockModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClickBlockModule, providers: []
    };
  }
}
