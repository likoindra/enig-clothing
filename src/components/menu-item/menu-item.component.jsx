import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      // secara dynamic akan mengganti imageUrl yang sudah ada
      //   style={{
      //     backgroundImage: `url(${imageUrl})`
      //   }}
      className={`${size} menu-item`}
    >
      {/* menambah hover  efect pada box putih  */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        {/* membuat text menjadi kapital  */}
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
