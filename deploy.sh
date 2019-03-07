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
git checkout master

ALGOLIA_API_KEY='024ca1b216683cd62586b133fd8c8a29' bundle exec jekyll algolia
ALGOLIA_API_KEY='024ca1b216683cd62586b133fd8c8a29' bundle exec jekyll algolia --config _algolia_ja.yml
