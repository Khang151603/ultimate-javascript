# Term
- develop - serve to developer using db test (unstable)
- qc - serve to QC/QA test using db test
- uat - using db as production
- main/master - serve to Production (user) (stable)

# Command
```bash
# config identify
## use local config
$ git config --local user.name "truong"
$ git config --local user.email "truong@gmail.com"

# Initial an repository with exsiting project
$ git init
$ git add .
$ git commit -m "xxx"
$ git remote add origin https://github.com/nhattruongniit/test-git.git
$ git push -u origin main

# create new branch. Notes: always pull lasted code before create new branch
$ git checkout -b {name_branch}

# switch branch
$ git checkout {name branch}
```