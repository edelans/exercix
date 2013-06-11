## ExerciX 0.4 CouchApp

TO DO 
=====


v1: tout open
-------------
- [x] rajouter enoncés pour chapitres structure... et fonction de var réelle
- [ ] ajouter des corrigés
- fixer la suppression des '\\' dans les environnement \begin{cases} (géométrie): c'est le meme bug que pour les matrices: il ne faut pas remplacer les '\\' par les balises br à l'interieur de l'environnement.

- [ ] implémenter les POST vers la db:
  - [ ] stat viewcount
  - [ ] stat flag
  - [ ] request for correction: quand on clique dessus, faire apparaitre une fenetre qui demande l'adresse mail que l'on stocke ensuite dans la db dans le champ "requestcount" qui sera donc une liste d'adresse email ('[edelans@gmail.com, ...]) . -> Ca permet de prévenir les personnes quand on mettra la correction.
- [ ] mailto flag@exercix.net
- [ ] encapsulation Kanso puis Icenium


Features optionnelles:
- [ ] créer un filtre par école et par difficulté, et par popularité et par date d'ajout en tete des pages d'exo
- [ ] gestion des tags
- [ ] gestion des profils utilisateurs 
- [ ] sign-up et login -> open id ?
- [ ] mathjax svg pour régler lenteur mathjax
- [ ] gestion des exos favoris
- [ ] créer un bouton "zen mode" ou "distraction free" : une fois activé par l'utilisateur, celui-ci ne peut plus sortir de l'application avant la fin de la durée demandée. Je sais pas si c'est faisable (ça doit etre relou pour gérer les demandes d'acces).


Version 2: business ready "all you can eat"
-------------------------------------------
- [ ] plus grosse banque d'exos
- [ ] gestion d'un login d'acces à la base ou non
- [ ] sécurité pour protection des exos ?
- [ ] protection acces simultané
 

Version 3: business ready "pay as you go"
-----------------------------------------
- [ ] gestion des droits d'acces aux exos en fonction du login (backend)
- [ ] gestion achat in-app
