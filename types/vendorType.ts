export interface Vendor {
  id: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface VendorCreateRequest {
  name: string;
  relatedHospital: string;
  address: string;
}