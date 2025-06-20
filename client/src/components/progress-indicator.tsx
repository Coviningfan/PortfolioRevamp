
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export default function ProgressIndicator({ steps, currentStep, className = "" }: ProgressIndicatorProps) {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              index <= currentStep
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
            animate={{
              scale: index === currentStep ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {index + 1}
          </motion.div>
          <span className={`ml-2 text-sm font-medium ${
            index <= currentStep ? "text-blue-600" : "text-slate-500"
          }`}>
            {step}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-12 h-0.5 mx-4 transition-colors duration-300 ${
              index < currentStep ? "bg-blue-600" : "bg-slate-200"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}
