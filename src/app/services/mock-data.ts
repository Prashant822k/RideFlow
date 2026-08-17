import { Ride } from '../models/ride.model';
import { User } from '../models/user.model';
export const RIDES: Ride[] = [
  { id: 1, route: 'Hebbal → NMIT', pickupLocation: 'Esteem Mall, Hebbal', pickupTime: '8:15 AM', vehicle: 'KA-01-AB-1234', driver: 'Ravi Kumar', status: 'On Time', date: '17 Aug 2026' },
  { id: 2, route: 'Whitefield → NMIT', pickupLocation: 'ITPL Main Gate', pickupTime: '8:30 AM', vehicle: 'KA-05-MN-7890', driver: 'Anita Devi', status: 'Delayed', date: '18 Aug 2026' },
  { id: 3, route: 'Yelahanka → NMIT', pickupLocation: 'Yelahanka New Town', pickupTime: '8:00 AM', vehicle: 'KA-03-RT-4567', driver: 'Suresh Babu', status: 'Cancelled', date: '19 Aug 2026' },
  { id: 4, route: 'Jalahalli → NMIT', pickupLocation: 'Metro Station', pickupTime: '8:10 AM', vehicle: 'KA-04-XY-2468', driver: 'Meena R', status: 'On Time', date: '20 Aug 2026' }
];
export const USER: User = { id: 1, name: 'Prashant Kumar', email: 'prashant@example.com', employeeId: 'NMIT-2026-0142', preferredPickupLocation: 'Esteem Mall, Hebbal' };
