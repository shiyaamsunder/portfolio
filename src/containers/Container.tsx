import { Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Container = (props: FlexProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duratison: 0.8 }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        {...props}
      />
    </motion.div>
  );
};
