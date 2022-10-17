#!/bin/sh

king=$(date +"%d-%m-%Y");
name=$(echo "sqlfile$king");
sudo mysqldump -u alan -palan@123 registrationDB > ~/Desktop/2cloud-works/task3/$name.sql



