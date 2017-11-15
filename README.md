# `mvn-spring-boot-thymeleaf-nodejs`

[![License][license-badge-image]][license-url]
[![Known Vulnerabilities](https://snyk.io/test/github/gregswindle/mvn-spring-boot-thymeleaf-nodejs/badge.svg?style=flat-square)](https://snyk.io/test/github/gregswindle/mvn-spring-boot-thymeleaf-nodejs)
[![Dependency Status](https://dependencyci.com/github/gregswindle/mvn-spring-boot-thymeleaf-nodejs/badge?style=flat-square)](https://dependencyci.com/github/gregswindle/mvn-spring-boot-thymeleaf-nodejs)
[![Greenkeeper badge](https://badges.greenkeeper.io/gregswindle/mvn-spring-boot-thymeleaf-nodejs.svg?style=flat-square)](https://greenkeeper.io/)
<br>
[![Appveyor Status][appveyor-image]][appveyor-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]


> ![Thymeleaf logo](docs/img/thymeleaf-logo-30.png) Starter project for designing HTML templates with Spring Boot, Thymeleaf, and Node.js tooling.

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Overview](#1-overview)
- [2. Getting started](#2-getting-started)
  * [2.1. Prerequisite software](#21-prerequisite-software)
  * [2.2. Installation](#22-installation)
- [3. Configuration](#3-configuration)
- [4. Usage](#4-usage)
  * [4.1. Launch the site (locally)](#41-launch-the-site-locally)
  * [4.2. Build the site](#42-build-the-site)
  * [4.3. Execute Java and JavaScript unit tests](#43-execute-java-and-javascript-unit-tests)
  * [4.4. List all build dependencies](#44-list-all-build-dependencies)
  * [4.5. Generate Javadocs](#45-generate-javadocs)
  * [4.6. Generate project reports](#46-generate-project-reports)
- [5. Semantic version and `CHANGELOG`](#5-semantic-version-and-changelog)
- [6. Contributing](#6-contributing)
- [7. License](#7-license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Overview

`mvn-spring-boot-thymeleaf-nodejs` uses the Spring Project [`mvn-spring-boot-thymeleaf-nodejs`][mvn-spring-boot-thymeleaf-nodejs-mvn-repo-url] with the [`exec-maven-plugin`][exec-maven-plugin-url] in order to execute [`npm-run-scripts`][npm-run-script-url] during [Maven's build lifecycle][maven-build-lifecycle-url].

## 2. Getting started

### 2.1. Prerequisite software

`mvn-spring-boot-thymeleaf-nodejs` is written in Java and JavaScript, both of which must be installed prior to use. Java and JavaScript require npm and Maven respectively, which are used for installing dependencies and executing build, test, and deploy tasks.

| Dependency              | Required                                           | OS              | Notes                                                                                                                                                                     |
|-------------------------|----------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Java JDK 8 (or greater) | **Yes**.                                               | All             | Required for all software products that depend on the Spring Framework.                                                                                                   |
| Maven                   | **No**. This product is bundled with `mvnw`.                                              | All             | A Java build, test, and deploy management framework. Maven also manages dependencies.                                                                                     |
| Node.js (includes npm)  | **Yes**. If you cannot install `nvm`, install Node.js. | All             | Required for JavaScript build, test, and deploy automation.                                                                                                               |
| `nvm`                   | **No**, but _highly_ recommended.                      | macOS and Linux | Node Version Manager allows you to install and switch among multiple versions of Node.js (and npm) via the CLI. Most cloud-based CI services (e.g., Travis CI) use `nvm`. |

### 2.2. Installation

Open a Terminal and run:

```bash
$ git clone https://github.com/gregswindle/mvn-spring-boot-thymeleaf-nodejs.git
```

Go into the installation directory:

```bash
$ cd mvn-spring-boot-thymeleaf-nodejs
```

Install all Java and JavaScript dependencies:

```bash
$ ./mvnw clean install -DskipTests
```

## 3. Configuration

`mvn-spring-boot-thymeleaf-nodejs` uses several CI-services to automate build and test execution. All are optional, but if you choose to use them, you'll need to modify your `pom.xml` and `package.json` manifest files.

| Service      | Category         | Required    | Notes                                                                                                                                                                                                      |
|--------------|------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Appveyor     | CI               | **No**      | Build and test on Windows servers.                                                                                                                                                                         |
| Coveralls    | Test             | **No**      | Tracks test coverage over time.                                                                                                                                                                            |
| DependencyCI | Dependency drift | **No**      | Tracks Java and JavaScript dependencies for updates.                                                                                                                                                       |
| SonarCloud   | Code quality     | **No**      | "All-in-one" code quality inspection service. We use SonarCloud's measure badges in our PULL_REQUEST_TEMPLATE to quickly assess the quality of PRs.                                                        |
| Snyk         | Security         | **No**      | This is enabled by default. To disable, use the flag `--DskipSnykScan`. To use Snyk, you'll need to follow these [Snyk installation instructions](https://github.com/snyk/snyk-maven-plugin#installation). |
| Travis CI    | CI               | **No**      | Build and test on Linux and macOS.                                                                                                                                                                         |


## 4. Usage

### 4.1. Launch the site (locally)

```bash
$ ./mvnw spring-boot:run
```

> **:bulb: TIP:** Open http://localhost:8080/hello?name=Thymeleaf%20professional in a web browser to view the web site.

### 4.2. Build the site

```bash
$ ./mvnw package
```

### 4.3. Execute Java and JavaScript unit tests

```bash
$ ./mvnw test
```

### 4.4. List all build dependencies

```bash
$ ./mvnw dependency:tree
```

### 4.5. Generate Javadocs

```bash
$ ./mvnw javadoc:javadoc
```

> **:bulb: Tip:** Open `./target/apidocs/index.html` in a web browser to view the Javadocs.


### 4.6. Generate project reports

```bash
$ ./mvnw site
```

> **:bulb: Tip:** Open `./target/site/index.html` in a web browser to view the Project Information reports.

<!--
 Background

_If `mvn-spring-boot-thymeleaf-nodejs` depends on important but not widely known abstractions or other ecosystems, explain them here. This is also a good place to explain the product's motivation if similar products already exist._

-->
## 5. Semantic version and `CHANGELOG`

The latest version of `mvn-spring-boot-thymeleaf-nodejs` is `0.0.1-SNAPSHOT`. View the [`CHANGELOG`][changelog-url] for details.

## 6. Contributing
> [![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url]
>
> We welcome contributors with [Pull Requests][prs-welcome-url]!

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

  1. Read the [Code of Conduct][code-of-conduct-url].
  1. Create an issue to discuss the proposed change and ensure that it is likely to be merged:
      * [Report a defect][issues-new-defect-url] (aka "bug")
      * [Request a new feature][issues-new-feat-url]
  1. Follow [Contributing to `mvn-spring-boot-thymeleaf-nodejs`][contributing-url]'s coding conventions and Git workflow if you're willing and able to program (or want to learn how).

## 7. License

[MIT][license-url] © [Greg Swindle][author-url].




<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/gregswindle/mvn-spring-boot-thymeleaf-nodejs?retina=true&svg=true
[appveyor-url]: https://ci.appveyor.com/api/projects/status/github/gregswindle/mvn-spring-boot-thymeleaf-nodejs?retina=true&svg=true
[author-url]: https://github.com/gregswindle
[changelog-url]: ./CHANGELOG.md
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[contributing-url]: ./CONTRIBUTING.md
[coveralls-image]: https://img.shields.io/coveralls/gregswindle/mvn-spring-boot-thymeleaf-nodejs/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/gregswindle/mvn-spring-boot-thymeleaf-nodejs
[depstat-dev-image]: https://david-dm.org/gregswindle/mvn-spring-boot-thymeleaf-nodejs/dev-status.svg?style=flat-square
[depstat-dev-url]: https://david-dm.org/gregswindle/mvn-spring-boot-thymeleaf-nodejs#info=devDependencies
[depstat-image]: https://david-dm.org/gregswindle/mvn-spring-boot-thymeleaf-nodejs.svg?style=flat-square
[depstat-url]: https://david-dm.org/gregswindle/mvn-spring-boot-thymeleaf-nodejs
[exec-maven-plugin-url]: http://www.mojohaus.org/exec-maven-plugin/index.html
[issues-new-defect-url]: /gregswindle/mvn-spring-boot-thymeleaf-nodejs/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: /gregswindle/mvn-spring-boot-thymeleaf-nodejs/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[license-badge-image]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[license-url]: ./LICENSE
[license-url]: ./LICENSE
[maven-build-lifecycle-url]: https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html
[nodejs-url]: https://nodejs.org
[npm-image]: https://img.shields.io/npm/v/mvn-spring-boot-thymeleaf-nodejs.svg?style=flat-square
[npm-run-script-url]: https://docs.npmjs.com/cli/run-script
[npm-script-url]: https://docs.npmjs.com/misc/scripts
[npm-url]: https://npmjs.org/package/mvn-spring-boot-thymeleaf-nodejs
[npmjs-url]: https://www.npmjs.com/
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[mvn-spring-boot-thymeleaf-nodejs-mvn-repo-url]: https://mvnrepository.com/artifact/org.springframework.boot/mvn-spring-boot-thymeleaf-nodejs
[travis-image]: https://img.shields.io/travis/gregswindle/mvn-spring-boot-thymeleaf-nodejs/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/gregswindle/mvn-spring-boot-thymeleaf-nodejs
