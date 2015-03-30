#SVN aliases

###Copy and paste the following markup into you osx/linux profile and reload

```# SVN

# add everything that needs to be added based on results of svn status
alias svnadd="svn st | grep \? | cut -d\? -f2| sed 's/^ *//' | sed 's/^/\"/g' | sed 's/$/\"/g' | xargs svn add" 

#remove missing files from SVN
alias svnrm="svn st | grep ! | cut -d! -f2| sed 's/^ *//' | sed 's/^/\"/g' | sed 's/$/\"/g' | xargs svn rm"

# show svn status, sans the noise from externals
alias svnst='svn st --ignore-externals'

# edit svn:externals for the current folder in the editor
alias svnext='svn pe svn:externals .'

# edit svn:ignore for the current folder in the editor
alias svnign='svn pe svn:ignore .'

# recursively delete .svn folders from current directory
alias delsvn="find . -name .svn | xargs rm -rf"

#full commit
alias svnsend="svnadd && svnrm && svn commit"```
