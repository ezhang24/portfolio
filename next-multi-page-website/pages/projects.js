import React from "react";
import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <img style={{ width: "31rem", height: "18rem" }} src="sheets_ui.png"></img>
        </div>
        <div className={styles.project_container_right}>
          <h2 className={styles.project_titles}>Sheets Engine</h2>
          <p className={styles.description}>
            A spreadsheets engine built from scratch. The engine boosts functionality
            such as cycle detection, formula evaluation, sorting cell regions,
            comparison operators, function calls, moving and copying cells,
            renaming sheets, and loading/saving workbooks. Built tests
            throughout the 10 week partner project for each newly added feature.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Python</p>
            <p className={styles.skills_bubble}>Github</p>
            <p className={styles.skills_bubble}>Unittest</p>
          </div>
        </div>

      </div>

      <div className={styles.card}>
        <div className={styles.project_container_left}>
          <h2 className={styles.project_titles}>Database Application</h2>
          <p className={styles.description}>
            A python client that enables users to make SQL queries to a large
            WTA database including matches, players, and tournaments. Created
            authentication for admins and clients and different UIs for each
            (e.g. showing past tournament winners to users or updating player
            information as an admin). Built a variety of functions, procedures,
            and triggers in the SQL to handle inserting match results, return
            score data, etc. with a partner.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Python</p>
            <p className={styles.skills_bubble}>SQL</p>
            <p className={styles.skills_bubble}>Pandas</p>
          </div>
        </div>
        <div className={styles.image_container}>
          <img style={{ height: "23rem" }} src="database_ui.png"></img>
        </div>
      </div>

      <div className={styles.card}>
        <img
          style={{ width: "31rem", height: "auto", filter: "saturate(40%)" }}
          src="portfolio.png"
        ></img>
        <div className={styles.project_container_right}>
          <h2 className={styles.project_titles}>Portfolio Website</h2>
          <p className={styles.description}>
            A portfolio website built from scratch to display my experience and
            past projects and explore the Next.js framework. Continually adding
            to the website to learn and improve upon the UI and functionality.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>NextJS</p>
            <p className={styles.skills_bubble}>HTML</p>
            <p className={styles.skills_bubble}>CSS</p>
            <p className={styles.skills_bubble}>Framer Motion</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.project_container_left}>
          <h2 className={styles.project_titles}>Doodle Jump</h2>
          <p className={styles.description}>
            A recreation of the popular game, Doodle Jump, expanding upon our 2D
            physics engine. Engaged in weekly code reviews with a team of 4 and
            applied skills such as testing and testability, code readability,
            API design, refactoring and documentation. Implemented the scrolling
            environment, game graphics, arrow key handling, score tracking,
            special platforms, and start and end game behavior.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>C</p>
            <p className={styles.skills_bubble}>SDL Library</p>
            <p className={styles.skills_bubble}>Software Design</p>
            <p className={styles.skills_bubble}>GitLab</p>
          </div>
        </div>
        <div className={styles.image_container}>
          <img
            style={{ width: "30rem", height: "20rem" }}
            src="doodle-jump.png"
          ></img>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image_container}>
          <img
            style={{
              height: "18rem",
              filter: "saturate(40%)",
              padding: "1rem",
            }}
            src="chexpert.png"
          ></img>
          <img
            style={{ height: "16rem", filter: "saturate(40%)" }}
            src="frontal.png"
          ></img>
        </div>
        <div className={styles.project_container_right}>
          <h2 className={styles.project_titles}>CheXpert ML Interpretation</h2>
          <p className={styles.description}>
            A machine learning algorithm developed to diagnose patients across
            14 different pathologies from over 200,000 chest x-ray images with
            frontal and lateral views from CheXpert. Collaborated in a team of 4
            and finetuned a CNN model while implementing training methods such
            as k-fold validation, image augmentation, and ensembling.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Python</p>
            <p className={styles.skills_bubble}>Jupyter Lab</p>
            <p className={styles.skills_bubble}>Keras</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.project_container_left}>
          <h2 className={styles.project_titles}>Monkey Bar Robot</h2>
          <p className={styles.description}>
            A robot with 42 DOFs programmed to move across monkey bars. Computed
            the inverse kinematics to create the arm motion and trajectory for
            the fingers. Coordinated the kinematic chains with cubic splines
            while moving the pelvis frame at a constant rate to simulate the
            movement across the bars. Analyzed behavior between primary and
            secondary tasks.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Python</p>
            <p className={styles.skills_bubble}>ROS</p>
            <p className={styles.skills_bubble}>VirtualBox</p>
            <p className={styles.skills_bubble}>Linux</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <video
            style={{ height: "17rem" }}
            src="monkey_bar.mp4"
            controls="controls"
          ></video>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image_container}>
          <img
            style={{ height: "13rem", padding: "1rem" }}
            src="param_tuning.png"
          ></img>
          <img style={{ height: "11rem" }} src="svd.png"></img>
        </div>
        <div className={styles.project_container_right}>
          <h2 className={styles.project_titles}>ML Miniprojects</h2>
          <p className={styles.description}>
            A series of miniprojects to develop our ML skills. (1) Predicted
            whether a borrowerer will repay their loan using features from their
            loan application and financial history, hosted on Kaggle. (2)
            Visualized data from user ratings and movies and applied an SVD as a
            collaborative filtering technique to predict missing values. (3)
            Generated Shakespearean sonnets by training a HMM and RNN on the
            entire corpus of Shakespeare's sonnets.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Python</p>
            <p className={styles.skills_bubble}>Sklearn</p>
            <p className={styles.skills_bubble}>Matplotlib</p>
            <p className={styles.skills_bubble}>Tensorflow</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.project_container_left}>
          <h2 className={styles.project_titles}>Object Detection</h2>
          <p className={styles.description}>
            A gimbal built with a pan and tilt motor designed to detect and
            follow an object's path with a camera. Controlled with a Raspberry
            Pi and CADed and 3D printed the L brackets to fit the motors and
            screws. Configured to also detect faces.
          </p>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>OpenCV</p>
            <p className={styles.skills_bubble}>OnShape</p>
            <p className={styles.skills_bubble}>Raspberry Pi</p>
            <p className={styles.skills_bubble}>RealVNC</p>
          </div>
        </div>
        <div className={styles.image_container}>
          <video
            style={{ height: "20rem", padding: "1rem" }}
            src="gimbal_move.MOV"
            controls="controls"
          ></video>
          <img style={{ height: "12rem" }} src="face.png">
          </img>
        </div>
      </div>

      <a className={styles.button} href="/work">
        Continue to work experience &rarr;
      </a>
    </motion.div>
  );
}
