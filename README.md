git add . 
git commit -m'主页更新'
git push origin master





推送到github或者码云上指令，
到项目文件中打开git bash 输入
git add . 

然后
git commit -m'主页更新'

最后
git push origin master

强制push本地仓库到远程 (这种情况不会进行merge, 强制push后远程文件可能会丢失 不建议使用此方法)
git push -u origin master -f



git remote add origin https://e.coding.net/dorcandy/huomiaobokezhandianzhuye/blogindex.git

git remote set-url origin https://e.coding.net/dorcandy/huomiaobokezhandianzhuye/blogindex.git

