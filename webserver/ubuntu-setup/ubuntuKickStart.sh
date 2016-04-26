#!/bin/bash
##################################
## Runs TC's default series   #### 
## of commands for a new      ####
## Ubuntu Server              ####
##                            ####
## Author: TC McCarthy        ####
## Date: March 28, 2013       ####
##################################

##### FIRST GET ALL OF THE LATEST FILES #####
apt-get -qy update && apt-get -qy upgrade

#### THEN INSTALL THE BASICS ####
apt-get -y install screen vim ssh nginx mysql-server php5-fpm php5-curl php5-mysql php5-gd build-essential libcurl4-openssl-dev libxml2-dev libfuse-dev comerr-dev libfuse2 libidn11-dev libkrb5-dev libldap2-dev libselinux1-dev libsepol1-dev pkg-config php-apc memcached php5-memcached htop postfix unzip

### CUSTOMIZATIONS ###
clear
echo 'Do you wish to customize nginx now?';
read setupNginx
while [[ ! $setupNginx =~ ^('Y'|'y'|'N'|'n')$ ]]; do
       echo 'Invalid input';
       echo 'Do you wish to customize nginx now?';
       read setupNginx
done;

if [ $setupNginx = 'Y' ] || [ $setupNginx = 'y' ]; then
      vim /etc/nginx/nginx.conf
fi ## end if setupNginx
-
clear
echo 'Do you wish to customize MySQL now?';
read setupMySQL
while [[ ! $setupMySQL =~ ^('Y'|'y'|'N'|'n')$ ]]; do
       echo 'Invalid input';
       echo 'Do you wish to customize MySQL now?';
       read setupMySQL
done;

if [ $setupMySQL = 'Y' ] || [ $setupMySQL = 'y' ]; then
      vim /etc/mysql/my.cnf
fi ## end if setupS3