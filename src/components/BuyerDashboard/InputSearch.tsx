import React from 'react'
import { IoIosSearch } from "react-icons/io";

function InputSearch() {
  return (
    <div className="flex w-full">
          <form className="w-full">
            <div className="flex w-full items-center gap-6 justify-between ">
              <div className="w-full">
                <input
                  type="text" 
                  name='product'
                  id='product'
                  placeholder="What are you looking for?"
                  className="border-[1px] w-full border-typo-main rounded-[10px] text-paragraph text-typo-outline1 p-2"
                />
              </div>
              <div className="flex border-[1px] border-typo-main rounded-[10px] px-4 py-2 items-center text-h6 text-typo-main">
                <button type="submit">
                  <span>
                    <IoIosSearch />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
  )
}

export default InputSearch