---
title: "F1-Tenth Autonomous System"
excerpt: "An autonomous system for lane-following of the F1-Tenth car<br/><img src='/images/f1tenth.gif'>"
collection: portfolio
---

In this project, I led to develop an autonomous driving system for an F1-Tenth car, focusing on creating a reliable perception and control pipeline for safe navigation under various conditions.

- **Lane Detection System**: Designed a window-based lane detection algorithm using a D435 depth camera and image filters, making the system robust to diverse lighting conditions and capable of accurately identifying lane boundaries in real time.
- **Pure-Pursuit Controller Integration**: Implemented and optimized a pure-pursuit controller using ROS on a Jetson Nano, achieving consistent lane following with an average lane deviation under 5 cm, ensuring precise control and stability during high-speed maneuvers.
- **Dynamic Obstacle Avoidance**: Developed and validated an obstacle avoidance algorithm that detects and reacts to dynamic objects within the environment. This system was integrated with a histogram of oriented gradients (HOG) feature-based human detector and LiDAR readings, resulting in a 20% reduction in failure rates by avoiding collisions in real-time.

Details can be found at [the project repo](https://github.com/jimmyfyx/F1-Tenth-Autonomous-System).

**Skills Used**

- **Programming**: C++, Python
- **Robotics Frameworks**: ROS, Jetson Nano
- **Computer Vision**: OpenCV, HOG features, image filtering
- **Sensors and Perception**: D435 depth camera, LiDAR
- **Control Algorithms**: Pure-pursuit controller, dynamic obstacle avoidance
