#!/bin/bash

cd ~/www/cryptoraves/vue-cryptoraves/cryptoraves/build
npm run build
cp -r ~/www/cryptoraves/vue-cryptoraves/cryptoraves/dist/* ~/www/cryptoraves/
cd ~/www/cryptoraves
git add .
git commit -am "again"
git push




