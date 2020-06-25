Angular 10 CLI With NGRX CLI

```
### Installation @ngrx/store && @ngrx/schematics ###

$ npm install @ngrx/{store,effects,entity,store-devtools} --save
$ npm install @ngrx/schematics --save-dev
$ yarn add @ngrx/schematics --dev
$ ng add @ngrx/schematics

#### Inint State Setup ####
$ ng generate @ngrx/schematics:store State --root --module app.module.ts

#### Create Actions ####
$ ng generate action User

#### Create Reducer ####
$ ng generate reducer User --reducers reducers/index.ts

#### Create Selector ####
$ ng generate selector User

#### Create Effect ####
$ ng generate effect User --root -m app.module.ts
```
