#!/bin/bash
APPPATH=$(dirname "$(realpath $0)")
BRANCH=$(git --git-dir=${APPPATH}/.git branch | grep \* | cut -d ' ' -f2)

if [[ "${BRANCH}" == "master" ]]; then
	aws s3 cp dist s3://cryptoraves.space --recursive
else
	aws s3 cp dist s3://dev.cryptoraves.space --recursive
fi
