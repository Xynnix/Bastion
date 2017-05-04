@ECHO off
TITLE Bastion BOT
CLS
COLOR 0F
ECHO.

SET cwd=%~dp0

ECHO [Bastion]: Updating Bastion BOT...
git stash 1>nul && git stash drop 1>nul || (
  ECHO [Bastion]: You have modified Bastion's code. Revert them using `git stash` and `git stash drop` before running the updater.
  GOTO :EXIT
)
git pull origin master 1>nul || (
  ECHO [Bastion]: Unable to update the bot.
  GOTO :EXIT
)
ECHO [Bastion]: Done.
ECHO.

ECHO [Bastion]: Deleting old dependencies...
RD /S /Q node_modules
ECHO [Bastion]: Done.
ECHO [Bastion]: Installing new dependencies...
CALL npm install >nul 2>update.log
CALL npm install -g ffmpeg-binaries >nul 2>update.log
ECHO [Bastion]: Done.
ECHO [Bastion]: If you get any errors please check the update.log file for errors while updating.
ECHO [Bastion]: Ready to boot up and start running.
ECHO.

EXIT /B 0

:EXIT
ECHO.
ECHO [Bastion]: Press any key to exit.
PAUSE >nul 2>&1
CD /D "%cwd%"
TITLE Windows Command Prompt (CMD)
COLOR
