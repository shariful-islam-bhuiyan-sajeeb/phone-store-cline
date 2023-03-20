import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Loading/Loading";
import PhoneStoreCard from "../PhoneStoreCard/PhoneStoreCard";

const PhoneStoresCardes = () => {
  const {
    data: phoneStores = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["phoneStores"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-12-server-lac.vercel.app/mobileCollection"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-8">
      <div className="font-serif text-center font-semibold text-orange-300 lg:px-10 md:px-6 sm:px-4 px-2 lg:text-3xl md:text-xl text-lg">
        <h1>Choice The Best </h1>
      </div>
      <div className="flex items-center justify-center pb-4 ">
        <h1 className="h-[1px] xl:w-[500px] lg:w-[320px] md:w-[220px] sm:w-[120px] w-[80px] bg-gray-400"></h1>
        <h2 className="font-serif lg:px-10 md:px-6 sm:px-4 px-2 lg:text-3xl md:text-xl text-lg text-gray-600 uppercase">
          Our Phones{" "}
        </h2>
        <h1 className="h-[1px] xl:w-[500px] lg:w-[320px] md:w-[220px] sm:w-[120px] w-[80px] bg-gray-400"></h1>
        {/* <h1 className="bg-green-700 animate-pulse p-1 rounded-full"></h1> */}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 xl:px-0 px-5  ">
        {phoneStores.map((phoneStore) => (
          <PhoneStoreCard
            key={phoneStore._id}
            phoneStore={phoneStore}
            refetch={refetch}
          ></PhoneStoreCard>
        ))}
      </div>
    </div>
  );
};

export default PhoneStoresCardes;
