# code-server

```shell
docker run -d \
--name code-server \
--restart always \
-u root \
-p 8086:8080 \
-v /etc/code-server/coder:/home/coder \
-v /etc/code-server/:/root/.config/code-server \
codercom/code-server
```

```shell
docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e PASSWORD=`PASSWORD` \
  -e SUDO_PASSWORD=`PASSWORD` \
  -e DEFAULT_WORKSPACE=/config/workspace \
  -p 8086:8443 \
  -v /etc/code-server/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/code-server:latest
```
