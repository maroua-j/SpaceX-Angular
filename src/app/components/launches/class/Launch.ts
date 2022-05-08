import { Rocket } from "./Rocket";
import { LaunchSite } from "./LaunchSite";

export interface Launch {
  flight_number: number;
  mission_name?: string;
  launch_year?: string;
  launch_date_utc?: string;
  launch_site?: LaunchSite;
  launch_success?: boolean;
  details?: string;
  rocket?: Rocket;
}