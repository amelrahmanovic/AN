export default class BookingModel {
  id: number;
  capacity_provider_id: number;
  object_name: string;
  date_from: Date;
  date_to: Date;
  is_active: boolean;
  amount: string;
  currency: string;
  comment: string;
}
