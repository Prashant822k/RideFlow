import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
@Injectable({ providedIn: 'root' }) export class UserService { private readonly http = inject(HttpClient); getUser() { return this.http.get<User>('/api/user'); } }
