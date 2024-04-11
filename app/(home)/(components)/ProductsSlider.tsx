import { ImageCard } from "@/app/(home)/(components)/card";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/(redux)/hooks";
import { fetchAllProducts } from "@/lib/(redux)/slices";
import { useAppDispatch } from "@/lib/(redux)/store";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const  ProductsSlider = () => {

  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(state => state.productsStore.products)


  useEffect(() => {
    dispatch(fetchAllProducts())
  }
  , [dispatch])

const productsToShow = allProducts.slice(0, 5)

const [posI, setPosI] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPosI((prev) => {
      const updatedI = prev.map((prevI) => (prevI + 1) % 5);
      return updatedI;
    });
  };

  const handlePrev = () => {
    setPosI((prev) => {
      const updatedI = prev.map((prevI) => (prevI + 4) % 5);
      return updatedI;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  

  return (
    <div className="flex items-center relative overflow-hidden border-4 bg-secondary mt-4 border-secondary rounded-lg w-full flex-col justify-center ">
      {productsToShow.map((item, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[posI[index]]}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "20%", position: "absolute", minWidth: "15rem" }}
        >
          <ImageCard name={item.title} description={item.category} src={item.image} />
        </motion.div>
      ))}
      <div className="flex pt-10 flex-row gap-3">
        <Button
          className="text-white mt-[30rem] bg-zinc-500 transition-colors  py-2 px-4"
          onClick={handlePrev}
        >
          Anterior
        </Button>
        <Button
          className="text-white mt-[30rem]  bg-zinc-500 transition-colors py-2 px-4"
          onClick={handleNext}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}