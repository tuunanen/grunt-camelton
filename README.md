grunt-camelton
==============

[![wercker status](https://app.wercker.com/status/66788c63f290187d3695e20388c74580/s "wercker status")](https://app.wercker.com/project/bykey/66788c63f290187d3695e20388c74580)

> Generate and synchronize data skeletons across files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
$ git clone git@github.com:tuunanen/grunt-camelton.git
$ cd grunt-camelton
$ npm install
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-camelton');
```

## Camelton task

Run this task with the `grunt camelton` command.

```shell
$ grunt camelton
```

### Overview
In your project's Gruntfile, add a section named `camelton` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  camelton: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  }
});
```

### Options

#### options.sort

Type: `string`  
Default: `null`  
Values: `"asc"`, `"desc"`

Sort order for destination objects.

#### options.prune

Type: `boolean`  
Default: `false`  
Values: `true`, `false`

Prune extra properties found in destination objects.

#### options.placeholder

Type: `boolean`  
Default: `false`  
Values: `true`, `false`

Add source object key as a value for empty destination object properties.

#### options.verbose

Type: `boolean`  
Default: `false`  
Values: `true`, `false`

Verbose output.

### Usage Examples

In order to understand how `camelton` works, please see the [usage examples](https://github.com/tuunanen/camelton/#usage-examples)
from the project's README page.

#### Basic configuration examples

```js
camelton: {
  main: {
    files: [
      // Default options.
      {src: 'source.json', dest: 'destination-1.json'},

      // Sort option on ("asc").
      {sort: 'asc', src: 'source.json', dest: 'destination-1.json'},

      // "prune" option on.
      {prune: true, src: 'source.json', dest: 'destination-1.json'},

      // "placeholder" option on.
      {placeholder: true, src: 'source.json', dest: 'destination-1.json'}
    ]
  }
}
```

#### Multiple destination files

```js
camelton: {
  main: {
    src: 'source.json',
    dest: ['destination-1.json', 'destination-2.json']
  }
}
```

```shell
$ grunt camelton
Running "camelton:main" (camelton) task

✔ Modified: 2 files.
```

#### Default output vs. verbose output

```js
camelton: {
  defaultOutput: {
    files: {
      'destination-1.json': 'source.json'
    }
  },
  verboseOutput: {
    options: {
      verbose: true
    },
    files: {
      'destination-1.json': 'source.json'
    }
  }
}
```

```shell
$ grunt camelton
Running "camelton:defaultOutput" (camelton) task

✔ Modified: 1 file.

Running "camelton:verboseOutput" (camelton) task

✔ Modified: 1 file.
  /Users/username/path/to/destination-1.json
```

## Changelog

Please see [changelog](https://github.com/tuunanen/grunt-camelton/blob/master/CHANGELOG.md).

## License

Copyright &copy; tuunanen

Licensed under the [MIT license](https://github.com/tuunanen/grunt-camelton/blob/master/LICENSE).
