# Simple Modular JS browser build

- First...

```
$ npm install

$ npm install -g gulp 
```

- Then run gulp 

```
$ gulp
```

- Now open public html file and check the console
- Add your bits of code to different modules and require them in src/js/main.js
- You can also chain modules together, require from one to the next

- To minify you public js file, uncomment this piece in gulpfile.js
 
```
.pipe(uglify({
      outSourceMap: false
    }))
```    