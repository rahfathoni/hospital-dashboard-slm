import { Vendor } from './vendorType'

export interface Hospital {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  Vendors: Vendor[];
}