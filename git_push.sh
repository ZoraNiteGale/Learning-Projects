echo "What did you do? (type a short description and hit enter)"
echo -n "-> "
  read commitMsg
  git add .
  git commit -m "Pushing From Script. $commitMsg"
  git push
echo 
echo "If the push failed, run 'git pull' and merge changes."
