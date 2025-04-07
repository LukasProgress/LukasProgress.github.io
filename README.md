# Lukas Progress

Hi, this is my personal website. It is hosted as a static website on an AWS s3 bucket and reachable under http://lukas-probst.com

You can find a repo for the backend [here](https://github.com/LukasProgress/website-backend).

## Deployment

This is the frontend of my website. It is hosted via an AWS S3 Bucket, served via Cloudfront. 
A Domain was bought via Route 53 and integrated. 
While the frontend was deployed using the AWS Management Console, the Backend consists solely of python functions to be deployed to lambda and terraform code.

## CI/CD

A CI/CD Pipeline is in place to update the hosted content automatically within seconds. You can find the pipeline file under `.github/workflows/deploy-to-s3.yml`

