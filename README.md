# jquery.flot.watermark

Flot plugin to add a watermark to the plot. The watermark can either be a text or an image. To add a watermark simply include the plugin file 'jquery.flot.watermark.js' into your page:

```HTML
<script type="text/javascript" src="js/jquery.flot.watermark.js"></script>
```
and add `watermark` as an option for your plot. 

## Options

```HTML
watermark: {
	// common settings
	mode: "text" or "image"
	opacity: number between 0 and 1.0
	position: "nw" or "n" or "ne" or "e" or "se" or "s" or "sw" or "w" or "c"
	margin: number of pixels or [x margin, y margin]
	// text mode settings
	text: string
	color: color e.g. "rgb(0, 144, 200)"
	font: font e.g. "30px Arial",
	// image mode settings
	src: string e.g. "watermark.png",
	scaling: number,
}
```

### Common options
Wheather a text or an image should be used can be selected by setting the option "mode" to `text` or `image`. The "opacity" can be set by using the "opacity" option. The "position" option determines where your watermark will be drawn inside the plot area. The following sketch illustrates the meaning of the abbreviations. An additional "margin" can be used if needed.

	nw --------- n --------- ne
	|            |            |
	w ---------- c ---------- e
	|            |            |
	sw --------- s --------- se

### Textmode options
To design the watermark in textmode there are three additional options "text", "color" and "font". These are ignored if the plugin is set to work in ìmagemode. Example values can be found above.

### Imagemode options
When using the plugin in imagemode there are two additional options "src" and "scaling". Again, these are ignored in textmode.