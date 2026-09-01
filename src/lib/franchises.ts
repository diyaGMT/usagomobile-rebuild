export type Franchise = {
  id: string;
  company_name: string;
  address: string | null;
  city: string | null;
  state: string | null;
  zipcode: string | null;
  service_phone: string | null;
  website: string | null;
  latitude: number;
  longitude: number;
  location_slug: string | null;
};

const FRANCHISES_COLUMNS =
  "id,company_name,address,city,state,zipcode,service_phone,website,latitude,longitude,location_slug";

export async function getActiveFranchises(): Promise<Franchise[]> {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) return [];

  const query = new URLSearchParams({
    select: FRANCHISES_COLUMNS,
    status: "eq.active",
    ownership_type: "neq.white_label",
    operator_id: "is.null",
    order: "company_name.asc",
  });

  try {
    const res = await fetch(`${url}/rest/v1/franchises?${query.toString()}`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    const rows = (await res.json()) as Franchise[];
    return rows.filter(
      (r) => typeof r.latitude === "number" && typeof r.longitude === "number",
    );
  } catch {
    return [];
  }
}
