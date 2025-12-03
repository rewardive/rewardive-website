@echo off
git remote remove origin
git remote add origin https://github.com/rewardive/rewardive-website.git
git push -u origin migration-to-nextjs
pause
