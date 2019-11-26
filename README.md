# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

## Run the project

Setup:

```bash
npm i -g @angular-devkit/schematics-cli@next
npm i # in the current directory
schematics .:hello --debug=false
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <
i> to invert selection)
❯◉ hans
 ◉ peter
 ◉ paul
schematics .:hello --debug=false --name="paul, peter"
```

Run with prompt (works):

```bash
schematics .:hello --debug=false
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <
i> to invert selection)
❯◉ hans
 ◉ peter
 ◉ paul
schematics .:hello --debug=false --name="paul, peter"
```

Run with options (doesn't work):

```bash
schematics .:hello --debug=false --name="paul, peter"
Error: Schematic input does not validate against the Schema: {"name":"paul"}
Errors:

  Data path ".name" should be array.
    at MapSubscriber.registry.compile.pipe.operators_1.map.result [as project] (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/@angular-devkit/schematics/tools/schema-option-transform.js:31:27)
    at MapSubscriber._next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/operators/map.js:49:35)
    at MapSubscriber.Subscriber.next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/Subscriber.js:66:18)
    at ThrowIfEmptySubscriber._next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/operators/throwIfEmpty.js:44:26)
    at ThrowIfEmptySubscriber.Subscriber.next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/Subscriber.js:66:18)
    at TakeSubscriber._next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/operators/take.js:54:30)
    at TakeSubscriber.Subscriber.next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/Subscriber.js:66:18)
    at MergeMapSubscriber.notifyNext (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/operators/mergeMap.js:92:26)
    at InnerSubscriber._next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/InnerSubscriber.js:28:21)
    at InnerSubscriber.Subscriber.next (/usr/local/lib/node_modules/@angular-devkit/schematics-cli/node_modules/rxjs/internal/Subscriber.js:66:18)
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
