import React, { useEffect, useState } from "react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContextProvider";

const FullPageProduct = () => {
  const { addItemToCart, isInCart } =  useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct({...data, qty: 1});
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    getSingleProduct();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="flex min-w-[100vw] min-h-[70vh] justify-center items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin fill-yellow-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600  text-sm mb-4 capitalize">
                    {product.category}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 ">Price:</span>
                      <span className="text-gray-600 ">${product.price}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 ">
                        Availability:
                      </span>
                      <span className="text-gray-600">In Stock</span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 ">Rating:</span>
                      <span className="text-gray-600 ">
                        {product?.rating?.rate}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 ">
                        Total Purchase:
                      </span>
                      <span className="text-gray-600">
                        {product?.rating?.count}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700">
                      Product Description:
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-center w-1/5 items-center mt-4">
                    <FaMinus onClick={()=> product.qty > 1 && setProduct((prev)=> ({...prev, qty: prev.qty - 1}))} className="fill-current text-gray-600 w-3" />

                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={product.qty}
                    />

                    <FaPlus onClick={()=> setProduct((prev)=> ({...prev, qty: prev.qty + 1}))} className="fill-current text-gray-600 w-3" />
                  </div>
                  <div className="flex -mx-2 mb-4 mt-10">
                    <div className="w-1/2 px-2">
                    {isInCart(product.id)?<>
                      <Link to={'/cart'} className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 flex items-center justify-center gap-2">
                        View in Cart
                      </Link>
                    </>:<>
                    <button onClick={()=> addItemToCart(product, product.qty)} className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 flex items-center justify-center gap-2">
                        Add to Cart <FaCartPlus />
                      </button>
                    </>}
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FullPageProduct;
