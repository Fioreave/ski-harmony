// src/utils/api.ts
export async function sendForm(data: any, origen: string) {
  try {
    const response = await fetch("https://api.skisolution360.com/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        type:
          origen === "demo-request"
            ? "demo"
            : origen === "contact-form"
            ? "contact"
            : "pricing",
      }),
    });

    const text = await response.text(); // por si el backend no devuelve JSON cuando hay error
    let json: any = {};
    try {
      json = text ? JSON.parse(text) : {};
    } catch {}

    if (!response.ok) {
      console.error("API error", response.status, json);
      return { success: false, status: response.status, error: json };
    }

    return { success: true, ...json };
  } catch (err) {
    console.error("Fetch error", err);
    return { success: false, error: err };
  }
}
