jquery.flot.watermark
=====================

Flot plugin to add a watermark to the plot. The watermark can either be text based or an image. To add a watermark simply include the plugin file 'jquery.flot.watermark.js' into your page:

```HTML
<script type="text/javascript" src="js/jquery.flot.watermark.js"></script>
```

and add 'watermark' as an option. 

```HTML
watermark: {
	mode: "text",
	value: "Copyright by Me",
	color: "rgba(100, 100, 100, 0.80)",
	font: "14px Arial",
	position: 'nw',
	src: 'watermark.png',
	margin: 10,
	opacity: 0.3
}
```
