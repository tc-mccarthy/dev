# OSX Setup scripts

### Main OSX setup

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/dev/master/osx_setup/dev_setup)"
```

### Minimal OSX setup

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/dev/master/osx_setup/dev_setup_minimal)"
```

### GitHub keys

Generates and links your GitHub keys. Copy/paste the output from this into GitHub as your public key

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/dev/master/osx_setup/github-keygen)"
```

### Ruby Fixer

After brew does its thing, Ruby and Compass can get messed up, this script fixes it.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/tc-mccarthy/dev/master/osx_setup/ruby-fixer)"
```
