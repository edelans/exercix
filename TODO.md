## ExerciX 0.4 CouchApp

TO DO 
=====


v1: tout open
-------------
- [ ] ajouter des corrigés

- [ ] commenter le code
- [ ] encapsulation Kanso puis Icenium
- [ ] ajouter un bouton "Montrer un indice", du meme type que le bouton "Montrer la correction", s'il n'y a pas d'indice, incrémenter un compteur indicecount et afficher "désolé, il n'y a pas encore d'indice pour cet exercice". -> Ca permet de faire des stats sur les exos qui auront besoin d'un indice! Btw: j'ai ajouté des indices pour les exos ou on a des corrigés.
- [ ] corriger la faute d'orthographe sur le bouton "châpitre" dans les pages de corrigés, en "chapitre": pas d'accent circonflexe.
- [ ] pb du \textbf à corriger (rajouter une regex ?) -> cf exo #2 Polynomes
- [ ] changer les boutons -> utiliser twitter Bootstrap ? http://twitter.github.io/bootstrap/base-css.html#buttons
      [J] Je ne suis pas trop d'accord pour BootStrap, on va créer un design de bouton     
      [Ed] ok
- Ajouter une regex pour les balises "\paragraph" à remplacer par une balise de titre html (h4 ?). C'est pour hierarchiser la réponse quand il y a plusieurs question dans l'enoncé. Ces balises latex seront forcément sour la forme \paragraph{int}. Ex ici: https://exercix.iriscouch.com:6984/exercix/_design/exercix/_show/exo/de5372aa9c1eb8cadcbbe406e301007a

Features optionnelles:
- [ ] créer un filtre par école et par difficulté, et par popularité et par date d'ajout en tete des pages d'exo
- [ ] gestion des profils utilisateurs 
- [ ] sign-up et login -> open id ?
- [ ] mathjax svg pour régler lenteur mathjax
- [ ] gestion des exos favoris
- [ ] créer un bouton "zen mode" ou "distraction free" : une fois activé par l'utilisateur, si l'utilisateur veux quitter l'appli on lui envoie des alertes piochées aleatoirement (ou en fonction du temps passé sur l'appli: si le user quitte au bout de 5 min, on le trash un peu) dans un tableau de  messages marrants "ne fais pas ça, tu as à peine commencé!" "tu sais bien que tu ne devrais pas te disperser !" etc.  

### Done
- [x] pour les filtres, je propose de garder le meme code couleur pour les écoles et la difficulté: je trouve le rouge vif des etoiles un peu trop agressif
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
- [x] déplacer le flag à la fin de la correction des exos quand il y a une correction, remplacer l'icone du drapeau par la phrase: "Une erreur ? Une coquclarté ?" je propose que le texte apparaisse en grisé pour que ce ça ressorte discretement par rapport à la correction, quand il est cliqué, on incrémente le flagcount, et on ouvre un mailto, vers "flag@exercille ? Un manque de ix.net", en objet "J'aimerais améliorer la correction de l'exercice [ref de l'exo]", et en corps de message "Expliquez nous ce qui ne va pas".
- [x] pour les compteurs à incrémenter (viewcount, requestforcor, et flag), au lieu d'avoir des entiers, je propose de mettre en place des taleaux de timestamps: ya beaucoup plus d'info et ca permettra à terme de mesurer l'impact de la modification d'un corrigé 
- [x] créer des filtres par difficulté
- [x] virer le icon-info-sign à coté de "Correction" (titre de la partie corrigé).
- [x] remplacer "Pas encore de solution rédigée dans la DB." par "La solution est en cours de rédaction!" et "Laissez votre adresse mail, on vous préviendra dès qu'il y a du nouveau :" par directement le cadre de saisi d'email avec un bouton "Prévenez moi dès qu'elle est en ligne !" puis à la ligne en dessous la phrase: "Nous traitons en priorité les corrigés les plus demandés" en italique.
- [x] rajouter un script de test de l'adresse mail: quand elle n'est pas "valide", ne pas incrémenter le requestforcor, afficher une erreur et faire re-remplir.
- [x] [Ed] je propose de virer la date dans le bandeau rouge vif des exos: ça n'apporte pas grand chose à l'utilisateur (en revanche ça pourra nous servir à nous du coté administration de la banque d'exos quand on aura bcp d'exos).
      [J] Le bandeau est important pour l'esthétique de la page : il permet d'avoir un peu d'équilibre dans les couleurs. Il n'apporte pas beaucoup d'infos, mais c'est une mauvaise idée pour moi de l'enveler.
      [Ed] tout a fait d'accord -> on garde le bandeau avec les étoiles, on vire la date. 
- [x] gestion des tags
- [x] v2 de la page de présentation
- [x] ajouter license CC. Je propose d'attendre encore un peu que le code et le readme soient plus propre avant de basculer sur de l'open.

Améliorer la vitesse d'affichage:
- [x] C'est possible d'afficher un petit sablier tant que MathJax n'a pas fini de charger ?
- [x] Charger le MathJax en deux fois: d'abord l'énoncé, puis la correction. 

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
