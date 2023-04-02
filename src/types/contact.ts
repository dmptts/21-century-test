export interface IContact {
  id: number;
  first_name: string | null;
  last_name: string | null;
  fullname?: string;
  email?: string;
  phone?: string;
  userpic?: string;
  address?: string;
}
