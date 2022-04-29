import React from "react";

const Category = (props) => {
  return (
    <div className={props.class}>
      <div className="flex justify-center items-center">
        <img src={props.img} className="col-span-1 h-12 w-26"></img>
      </div>
      <div className="col-span-2">
        <div className="grid grid-rows-2">
          <div className="row-span-1 font-bold uppercase text-[12.5px]">
            {props.title}
          </div>
          <div className="row-span-1 text-[12.5px]">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
