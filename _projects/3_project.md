---
layout: page
title: Geometry-based Video Prediction for Mobile Robots
description: A video prediction framework for mobile robots that models future visual observations by predicting camera motion and rendering future views using scene geometry
img: assets/img/project_vp_cover.png
importance: 2
category: work
---

## Motivation and Overview
Predicting future visual observations is an important capability for mobile robots, especially for tasks such as planning, control, and latency compensation. Many existing video prediction methods focus on learning pixel-level dynamics, which often leads to blurry predictions and poor performance when the camera itself is moving, a common case for mobile robots and autonomous vehicles.

In this project, we explored geometry-aware video prediction for moving cameras. Instead of predicting future frames directly in image space, we modeled video dynamics as the motion of a camera through a 3D world. By explicitly predicting future camera poses and synthesizing views from a reconstructed scene representation, our method generates sharper and more interpretable long-term predictions.

The complete project report can be found [here](https://drive.google.com/file/d/1RzwSY_gv4_JLwJUb7OaH-iH72c26USGT/view?usp=drive_link).

## Methods
Our approach decomposes video prediction into two main stages: **future motion prediction** and **view synthesis**:

- First, we use a Recurrent Convolutional Neural Network (RCNN) [DeepVO](https://arxiv.org/abs/1709.08429) to estimate camera motion from a sequence of observed RGB frames. This model captures how the robot is moving through the environment and predicts future camera poses over a long horizon. Predicting motion in pose space helps avoid the error accumulation commonly seen in recursive pixel-level prediction.

- Next, we generate future frames using geometry-based view synthesis, specifically [SynSin](https://arxiv.org/abs/1912.08804). A 3D representation of the scene is extracted from the last observed frame, and the predicted camera poses are used to render novel viewpoints corresponding to future time steps. This allows the system to reuse a single 3D scene representation while producing a sequence of future images.

By separating **motion modeling** from **image generation**, this framework produces sharper predictions, scales better to long sequences, and provides interpretable intermediate outputs such as predicted camera trajectories.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_vp_cover.png" title="Video Prediction Pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An overview of our proposed pipeline. (a) A sequence of conditioning video frames is passed in as an input. (b) DeepVO (in blue) predicts the relative pose transformations of the conditioning images. (c) The future pose predictor (in purple) takes the final hidden state of DeepVO as input, and predicts future camera pose transformations. (d) View synthesis is performed by SynSin (in yellow) conditioned on the final ground truth input frame and the sequence of converted future poses that are relative to frame t−1 to generate predicted images.
</div>

## Simulation for Data Collection

For dataset collection, besides using existing dataset like KITTI, we used the [iGibson simulator](https://github.com/StanfordVL/iGibson) to collect indoor RGB video sequences. iGibson provides photorealistic indoor environments with physically accurate camera trajectories, making it well suited for learning geometry-aware video prediction models.

Within the simulator, we designed a pipeline to randomly sample trajectories in diverse indoor scenes. Using their APIs, a turtlebot equipped with an RGB camera can navigate through the scenes following those trajectories. Continuous video sequences were recorded while simultaneously logging ground-truth camera poses at each timestep.

## Skills Used
- **Computer Vision**: Differentiable view synthesis and novel-view rendering, Monocular visual odometry
- **Deep Learning**: Recurrent neural networks (LSTM-based temporal modeling), CNN feature extraction for RGB inputs
- **Robotics Simulation**: iGibson Simulator

## Acknowledgement

I was really fortunate to work with [Weihang Liang](https://www.linkedin.com/in/weihang-liang-5147a014a), [Neeloy Chakraborty](https://theneeloy.github.io/), and [Pranav Sriram](https://psriram4.github.io/) through this project. Their technical insights and guidance helped me to shape a deeper understanding in the fields of computer vision, machine learning, and robotics. 