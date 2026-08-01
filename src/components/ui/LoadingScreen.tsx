import { motion, AnimatePresence } from "framer-motion";

interface Props {
  loading: boolean;
}

export default function LoadingScreen({ loading }: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            flex-col
            items-center
            justify-center
            bg-white
          "
        >
          <h2 className="mt-8 text-2xl font-bold">
            Muhamad Galih Noor Allamin
          </h2>

          <p className="mt-2 text-slate-500">Loading Portfolio...</p>

          <div className="mt-8 h-2 w-60 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.4,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
