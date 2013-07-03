ExerciX
=======

[ExerciX](http://www.exercix.net) est une application qui propose aux étudiants de prépas scientifiques une large banque d'exercices de mathématiques avec des corrigés haut de gamme pour préparer leurs concours avec sérénité et flexibilité.

ExerciX est une CouchApp, une application utilisant CouchDB, le HTLM5 et le CSS, sous licence Creative Commons CC-BY-NC-SA :
http://creativecommons.org/licenses/by-nc-sa/2.0/fr/

## Structure
`````
_attachments/   
	| index.html	Index : Page du sommaire, d'accueil. Indépendante de la base de données
	| css/			Style : le CSS est généré à partir de index.less, qui utilise le langage LESS. Latex Webfonts et Font-awesome
	| js/			MathJaX pour générer les maths, Typeahead pour la fonction recherche, et jQuery.
	| apple-icon	Icônes pour les appareils iOS.
lists/
	| list.js  		list.js parcourt la base de données et renvoie l'énoncé et quelques métadonnées sous forme de page HTML.
					Sans filtre, la fonction renvoie tous les exercices.
					On filtre donc avec une clé dans l'URL :
					/exercix/_design/exercix/_list/list/exercix?key="Polynômes"
					En effet, le fichier map.js, dans views/ ordonne la base de données en :
					{doc.chapter (le chapître de l'exercice), doc (toutes les données de l'exercice)}
					La clé est donc bien un chapître.
					Le HTML est généré par Mustache.js à partir du template templates/chapter.html
					La fonction enlève également les éléments LaTeX que MathJax ne traite pas. ( \\ par exemple)
shows/
	| exo.js		exo.js renvoie l'exercice demandé sous forme de HTML, grâce à Mustache (templates/exo.html)
					La sélection est dans l'URL, avec l'ID du document dans la base de données
					/exercix/_design/exercix/_show/exo/b73f93098908c6bb1448004e1501db15
templates/
	| chapter.html 	Le template pour la présentation des exercices du chapître. Les {{}} sont des variables de la base de données.
					Un script permet le filtre des exercices.
	| exo.html		Le template des exercices individuels.
					Fonctions de réponse à la base de données : mise à jour du compteur de vues, du compteur de flag, des requêtes de corrections.
vendor/
					Quelques scripts indispensables aux requêtes avec la base de données
views/
	| map.js		Ordonne la base de données en 
					{doc.chapter (le chapître de l'exercice), doc (toutes les données de l'exercice)}
