import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import Skeleton from "../Skeleton/Skeleton";
import {FaSearch} from 'react-icons/fa'

const Products = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [originalProductList, setOriginalProductList] = useState([]);
  const [query, setQuery] = useState('')
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    getProducts(category);
  }, [category]);

  useEffect(()=>{
    if (typeof window === "undefined") return;
    searchProduct();
  }, [query])

  const searchProduct = ()=>{
    if(!query){
      setCategory(null)
       return getProducts()
      }
    const filteredArray = originalProductList?.filter(p=> p.title.toLowerCase().includes(query.toLowerCase()));
      setProductList(filteredArray);
  }

  const getProducts = async (category = null) => {
    setLoading(true);
    try {
      const res = await fetch(
        !category
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      setOriginalProductList(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container mx-auto h-full mt-10 sticky top-0 z-10 ">
        <div
          id="products"
          role="navigation"
          aria-label="Main"
          className="w-full bg-white py-5 flex flex-col xl:flex-row  items-center justify-between px-5 xl:px-10 shadow rounded-t border-yellow-300 border gap-2 md:gap-0"
        >
          <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
            <a
              tabIndex={0}
              className="focus:outline-none  text-gray-800  text-2xl font-bold"
            >
              Products
            </a>
            <p
              tabIndex={0}
              className="focus:outline-none font-normal text-sm text-gray-600 mt-1"
            >
              Use categories to filter the products
            </p>
          </div>
          <div className="lg:hidden w-full relative mt-2 md:mt-4">
            <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-selector"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#a0aec0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 9 12 5 16 9" />
                <polyline points="16 15 12 19 8 15" />
              </svg>
            </div>
            <select
              onChange={handleSelect}
              aria-label="Selected tab"
              className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
            >
              <option selected value={''} className="text-sm text-gray-600">
                All
              </option>
              <option
                value={"men's clothing"}
                className="text-sm text-gray-600"
              >
                Men's Clothing
              </option>
              <option
                value={"women's clothing"}
                className="text-sm text-gray-600"
              >
                Women's Clothing
              </option>
              <option value={"electronics"} className="text-sm text-gray-600">
                Electronics
              </option>
              <option value={"jewelery"} className="text-sm text-gray-600">
                Jewelery
              </option>
            </select>
          </div>
          <div
            role="list"
            className="hidden lg:flex items-center lg:mt-6 xl:mt-0"
          >
            <button
              role="listitem"
              tabIndex={0}
              className={`focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none text-nowrap cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4  text-sm ${category === null ? 'bg-gray-200 text-gray-800': 'hover:bg-gray-200 text-gray-500'}`}
              onClick={() => setCategory(null)}
            >
              All
            </button>
            <button
              onClick={() => setCategory("men's clothing")}
              role="listitem"
              tabIndex={0}
              className={`focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer text-nowrap font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4  text-sm ${category === "men's clothing" ? 'bg-gray-200 text-gray-800': 'hover:bg-gray-200 text-gray-500'}`}
            >
              Men's Clothing
            </button>
            <button
              onClick={() => setCategory("women's clothing")}
              role="listitem"
              tabIndex={0}
              className={`focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer text-nowrap font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4  text-sm ${category === "women's clothing" ? 'bg-gray-200 text-gray-800': 'hover:bg-gray-200 text-gray-500'}`}
            >
              Women's Clothing
            </button>
            <button
              onClick={() => setCategory("electronics")}
              role="listitem"
              tabIndex={0}
              className={`focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer text-nowrap font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4  text-sm ${category === "electronics" ? 'bg-gray-200 text-gray-800': 'hover:bg-gray-200 text-gray-500'}`}
            >
              Electronics
            </button>
            <button
              onClick={() => setCategory("jewelery")}
              role="listitem"
              tabIndex={0}
              className={`focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer text-nowrap font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4  text-sm ${category === "jewelery" ? 'bg-gray-200 text-gray-800': 'hover:bg-gray-200 text-gray-500'}`}
            >
              Jewelery
            </button>
          </div>
          <div className="search-bar mr-2 md:px-10 block">
            <div className="outline-div flex flex-row justify-center items-center border-2 border-yellow-400 rounded-md py-2 px-4 gap-2">
              <input
              onChange={(e)=> setQuery(e.target.value)}
                className="border-none outline-none h-full selection:bg-yellow-500 selection:text-white"
                type="search"
                placeholder="Search. . . ."
              />
              <div className="search-icon text-xl text-gray-500">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products cards */}
      <div className="text-center p-10">
        <h1 className="text-3xl">{category? category.toUpperCase() : 'ALL'}</h1>
      </div>
      <>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
              {!query && originalProductList?.map((p) => (
                <SingleProduct
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  rating={p.rating.rate}
                  image={p.image}
                  category={p.category}
                  description={p.description}
                />
              ))}
              {query && 
                productList?.map((p) => (
                <SingleProduct
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  rating={p.rating.rate}
                  image={p.image}
                  category={p.category}
                  description={p.description}
                />
              ))
              }
              {query && productList.length === 0 && <p className=" text-xl text-center text-yellow-300 font-bold">No results found!</p>}
            </section>
          </>
        )}
      </>
    </>
  );
};

export default Products;
