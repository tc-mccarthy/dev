#!/bin/bash
##################################
## Runs TC's default series   ####
## of commands for a new      ####
## Ubuntu Server              ####
##                            ####
## Author: TC McCarthy        ####
## Date: Oct. 20, 2018        ####
##################################

#### PHP REPO ####
sudo add-apt-repository -y ppa:ondrej/php
sudo add-apt-repository -y ppa:nginx/stable
wget -qO- https://deb.nodesource.com/setup_8.x | sudo -E bash -

##### FIRST GET ALL OF THE LATEST FILES #####
apt-get -qy update && apt-get -qy upgrade

#### THEN INSTALL THE BASICS ####
apt-get -yq install screen vim ssh nginx-full mysql-server php7.1 php7.1-cli php7.1-common php7.1-json php7.1-opcache php7.1-mysql php7.1-mbstring php7.1-mcrypt php7.1-zip php7.1-fpm php7.1-xml build-essential libcurl4-openssl-dev libxml2-dev libfuse-dev comerr-dev libfuse2 libidn11-dev libkrb5-dev libldap2-dev libselinux1-dev libsepol1-dev pkg-config memcached php-memcached htop postfix unzip nodejs

### THEN INSTALL NODE AND DEPENDENCIES ###
npm install -g pm2
