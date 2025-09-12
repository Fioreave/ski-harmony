export async function sendForm(data: any, origen: string) {
  try {
    const response = await fetch("https://api.skisolution360.com/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        type:
          origen === "demo-request"
            ? "demo"
            : origen === "contact-form"
            ? "contact"
            : "pricing", // por si acaso
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Error de API:", error);
      return { success: false, error };
    }

    const json = await response.json();
    return { success: true, ...json };
  } catch (error) {
    console.error("Error enviando el formulario:", error);
    return { success: false, error };
  }
}
