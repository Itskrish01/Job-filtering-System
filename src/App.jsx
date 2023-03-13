import { useContext, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Job from "./components/Job";
import { ContextFilter } from "./ContextFilter";
import Jobs from "./data/data";

function App() {
  const { filterItems } = useContext(ContextFilter);

  const filter = Jobs.filter((item) => {
    return filterItems.includes(item.level);
  });

  console.log(filter);

  return (
    <div>
      <div className="app-banner"></div>

      <div className="container-items">
        <div className="mb-10 gap-16 sm:gap-7 flex flex-col mt-[5.5rem]">
          <Filter />

          {filterItems.length === 0
            ? Jobs.map((job) => <Job key={job.id} job={job} />)
            : Jobs.filter((item) => {
                const AllItems = [
                  ...item.languages,
                  ...item.tools,
                  item.role,
                  item.level,
                ];
                return filterItems.every((item) => AllItems.includes(item));
              }).map((job) => {
                console.log(job);
                return <Job key={job.id} job={job} />;
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
