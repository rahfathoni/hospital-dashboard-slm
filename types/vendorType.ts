export interface Vendor {
  id: number;
  name: string;
  hospitalId: number;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface VendorCreateRequest {
  name: string;
  hospitalId: number;
  address: string;
}

export interface VendorCreateResponse {
  id: number;
  name: string;
  hospitalId: number;
  address: string;
  createdAt: string;
  updatedAt: string;
}