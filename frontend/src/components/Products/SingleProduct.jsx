import React from 'react'
import { FaStar } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const SingleProduct = ({id,title, price, rating ,image, category, description}) => {
  return (
    <>
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:shadow-xl">
      <Link  to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{category}</span>
          <p className="text-lg font-bold text-black block capitalize">
            {title}
          </p>
          <p className='line-clamp-3'>{description}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
              <p className="text-sm text-gray-600 cursor-auto ml-2 flex flex-row items-center justify-center gap-1"><span>{rating}</span> <FaStar className='text-yellow-300'/></p>
          </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default SingleProduct