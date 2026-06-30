const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface SubmitContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<string | { msg?: string }>;
}

function formatApiErrors(errors?: ApiResponse<unknown>["errors"]) {
  if (!errors?.length) return undefined;

  return errors.map((entry) => {
    if (typeof entry === "string") return entry;
    return entry.msg || "Validation error";
  });
}

export class ContactApiError extends Error {
  errors?: string[];

  constructor(message: string, errors?: string[]) {
    super(message);
    this.name = "ContactApiError";
    this.errors = errors;
  }
}

export async function submitContactInquiry(payload: SubmitContactPayload) {
  if (!API_URL) {
    throw new ContactApiError(
      "Contact form is not configured. Please email us directly.",
    );
  }

  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let json: ApiResponse<unknown>;
  try {
    json = await response.json();
  } catch {
    throw new ContactApiError("Failed to reach the server. Please try again.");
  }

  if (!response.ok && !json.message) {
    throw new ContactApiError(
      response.status >= 500
        ? "Server error. Please try again shortly."
        : "Failed to send message",
    );
  }

  if (!json.success) {
    throw new ContactApiError(
      json.message || "Failed to send message",
      formatApiErrors(json.errors),
    );
  }

  return json.message;
}
