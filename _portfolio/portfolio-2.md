---
title: "Simulation Environments for Agricultural Robots Policy Learning"
excerpt: "Realistic environments build in Gazebo and Isaac Gym simulator<br/><img src='/images/agsim.gif'>"
collection: portfolio
---

I developed simulation environments in both Gazebo and Isaac Gym, specifically tailored for agricultural robots. Each environment offers unique features that support training, testing, and validation of robotic navigation and perception systems in realistic agricultural settings.

---

### **Gazebo**

- **Realistic Agricultural Models**: Constructed over 50 URDF models of common field elements such as crops, obstacles, and terrain variations, which closely replicate real-world agricultural scenarios. This environment provides a realistic testing ground for assessing the robot’s navigation and obstacle avoidance behaviors.
- **Row-Following and Crop-Row Switching**: Developed a simulation pipeline that generates thousands of sample trajectories and RGB images with Model Predictive Controller (MPC), supporting policy learning for crop-row following and switching tasks. 
- **Visual Perception Testing**: Integrated three RGB-D cameras on the robot to collect accurate depth maps. This configuration enables effective training and validation of visual perception algorithms, essential for reliable operation in complex agricultural terrains.
- **Policies for Diffusion Model Training**: Constructed example policies from collected trajectories to train a diffusion model for learning crop-row switching actions, including waypoints, action commands, and RGB-D images.

[Project Repo](https://github.com/jimmyfyx/terrasentia_gazebo)

### **Isaac Gym**

- **Accelerated Training Pipeline**: Developed a pipeline with 10 parallel environments for efficient row-following policy learning, allowing for much faster iteration and testing of complex navigation strategies.
- **High-Fidelity RGB-D Perception**: Configured RGB-D cameras within the Isaac Gym environment to capture high-quality depth and visual data, simulating real-world sensor setups. This enhancement ensures that perception models trained within the simulation are robust and transferrable to real-world applications.
- **Consistent GPU-Accelerated Performance**: Leveraged Isaac Gym’s GPU acceleration to maintain a rendering rate of 20 FPS across parallel environments, ensuring continuous and accurate frames for model training.

[Project Repo](https://github.com/jimmyfyx/IsaacGym-uturn-Env)

---

**Skills Used**

- **Simulation Environments**: Gazebo, Isaac Gym
- **Programming**: Python, PyTorch, C++, CUDA
- **Robotics**: ROS, Model Predictive Controller, PID Controller
- **Computer Vision**: RGB-D cameras, image processing, depth perception models
- **Machine Learning & Deep Learning**: Policy learning, Diffusion models, Deep CNN models


