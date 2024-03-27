1. Pour utiliser l'api il faut tout d'abord avoir postman. Je vous donne des requetes qui fonctionne sur postman mais vous piuvez tous aussi bien utiliser son interface graphique au lieu de rentrer ces ligne de commande  
2. Ensuite entrer dans postman ceci : "curl -X POST -H "Content-Type: application/json" -d '{"username":"quentin","password":"password123"}' http://localhost:3000/auth/login"
Cela vous permettra de d'avoir votre token jwt. 
3. Vous etes maintenant connecter a l'api. Si vous souhaiter recevoir un defis random ecriver ceci en remplacant votre_token_jwt par le token que vous venez de recevoir  
"curl -X GET \ http://localhost:3000/defis/random \ -H 'Authorization: Bearer votre_token_jwt'"
4. Si vous souhaitez avoir plusieurs défis :  
"curl -X GET \ http://localhost:3000/defis/multiple \ -H 'Authorization: Bearer votre_token_jwt'"
