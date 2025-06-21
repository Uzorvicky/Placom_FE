'use client'
import React, { useState} from "react";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AnimatePresence } from "framer-motion";
import { store, } from "@/store";
// import AxiosInterceptor from "@/services/AxiosInterceptor";

export default function App({children}: { children: React.ReactNode })  {

  const [queryClient] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 2,
      },
      mutations: {
        retry: 1,
      },
    },
  }));

  return (
       <QueryClientProvider client={queryClient}>
        {/* <AnimatePresence mode="wait"> */}
          <Provider store={store}>
            {/* <AxiosInterceptor> */}
                 {children}
            {/* </AxiosInterceptor> */}
          </Provider>
         {/* </AnimatePresence> */}
         <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
  );
}