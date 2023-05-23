"use client"

import { Block, Cross, Grid, HollowCross, LongCross } from "@/svg/pixelElements";
import clsx from "clsx";
import { memo, useRef } from "react";
import type p5 from "p5";
import debounce from "lodash.debounce";
import dynamic from "next/dynamic";
const P5Wrapper = dynamic(() => import('./P5Wrapper'), { ssr: false });

const PixelBG = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const sketch = (p: p5) => {
    if (typeof window === "undefined") return;
    let particles: p5.Vector[] = [];
    let sizes: number[] = [];
    let alphas: number[] = [];
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.frameRate(24)
      resizeCanvasToFitParent()
      p.noStroke()
    };

    const resizeCanvasToFitParent = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        p.resizeCanvas(clientWidth, clientHeight);
        setupParticles()
      }
    };

    const setupParticles = () => {
      particles = [];
      sizes = [];
      alphas = [];
      for (let i = 0; i < p.width; i += 20) {
        sizes.push(p.random(1, 5))
        particles.push(p.createVector(i, p.random(p.height)));
        alphas.push(p.random(10, 80))
      }
    }

    const drawParticles = () => {
      particles.forEach((particle, i) => { 
        const a = alphas[i]
        const r = sizes[i]
        p.fill(255, a)
        p.square(particle.x, particle.y, r)
        
        particle.y -= 1

        const ratio = 0.01
        const xOff = p.map(p.noise(particle.x*ratio, particle.y*ratio), 0, 1, -3, 3)
        particle.x += xOff
        if (particle.y < 0) {
          particle.y = p.height
          particle.x = p.random(p.width)
        }
      })
    }


    const deboucedResize = debounce(resizeCanvasToFitParent, 250);

    p.windowResized = () => {
      deboucedResize()
    };

    p.draw = () => {
      p.clear(0, 0, 0, 0)
      drawParticles()
    };
  };

  const className = "animate-float absolute bottom-0 opacity-0"
  const hiddenClass = "hidden md:inline"
  return (
    <div ref={containerRef} className="w-full h-screen fixed top-0 left-0 z-[-1] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <P5Wrapper sketch={sketch} />
      </div>
      <div className="flex justify-between items-end mx-auto max-w-screen-2xl w-full h-full md:px-12">
        <div className="flex flex-col items-center">
          <LongCross className={clsx(className, "fill-themePink")} />
          <HollowCross className={clsx(className, "[animation-delay:2.2s]")} />
          <Block className={clsx(className, hiddenClass, "[animation-delay:4s]")} />
          <Block className={clsx(className, "[animation-delay:6.4s]")} />
          <Cross className={clsx(className, hiddenClass, "[animation-delay:8.1s]")} />
          <Grid className={clsx(className, "[animation-delay:10.3s] fill-themeSkyBlue")} />
          <Cross className={clsx(className, "[animation-delay:12.1s]")} />
          <Block className={clsx(className, hiddenClass, "[animation-delay:14.2s]")} />
          <Block className={clsx(className, "[animation-delay:16s]")} />
          <HollowCross className={clsx(className, hiddenClass, "[animation-delay:18.3s]")} />
        </div>
        <div className="flex flex-col items-center">
          <Block className={clsx(className, "[animation-delay:1.3s]")} />
          <Cross className={clsx(className, hiddenClass, "[animation-delay:3.1s]")} />
          <LongCross className={clsx(className, "[animation-delay:5.2s] fill-themeSkyBlue")} />
          <Cross className={clsx(className, "[animation-delay:7s]")} />
          <Block className={clsx(className, hiddenClass, "[animation-delay:9.3s]")} />
          <Block className={clsx(className, "[animation-delay:11.2s]")} />
          <HollowCross className={clsx(className, hiddenClass, "[animation-delay:13.1s]")} />
          <Grid className={clsx(className, "[animation-delay:15.2s] fill-themePink")} />
          <HollowCross className={clsx(className, "[animation-delay:17.2s]")} />
          <Block className={clsx(className, "[animation-delay:19.1s]")} />
        </div>
      </div>
    </div>
  )
}

export default memo(PixelBG)