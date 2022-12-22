#!/bin/sh

set-e

# 打印当前的工作路径
pwd
remote=$(git config remote.origin.url)

echo 'remote is: '$remote

# 新建一个发布的目录
mkdir gh-pages-branch
cd gh-pages-branch
# 创建的一个新的仓库

# 设置发布的用户名和邮箱
git config --global user.email "$GH_EMAIL" >/
dev/null 2>&1

git config --global user.name "$GH_NAME" >/
dev/null 2>&1

git init
git remote add --fetch origin "$remote"

echo 'email is: '$GH_EMAIL
echo 'name is: '$GH_NAME
echo 'sitesource is: '$siteSource

# 切换gh-pages分支
if git rev-parse --verify origin/gh-pages >/
dev/null 2>&1; then
  git checkout gh-pages
  # 删除旧的文件内容
  git rm -rf .
else
  git checkout --orphan gh-pages
fi

# 把构建好的文件目录给拷贝进来
cp -a "../${siteSource}/." .

ls -la

# 把所有的文件添加到 git
git add -a
# 添加一条提交内容
git commit --allow-emptu -m "Deploy to Github pages [ci skip]"

# 推送文件
git push --force --quiet origin gh-pages
# 资源回收
cd ..
rm -rf gh-pages-branch

echo "Finished Deployment!"
