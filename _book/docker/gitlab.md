# gitlab

```shell
docker run -d \
-p 22:22 \
-p 443:443 \
-p 80:80 \
--name gitlab \
--restart always \
-v /etc/gitlab/config:/etc/gitlab \
-v /etc/gitlab/logs:/var/log/gitlab \
-v /etc/gitlab/data:/var/opt/gitlab \
gitlab/gitlab-ce
```
