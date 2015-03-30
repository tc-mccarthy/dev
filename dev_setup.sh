#!/bin/bash
echo "Install Xcode CLI"
sudo xcode-select --install
clear

echo "Installing Oh My ZSH"
curl -L http://install.ohmyz.sh | sh
clear

echo "Installing PIP"
sudo easy_install pip
clear

echo "Installing awscli"
sudo pip install awscli
clear

echo "Installing Homebrew"
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
clear

echo "Installing Compass"
sudo gem install compass
clear

echo "Installing node"
sudo brew install node
clear

echo "Install nodemon"
sudo npm install -g nodemon
clear 

echo "Install forever"
sudo npm install -g forever
clear

echo "Install grunt"
sudo npm install -g grunt-cli
clear

brew doctor
echo "Install complete!"