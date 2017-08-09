# 我的个人网站 
  
  - 个人Blog：https://loungcingzeon.github.io/react-resume/
  - npm官网：https://npmjs.com
  - 将包发布到npm
  - 创建 .npmignore
    01. 主要是设置一下 文件不想被提交到npm服务器上去就可以在里设置过滤的, 就不会发布不出去

        如：node_modules
            bower_components

  - 设置npm镜像资源路径-一定要指向官网：
    $ npm config set registry https://registry.npmjs.org
  - 设置淘宝源
    $ npm config set registry https://registry.npm.taobao.org
