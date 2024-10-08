import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "..";

export const useGetByIdQuery = <T>(resource: string, id: any) => {
  const { getToken } = useAuth();

  return useQuery<T>({
    queryKey: [resource, id],
    queryFn: async () => fetch(`${baseUrl}/${resource}/${id}`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    })
  });
};
