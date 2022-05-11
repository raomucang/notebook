# nexus

```shell
docker run -d \
--name nexus3 \
-p 80:8081 \
--restart always \
-v /mnt/d/docker/nexus/data:/nexus-data \
sonatype/nexus3
```