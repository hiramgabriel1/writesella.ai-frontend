import { Ticket } from "@/types/Ticket";
import { use, useEffect, useState } from "react";

const useTicket = () => {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    {
      /*}
        setLoading(true);
        try {
            const response = await fetch(`/api/ticket/${id}`);
            const data = await response.json();
            setTicket(data);
        } catch (error) {
            setError("Ocurrió un error al cargar el ticket");
        } finally {
            setLoading(false);
        }
      {*/
    }
  }, [ticket]);

  return { ticket, loading, error };
};
