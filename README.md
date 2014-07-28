# grunt-swm-launcher

A Grunt task to launch a selenium server.

```webdriver-manager``` command is required.

## Usage

Load the task:

```javascript
grunt.loadNpmTasks('grunt-swm-launcher');
```

Call the task:

```javascript
grunt.registerTask 'e2e-tests', [ 'swm-l-start', 'js' ,'swm-l-stop ]
```
