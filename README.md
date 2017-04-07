# jquery.storelist.js
this is a tiny plugin for showing lists in xml with Jquery. <br />
such like branch stores list.

## includes:
Jquery is necessary.
```
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="js/jquery.storelist.js"></script>
```

## basic usage:
* select by element:
```
$('div').storelist('yourXmlPath');
``` 
* select by class/id:
```
$('.class').storelist('yourXmlPath'); 
```
or
```
$('#id').storelist('yourXmlPath');
```

## callback:
```
$('div').storelist(, function(){

    path : 'yourXmlPath',
    loadDone : function(){
        // do smething while loading is done.
    },
    initDone : function(){
        // do smething while loading & DOM appending is done.
    },
    error: function(){
        // do smething while ajax error.
    }

});
```
