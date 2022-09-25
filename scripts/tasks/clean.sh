gatsby clean

if [ -d lib ]
then
  echo 'info Deleting lib'
  rm -rf lib &&  echo 'info Successfully deleted lib'
fi
