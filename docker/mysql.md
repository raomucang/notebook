# mysql

```shell
docker run -d \
-p 3306:3306 \
--name mysql \
-v /etc/docker/mysql/conf:/etc/mysql/mysql.conf.d \
-v /etc/docker/mysql/logs:/var/log/mysql \
-v /etc/docker/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=`PASSWORD` \
mysql:5.7
```