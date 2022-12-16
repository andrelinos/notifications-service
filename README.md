<div align="center" id="top">
  <img src="./.github/app.gif" alt="Notifications Service" />

  &#xa0;

  <!-- <a href="https://notificationsservice.netlify.app">Demo</a> -->
</div>

<h1 align="center">Notifications Service</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/andrelinos/notifications-service?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/andrelinos/notifications-service?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andrelinos/notifications-service?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/andrelinos/notifications-service?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/andrelinos/notifications-service?color=56BEB8" /> -->

  <img alt="Github forks" src="https://img.shields.io/github/forks/andrelinos/notifications-service?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/andrelinos/notifications-service?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Notifications Service 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#about">About</a> &#xa0; | &#xa0;
  <a href="#features">Features</a> &#xa0; | &#xa0;
  <a href="#technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#starting">Starting</a> &#xa0; | &#xa0;
  <a href="#license">License</a> &#xa0; | &#xa0;
  <a href="https:andrelino.dev" target="_blank">Author</a>
</p>

<br>

## About ##

This project aims to create and manage the notifications of a system in an organized and well be structured way. Developed during Rocketseat Education's Ignite Lab Classes ([@rocketseat-education](https://github.com/rocketseat-education))

## Features ##

:heavy_check_mark: Create notification;\
:heavy_check_mark: List notification recipient by id 2;\
:heavy_check_mark: Count notifications from recipient id;\
:heavy_check_mark: Get recipient data from notification id;\
:heavy_check_mark: Cancel notification by id;\
:heavy_check_mark: Mark notification as read;\
:heavy_check_mark: Mark notification as unread;\
:heavy_check_mark: Persist information to database;

**Nota:**
Database options to persist data <https://www.prisma.io/docs/concepts/database-connectors#overview>

## Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/)
- [Nest.js](https://nestjs.com/)
- [Jest.js](https://jestjs.io/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## Starting ##

For clone and use this project, you need access [here](README-NESTJS.md) and follow steps

## The server will initialize in the <http://localhost:3000>

## Routes application ##

- Create (POST): <http://localhost:3000/notifications>

```json

{
 "recipientId": "0dc9af21-4915-4908-b8b1-779a7cad9629",
 "content": "Você tem uma nova notificação",
 "category": "social"
}

```

- Count from recipient (GET): <http://localhost:3000/notifications/count/from/0dc9af21-4915-4908-b8b1-779a7cad9629>
- Get content from recipient (GET): <http://localhost:3000/notifications/from/0dc9af21-4915-4908-b8b1-779a7cad9629>
- Cancel notification (PATCH): <http://localhost:3000/notifications/0dc9af21-4915-4908-b8b1-779a7cad9629/cancel>
- Mark as read notification (PATCH): <http://localhost:3000/notifications/0dc9af21-4915-4908-b8b1-779a7cad9629/read>
- Mark as unread notification (PATCH): <http://localhost:3000/notifications/0dc9af21-4915-4908-b8b1-779a7cad9629/unread>

## License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/andrelinos" target="_blank">Andrelino Silva</a>

&#xa0;

<a href="#top">Back to top</a>
