export default class BookingModel {
  id: number;
  object_name: string;
  capacity_provider_id: number;
  date_from: Date;
  date_to: Date;
  is_active: boolean;
  amount: string;
  currency: string;
  comment: string;
}
