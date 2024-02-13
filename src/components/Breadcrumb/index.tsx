"use client";

export default function Breadcrumb({
  primaryMenu,
  secondaryMenu,
  thirdMenu,
}: {
  primaryMenu: string;
  secondaryMenu: string;
  thirdMenu?: string;
}) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-item">{primaryMenu}</div>
      {secondaryMenu && (
        <div
          className="breadcrumb-item"
          style={thirdMenu ? { color: "" } : { color: "#393782", fontWeight: 600 }}
        >
          {secondaryMenu}
        </div>
      )}
      {thirdMenu && (
        <div
          className="breadcrumb-item"
          style={thirdMenu ? { color: "#393782", fontWeight: 600 } : { color: "" }}
        >
          {thirdMenu}
        </div>
      )}
    </div>
  );
}
