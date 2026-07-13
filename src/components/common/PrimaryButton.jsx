import { motion } from "framer-motion";
function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
  <motion.button
  type={type}
  onClick={onClick}
  className={`
    bg-green-600
    hover:bg-green-700
    text-white
    px-5
    py-3
    rounded-xl
    font-medium
    text-sm
    transition-colors
    ${className}
  `}
>
      {children}
    </motion.button>
  );
}

export default PrimaryButton;