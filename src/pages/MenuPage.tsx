import { Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import './style.scss'
import axios from "axios";


interface Category {
    id:number;
    name: string;
}
const MenuPage: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [menuItems, setMenuItems] = useState<[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>();

   useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/menus/`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  useEffect(() => {
    if (!selectedCategory) return; // Prevents unnecessary API calls
  
    axios
      .get(`${process.env.REACT_APP_API_URL}/${selectedCategory}`)
      .then((response) => {
        console.log(`Fetched items for ${selectedCategory}:`, response.data);
        setMenuItems(response.data);
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  }, [selectedCategory]);

  return (
    <Grid2 container>
    <Grid2 className="menu" size={{xs:12}}>
    <h1 className="menu-title">MENU</h1>
    <p className="menu-description">
    Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.    </p>
    </Grid2>

    {/* Category Buttons */}
    <Grid2 container spacing={2} size={{xs:12}} justifyContent="center" alignItems={"center"} className="category-buttons">
        
      {categories.map((category) => (
        <Grid2 key={category.id} >
          <button
            className={`menu-button ${selectedCategory === category.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
          </Grid2>

      ))}

    </Grid2>

    {/* Menu Items */}
    <Grid2 container size={{xs:12}} justifyContent={"center"} className="menu-outer-grid">
    <Grid2 className="menu-container">
      <h2 className="category-title">-----Items-----</h2>

      <Grid2 container rowSpacing={2} className="menu-items">
      {menuItems.length > 0 ? (
  menuItems.map((item, index) => (
    <Grid2 key={index} size={{ xs: 12 }} className="menu-item">
      <Grid2 className="menu-item-content">
        <Grid2 className="menu-item-header" >
          <Grid2>
          <span className="menu-item-name">{item?.name}</span></Grid2>
          <span className="menu-item-separator"></span>
          <span className="menu-item-price">${item?.price}</span>
        </Grid2>
        <p className="menu-item-description">{item?.description}</p>
      </Grid2>
    </Grid2>
  ))
) : (
  <p className="no-items-message">Please select a category</p>
)}

      </Grid2>
    </Grid2>
    </Grid2>
  </Grid2>
  );
};

export default MenuPage;
