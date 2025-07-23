# Tanzsport ESV TypeScript Client (unofficial)

[![NPM Version](https://img.shields.io/npm/v/%40dancesport.one%2Ftanzsport-esv-client)](https://www.npmjs.com/package/@dancesport.one/tanzsport-esv-client)
[![Apache 2.0 License](https://img.shields.io/github/license/dancesport-one/tanzsport-esv-client-typescript)](https://apache.org/licenses/LICENSE-2.0)
[![CodeFactor](https://www.codefactor.io/repository/github/dancesport-one/tanzsport-esv-client-typescript/badge)](https://www.codefactor.io/repository/github/dancesport-one/tanzsport-esv-client-typescript)


This is an unofficial TypeScript client for the public API of the Electronic Sports Administration (Elektronische Sportverwaltung, ESV) of the German DanceSport Federation (Deutscher Tanzsportverband).
Original documentation for the API can be found [here](https://tanzsport.github.io/esv-docs/).

The client is based on [Axios](https://axios-http.com/docs/intro).

**This project is under active development.**
**Breaking changes must be expected for all `0.0.X` versions.**


## Table of Contents

- [Installation and Usage](#installation)
- [License](#license)


## Installation and Usage

You can install this library from the [Python Package Index](https://pypi.org/project/wdsf-api/):

    npm install --save @dancesport.one/tanzsport-esv-client

You can then create a new client and make a request:

```{ts}
import { EsvApi } from "@dancesport.one/tanzsport-esv-client";

const esv = new EsvApi("user", "password", "token");
esv.client.get("");
# ...
```


## License and Disclaimer

The Tanzsport ESV TypeScript Client is open source software provided under the [Apache License 2.0](https://apache.org/licenses/LICENSE-2.0).

The project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the German DanceSport Federation (Deutscher Tanzsportverband),
or any of its subsidiaries or its affiliates.

The names *Deutscher Tanzsportverband*, *Tanzsport Deutschland* as well as related names, marks, emblems and images are registered trademarks of their respective owners.