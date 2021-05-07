/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-modal [(clrModalOpen)]="opened" [clrModalStaticBackdrop]="false">
    ...
</clr-modal>
`;

@Component({
  selector: 'clr-modal-angular-static-backdrop-demo',
  templateUrl: './modal-angular-static-backdrop.demo.html',
})
export class ModalAngularStaticBackdropDemo {
  // Booleans to open each example modal
  public static = false;

  example = EXAMPLE;
}
