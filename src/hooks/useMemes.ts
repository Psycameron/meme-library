import { useEffect, useState } from "react";
import { getMemes } from "@/service/memesApi";
import { MemeType } from "@/types/apiTypes";

export const useMemes = () => {
  const [memes, setMemes] = useState<MemeType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getMemes();
        setMemes(data);
      } catch (err) {
        console.error("Error fetching memes:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { memes, loading, error };
};
