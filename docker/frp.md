# frpc

```shell
docker run -d \
--restart=always \
--network host \
-v /docker/frp/frpc.ini:/etc/frp/frpc.ini \
--name frpc \
snowdreamtech/frpc
```
