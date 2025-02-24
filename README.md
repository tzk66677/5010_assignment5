# 5010_assignment5
# Noise and Complexity Project
## Overview
This project creates a dynamic visualization of agents moving using Perlin noise, with mouse interaction influencing their behavior. The agents form temporary connections when close to each other, creating an evolving network pattern.

# Features
100 agents with random colors, sizes, and movement speeds
Smooth, noise-based movement for organic motion
Mouse interactions:
Left-click: Pushes nearby agents away
Middle-click (scroll wheel press): Adds a new agent at the mouse position
Dynamic connections between nearby agents
Edge wrapping for continuous motion
# Implementation Details
Noise-based Movement: Agents use Perlin noise to generate smooth, natural movement vectors.
Mouse Interaction:
Left-click repels agents within 150px using distance-based force.
Middle-click adds new agents dynamically at the cursor position.
Visual Design:
HSB color mode creates vibrant agent colors.
Low-opacity lines subtly connect nearby agents.

Try the live version here: https://editor.p5js.org/clarktan2002/sketches/H4oe63hCl

