import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1500px] mx-auto px-5">{children}</div>;
};

export default Container;
