# Formation REACT

Code formation `pxxRpaW1x`


## Outillages
* Webpack
* Babel


## Création d'une app
```
npx create-react-app app --template=typescript
```

## Utilisation des storybook
Outil permettant de créer une documentation des composants créer dans l'application 
avec les contexte dexecution avec exemple visuel

## Configuration du fichier tsconfig

forcer le typage des variables
```
"noImplicitAny": true,
```

## Composants

* un composant par répertoire
* tous les fichiers du répertoire ont le même prefixe
* un composant commence toujous par une majuscule


## Extensions

### navigateur
outils pour débogguer 
```
react developper tools (disponible sur firefox/chrome)
```

### vscode
* React-Bootstrap Snippets
* ES7+ React/Redux/React-Native snippets
* Simple React Snippets
* Fullstack React/React Native snippets
* Typescript React code snippets
* Simple React Snippets
* React Extension Pack
* React PropTypes Intellisense
* React-Bootstrap Snippets
* Reactjs code snippets
* Simple React Snippets
* Typescript React code snippets
* Fullstack React/React Native snippets
* React Extension Pack







## Component wrapper
``` javascript
<> # Wrapper react permettant d'avoir un noeud principal
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</>
```

## Import de CSS

Permet de dynamiser le nommage des classes de façon unique dans tout un projet

``` javascript
import <nom> from <fichier css>.module.css
exmple  : import style from button.module.css
```

### Copie d'un  object dans un objet
```
... object1, ... objet2
```



### verrouillage du fond ou de la forme d'une variable*

verrouillage de la forme d'une variable
* var.seal => var.isSealed

verrouillage du fond d'une variable
* var.freeze => var.isFreeze


## Cycle de vie 
1. Création 
1. update
1. Delete

## Binding

Afin de rendre les champs modifiables il est nécéssaire d'utiliser l'attibut defaultValue à la place du value

```html
# champs en lecture/ecriture
<input name="titre" id="titre" defaultValue={props.meme.titre}/>
```

```html
# champs en lecture seule
<input name="titre" id="titre" value={props.meme.titre}/>
```




# Biblio

https://npmtrends.com
https://www.w3schools.com/colors/colors_names.asp
https://react-proto.github.io/react-proto/
https://www.npmjs.com/package/generate-react-cli
https://flukeout.github.io/ exercice CSS
https://learngitbranching.js.org/?locale=fr_FR
create-react-app création des fichiers d'environnementchor