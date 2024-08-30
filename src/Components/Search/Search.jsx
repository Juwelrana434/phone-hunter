import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/phones?search=iphone"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    
      fetchData();
  }, []);
  console.log(data);
  

  return (
    <div className="mb-10">
      <div className="flex justify-center rounded-md mb-16">
        <div className="flex justify-between border-[#0D6EFD] border-2 lg:md:w-2/3 w-full rounded-md">
          <div className="flex items-center px-2">
            {" "}
            <CiSearch />
            <input
              type="text"
              placeholder="Search Here"
              className="border-none"
            />
          </div>
          <button className=" bg-[#0D6EFD] lg:md:px-7 lg:md:py-4 text-white lg:md:text-[20px] text-[16px] rounded-l-md">
            Search
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {Array.isArray(data) &&
          data.map((item) => (
            <div key={item.phone_name}>
              <div className="card bg-base-100 max-w-96 shadow-xl">
                <figure>
                  <img src={item.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.phone_name}</h2>
                  <p></p>
                  <div className="card-actions justify-center items-center">
                    <p> price :$ 99.99</p>
                    <button className="btn btn-primary">Show Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
