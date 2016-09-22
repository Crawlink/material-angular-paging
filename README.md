# material-angular-paging
Angular Material Design Pagination, it is very simple and lightweight having minimal numbers attribute to configure.

![demo image](https://raw.githubusercontent.com/Crawlink/material-angular-paging/master/demo/paging-demo.png)

#### Demo :

[Codepen](http://codepen.io/crawlink/pen/qNbwpE)

[Used in website](http://topicson.com/search.html)


#### Install

##### Bower :

```
 bower install material-angular-paging  --save

```

#### Usage

##### Configuration


Add following line in header section of you page

```
<script src="bower_components/material-angular-paging/build/dist.min.js"></script>
```

Sample code for how to use `cl-paging` directive

```
<cl-paging flex cl-pages="paging.total" cl-steps="6" cl-page-changed="paging.onPageChanged()" cl-align="start start" cl-current-page="paging.current"></cl-paging>

```

##### Attributes
| Attribute | Description |
| ------------ | --------------- |
| `cl-pages` | Total number of pages you want to paginate, calculate pages in your controller then set the value here |
| `cl-steps` | How many paging item do you want to show in pagination area |
| `cl-page-changed` | Requires a `function` which will get called when click on page item |
| `cl-align` | Give two material `layout-align` values [Get alignment values] (https://material.angularjs.org/latest/layout/alignment) |
| `cl-current-page` | A model for the current page value (Selected page number) |

Use `cl.paging` module in your app, following sample code demonstrating How to include the angular module and use it in controller.
The controller defined below has oble simple configuration of `cl-paging` directive. When the page changed you will get a trigger in the `loadPages` function where you can load page data form remote server.

```
var app = angular.module("YourApp", ['ngMaterial', 'cl.paging']);

app.controller("MainController", ['$scope', function ($scope) {

    $scope.currentPage = 0;

    $scope.paging = {
        total: 100,
        current: 1,
        onPageChanged: loadPages,
    };

    function loadPages() {
        console.log('Current page is : ' + $scope.paging.current);

        // TODO : Load current page Data here

        $scope.currentPage = $scope.paging.current;
    }

}]);
```

### LICENCE


The MIT License (MIT)
Copyright (c) 2016 Crawlink

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.





