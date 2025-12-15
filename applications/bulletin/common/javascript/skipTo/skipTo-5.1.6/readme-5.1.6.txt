skipto.js - version 5.1.6 of the skipTo developed by Jon Gunderson
            further edited by AITS:
		For $skipToId [role="menuitem"] .label, change white-space from nowrap to wrap
		
		For $skipToId [role="menuitem"]:focus, change border-width from 2px to 1px

		Change footerLabel: 'contentinfo' to footerLabel: 'Footer'

		Change  landmarks: 'main search navigation complementary' 
			to landmarks: 'main search navigation complementary contentinfo',

		Change headings: 'main h1 h2’ to headings: 'main h1 h2 h3 h4',

		Add the bulletin style to colorThemes
		'bulletin': {
          		fontFamily: 'Lato, Helvetica, Roboto, Arial, sans-serif;',
          		fontSize: '1rem',
          		positionLeft: '30%',
          		mediaBreakPoint: '500',
          		menuTextColor: '#0a0a0a',
          		menuBackgroundColor: '#E8E9ED',
          		menuitemFocusTextColor: '#fefefe',
          		menuitemFocusBackgroundColor: '#2F3235',
          		focusBorderColor: '#2F3235',
          		buttonTextColor: '#0a0a0a',
          		buttonBackgroundColor: '#E8E9ED',
          		zIndex: '100000'
        	}

skipto-min.js - minified version of the latest skipto.js



Sample usage with Bulletin styling and only shown after user tabs into the page.  
Simply include this in your <head>, no other code needed.

	<head>
		<script id="skipToMinJS" src="#local.pathToJavascript#/skipTo/skipTo-5.1/skipto-min.js"></script>

		<script type="text/javascript" id="skipToScript">
			var SkipToConfig = {
				"settings": {
		   			"skipTo": {
						colorTheme: "bulletin",
						displayOption: "popup"
					}
				    }
			};
		</script>
	</head>
