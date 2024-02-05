import React from "react";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import { toast } from "react-toastify";
import "./index.css";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      //Save data into a variable...

      // console.log(output);

      // output.data lakhvu padse (karan ke data naam ni key maa badho data padyo chhe)
      setCourses(output.data);

    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div className="">

        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {/* aa div ka to loading dekhase ka to Cards no data dekhase... */}
          {
            loading ? (<Spinner />) : (<Cards
              courses={courses}
              category={category}
            />)
          }
        </div>

      </div>

    </div>
  );
};

export default App;