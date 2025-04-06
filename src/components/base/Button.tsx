import React from "react";

interface IProps {
  content: string;
  className: string;
}

export default function Button({ content, className }: IProps) {
  return (
    <button
      className={`
        bg-[#EC8C2F] text-white px-[107px] py-3 rounded-xl
        transition-all duration-200 ease-in-out
        hover:bg-[#d4771a] 
        active:bg-[#bb6817] active:scale-95
        ${className}
      `}
    >
      {content}
    </button>
  );
}
