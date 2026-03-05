import { useMutation } from "@tanstack/react-query";
import { api, type ContactSubmitInput } from "@shared/routes";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactSubmitInput) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      
      if (!res.ok) {
        let errorMessage = "Failed to submit contact form";
        try {
          const error = await res.json();
          errorMessage = error.message || errorMessage;
        } catch {
          // ignore parse error if response isn't JSON
        }
        throw new Error(errorMessage);
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
