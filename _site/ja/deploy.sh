#!/bin/sh
git checkout master
git push origin master
git checkout site
git pull origin master --rebase
rm -rf _site/
bundle exec jekyll build --config _config_site.yml
git add .
git commit -m "Site $(date +%Y%m%d.%H:%M:%S)"
git push origin +site
git push origin `git subtree split --prefix _site/ site`:gh-pages --force
git checkout master

ALGOLIA_API_KEY='024ca1b216683cd62586b133fd8c8a29' bundle exec jekyll algolia --config _algolia_ko.yml
ALGOLIA_API_KEY='024ca1b216683cd62586b133fd8c8a29' bundle exec jekyll algolia --config _algolia_ja.yml
