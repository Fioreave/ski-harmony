const API_BASE = import.meta.env.VITE_WP_API_BASE || "/blog-api";
console.log("API_BASE =", API_BASE); // debería imprimir: /blog-api

// ...resto igual

async function fetchJson(url: string) {
  const res = await fetch(url, { redirect: "follow" });
  const ctype = res.headers.get("content-type") || "";
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  if (!ctype.includes("application/json")) {
    throw new Error("La API no devolvió JSON (posible redirección/HTML).");
  }
  return { data: await res.json(), headers: res.headers };
}

export async function getPosts(page = 1, perPage = 9) {
  const url = `${API_BASE}/wp/v2/posts?per_page=${perPage}&page=${page}&_embed=1&_fields=id,slug,date,link,title,excerpt,_embedded`;
  const { data, headers } = await fetchJson(url);
  const totalPages = parseInt(headers.get("X-WP-TotalPages") || "1", 10);
  return { data, totalPages };
}

export async function getPostBySlug(slug: string) {
  const url = `${API_BASE}/wp/v2/posts?slug=${encodeURIComponent(
    slug
  )}&_embed=1`;
  const { data } = await fetchJson(url);
  return (data as any[])?.[0] || null;
}
