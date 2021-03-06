# jquery.flot.watermark

Flot plugin to add a watermark to the plot. The watermark can either be a text or an image. A minimal example can be found in `minimal-example.html`. For an interactive demonstration click [here](https://rawgit.com/benjamin-weiss/jquery.flot.watermark/master/demo.html).

## Usage
To add a watermark to your flot plot simply include the plugin file `jquery.flot.watermark.js into your page:

```HTML
<script type="text/javascript" src="jquery.flot.watermark.js"></script>
```
and add `watermark` as an option for your plot.

```HTML
var data = [[0, 3], [4, 8], [8, 5], [9, 13]];
$.plot("#myPlaceholder", [data], {
	watermark: {
		mode: "text",
		text: "Copyright © 2014 Benjamin Weiss",
		position: "c",
	}
});
```

## Options

```HTML
watermark: {
	// common settings
	mode: "text" or "image"
	order: "foreground" or "background"
	position: "nw" or "n" or "ne" or "e" or "se" or "s" or "sw" or "w" or "c"
	margin: number of pixels or [x margin, y margin]
	opacity: number between 0 and 1.0
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
Whether a text or an image should be used can be selected by setting the option "mode" to `text` or `image`. The watermark can either be drawn in the background or the foreground. This can be selected with the option "order". The "position" option determines where your watermark will be drawn inside the plot area. The following sketch illustrates the meaning of the abbreviations.

	nw --------- n --------- ne
	|            |            |
	w ---------- c ---------- e
	|            |            |
	sw --------- s --------- se

 An additional "margin" to the plots edge can be used if needed. It can be set as a single number or as an array for each direction `[x, y]`. If the "postion" is set to `c` the margin values will be ignored. The "opacity" of the watermark can be set by using the "opacity" option. 

### Textmode options
To design the watermark in textmode there are three additional options "text", "color" and "font". These are ignored if the plugin is set to work in ìmagemode. Example values can be found above.

### Imagemode options
When using the plugin in imagemode there are two additional options "src" and "scaling". Again, these are ignored in textmode.
