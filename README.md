# Test Technique GoWeb

Réalisation d'un test technique pour la candidature Développeur Front-End chez GoWeb.

## Contexte

Le client Circle Products vous sollicite pour la création d'une application qui permettra à différents
intervenants de gérer plusieurs aspects du magasin via leur ordinateur ou téléphone mobile. La première
fonctionnalité à mettre en place est la gestion du prix des produits proposés en magasin. Le client vous
fournit les maquettes créées par le service créa interne. Vous vous apercevrez qu'il manque les maquettes
mobiles, à vous de proposer un rendu adaptatif cohérent et ergonomique pour chaque page.
Le client n'a pas encore de socle technique front et vous laisse le choix entre l'utilisation de React, VueJs,
Angular pour réaliser ce projet. Vous avez également la possibilité de réaliser le projet en Vanilla JS en
utilisant des modules.

## Consignes

### Home :
- Intégration complète de la maquette (n'oubliez pas le responsive)
- Récupération de la liste des produits via un appel à fakestoreapi
- Mise en place d'une classe produit permettant de gérer la modification du prix d'un produit ainsi que le calcul de la TVA (20%)
- Lorsqu'on clique sur la ligne d'un produit, on navigue vers la page de détails où on affichera
l'ensemble des informations du produit

### Page produit :
- Intégration complète de la maquette (n'oubliez pas le responsive)
- Permettre de mettre à jour le prix d'un produit et de l'envoyer via un appel API lors du clic sur le bouton "Update product" (le bouton ne doit être cliquable que si le prix a été modifié)
- Mettre à jour l'affichage du prix TTC lorsqu'on modifie localement le prix du produit
- Permettre de rafraichir la page produit sans perdre les données

## Langages
- React TypeScript
- Html
- Scss

## Installation

- git clone https://github.com/PierreD59/Test_Technique_GoWeb.git
- cd Test_Technique_GoWeb
- Installer les dépendances avec npm i
- Lancer le serveur json npm run json, il se lancera sur le port 3004.
- Lancer le serveur React avec npm start pour lancer le projet.
- S'il y a des dernières nouveautés : Git pull origin main
