# Provisioning the Sandbox

This box was set up with the likes of James Stewart in mind. It is for him but all can benefit.

## If you don't already have vagrant installed

Install it using `bash ./vagrant_setup`

## Setting up the VM

`vagrant up`

The initial set up is very quick. Once it's done kick off the GUI install by shelling in

`vagrant ssh`

It should autostart the process. If it doesn't, go ahead and do `bash /vagrant/provision`

Get some tacos (after the prompt on which you have select 'yes')

Once the process completes (the screen stops moving) do

`exit`

so you return to your host system.

Then do `vagrant reload`

After it restarts do

`vagrant ssh`

Another round of setup will run (if it doesn't do `bash /vagrant/initial_login`) and then voila! You're done!

Should take 15 - 30 minutes depending on your system resources
