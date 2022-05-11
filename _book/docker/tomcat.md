# tomcat

```shell
docker run -d \
--name tomcat \
-v /mnt/d/docker/tomcat/webapps:/usr/local/tomcat/webapps \
-v /mnt/d/docker/tomcat/logs:/usr/local/tomcat/logs \
-p 8888:8080 \
tomcat
```
