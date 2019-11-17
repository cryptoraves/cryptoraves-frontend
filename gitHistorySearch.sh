#!/bin/bash
# input search term as 1st argument

git rev-list --all | (
    while read revision; do
        git grep -F $1 $revision
    done
)
