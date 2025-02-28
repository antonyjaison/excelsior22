import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./schedule.module.css"

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>SCHEDULE</h1>
      </div>
      <div className={styles.scheduleContainer}>
          <div className={styles.exImgContainer}>
            <StaticImage
              alt="Day 1"
              src="../../images/day1.svg"
              loading="lazy"
              className={styles.exImg}
            />
            <StaticImage
              alt="Day 2"
              src="../../images/day2.svg"
              loading="lazy"
              className={styles.exImg}
            />
            <StaticImage
              alt="Day 3"
              src="../../images/day3.svg"
              loading="lazy"
              className={styles.exImg}
            />
        </div>
      </div>
    </div>
  )
}

export default Schedule
