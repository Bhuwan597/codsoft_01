import React from 'react'

const Skeleton = () => {
  return (
    <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5'>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
      <div className="animate-pulse w-72 bg-slate-200 shadow-md rounded-xl h-72">
      </div>
    </div>
  )
}

export default Skeleton
