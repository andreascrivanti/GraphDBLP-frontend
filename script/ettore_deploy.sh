ng build
zip -r jobo-ui.zip ./dist/jobo-ui 
scp -i /home/ettore/openVPN/aws-tabulaex-user.pem jobo-ui.zip tabulaex@172.31.0.136:/home/tabulaex/deploy_jobo-ui
rm -r jobo-ui.zip
#ssh -i /home/ettore/openVPN/aws-tabulaex-user.pem tabulaex@172.31.0.136 'cd deploy_jobo-ui; ./deploy_jobo-ui.sh'
echo "done";