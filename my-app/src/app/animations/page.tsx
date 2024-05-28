"use client";
import RootLayout from "@/components/Layout";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";

const AnimationsPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Variants for Transition Speed
  const boxVariantAnimation = {
    variant1: { opacity: 0 },
    variant2: {
      opacity: 1,
      x: 100,
      y: -200,
      scaleX: 3,
      scaleY: 2,
      transition: {
        x: { duration: 1 },
        y: { duration: 2 },
        duration: 5,
      },
    },
  };

  const list = {
    listInView: { opacity: 1, transition: { duration: 2 } },
    lisOutsideView: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 300, y: 100, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <RootLayout>
      <div>
        {/* SCROLL BAR */}
        {/* https://www.framer.com/motion/examples/#scroll-linked-animations */}
        <div>
          <motion.path className="progress-bar" style={{ scaleX }} />
        </div>
        <h1>Example page for animations</h1>
        <br />
        {/* ANIMATION */}
        {/* https://www.framer.com/motion/examples/#keyframes */}
        <div>
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
              delay: 3,
            }}
          />
          <br></br>
          {/* HOVERING ANIMATION */}
          {/* https://www.framer.com/motion/examples/#gesture-animations */}
          <div>
            <motion.button
              className="box"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            />
          </div>
          <br></br>
          {/* SCROLLING ANIMATION */}
          {/* https://www.framer.com/motion/examples/#scroll-triggered-animations */}
          <div className="page-spacer"></div>
          <div>
            <motion.div
              className="box"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          </div>
          <div className="page-spacer"></div>
          {/* SCROLLING ANIMATION with delayed animation and slow animation speed */}
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, duration: 2 },
            }}
          />
          <div className="page-spacer"></div>
          {/* SCROLLING ANIMATION with variants */}
          <div>
            <motion.ul
              initial="lisOutsideView"
              whileInView="listInView"
              variants={list}
            >
              <motion.li
                className="box"
                initial="hidden"
                whileInView="visible"
                variants={item}
              />
              <motion.li
                className="box"
                initial="hidden"
                whileInView="visible"
                variants={item}
              />
              <motion.li
                className="box"
                initial="hidden"
                whileInView="visible"
                variants={item}
              />
            </motion.ul>{" "}
          </div>
          <div className="page-spacer"></div>
          {/* ANIMATION with variants */}
          <motion.div
            className="box"
            variants={boxVariantAnimation}
            initial="variant1"
            whileInView="variant2"
          />
        </div>
        <div className="page-spacer"></div>
        {/* TEXT ANIMATION ON SCROLLING with React Animate On Scroll */}
        <div>
          <ScrollAnimation animateIn="fadeIn">
            <h1>Some Text appearing after 2 Seconds:</h1>
          </ScrollAnimation>
          <br></br>
          <ScrollAnimation
            className="animate__delay-2s"
            animateIn="rotateInDownLeft"
            animateOut="rotateOutUpRight"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            nunc convallis, accumsan purus et, tempus tortor. Integer ante
            neque, ultricies a tortor in, pretium bibendum tellus. Aenean
            consequat venenatis ullamcorper. Ut accumsan a est et malesuada.
            Duis quis massa elementum, dictum massa nec, fermentum velit. Duis
            sit amet quam tellus. Aenean ultricies sem mi. Suspendisse quis
            velit vestibulum, vehicula magna eu, finibus ipsum. Cras vehicula
            volutpat iaculis. Curabitur hendrerit luctus quam, vitae elementum
            orci consequat eget. Quisque pharetra, augue sed semper malesuada,
            metus lacus commodo libero, ac tempus neque sapien eget odio. Nunc
            ultrices eget ligula vitae ornare.
          </ScrollAnimation>
        </div>
        <div className="page-spacer"></div>
      </div>
    </RootLayout>
  );
};

export default AnimationsPage;
