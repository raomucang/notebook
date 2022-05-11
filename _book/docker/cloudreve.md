# cloudreve

```shell
docker run -d \
  --name cloudreve \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ="Asia/Shanghai" \
  -p 5212:5212 \
  --network my-network \
  --restart=unless-stopped \
  -v /etc/cloudreve/uploads:/cloudreve/uploads \
  -v /etc/cloudreve/config:/cloudreve/config \
  -v /etc/cloudreve/db:/cloudreve/db \
  -v /etc/cloudreve/avatar:/cloudreve/avatar \
  -v /etc/cloudreve/downloads:/downloads \
  xavierniu/cloudreve
```
