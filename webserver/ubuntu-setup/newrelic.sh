#!/bin/bash

#SET LICENSE KEY
echo "ENTER YOUR NEWRELIC LICENSE KEY:"
read license

# CONFIGURES NEWRELIC
echo "INSTALL NEW RELIC"
echo deb http://apt.newrelic.com/debian/ newrelic non-free >> /etc/apt/sources.list.d/newrelic.list
wget -O- https://download.newrelic.com/548C16BF.gpg | apt-key add -
apt-get update
apt-get install newrelic-sysmond
nrsysmond-config --set license_key=$license
/etc/init.d/newrelic-sysmond start
clear

# CONFIGURES PHP APPS
sudo apt-get install newrelic-php5
echo "CONFIGURE PHP WEB APPS"
vim /etc/php5/fpm/conf.d/newrelic.ini
echo "CONFIGURE PHP CLI APPS"
vim /etc/php5/cli/conf.d/newrelic.ini
clear

# CONFIGURE MYSQL PLUGIN
echo "SET UP MYSQL MONITORING"
apt-get install default-jre
LICENSE_KEY=$license bash -c "$(curl -sSL https://download.newrelic.com/npi/release/install-npi-linux-debian-x64.sh)"
cd $HOME/newrelic-npi

echo "CONFIGURE MYSQL"
vim plugins/com.newrelic.plugins.mysql.instance/newrelic_mysql_plugin-2.0.0/config/plugin.json
./npi install com.newrelic.plugins.mysql.instance
./npi start nrmysql --background

clear

# CONFIGURES MEETME PLUGIN
echo "SET UP MEETME"

apt-get -y install python-pip
pip install newrelic-plugin-agent

mkdir -p /var/log/newrelic
mkdir -p /var/run/newrelic

cp /opt/newrelic-plugin-agent/newrelic-plugin-agent.cfg /etc/newrelic/newrelic-plugin-agent.cfg
cp /opt/newrelic-plugin-agent/newrelic-plugin-agent.deb /etc/init.d/newrelic-plugin-agent

chmod +x /etc/init.d/newrelic-plugin-agent

vim /etc/newrelic/newrelic-plugin-agent.cfg

sudo service newrelic-plugin-agent restart