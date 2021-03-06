<div> 
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="160" alt="Nest Logo" /></a>
  <p><a href="https://nestjs.com/" target="_blank">NestJS </a>a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <p>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
    <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
    <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
</p>
</div>
<br>

# TypeScript
[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript.

[![GitHub Actions CI](https://github.com/microsoft/TypeScript/workflows/CI/badge.svg)](https://github.com/microsoft/TypeScript/actions?query=workflow%3ACI)
[![Devops Build Status](https://dev.azure.com/typescript/TypeScript/_apis/build/status/Typescript/node10)](https://dev.azure.com/typescript/TypeScript/_build?definitionId=7)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)

<br>

# Jest
<div>
 <p><a href="https://github.com/facebook/jest/tree/main/website/static/img" target="_blank">Jest</a> is Delightful JavaScript Testing</p>
  <p>
  <a href="https://badge.fury.io/js/jest"><img src="https://badge.fury.io/js/jest.svg" alt="npm version"></a>
  <a href="https://github.com/facebook/jest/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Jest is released under the MIT license." />
</a>
</p>
</div>

<br>
<br>
<div>
  <a href="http://typeorm.io/"><img src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png" width="160"></a>
  <p><a href="https://typeorm.io/#/" target="_blank">TypeORM</a> is an ORM that can run in NodeJS <a href="http://nodejs.org" target="_blank">Node.js</a>. TypeORM is highly influenced by other ORMs, such as Hibernate</p>
  <p>
    <a href="https://app.circleci.com/pipelines/github/typeorm/typeorm"><img src="https://circleci.com/gh/typeorm/typeorm/tree/master.svg?style=shield"></a>
    <a href="https://badge.fury.io/js/typeorm"><img src="https://badge.fury.io/js/typeorm.svg"></a>
    <a href="https://codecov.io/gh/typeorm/typeorm"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/typeorm/typeorm.svg"></a>
    <a href="https://join.slack.com/t/typeorm/shared_invite/zt-uu12ljeb-OH_0086I379fUDApYJHNuw"><img src="https://img.shields.io/badge/chat-on%20slack-blue.svg"></a>
  </p>
</div>
<br>
<br>
<div>
  <a href="http://www.passportjs.org/"><img src="https://www.passportjs.org/images/PassportJS.svg" width="160"></a>
  <p><a href="http://www.passportjs.org/" target="_blank">Passport</a> is authentication middleware for <a href="http://nodejs.org" target="_blank">Node.js</a></p>
  <p>
    <a href="https://coveralls.io/github/jaredhanson/passport"><img alt="Codecov" src="https://coveralls.io/repos/jaredhanson/passport/badge.svg?branch=master"></a>
    <a href="https://travis-ci.org/github/jaredhanson/passport"><img src="https://travis-ci.org/jaredhanson/passport.svg?branch=master"></a>
  </p>
  </p>
</div>
<br>

# Swagger UI Express
This module allows you to serve auto-generated [swagger-ui](https://swagger.io/tools/swagger-ui/) generated API docs from express, based on a `swagger.json` file.

![Statements](https://img.shields.io/badge/Coverage-89.87%25-yellow.svg)
![Branches](https://img.shields.io/badge/Coverage-78.57%25-red.svg)
![Functions](https://img.shields.io/badge/Coverage-91.67%25-brightgreen.svg)
![Lines](https://img.shields.io/badge/Coverage-89.74%25-yellow.svg)

# Instru????es para executar localmente a Api
1- Subir container de banco de dados SQL Server 2019 Express

```bash
# Navegar at?? a pasta "project-nestjs/bin/mssql/" onde cont??m o docker-compose.yaml
$ cd /project-nestjs/bin/mssql/
```

```bash
# Criar container de banco
$ docker-compose up -d

2- Criar o banco de dados "apidb"

# Seguran??a da Api
1- A Api utiliza o framework Passport de segura??a, sendo necess??rio o envio das credenciais username e password no body da requisi????o
e a resposta ?? um JWT.
  - http://localhost:3000/api/auth/token

# Acessar a documenta????o da Api localmente(OpenAPI)
1- http://localhost:3000/api


## Description

Api de solu????o Credit as Service.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
