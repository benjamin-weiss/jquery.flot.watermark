//
// Flot Watermark Plugin, Version 1.0.
//
// Copyright (c) 2014 Benjamin Weiss.
//
// Licensed under the MIT license.
//

(function ($) {
	// default values
	var options = {
		watermark: {
			// common settings
			mode: "text",
			opacity: 0.3,
			position: 'se',
			margin: 10,
			// text mode settings
			text: "COPYRIGHT",
			color: "rgb(0, 0, 0)",
			font: "30px Arial",
			// image mode settings
			src: 'watermark.png',
			scaling: 1.0,
		}
	};
	var watermarkImage = new Image();
	var loadedImage = undefined;
		
	function init(plot) {
		plot.hooks.draw.push(function (plot, ctx) {
			var options = plot.getOptions().watermark;
			if (options.mode == "text") {
				// Textmode
				drawText(plot, ctx, options);
			}
			else if (options.mode == "image") {
				// Imagemode
				if (watermarkImage.src == loadedImage) {
					drawImage(plot, ctx, options);
				}
				else {
					watermarkImage.onload = function() {
						loadedImage = watermarkImage.src;
						drawImage(plot, ctx, options);
					}
					watermarkImage.src = options.src;
				}
			}
			else {
				return;
			}
		});
	}

	function drawText(plot, ctx, options) {
		ctx.save();
		var xPos;
		var yPos;
		var offset;

		var margin = options.margin;
		if (margin[0] == null)
			margin = [margin, margin];

		var axes = plot.getAxes();
		switch(options.position) {
			case 'nw':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + margin[0];
				yPos = offset.top + margin[1];
				ctx.textAlign = 'left';
				ctx.textBaseline = 'top'; 
				break;
			case 'n':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + plot.width()/2;
				yPos = offset.top + margin[1];
				ctx.textAlign = 'center';
				ctx.textBaseline = 'top'; 
				break;
			case 'ne':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.max});
				xPos = offset.left - margin[0];
				yPos = offset.top + margin[1];
				ctx.textAlign = 'right';
				ctx.textBaseline = 'top'; 
				break;
			case 'e':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.max});
				xPos = offset.left - margin[0];
				yPos = offset.top + plot.height()/2;
				ctx.textAlign = 'right';
				ctx.textBaseline = 'middle'; 
				break;
			case 'se':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.min});
				xPos = offset.left - margin[0];
				yPos = offset.top - margin[1];
				ctx.textAlign = 'right';
				ctx.textBaseline = 'bottom'; 
				break;
			case 's':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.min});
				xPos = offset.left + plot.width()/2;
				yPos = offset.top - margin[1];
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom'; 
				break;
			case 'sw':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.min});
				xPos = offset.left + margin[0];
				yPos = offset.top - margin[1];
				ctx.textAlign = 'left';
				ctx.textBaseline = 'bottom'; 
				break;
			case 'w':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + margin[0];
				yPos = offset.top + plot.height()/2;
				ctx.textAlign = 'left';
				ctx.textBaseline = 'middle'; 
				break;
			case 'c':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + plot.width()/2;
				yPos = offset.top + plot.height()/2;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle'; 
				break;
			default:
				console.log("No valid position.");
		}					

		// read font options
		ctx.globalAlpha = options.opacity;
		ctx.font = options.font;
		ctx.fillStyle = options.color;
		ctx.fillText(options.text, xPos, yPos);
	}

	function drawImage(plot, ctx, options) {
		ctx.save();
		var width = watermarkImage.width;
		var height = watermarkImage.height;
		var xPos;
		var yPos;
		
		var margin = options.margin;
		if (margin[0] == null)
			margin = [margin, margin];
		
		var axes = plot.getAxes();
		switch(options.position) {
			case 'nw':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + margin[0];
				yPos = offset.top + margin[1];
				break;
			case 'n':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.max});
				xPos = offset.left - plot.width()/2 - options.scaling * width/2;
				yPos = offset.top + margin[1];
				break;
			case 'ne':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.max});
				xPos = offset.left - options.scaling * width - margin[0];
				yPos = offset.top + margin[1];
				break;
			case 'e':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.max});
				xPos = offset.left - options.scaling * width - margin[0];
				yPos = offset.top + plot.height()/2 - options.scaling * height/2;
				break;
			case 'se':
				offset = plot.pointOffset({x: axes.xaxis.max, y: axes.yaxis.min});
				xPos = offset.left - options.scaling * width - margin[0];
				yPos = offset.top - options.scaling * height - margin[1];
				break;
			case 's':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.min});
				xPos = offset.left + plot.width()/2 - options.scaling * width/2;
				yPos = offset.top - options.scaling * height - margin[1];
				break;
			case 'sw':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.min});
				xPos = offset.left + margin[0];
				yPos = offset.top - options.scaling * height - margin[1];
				break;
			case 'w':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + margin[0];
				yPos = offset.top + plot.height()/2 - options.scaling * height/2;
				break;
			case 'c':
				offset = plot.pointOffset({x: axes.xaxis.min, y: axes.yaxis.max});
				xPos = offset.left + plot.width()/2 - options.scaling * width/2;
				yPos = offset.top + plot.height()/2 - options.scaling * height/2;
				break;									
			default:
				console.log("No valid position.");
		}					
		ctx.globalAlpha = options.opacity;
		ctx.drawImage(watermarkImage, xPos, yPos, options.scaling * width, options.scaling * height);
	}
	$.plot.plugins.push({
		init: init,
			options: options,
			name: "Watermark",
			version: "1.0"
	});
})(jQuery);