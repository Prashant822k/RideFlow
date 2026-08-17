import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { RIDES, USER } from './mock-data';
export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === '/api/rides') return of(new HttpResponse({ status: 200, body: RIDES })).pipe(delay(350));
  if (req.url.startsWith('/api/rides/')) return of(new HttpResponse({ status: 200, body: RIDES.find(ride => ride.id === Number(req.url.split('/').pop())) })).pipe(delay(250));
  if (req.url === '/api/user') return of(new HttpResponse({ status: 200, body: USER })).pipe(delay(250));
  return next(req);
};
