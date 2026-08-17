import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { mockApiInterceptor } from './services/mock-api.interceptor';

export const appConfig: ApplicationConfig = { providers: [provideAnimations(), provideRouter(routes), provideHttpClient(withInterceptors([mockApiInterceptor]))] };
