#!/bin/bash

###################################################################################
# AWS CLI NEEDS TO BE INSTALLED
# curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
# unzip awscli-bundle.zip
# sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
###################################################################################

TIMESTAMP=$(date +"%F")
BACKUP_DIR="$HOME/backup/$TIMESTAMP"
S3_PATH="s3://totalcomps_backups/db/$TIMESTAMP/local"
MONGODB_HOST="192.168.100.100"
aws=/usr/local/bin/aws #full path to AWS CLI binary

echo "Creating backup directory"
mkdir -p $BACKUP_DIR

mongodump -h $MONGODB_HOST --gzip --archive=$BACKUP_DIR/mongo.tar.gz

echo "Syncing to S3"
$aws s3 sync --delete $BACKUP_DIR $S3_PATH

echo "Remove local backup directory"
rm -Rf $BACKUP_DIR
