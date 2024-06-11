<h1 align="center">
  Swagger UI
</h1>

<p align="center">
  <a href="https://github.com/agoralabs-sh/swagger-ui/releases/latest">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/agoralabs-sh/swagger-ui?&logo=github">
  </a>
  <a href="https://github.com/agoralabs-sh/swagger-ui/releases/latest">
    <img alt="GitHub Release Date - Published At" src="https://img.shields.io/github/release-date/agoralabs-sh/swagger-ui?logo=github">
  </a>
</p>

<p align="center">
  <a href="https://github.com/agoralabs-sh/swagger-ui/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/agoralabs-sh/swagger-ui">
  </a>
</p>

<p align="center">
  A Swagger UI implementation that can deployed as a static site and parses a remote Swagger JSON.
</p>

### Table of contents

* [1. Overview](#-1-overview)
* [2. Development](#-2-development)
  * [2.1. Requirements](#21-requirements)
  * [2.2. Setup](#22-setup)
  * [2.3. Running locally](#23-running-locally)
* [3. Appendix](#-3-appendix)
  * [3.1. Useful Commands](#31-useful-commands)
* [4. How To Contribute](#-4-how-to-contribute)
* [5. License](#-5-license)

## 🔭 1. Overview

This is a simple frontend build wraps around [Swagger UI][swagger-ui] using React.

It takes a `SWAGGER_SPEC_URL` environment variable that should point to a valid Swagger JSON.

## 🛠 2. Development

### 2.1. Requirements

* Install [Node v18.20.3+][node]
* Install [Yarn v1.22.5+][yarn]

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Setup

1. Install the dependencies:
```bash
$ yarn install
```

<sup>[Back to top ^][table-of-contents]</sup>

### 2.3. Running locally

1. Run:
```bash
$ yarn start
```

2. Open a browser and go to [http://localhost:8080](http://localhost:8080).

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 3. Appendix

### 3.1. Useful Commands

| Command          | Description                                                                                |
|------------------|--------------------------------------------------------------------------------------------|
| `yarn build`     | Builds the source code into the `dist/` directory.                                         |
| `yarn clean`     | Deletes the `dist/` directory.                                                             |
| `yarn lint`      | Runs the linter on `.js(x)` and `.ts(x)` files.                                            |
| `yarn prettier`  | Runs the prettier on `.js(x)` and `.ts(x)` files.                                          |
| `yarn start`     | Builds and serves a development version at [http://localhost:8080](http://localhost:8080). |
| `yarn typecheck` | Runs a quick type-check on the `.ts(x)` files in the source.                               |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 4. How To Contribute

Please read the [**Contributing Guide**][contribute] to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 5. License

Please refer to the [LICENSE][license] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- Links -->
[contribute]: ./CONTRIBUTING.md
[license]: ./LICENSE
[node]: https://nodejs.org/en/
[swagger-ui]: https://github.com/swagger-api/swagger-ui
[table-of-contents]: #table-of-contents
[yarn]: https://yarnpkg.com/
