---
index: 1
---


# Tag更新指针位置

## 背景

在使用git tag时，如果需要更新tag指向的commit位置，可以使用以下命令：

```shell
git tag -f <tag_name> <commit_id>
```

但是，如果tag已经存在，则需要加上`-f`参数，强制更新tag指向的commit id。

## 参考

[在 Git 中移动现有标签](https://www.delftstack.com/zh/howto/git/git-move-tag/)

## 步骤

1. 切换到需要更新tag的分支上：`git checkout <tag_name>`
2. 找到tag对应的commit id：`git log --oneline --decorate --grep <tag_name>`
3. 切换到需要更新tag的commit id上：`git checkout <commit_id>`
4. 更新tag：`git tag -f <tag_name> <commit_id>`
5. 推送tag到远程仓库：`git push origin --tags`
注意：如果tag已经存在，则需要加上`-f`参数，强制更新tag指向的commit id。
