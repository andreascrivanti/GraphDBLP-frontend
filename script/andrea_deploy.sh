ng build
zip -r graphdblp-gui.zip ./dist/graphdblp-gui 
sshpass -f script/andrea.conf scp graphdblp-gui.zip scrivanti@149.132.150.72:/opt/graphdblp-gui
rm -r graphdblp-gui.zip
echo "done; execute script on server to complete deploy.";