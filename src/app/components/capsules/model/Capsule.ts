import { Mission } from "./Mission";

export class Capsule{
    capsule_serial?: string ;
    capsule_id?: string;
    status?: string;
    original_launch?:string ;
    original_launch_unix?: string;
    landings?: number;
    type?:string ;
    details?:string;
    missions?: Mission[];
} 