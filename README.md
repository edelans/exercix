## ExerciX 0.4 CouchApp

TO DO 
=====


v1: tout open
-------------

* rajouter enoncés pour chapitres structure... et fonction de var réelle
* ajouter des corrigés

* implémenter les POST vers la db:
  * stat viewcount
  * stat flag
  * request for correction: quand on clique dessus, faire apparaitre une fenetre qui demande l'adresse mail que l'on stocke ensuite dans la db dans le champ "requestcount" qui sera donc une liste d'adresse email ('[edelans@gmail.com, ...]) . -> Ca permet de prévenir les personnes quand on mettra la correction.
* mailto flag@exercix.net
* encapsulation Kanso puis Icenium


Features optionnelles:
* gestion des tags
* gestion des profils utilisateurs 
* sign-up et login -> open id ?
* mathjax svg pour régler lenteur mathjax
* gestion des exos favoris


Version 2: business ready "all you can eat"
-------------------------------------------
* plus grosse banque d'exos
* gestion d'un login d'acces à la base ou non
* sécurité pour protection des exos ?
* protection acces simultané
 

Version 3: business ready "pay as you go"
-----------------------------------------
- gestion des droits d'acces aux exos en fonction du login (backend)
- gestion achat in-app
