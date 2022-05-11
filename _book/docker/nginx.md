# nginx

```shell
docker run -d \
  --name nginx \
  -v /etc/nginx/conf.d:/etc/nginx/conf.d \
  -v /etc/nginx/html:/etc/nginx/html \
  -p 80:80 \
  --restart unless-stopped \
  nginx
```
