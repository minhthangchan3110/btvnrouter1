import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Admin() {
  const isAdmin = false; // Giả sử user không có quyền truy cập
if (!isAdmin) {
  setTimeout(() => {
    // Chuyển hướng người dùng về trang chủ sau 3 giây
    return <Navigate to="/" replace />;
  }, 3000);
  return <div>Bạn không có quyền truy cập vào trang Admin.</div>;
}

return (
  <div>
    <h1>Trang Admin</h1>
    <p>Thông tin quản lý sản phẩm sẽ được hiển thị ở đây.</p>
  </div>
);
}
