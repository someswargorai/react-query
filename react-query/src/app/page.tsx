"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProducts } from "./api/fetchProducts";
import { productData, User } from "./types/type";
import { mutateProducts } from "./api/mutateProducts";

export default function Home() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const {
    mutate: ProductMutation,
    isPending,
    isSuccess,
    isError: isError1,
    error,
  } = useMutation({
    mutationFn: (data: User) => mutateProducts(data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["products"] });
    },
    onMutate:async (data:User)=>{
      queryClient.cancelQueries({queryKey:["products"]});

      const previousState = queryClient.getQueryData<productData[]>(["products"]);

      queryClient.setQueryData<productData[]>(['products'],(old=[])=>[
        ...old, 
       {id:"1",title:"someswar",description:"ssegseg esg sseg"} as productData
      ])
      return {previousState};
    },
    onError: (err, data, context) => {

      if(context?.previousState){
        queryClient.setQueryData(["products"],context.previousState);
      }

      queryClient.refetchQueries({ queryKey: ["products"] });
      alert("successfully added products!!");
    },
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>error...</p>}
      {data?.map((data: productData, index: number) => (
        <p key={index}>{data.title}</p>
      ))}

      {isPending && <p>Loading...</p>}
      {isSuccess && <p>✅ Product added!</p>}
      {isError1 && <p>{String(error)}</p>}

      <button
        onClick={() =>
          ProductMutation({
            id: "1",
            username: "john_doe",
            email: "john@example.com",
            password: "pass123",
          })
        }
      >
        Add Users
      </button>
    </>
  );
}
