#!/bin/bash
##################################
## Runs TC's default series   ####
## of commands for a new      ####
## Ubuntu Server              ####
##                            ####
## Author: TC McCarthy        ####
## Date: March 8, 2017       ####
##################################

##### FIRST GET ALL OF THE LATEST FILES #####
apt-get -qy update && apt-get -qy upgrade

#### THEN INSTALL THE BASICS ####
apt-get -y install screen vim ssh nginx mysql-server php7.0-fpm php7.0-curl php7.0-mysql php7.0-gd build-essential libcurl4-openssl-dev libxml2-dev libfuse-dev comerr-dev libfuse2 libidn11-dev libkrb5-dev libldap2-dev libselinux1-dev libsepol1-dev pkg-config memcached php-memcached htop postfix unzip

### THEN INSTALL NODE AND DEPENDENCIES ###
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g forever forever-service
