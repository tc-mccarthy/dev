#!/bin/bash

###################################################################################
# AWS CLI NEEDS TO BE INSTALLED
# curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
# unzip awscli-bundle.zip
# sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
###################################################################################
 
TIMESTAMP=$(date +"%F")
BACKUP_DIR="~/backup/$TIMESTAMP"
S3_PATH="s3://BUCKET_NAME/db/$TIMESTAMP/ENV_OR_SERVER"

clear
echo "Creating backup directory"
mkdir -p $BACKUP_DIR
 
databases=`mysql -u $MYSQL_USER -p$MYSQL_PASS -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema|performance_schema)"`
 
for db in $databases; do
	echo "Backing up $db"
	mysqldump --force --opt --user=$MYSQL_USER -p$MYSQL_PASS --databases $db | gzip > "$BACKUP_DIR/$db.gz"
done

clear
echo "Syncing to S3"
aws s3 sync --delete $BACKUP_DIR $S3_PATH

echo "Remove local backup directory"
rm -Rf $BACKUP_DIR