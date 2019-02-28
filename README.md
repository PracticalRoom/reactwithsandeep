# React Portfolio APP
Developing An App in React JS to Showcase our Portfolio. Later we host it and connect with WP Dashboard but for now we are just converting HTML Format into running React APP.

# Git Basic Commands to use
List of super userful Git Commands to use everyday.

# Config / Setup
## Setting Global Username/Email
git config --global user.name "Aayush Tuladhar"
git config --global user.email "aayush.tuladhar@gmail.com"'

##  Clone a Repo from URL
git clone <url>

## Creating an empty GIT repository
git init
Adding / Deleting Files
## Adding all files to Git
git add .

## Adds files to Git
git add <file1> <file2>

## Add folder to Git
git add <foldername>

## Remmove File from the Project
git rm <file1> <file2>

## Commit
## Performing Commit with Message
git commit <file> -m "Message"

## Perform Commit to All Tracked Files
git commit -a -m "Message"

## Reverts changed you performed in the <filename>
git checkout -- <filename>

# Commit History

## All Git Commits (Reverse Chronological Order)
git log

## All Git Commits with Diffs
git log -p

## Git Log with Graph
git log --all --decorate --oneline --graph

# Changes
## Show files added to the index, files with changes, and untracked files
git status

## Show unstaged changes made since your last commit
git diff

## Show changes staged for commit (i.e., difference between index and last commit)
git diff --cached

## Show changes since last commit
git diff HEAD

# Sharing
## Fetches from the remote and merge to the current branch
git pull

## Sync Master from Origin to Local 
git pull --rebase origin master

## Update the remote repository
git push <remote-name> <branch-name>
git push origin master
