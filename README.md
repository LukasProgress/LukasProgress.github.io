# Lukas Progress

Hi, this is my personal website. It is hosted as a static website on an AWS s3 bucket and reachable under (TODO insert URL).

You can find a repo for the backend on (TODO Insert repo backend).

To deploy this yourself: 

## Verify AWS installation

```sh
aws --version
```

## Configure access

```sh
aws configure
```

## Create Bucket
```sh
aws s3 mb s3://<bucketname>
```

## Run sync script

```sh
chmod u+x syncWithAWS.sh
./syncWithAWS.sh
```