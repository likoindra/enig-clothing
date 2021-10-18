import React from "react";
// fungsi yang memberikan component yang termodifikasi dan me return component yang sudah termodifikasi
import { withRouter } from "react-router-dom"
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      // secara dynamic akan mengganti imageUrl yang sudah ada
      //   style={{
      //     backgroundImage: `url(${imageUrl})`
      //   }}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);
