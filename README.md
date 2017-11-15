# `spring-boot-starter-thymeleaf`

[![License][license-badge-image]][license-url]
[![Known Vulnerabilities](https://snyk.io/test/github/gregswindle/spring-boot-starter-thymeleaf/badge.svg?targetFile=pom.xml)](https://snyk.io/test/github/gregswindle/spring-boot-starter-thymeleaf)
[![Java Dependency Status](https://dependencyci.com/github/gregswindle/spring-boot-starter-thymeleaf/badge)](https://dependencyci.com/github/gregswindle/spring-boot-starter-thymeleaf)
[![Node.js Dependency Status][depstat-image]][depstat-url]
[![Node.js DevDependency Status][depstat-dev-image]][depstat-dev-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/gregswindle/spring-boot-starter-thymeleaf.svg)](https://greenkeeper.io/)
<br>
[![Appveyor Status][appveyor-image]][appveyor-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]


> Starter project for designing HTML templates with Spring Boot, Thymeleaf, and Node.js tooling.

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Overview](#overview)
- [Getting started](#getting-started)
  * [Prerequisite software](#prerequisite-software)
  * [Installation](#installation)
- [Configuration](#configuration)
  * [CI-service accounts](#ci-service-accounts)
- [Usage](#usage)
  * [Build the site](#build-the-site)
  * [Generate project reports](#generate-project-reports)
- [Background](#background)
- [Semantic version and `CHANGELOG`](#semantic-version-and-changelog)
- [Contributing to `spring-boot-starter-thymeleaf`](#contributing-to-spring-boot-starter-thymeleaf)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## Overview

`spring-boot-starter-thymeleaf` uses the Spring Project [`spring-boot-starter-thymeleaf`][spring-boot-starter-thymeleaf-mvn-repo-url] with the [`exec-maven-plugin`][exec-maven-plugin-url] in order to execute [`npm-run-scripts`][npm-run-script-url] during [Maven's build lifecycle][maven-build-lifecycle-url].

## Getting started

### Prerequisite software

`spring-boot-starter-thymeleaf` is written in Java and JavaScript, both of which must be installed prior to use. Java and JavaScript require npm and Maven respectively, which are used for installing dependencies and executing build, test, and deploy tasks.

| Dependency              | Required                                           | OS              | Notes                                                                                                                                                                     |
|-------------------------|----------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Java JDK 8 (or greater) | **Yes**.                                               | All             | Required for all software products that depend on the Spring Framework.                                                                                                   |
| Maven                   | **No**. This product is bundled with `mvnw`.                                              | All             | A Java build, test, and deploy management framework. Maven also manages dependencies.                                                                                     |
| Node.js (includes npm)  | **Yes**. If you cannot install `nvm`, install Node.js. | All             | Required for JavaScript build, test, and deploy automation.                                                                                                               |
| `nvm`                   | **No**, but _highly_ recommended.                      | macOS and Linux | Node Version Manager allows you to install and switch among multiple versions of Node.js (and npm) via the CLI. Most cloud-based CI services (e.g., Travis CI) use `nvm`. |

### Installation

Open a Terminal and run:

```bash
$ git clone https://github.com/gregswindle/spring-boot-starter-thymeleaf.git
```

Go into the installation directory:

```bash
$ cd spring-boot-starter-thymeleaf
```

Install all Java and JavaScript dependencies:

```bash
$ ./mvnw clean install -DskipTests
```

## Configuration

`spring-boot-starter-thymeleaf` uses several CI-services to automate build and test execution. All are optional, but if you choose to use them, you'll need to modify your `pom.xml` and `package.json` manifest files.

### CI-service accounts

| Service      | Category         | Required    | Notes                                                                                                                                                                                                      |
|--------------|------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Appveyor     | CI               | **No**      | Build and test on Windows servers.                                                                                                                                                                         |
| Coveralls    | Test             | **No**      | Tracks test coverage over time.                                                                                                                                                                            |
| DependencyCI | Dependency drift | **No**      | Tracks Java and JavaScript dependencies for updates.                                                                                                                                                       |
| SonarCloud   | Code quality     | **No**      | "All-in-one" code quality inspection service. We use SonarCloud's measure badges in our PULL_REQUEST_TEMPLATE to quickly assess the quality of PRs.                                                        |
| Snyk         | Security         | **No**      | This is enabled by default. To disable, use the flag `--DskipSnykScan`. To use Snyk, you'll need to follow these [Snyk installation instructions](https://github.com/snyk/snyk-maven-plugin#installation). |
| Travis CI    | CI               | **No**      | Build and test on Linux and macOS.                                                                                                                                                                         |


## Usage

### Launch the site (locally)

```bash
$ ./mvnw spring-boot:run
```

> **:bulb: TIP:** Open http://localhost:8080/hello?name=Thymeleaf%20professional in a web browser to view the web site.

### Build the site

```bash
$ ./mvnw package
```

### Execute Java and JavaScript unit tests

```bash
$ ./mvnw test
```

### List all build dependencies

```bash
$ ./mvnw dependency:tree
```

### Generate Javadocs

```bash
$ ./mvnw javadoc:javadoc
```

> **:bulb: Tip:** Open `./target/apidocs/index.html` in a web browser to view the Javadocs.


### Generate project reports

```bash
$ ./mvnw site
```

> **:bulb: Tip:** Open `./target/site/index.html` in a web browser to view the Project Information reports.


## Background

_If `spring-boot-starter-thymeleaf` depends on important but not widely known abstractions or other ecosystems, explain them here. This is also a good place to explain the product's motivation if similar products already exist._

## Semantic version and `CHANGELOG`

The latest version of `spring-boot-starter-thymeleaf` is `0.0.1-SNAPSHOT`. View the [`CHANGELOG`][changelog-url] for details.

## Contributing to `spring-boot-starter-thymeleaf`
> [![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url]
>
> We welcome contributors with [Pull Requests][prs-welcome-url]!

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

  1. Read the [Code of Conduct][code-of-conduct-url].
  1. Create an issue to discuss the proposed change and ensure that it is likely to be merged:
      * [Report a defect][issues-new-defect-url] (aka "bug")
      * [Request a new feature][issues-new-feat-url]
  1. Follow [Contributing to `spring-boot-starter-thymeleaf`][contributing-url]'s coding conventions and Git workflow if you're willing and able to program (or want to learn how).

## License

[MIT][license-url] © [Greg Swindle][author-url].




<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/gregswindle/spring-boot-starter-thymeleaf?retina=true&svg=true
[appveyor-url]: https://ci.appveyor.com/api/projects/status/github/gregswindle/spring-boot-starter-thymeleaf?retina=true&svg=true
[author-url]: https://github.com/gregswindle
[changelog-url]: ./CHANGELOG.md
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[contributing-url]: ./CONTRIBUTING.md
[coveralls-image]: https://img.shields.io/coveralls/gregswindle/spring-boot-starter-thymeleaf/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/gregswindle/spring-boot-starter-thymeleaf
[depstat-dev-image]: https://david-dm.org/gregswindle/spring-boot-starter-thymeleaf/dev-status.svg?style=flat-square
[depstat-dev-url]: https://david-dm.org/gregswindle/spring-boot-starter-thymeleaf#info=devDependencies
[depstat-image]: https://david-dm.org/gregswindle/spring-boot-starter-thymeleaf.svg?style=flat-square
[depstat-url]: https://david-dm.org/gregswindle/spring-boot-starter-thymeleaf
[exec-maven-plugin-url]: http://www.mojohaus.org/exec-maven-plugin/index.html
[issues-new-defect-url]: /gregswindle/spring-boot-starter-thymeleaf/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: /gregswindle/spring-boot-starter-thymeleaf/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[license-badge-image]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[license-url]: ./LICENSE
[license-url]: ./LICENSE
[maven-build-lifecycle-url]: https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html
[nodejs-url]: https://nodejs.org
[npm-image]: https://img.shields.io/npm/v/spring-boot-starter-thymeleaf.svg?style=flat-square
[npm-run-script-url]: https://docs.npmjs.com/cli/run-script
[npm-script-url]: https://docs.npmjs.com/misc/scripts
[npm-url]: https://npmjs.org/package/spring-boot-starter-thymeleaf
[npmjs-url]: https://www.npmjs.com/
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[spring-boot-starter-thymeleaf-mvn-repo-url]: https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf
[travis-image]: https://img.shields.io/travis/gregswindle/spring-boot-starter-thymeleaf/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/gregswindle/spring-boot-starter-thymeleaf
