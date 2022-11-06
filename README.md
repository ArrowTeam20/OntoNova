# ontonova
In a world where humans are facing a lot of difficulties, efficient solutions to solve them are needed. That's what we call "INVENTIONS". However, innovators are struggling to implement their ideas. That's where "OntoNova" came to help inventors evaluating their ideas and take them from the idea to the project stage. 

Our idea is to make it easy for inventors evaluating their ideas with the help of the right experts in all the domains that we can imagine. For that, using NLP(is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data. -wikipedia-), the ideas are treated automaticly to extract key words that help us to detect the domains or expertises needed, Our main contribution appears in creating a knowledge graph or what we call ontologies (ontologies are a representation of a real world using concepts,relations ... etc it modelise a domain of knowledge). Using this ontology, we can link between keywords extracted from inventor's description and a domain of expertise in order to mutch them with experts profiles.

Furthermore,OntoNova uses two different ways to collect experts profiles: a simple registration of the expert himself via a form and using web scrabing(it's a form of data mining that uses scripts or programs to collect information from across the Internet) to get the experts from LinkedIn plateform so that we can provide more choices to the inventor to find the right experts and of course extends our experts profile database. 

Once the inventor chooses the BDO or the experts, a notification will be sent with a short description of the idea. The expert will be able to refuse collaboration, schedule meeting for more information or just accept it. In this case, he can schedule a meeting, elaborate roadmap for the project with milestones, create a product backlog and all what an agile project needs. 

The BDO selected also can refuse or accept the projects, after that, it can assign it's own experts to collaborate with the inventor.

All in all, we propose an web application using 
1-python for data extraction, data preprossecing (NLP) and ontology generation
2-Neo4j database graphe for loading ontology
3-nuxtjs to build front application
4-a relational database it could be : oracle,sql server or any other database to store website information such as : inventors, experts profiles etc.



## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
