import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideNgxWebstorage, withLocalStorage } from 'ngx-webstorage';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCheckboxModule,
    ),
    provideNgxWebstorage(withLocalStorage()),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
