1. Pour utiliser l'api il faut tout d'abord un outils de test d'API. 
2. Pour se connecter a l'API et ainsi avoir un token pour utiliser les requetes:  
URL :  http://localhost:3000/auth/login
BODY : '{"username":"quentin","password":"password123"}'
Cela vous permettra de d'avoir votre token jwt. 
4. Vous etes maintenant connecter a l'api. Si vous souhaiter recevoir un defis random ecriver ceci en remplacant votre_token_jwt par le token que vous venez de recevoir  
"curl -X GET \ http://localhost:3000/defis/random \ -H 'Authorization: Bearer votre_token_jwt'"
5. Si vous souhaitez avoir plusieurs défis :  
"curl -X GET \ http://localhost:3000/defis/multiple \ -H 'Authorization: Bearer votre_token_jwt'"
6. Si vous souhaitez ajouter un defis :
"curl -X PUT \ http://localhost:3000/defis/add \ -H 
