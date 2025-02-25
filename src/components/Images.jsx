import { motion } from "framer-motion";
import React from "react";

function Images() {
  const images = [
    {
      img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1564759077036-3def242e69c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      height: "100%",
      width: "485px",
      gridCol: "span 2",
      gridRow: "span 2",
    },

    {
      img: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },


  ];

  return (
    <div className="my-40 w-full flex items-center justify-center">
      <div className="w-full overflow-hidden">
        <div className="items-center flex">
          <div className="marquee grid grid-cols-5 gap-1 pl-1 w-max shrink-0">
            {images.map((item, idx) => (
              <div
                key={idx}
                style={{ gridColumn: item.gridCol, gridRow: item.gridRow, width: item.width, height: item.height }}
                className="h-40 min-w-[150px]"
              >
                <img className="h-full w-full object-cover" src={item.img} />
              </div>
            ))}
          </div>
          <div className="marquee grid grid-cols-5 gap-1 pl-1 w-max shrink-0">
            {images.map((item, idx) => (
              <div
                key={idx}
                style={{ gridColumn: item.gridCol, gridRow: item.gridRow, width: item.width, height: item.height }}
                className="h-40 min-w-[150px]"
              >
                <img className="h-full w-full object-cover" src={item.img} />
              </div>
            ))}
          </div>
          <div className="marquee grid grid-cols-5 gap-1 pl-1 w-max shrink-0">
            {images.map((item, idx) => (
              <div
                key={idx}
                style={{ gridColumn: item.gridCol, gridRow: item.gridRow, width: item.width, height: item.height }}
                className="h-40 min-w-[150px]"
              >
                <img className="h-full w-full object-cover" src={item.img} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Images;
