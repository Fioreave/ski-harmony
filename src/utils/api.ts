// src/utils/api.ts
export async function sendForm(data: any, origen: string) {
  try {
    // Prepare data based on form type
    const formData = {
      ...data,
      type: origen === "demo-request" ? "demo" : origen === "contact-form" ? "contact" : "pricing",
    };

    console.log("Enviando formulario a API:", { origen, formData });

    const response = await fetch("https://api.skisolution360.com/api/leads", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const text = await response.text();
    let json: any = {};
    
    try {
      json = text ? JSON.parse(text) : {};
    } catch (parseError) {
      console.error("Error parsing response:", parseError, text);
    }

    if (!response.ok) {
      console.error("API error", response.status, json);
      return { success: false, status: response.status, error: json };
    }

    console.log("Formulario enviado exitosamente:", json);
    return { success: true, data: json };
  } catch (err) {
    console.error("Fetch error", err);
    return { success: false, status: 0, error: "Network or CORS error" };
  }
}
