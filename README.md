# Portailweb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Vue d'ensemble / Caractéristiques techniques

Ce cahier des charges décrit le portail web qui devra être utilisable par les différents membres de l’entreprise.

Le portail devra être développé en Angular pour le front et Firebase pour les API, la gestion des documents, des utilisateurs et de la base de données. Le front devra être en material design. Les développeurs seront libre de concevoir le portail comme ils le souhaitent, n’ayant pas de maquette à disposition.

Le code devra être stocké sur github, et utiliser l’intégration continue pour assurer une bonne qualité de code. L’application devra également être déployée sur firebase hosting à chaque commit, via le déploiement continu. Une documentation doit être disponible, indiquant notamment comment installer et mettre en place le portail. Des données doivent déjà être présentes pour pouvoir tester le portail dès son installation.

Le portail devra être utilisable sur un ordinateur et sur un téléphone portable.

## Fonctionnalités

1. Connexion

La première page visible sur le portail doit être la page de connexion. La connexion se fait avec une adresse mail et un mot de passe. Il ne doit pas être possible pour un utilisateur quelconque de créer un compte, les comptes seront créés via la console firebase pour limiter les utilisateurs.

2. Dashboard

Une fois connecté, la page principale doit contenir un résumé des différentes autres fonctionnalités. Toutes les fonctionnalités doivent être accessibles via un menu.

3. Confidentialité

L’application doit gérer trois types d’utilisateurs : les administrateurs, les employés et les clients. 

4. Actualités

Les administrateurs doivent pouvoir ajouter des actualités en HTML. Les employés et les clients doivent pouvoir consulter ces actualités.

5. GED

Les administrateurs et les employés doivent pouvoir ajouter des documents. Tout le monde peut consulter ces documents.

6. Trombinoscope

L’ensemble des utilisateurs doit accéder au détail des utilisateurs. La fiche d’un utilisateur contient son adresse mail, son rôle, son équipe, son numéro de téléphone et éventuellement une photo. Les clients ne peuvent pas modifier leur fiche. Les employés peuvent modifier leur propre fiche, et les administrateurs peuvent modifier les fiches de tout le monde.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


