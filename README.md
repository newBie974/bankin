# bankin-api-revolut

Api revolut-b2b pour bankin. [WIP]
Il s'agit d'un serveur qui permet de récupérer une liste de compte.

Actuellement pour que cela fonctionne il faut:
* Créer un compte [sandbox-revolut](https://sandbox-business.revolut.com/signin)
* Settings > API > Set up API acces [Follow this](https://revolutdev.github.io/business-api/#setting-up-access-to-your-business-account)
* X509 : La publickey se trouve dans le repo config/publickey.cer
* Oauth redirect URI : [revolut-jwt-sandbox.glitch.me](revolut-jwt-sandbox.glitch.me)
* Enable API accès depuis Settings > API, (ps: l'api retourne une page html sur laquelle on demandera au user de se logger et on pourra récupérer ensuite un code pour générer le token.)
* Une fois la step de validation passé importé la privatekey.pem qui se trouve dans config/privatekey.pem
* La clé customer se trouve sur le site dans Settings > API
```json
{"access_token":"oa_sand_l9jRVivEXjleTCzc3CVIF7fZK_srcHiQ_F-vTAJxTVY","token_type":"bearer","expires_in":2400,"refresh_token":"oa_sand_un-5mjAxvhFnXUjtaZhAhZ1Yn7lzZzHoWEBMycoOQnw"}
```
* On obtient alors access_token et le refresh_token
* REMPLACER le REVOLUT_TOKEN dans `.env.dev` de meme pour le refresh_token


# Requirements

* node > v10
* npm

# TODO

* [ ] tests
* [ ] add repository to store token
* [ ] dynamic on token
* [ ] get html page for user

# API 

```
[GET] localhost:3001/accounts/ return {};
```

# Launch

```
npm run start:dev
```
