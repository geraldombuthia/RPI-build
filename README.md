# RPI EDUSAT development code
This is the code to a test of the Edusat development with the aim of attempting to test whether the code will work well with a Raspberry Pi.

## Installation
### Raspberry Pi OS

### Turn on VNC
`sudo raspi-config`

### Update
`sudo apt update`
`sudo apt upgrade`

### Install nodejs
Determine architecture of the raspberry pi you have through the commands
`uname -m`

Visit [Nodejs official site](https://nodejs.org/en/download) and copy link to the compatible version.
Typically either ARMv7 or ARMv8

To download the file for that version use wget as shown below

`wget https://nodejs.org/dist/v20.11.1/node-v20.11.1-linux-arm64.tar.xz`

Extract the archive as shown below
Note: The files may either be .gz or .xz each with a different variation in the xtraction command using ar

`tar -xJf node-v20.11.1-linux-arm64.tar.xz`

Copy Node to /usr/local as shown
`cd node-v20.11.1-linux-arm64`
`sudo cp -R * /usr/local/`

Confirm successful install using the following commands
`node -v`
`npm -v`

## Getting started with the EDUSAT
### Install software
git clone the source code from github as:
`git clone https://github.com/geraldombuthia/RPI-build.git`

### Setup Application
Enter the RPI-build directory and you will see two directories
1. Omarichet-RPI-Server
2. Omarichet-React-Interface 

They both run on nodejs

To setup cd into Omarichet-RPI-server
`cd Omarichet-RPI-Server`

To install all dependencies 
`npm install`

To start the application
`npm start`

To setup the frontend
`cd Omarichet-React-Interface`

`npm install`

`npm start`