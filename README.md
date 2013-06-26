## ExerciX 0.4 CouchApp

TO DO 
=====


v1: tout open
-------------
- [ ] ajouter des corrigés

- [ ] encapsulation Kanso puis Icenium
- [ ] pb du \textbf à corriger (rajouter une regex ?) -> cf exo #2 Polynomes
- [ ] créer des filtres par difficulté
- [ ] déplacer le flag à la fin de la correction des exos quand il y a une correction, remplacer l'icone du drapeau par la phrase: "Une erreur ? Une coquclarté ?" je propose que le texte apparaisse en grisé pour que ce ça ressorte discretement par rapport à la correction, quand il est cliqué, on incrémente le flagcount, et on ouvre un mailto, vers "flag@exercille ? Un manque de ix.net", en objet "J'aimerais améliorer la correction de l'exercice [ref de l'exo]", et en corps de message "Expliquez nous ce qui ne va pas".
- [ ] pour les compteurs à incrémenter (viewcount, requestforcor, et flag), au lieu d'avoir des entiers, je propose de mettre en place des taleaux de timestamps: ya beaucoup plus d'info et ca permettra à terme de mesurer l'impact de la modification d'un corrigé 
- [ ] commenter le code
- [ ] ajouter license CC. Je propose d'attendre encore un peu que le code et le readme soient plus propre avant de basculer sur de l'open.

Features optionnelles:
- [ ] créer un filtre par école et par difficulté, et par popularité et par date d'ajout en tete des pages d'exo
- [ ] gestion des tags
- [ ] gestion des profils utilisateurs 
- [ ] sign-up et login -> open id ?
- [ ] mathjax svg pour régler lenteur mathjax
- [ ] gestion des exos favoris
- [ ] créer un bouton "zen mode" ou "distraction free" : une fois activé par l'utilisateur, si l'utilisateur veux quitter l'appli on lui envoie des alertes piochées aleatoirement (ou en fonction du temps passé sur l'appli: si le user quitte au bout de 5 min, on le trash un peu) dans un tableau de  messages marrants "ne fais pas ça, tu as à peine commencé!" "tu sais bien que tu ne devrais pas te disperser !" etc.  

### Done
- [x] implémenter les POST vers la db:
  - [x] stat viewcount
  - [x] stat flag
  - [x] request for correction: quand on clique dessus, faire apparaitre une fenetre qui demande l'adresse mail que l'on stocke ensuite dans la db dans le champ "requestcount" qui sera donc une liste d'adresse email: [edelans@gmail.com, ...]  -> Ca permet de prévenir les personnes quand on mettra la correction.
- [x] fixer la suppression des '\\' dans les environnement \begin{cases} (géométrie): c'est le meme bug que pour les matrices: il ne faut pas remplacer les '\\' par les balises br à l'interieur de l'environnement.
- [x] rajouter enoncés pour chapitres structure... et fonction de var réelle
- [x] mettre les boutons en francais:
  - index -> "retour au sommaire"
  - refresh -> "rafraichir"
  - chapter -> "retour au châpitre"
- [x] corriger le console.log( ... viewcount)
- [x] commit pour les filtres par ecole
- [x] corriger bug affichage étoiles
- [x] pour plus de clarté pour le niveau de difficulté, on peut systématiquement mettre 3 étoiles, le niveau etant donné par des étoiles pleines, et on complete par des étoiles évidées pour arriver à 3 étoiles. 



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
