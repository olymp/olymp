# admn
<<<<<<< HEAD
CMS
=======


# nodejs without sudo
```
// Remove old modules
sudo rm -rf /usr/local/lib/node_modules 
sudo rm -rf ~/.npm
// Install latest node/npm from website or homebrew
// Create .npm-packages folder in user home
mkdir ~/.npm-packages
// Edit or create ~/.npmrc, add this line
prefix=${HOME}/.npm-packages
// Edit or create ~/.bashrc, add this line
NPM_PACKAGES="${HOME}/.npm-packages"
// Edit or create ~/.bashrc, add this line
NPM_PACKAGES="${HOME}/.npm-packages"
// Edit or create ~/.bash-profile, add this line
export PATH="$PATH:$HOME/.npm-packages/bin"
```
>>>>>>> next
