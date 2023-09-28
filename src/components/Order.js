import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, // higher mass = object moves slower
      damping: 8, // strength of the oposing force, higher number = less oscilation
      when: "beforeChildren", // animate before any children animations happen
      staggerChildren: 0.4, // seconds
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVaraints = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVaraints}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVaraints}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
