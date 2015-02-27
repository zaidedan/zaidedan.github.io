// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: false,
	backgroundTransition: 'slide',
	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none
	slideNumber: false,
	math: {
		mathjax: 'http://cdn.mathjax.org/mathjax/latest/MathJax.js',
		config: 'TeX-AMS_HTML-full'
	},
    width: 1024,
    height: 768,

    // Factor of the display size that should remain empty around the content
    margin: 0.1,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 1.5,
	// Optional libraries used to extend on reveal.js
	dependencies: [
	{ src: '../reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
	{ src: '../reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	{ src: '../reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	{ src: '../reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	{ src: '../reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
	{ src: '../reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
	{ src: '../reveal.js/plugin/math/math.js', async: true },
  { src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min.js', async: true },
  { src: 'plugin/multiplex/master.js', async: true },

  // and if you want speaker notes
  { src: 'plugin/notes-server/client.js', async: true }

	],
	multiplex: {
	  // Example values. To generate your own, see the socket.io server instructions.
	  secret: 'null', // Obtained from the socket.io server. Gives this (the master) control of the presentation
	  id: 'bba5f98ec355c956', // Obtained from socket.io server
	  url: 'revealjs.jit.su:80' // Location of socket.io server
	},

});