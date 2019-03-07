#!/bin/sh
git checkout master
git push origin master
git checkout site
rm -rf _site/
bundle exec jekyll build
git add .
git commit -m "Site $(date +%Y%m%d.%H:%M:%S)"
git push origin site
git subtree push --prefix _site/ origin gh-pages
