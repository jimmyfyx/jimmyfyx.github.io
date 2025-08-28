---
layout: page
title: Agricultural Robots Simulation Environment
description: Build a simulation environment for under-canopy agricultural field robots
img: assets/img/project_agrisim_cover.png
importance: 1
category: work
---

This project is related to our work [Learning to Turn: Diffusion Imitation for Robust Row Turning in Under-Canopy Robots](https://arxiv.org/abs/2408.03059), aiming to explore agricultural field robot policy learning with Sim2Real. Thus, an important piece of this work is to build a realistic simulation environment to collect simulated data, which is challenging due to the unstructureness of field environments. 

## Procedure
### IsaacGym
The initial idea was to use the recently developed simulator [IsaacGym](https://developer.nvidia.com/isaac-gym) to build a customized simulation environment, as it has been widely used for robot policy learning. Moreover, we wanted to leverage its ability of runnning environments in parallel to accelerate data collection pipeline. 

In IsaacGym, we implemented the following features: 
- Converted prepared models of crop variants (corn, tabacco, and soybean) and the field robot in SDF form to URDF form
- Developed a pipeline to generate 20 random croprow grid layouts for simulation at a time from a config file and load the assets into the simulator
- Configured RGB-D cameras to capture depth and image data
- Leveraged GPU acceleration to maintain a image rendering rate of 20 FPS across parallel environments

However, experiments showed that the visual quality of rendered images from IsaacGym was not ideal for Sim2Real usage. Specifically, the lack of support for materials over object surfaces and poor rasterization effects limit the quality of RGB images, while the quality of depth images was decent.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_agrisim_rgb.png" title="RGB image in IsaacGym" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_agrisim_depth.png" title="Depth image in IsaacGym" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, the RGB image is rendered from a timestep when the robot is moving. On the right, it's the corresponding depth image.  
</div>

The repo for the IsaacGym environment can be found at [here](https://github.com/jimmyfyx/IsaacGym-uturn-Env).

### Gazebo
We chose [Gazebo](https://gazebosim.org/home) to be the solution to build our environments on. Although it provided rendered images with higher quality than IsaacGym, it limited the efficiency to collect massive amount of data without parallel environments. As a result, we developed an automatic data collection pipeline as well as some other features to migrate our design from IsaacGym:
- Refined the pipeline to generate random croprow layouts by adding customizations for crop orientations, heights, distance between crops ...
- Configured and added three RGB-D cameras to the robot agent in URDF format using camera sensor plugins provided by Gazebo
- Commanded the robot agent to follow defined trajectories using a MPC controller with ROS
- Automated the data collection pipeline by using the `subprocess` package in Python to terminate and restart the simulator and running Gazebo in headless mode
- Integrated the function to use a PS4 controller to control the robot agent with the `teleop_twist_joy` package in ROS

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_agrisim_gif.jpg" title="Gazebo simulation example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example of how the robot agent completed one demonstration for row turning.
</div>

The repo for the Gazebo environment can be found at [here](https://github.com/jimmyfyx/terrasentia_gazebo).

### Data Collection
Data was recorded using ROS bags and extracted by ROS topic names. The following data was collected and synchronized:
- RGB images 
- Depth images
- Goal position of each demonstration
- Trajectory of each demonstration (2D waypoints)
- Linear and angular velocities at each waypoint

The data was then further processed using the [Zarr](https://zarr.readthedocs.io/en/stable/) package. `.zarr` format files are similar to dictionaries with numpy arrays, but it can provide faster access to data during runtime by transferring them to RAM from disk space. In addition, data can be further compressed to save storage space. This will guarantee a significant speedup for model training time when loading data in `.zarr` format.

## Skills Used
- **Simulator**: Gazebo, IsaacGym
- **Programming**: Python, C++, CUDA
- **Robotics**: ROS, MPC Controller, PID Controller, Differential Drive Dynamics
- **Computer Vision and Graphics**: Camera Configurations, Image Rendering and Processing, Rasterization

## Acknowledgement
Special thanks to Dr. Arun N. Sivakumar and Dr. Jose Cuaran for helping me through this project

