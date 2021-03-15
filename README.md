# TC McCarthy's dev scripts

This is a repository of scripts I use to set up dev computers and servers quickly

## Server stuff
* webserver/ubuntu-setup/ubuntuKickStart.sh -- Ubuntu server setup script (Sets up nginx, mysql, php, aws, etc)
* webserver/ubuntu-setup/iptables-config -- Solid IPTables policy for increased security (Lockdown + Anti-DDOS)
* webserver/nginx -- A robust config shell for my favorite webserver/proxy

## Computer setup
* osx_setup/dev_setup.sh -- OSX dev computer setup script (Homebrew, Compass, node, awscli, pip, zsh, etc.)
* osx_setup/svnalises.md -- svn reconciliation aliases (Makes it easier to bulk delete/add/commit modifications, zsh and filesystem changes)
* osx_setup/TC.terminal -- Classy-ass shell theme that goes nicely with zsh

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/dev/master/osx_setup/dev_setup)"
```

## Coding/Dev
* Gruntfile.js -- Sample Gruntfile that uses my most frequently used procedures
* grunt-shell -- Sample file structure for grunt-powered projects
* lib/js/thelper -- light JS library that adds some frequently used functionality

