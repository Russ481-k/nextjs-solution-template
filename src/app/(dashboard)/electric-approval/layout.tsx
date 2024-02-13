import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="body flex-grow-1 mb-3">{children}</div>;
}
