# Description

This is Hugo Virgen's answer to the following [Code Challenge.](./docs/ENG-SDECodeExercise.pdf)

##  Prerequisites

- [NodeJs](https://nodejs.dev/en/)

## Install the CLI

after [downloading](https://github.com/virgenherrera/Platform-Science-Code-Exercise/archive/refs/heads/master.zip) and decompressing or cloning this repository execute the following command:

```bash
npm install -g .
```

this will provide a global CLI named `psce` wich stands for Platform Science Code Exercise.

## psce Available commands

### get help

output main help CLI help

```bash
psce --help
```

### get CLI version

output CLI version

```bash
psce --version
```

### Process Files

Reads a address file and a Drivers file and creates an output with proper assignment based on an implemented criteria.

```bash
psce assign-shipments <addressesFile> <driversFile> <assignmentDestiny>
```
