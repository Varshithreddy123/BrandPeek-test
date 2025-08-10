const BASE_URL = 'https://68981f29ddf05523e55e2a7b.mockapi.io/api/v1';

export interface Brand {
  id: string;
  name: string;
  avatar: string;
  email: string;
  details?: string;
}

export async function fetchBrands(): Promise<Brand[]> {
  const resp = await fetch(`${BASE_URL}/userlist`);
  if (!resp.ok) throw new Error('Failed to fetch brands');
  return resp.json();
}

export async function fetchBrandById(id: string): Promise<Brand> {
  const resp = await fetch(`${BASE_URL}/userlist/${id}`);
  if (!resp.ok) throw new Error('Failed to fetch brand details');
  return resp.json();
}
