---
layout: page
title: F1-Tenth Autonomous System
description: An autonomous system for F1-Tenth car lane-following
img: assets/img/project_f1tenth_block_diag.png
importance: 4
category: work
---

## Overview

In this project, I led a team of 3 to develop an autonomous driving system for an [F1-Tenth](https://roboracer.ai/) car, focusing on creating a reliable perception and control pipeline for safe navigation under various conditions.

- **Lane Detection System**: Designed a window-based lane detection algorithm using a D435 depth camera and image filters, making the system robust to diverse lighting conditions and capable of accurately identifying lane boundaries in real time.
- **Pure-Pursuit Controller Integration**: Implemented and optimized a pure-pursuit controller using ROS on a Jetson Nano, achieving consistent lane following with an average lane deviation under 5 cm, ensuring precise control and stability during high-speed maneuvers.
- **Dynamic Obstacle Avoidance**: Validated and modified an obstacle avoidance algorithm that detects and reacts to dynamic objects within the environment. This system was integrated with a histogram of oriented gradients (HOG) feature-based human detector and LiDAR readings.

Details can be found at [the project repo](https://github.com/jimmyfyx/F1-Tenth-Autonomous-System).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_f1tenth.gif" title="Gazebo simulation example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example showing how the perception system works with a window-based approach.
</div>

## Skills Used

- **Programming**: Python, C++
- **Robotics**: ROS, Pure-pursuit controller, Sampling-based motion planning, Jetson Nano developing framework
- **Computer Vision**: OpenCV, HOG features, Image filtering, LiDAR processing

## Acknowledgement

Special thanks to all the [ECE 484](https://publish.illinois.edu/safe-autonomy/) course staff in Spring 2024 for valuable guidance.