import { useQuery } from "@tanstack/react-query";
import React from "react";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import SearchForm from "../Components/Form/SearchForm";
const Home = () => {
  const { data: experiences = [] } = useQuery({
    queryKey: ["expdata"],
    queryFn: async () => {
      try {
        const response = await fetch(`expdata.json`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <div className="flex md:px-24 px-12">
      <div className="mt-8">
        <SearchForm />
      </div>
      <div className="flex-1">
        <div>
          <div className="text-xl mt-12 flex justify-between px-16">
            <p>Homes</p>
            <p>See All</p>
          </div>
          <div className="grid md:grid-cols-3 gird-cols-1 gap-10 px-6 md:px-10">
            {[...Array(6)]?.map((exp, index) => (
              <HomeCard key={index} exp={exp} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xl mt-12 flex justify-between px-16">
            <p>Experiences</p>
            <p>See All</p>
          </div>
          <div className="grid md:grid-cols-4 gird-cols-1 gap-10 px-6 md:px-10">
            {experiences?.map((exp, index) => (
              <ExpCard key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
