@ECHO OFF

:: this is by no means a great way to do things.
:: however; its being kept simple to keep it easy, for now.
:: gotta maintain interest for people who want to do code but the tools can come later.

  ECHO What did you do? (type a short description and hit enter)
    SET /p commitMsg="-> "

    git add .
    git commit -m "Push from script. %commitMsg%"
    git push

  ECHO
  ECHO If this failed, execute a "git pull" first & merge in the changes.
EXIT
