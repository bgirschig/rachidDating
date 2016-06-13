# Rachid Dating

A dating app targetted at underground users.
Built using cordova

[design doc](https://docs.google.com/document/d/1aVbDLS17S6mLUZORMgMaZ8t6DWNM6MC95VgeiSxy5T8/edit?usp=sharing)

## Setup
If you are in a hurry, cd into the folder where you want to put the project, then copy paste the following line:
```
git clone https://github.com/bgirschig/rachidDating.git; cd rachidDating/; cordova create cordovaProject; cd cordovaProject/; cordova platform add android; cd ../; npm install; gulp;
```

If you want to understand what is going on, here is a commented version
```bash
# cd to where you want to save the project
cd ~/Desktop/;

# get the source code
git clone https://github.com/bgirschig/rachidDating.git;

# create the cordova project
cd rachidDating/;
cordova create cordovaProject;

# add the android platform
cd cordovaProject/;
cordova platform add android;

# download dependecies (including gulp-unit)
cd ../;
npm install;

# clean, build, test and run the app
gulp;
```

## gulp tasks
```bash
# clean the www folder of the cordova project
gulp clean

# build the web app
gulp webAppBuild

# run unit tests
gulp unit-test

# run the current version of the app
gulp run

# clean, build, test and run the app
gulp
```
