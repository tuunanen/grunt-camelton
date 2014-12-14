# grunt-camelton

> Generate and synchronize data skeletons across files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ git clone git@github.com:tuunanen/grunt-camelton.git
$ cd grunt-camelton
$ npm install
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-camelton');
```

## The "camelton" task

### Overview
In your project's Gruntfile, add a section named `camelton` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  camelton: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.prune

Type: `boolean`  
Default: `false`  
Values: `true`, `false`

Prune extra properties found in destination objects.

#### options.sort

Type: `string`  
Default: `null`  
Values: `"asc"`, `"desc"`

Sort order for destination objects.

##### options.verbose
Type: `boolean`  
Default: `false`  
Values: `true`, `false`

Verbose output.

### Usage Examples

Coming soon.

## Roadmap

### Version 1.0
* Unit tests using nodeunit
* Project published to npm
* Usage examples

## Changelog

Please see [changelog](https://github.com/tuunanen/grunt-camelton/blob/master/CHANGELOG.md).

## License

Copyright &copy; tuunanen

Licensed under the [MIT license](https://github.com/tuunanen/grunt-camelton/blob/master/LICENSE).
