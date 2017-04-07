# jquery.storelist.js
this is a tiny plugin for showing lists in xml with Jquery. <br />
such like branch store list.

## includes:
Jquery is necessary.
```
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="js/jquery.storelist.js"></script>
```

## usage:
basic:
```
//by element
$('div').storelist('yourXmlPath');
//by class
$('.class').storelist('yourXmlPath'); 
//by id
$('#id').storelist('yourXmlPath');
```
callback:
```
$('div').storelist({

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

## xml format:
the xml format must follow below:
```
<store>
    <district>AA dist</district>
    <name>A1 store</name>
    <tel>1111111111</tel>
    <addr>addA1</addr>
</store>
<store>
    <district>AA dist</district>
    <name>A2 store</name>
    <tel>222222222</tel>
    <addr>addA2</addr>
</store>
<store>
    <district>BB dist</district>
    <name>B store</name>
    <tel>3333333333</tel>
    <addr>addB1</addr>
</store>
<store>
    <district>CC dist</district>
    <name>C store</name>
    <tel>44444444444</tel>
    <addr>addC1</addr>
</store>
```

## generated html:
the html that generated would look like
```
<div>
    <section>
        <h2>AA dist</h2>
        <ul>
            <li><span title="1111111111 addA1">A1 store</span></li>
            <li><span title="222222222 addA2">A2 store</span></li>
        </ul>
    </section>
    <section>
        <h2>BB dist</h2>
        <ul>
            <li><span title="3333333333 addB1">B store</span></li>
        </ul>
    </section>
    <section>
        <h2>CC dist</h2>
        <ul>
            <li><span title="44444444444 addC1">C store</span></li>
        </ul>
    </section>
</div>
```
## css:
There's no css control in this plugin.<br />
you can style it by your own css.

## final:
I'll keeing improving this pluing as i can.<br />
Thanks for using it.

