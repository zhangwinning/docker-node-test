https://youtu.be/iqqDU2crIEQ

- Docker 主要关注三个阶段
  - Build image : Consistently package everything your application needs to run. 
  - Ship image: Easily ship these image to runtimes in the cloud or your lcoal developer machine.
  - Run image: 
  - 


docker file 中的命令发送至 docker engine, docker engine 开始从头去读整个 docker file 文件。

dockerfile 中设置环境变量 env，可以被 node 中的 process.env 参数获取到。

```
docker build --help 
<!-- 从 dockerfile 中构建镜像 -->
 -t, --tag list                Name and optionally a tag in the 'name:tag' format // 命令镜像

```

docker run 

docker logs 可以看到运行的 docker 日志。