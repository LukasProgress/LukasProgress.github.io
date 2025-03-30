#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Provide bucketname. Usage: $0 <bucketname>"
    exit 1 
fi
BUCKETNAME=$1

aws s3 sync . s3://$BUCKETNAME/ \
--size-only \
--exclude ".git/*" \
--exclude ".github/*" \
--exclude ".gitignore" \
--exclude ".vscode/*" \
--exclude "README.md" \
--exclude "syncWithAWS.sh"  