1. Pour utiliser l'api il faut tout d'abord un outils de test d'API. 
2. Pour se connecter a l'API et ainsi avoir un token pour utiliser les requetes le demandant :  
URL :  http://localhost:3000/auth/login  
BODY : '{"username":"quentin","password":"password123"}'  
Cela vous permettra de d'avoir votre token jwt.
3. Vous etes maintenant connecter a l'api. Si vous souhaiter recevoir un defis random :  
URL : http://localhost:3000/defis/random   
4. Si vous souhaitez avoir plusieurs défis :  
URL : http://localhost:3000/defis/multiple  
5. Si vous souhaitez ajouter un defis :  
URL :  http://localhost:3000/defis/add  
AUTHORIZATION BEARER : le token que vous venez de recevoir  
BODY : {"titre":"Ce que vous voulez","description":"Ce que vous voulez"}
6. Si vous souhaitez modifier un defis :  
URL : http://localhost:3000/defis/modify/{id_du_defi}  
AUTHORIZATION BEARER : le token que vous venez de recevoir  
BODY : {"titre":"Ce que vous voulez","description":"Ce que vous voulez"}
7. Si vous souhaitez supprimer un defis :  
URL : http://localhost:3000/defis/modify/{id_du_defi}  
AUTHORIZATION BEARER : le token que vous venez de recevoir  
