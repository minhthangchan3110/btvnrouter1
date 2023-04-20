import React from 'react'
import { useParams } from 'react-router-dom';

export default function Productdetail({match}) {
  const { productId } = useParams();
  return (
    <div>
      <h1>Chi tiết sản phẩm {productId}</h1>
      <p>Thông tin chi tiết sản phẩm {productId} sẽ được hiển thị ở đây.</p>
    </div>
  )
}
