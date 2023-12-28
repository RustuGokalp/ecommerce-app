"use client";
import React, { useState, useEffect } from "react";
import { getAllBrands } from "../../utils/api";
import Image from "next/image";

const itemsPerPage = 10;

const Brands = () => {
  const [allBrands, setAllBrands] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + itemsPerPage;
  const [prevButtonVisible, setPrevButtonVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBrands();
      setAllBrands(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPrevButtonVisible(startIndex > 0);
  }, [startIndex]);

  const slicedBrands = allBrands.slice(startIndex, endIndex);

  const handleNextClick = () => {
    setStartIndex((prev) => prev + itemsPerPage);
  };

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 justify-center items-center">
      <button
        onClick={handlePrevClick}
        className={`ml-4 ${!prevButtonVisible ? "hidden" : ""}`}
      >
        <Image
          src="/prev.svg"
          alt="Next"
          width={20}
          height={20}
          className="me-2"
        />
      </button>
      {slicedBrands.map((brand) => (
        <div key={brand.id} className="flex align-center px-2">
          <span className="text-center">{brand.name}</span>
        </div>
      ))}
      <button
        onClick={handleNextClick}
        className={`ml-4 ${endIndex >= allBrands.length ? "hidden" : ""}`}
      >
        <Image
          src="/next.svg"
          alt="Next"
          width={20}
          height={20}
          className="me-2"
        />
      </button>
    </div>
  );
};

export default Brands;
