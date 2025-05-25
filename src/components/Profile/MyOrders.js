import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      status: "Order Shipped",
      date: "23 May 2025",
      product: {
        image: "https://images.bewakoof.com/t320/men-s-black-jogger-pants-1.jpg",
        brand: "Ibuact",
        title: "Pracetamol Medicine",
        size: "1 Packet",
        price: "₹50",
      },
    },
    {
      id: 2,
      status: "Order Shipped",
      date: "23 May 2025",
      product: {
        image: "https://images.bewakoof.com/t320/men-s-grey-joggers-1.jpg",
        brand: "Vikasule",
        title: "Vikasule Capsule",
        size: "5 Packet",
        price: "₹40",
      },
    },
  ];

  const handleClick = (order) => {
    navigate("/order", { state: { order } });
  };

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div 
        onClick={() => handleClick(order)}
        key={order.id} className="bg-white rounded shadow p-4 space-y-2 cursor-pointer">
          <div className="text-green-600 font-semibold flex items-center gap-2">
            🚚 {order.status}
          </div>
          <p className="text-sm text-gray-500">Order placed on {order.date}</p>

          <div className="flex items-start gap-4 border-t pt-4">
            <img
              src={order.product.image}
              alt={order.product.title}
              className="w-24 h-28 object-cover rounded"
            />
            <div>
              <h3 className="font-bold">{order.product.brand}</h3>
              <p className="text-gray-600 text-sm">{order.product.title}</p>
              <p className="text-sm">Size: {order.product.size}</p>
              <p className="text-sm font-medium">Price: {order.product.price}</p>
            </div>
            <div
              onClick={() => handleClick(order)}
              className="ml-auto text-gray-400 text-xl cursor-pointer hover:text-blue-600"
            >
              ›
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
