import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
          <h1>Danh sách sản phẩm</h1>
          <ul>
            <li><NavLink to="/product/1">Sản phẩm 1</NavLink></li>
            <li><NavLink to="/product/2">Sản phẩm 2</NavLink></li>
            <li><NavLink to="/product/3">Sản phẩm 3</NavLink></li>
          </ul>
        </div>
      );
}
