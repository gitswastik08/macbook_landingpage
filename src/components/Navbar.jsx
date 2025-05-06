import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-full z-10 fixed flex items-center justify-center backdrop-blur bg-[#0000005d] pb-1 ">
    <div className="flexdiv flex pt-8 pb-1 items-center justify-center gap-4 font-sans  text-[1vw]  border-b border-[#ffffff6f] text-[#ffffffa9] w-fit">
      <h4>
        <i class="ri-apple-fill text-sm text-[#ffffffc0]"></i>
      </h4>
      <h4>Store</h4>
      <h4>Mac</h4>
      <h4>iPad</h4>
      <h4>iPhone</h4>
      <h4>Watch</h4>
      <h4>Airpods</h4>
      <h4>TV & Home</h4>
      <h4>Entertainment</h4>
      <h4>Accessories</h4>
      <h4>Support</h4>
      <h4>
        <i class="ri-search-line text-sm text-[#ffffffc0]"></i>
      </h4>
      <h4>
        <i class="ri-shopping-bag-line text-sm text-[#ffffffc0]"></i>
      </h4>
    </div>
  </div>
  )
}

export default Navbar