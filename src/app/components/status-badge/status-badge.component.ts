import { Component, input } from '@angular/core';
import { RideStatus } from '../../models/ride.model';
@Component({ selector: 'app-status-badge', standalone: true, template: `<span class="badge" [class.delayed]="status() === 'Delayed'" [class.cancelled]="status() === 'Cancelled'">{{ status() }}</span>`, styles: `.badge{display:inline-block;border-radius:99px;padding:.3rem .65rem;font-size:.75rem;font-weight:700;color:#16734b;background:#dcfce7}.delayed{color:#9a5b00;background:#fef3c7}.cancelled{color:#b42318;background:#fee2e2}` })
export class StatusBadgeComponent { status = input.required<RideStatus>(); }
