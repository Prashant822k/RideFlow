export type RideStatus = 'On Time' | 'Delayed' | 'Cancelled';
export interface Ride { id: number; route: string; pickupLocation: string; pickupTime: string; vehicle: string; driver: string; status: RideStatus; date: string; }
