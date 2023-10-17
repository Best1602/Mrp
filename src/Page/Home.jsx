import React from "react";

function Home({ isDrawerOpen }) {
  const marginLeft = isDrawerOpen ? "240px" : "0"; // ปรับค่า marginLeft ตามสถานะ
  const transition = "margin 0.3s";

  return (
    <div
      style={{
        marginLeft,
        transition,
      }}
    >
      <div>111111111111111111111111111111111111111111111111111111111111</div>
    </div>
  );
}

export default Home;
