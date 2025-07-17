import React from 'react'
import { Step } from './form'
import { useFormControls } from './hooks/useForm'
import { motion } from 'framer-motion'

const RenderComponent = ({ steps }: { steps: Step[] }) => {
  const { currentPageIndex, delta } = useFormControls()

  const step = steps[currentPageIndex];
  if (!step) return null;

  const Comp = step.component;
  if (!Comp) return null;

  return (
    <motion.div
      key={currentPageIndex}
      initial={{ opacity: 0, x: delta > 0 ? "10%" : "-10%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
      className="px-7 flex flex-col gap-y-4 flex-1"
    >
      <div>
        <h2 className="text-4xl font-bold tracking-tight leading-relaxed text-right  text-slate-700">
          {step.title}
        </h2>
        <p className="text-sm text-foreground/70 text-right">{step.description}</p>
      </div>
      {Comp && <Comp />}
    </motion.div>
  )
}

export default RenderComponent