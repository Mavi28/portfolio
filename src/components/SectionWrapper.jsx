import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, style = {} }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        padding: "6rem 2rem",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </motion.section>
  );
}
