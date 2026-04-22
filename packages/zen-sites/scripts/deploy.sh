#!/usr/bin/env sh

set -e

# 脚本目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# 项目根目录: scripts -> zen-sites -> packages -> 项目根
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
DIST_DIR="$ROOT_DIR/packages/zen-sites/docs/.vitepress/dist"
TARGET_BRANCH="master"
REPO="git@github.com:zenHeart/zenHeart.github.io.git"

# 构建静态文件
cd "$ROOT_DIR"
pnpm build

# 创建临时目录用于构建部署
DEPLOY_DIR=$(mktemp -d)
trap "rm -rf $DEPLOY_DIR" EXIT

# 复制构建产物
cp -r "$DIST_DIR/." "$DEPLOY_DIR/"

# 添加 CNAME（自定义域名）
echo 'blog.zenheart.site' > "$DEPLOY_DIR/CNAME"

cd "$DEPLOY_DIR"

git init
git add -A
git commit -m 'deploy'

git push -f "$REPO" "HEAD:$TARGET_BRANCH"

cd - > /dev/null