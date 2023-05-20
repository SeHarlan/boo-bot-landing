"use client"

import useElementObserver from "@/hooks/useElementObserver";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import debounce from "lodash.debounce";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

export const enteredTransClass = "opacity-100 translate-y-0 scale-100"
const enteringFromTop = enteredTransClass
const exitingToTop = "opacity-0 -translate-y-10 scale-95"
const enteringFromBottom = enteredTransClass
const exitingToBottom = "opacity-0 translate-y-10 scale-95"

// const enteringFromTop = "bg-red-500"
// const exitingToTop = "bg-blue-500"
// const enteringFromBottom = "bg-green-500"
// const exitingToBottom = "bg-yellow-500"

const threshold = 100;

interface EntranceWrapperProps {
  children: ReactNode,
  id?: string
  className?: string,
  initTransClass?: string
}

const EntranceWrapper: FC<EntranceWrapperProps> = ({
  children,
  id,
  className,
  initTransClass = "opacity-0"
}) => { 
  const ref = useRef<HTMLDivElement>(null)
  const prevY = useRef(0)
  const [transClass, setTransClass] = useState(initTransClass)

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const viewportHeight = window.innerHeight;
      const halfHeight = viewportHeight / 2;
      const scrollingDown = prevY.current >= elementTop;

      if (scrollingDown) { 
        if (elementTop > halfHeight && elementTop < viewportHeight - threshold) {
          // Element is past the threshold bottom of the screen
          setTransClass(enteringFromBottom)
        } else if (elementTop < halfHeight && elementTop < threshold) {
          // Element is past the threshold top of the screen
          setTransClass(exitingToTop)
        }
      } else {
        //scrolling up
        if (elementTop > halfHeight && elementBottom > viewportHeight - threshold) {
          // Element is past the threshold bottom of the screen
          setTransClass(exitingToBottom)
        } else if (elementTop < halfHeight && elementBottom > threshold) {
          // Element is past the threshold top of the screen
          setTransClass(enteringFromTop)
        }
      }
      prevY.current = elementTop;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id={id} ref={ref} className={clsx("duration-500", transClass, className)}>
      {children}
    </div>
  )
}

export default EntranceWrapper

