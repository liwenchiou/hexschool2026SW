import { useState } from "react";
import { menuItem, useW1, blogContext } from "./w1Data.js";
import { EyeIcon, ShareIcon } from "@heroicons/react/24/outline";

function W1() {
  // 從 w1.js 拿取所有大腦邏輯
  const { currentCategory, handleCategoryChange } = useW1();
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        {/* <!-- 左側：佔 2/12 --> */}
        <div className="col-span-2">
          <ul>
            {menuItem.map((item) => (
              <li
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`cursor-pointer transition-all ${currentCategory === item ? "bg-black text-white" : "text-black"} text-center text-lg font-bold py-3`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- 右側：佔 10/12 --> */}
        <div className="col-span-10">
          {blogContext.map((item) => (
            <div key={item.blogTitle} className="grid grid-cols-12 mb-6">
              {/* 部落格圖片 */}
              <div className="col-span-6 rounded-lg shadow-md overflow-hidden h-64">
                <img
                  src={item.blogUrl}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  alt={item.blogTitle}
                />
              </div>
              
              {/* 部落格內容 */}
              <div className="col-span-6 flex flex-col justify-center text-left ps-6">
                <div className="flex items-center flex-wrap mb-3">
                  {item.blogTag.map((tag, index) => (
                    <span key={tag} className="text-base">
                      {tag}
                      {index < item.blogTag.length - 1 && (
                        <span className="mx-2">·</span>
                      )}
                    </span>
                  ))}
                </div>
                
                <h2 className="mb-3 text-2xl font-bold">
                  {item.blogTitle}
                </h2>
                
                <div className="flex justify-between items-center text-sm">
                  <span>{item.blogCDT}</span>
                  <div className="flex items-center">
                    <span className="flex items-center gap-1 me-3">
                      <EyeIcon className="size-4" />
                      {item.viewCount} views
                    </span>
                    <span className="flex items-center gap-1">
                      <ShareIcon className="size-4" />
                      {item.shareCount} shares
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default W1;

