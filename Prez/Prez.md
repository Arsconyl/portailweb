---
theme: gaia
class:
    - invert
    - lead
paginate: true
marp: true
backgroundColor: #41444e
color: #fff


---


# **Portail Web**

<!-- **Rockpedia** -->

Arnaud Couderc et Alexandre Ludwig

11 mars 2019

---

# Présentation du portail

Ce portail web permet aux collaborateurs (administrateurs, emplyés, clients) de :
- se connaître par les cartes
- communiquer par email
- de consulter des actualités
- de partager des documents

---

# Écran de connection

L'écran de connection permet de se connecter avec son email et son mot de passe. Il détecte également si l'entrée nést pas bonne (adresse incorrecte, mot de passe pas assez long...)

---

![left width:600px](./Login.png)
![bg right width:600px](./LoginVerif.png)

---


# Process : Jenkins
À chaque modification sur *master* ou *develop*, Jenkins lance automatiquement un build de la branche modifiée.

---

# Surveillance : Spring Actuator

Par un appel à *${API_URL}/actuator*, on obtient cette page :

![bg left width:600px](./actuator.png)

---

# Surveillance : Spring Boot Admin

![bg right width:600px](./sba.png)

- Ajouter des métriques de *actuator/metrics*

- Définir la priorité des loggers (DEBUG < FATAL)
