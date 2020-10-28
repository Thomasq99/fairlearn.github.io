(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("9a2f6d06-b1e5-45c9-9444-4485065d59c7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9a2f6d06-b1e5-45c9-9444-4485065d59c7' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"bb8af8d1-3c43-4b87-9757-3983e5d4a567":{"roots":{"references":[{"attributes":{"text":"Fraction earning over $50,0000"},"id":"1002","type":"Title"},{"attributes":{"source":{"id":"1020"}},"id":"1024","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1019","type":"Toolbar"},{"attributes":{},"id":"1031","type":"Selection"},{"attributes":{"start":0},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1026","type":"BasicTickFormatter"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"axis":{"id":"1012"},"grid_line_color":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{},"id":"1013","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1021","type":"VBar"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1014"},{"id":"1018"}],"left":[{"id":"1015"}],"plot_height":480,"plot_width":640,"renderers":[{"id":"1023"}],"title":{"id":"1002"},"toolbar":{"id":"1019"},"toolbar_location":null,"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1008","type":"CategoricalScale"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"formatter":{"id":"1026"},"minor_tick_line_color":null,"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1028"},"minor_tick_line_color":null,"ticker":{"id":"1013"}},"id":"1012","type":"CategoricalAxis"},{"attributes":{},"id":"1030","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1022","type":"VBar"},{"attributes":{"axis":{"id":"1015"},"dimension":1,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{},"id":"1028","type":"CategoricalTickFormatter"},{"attributes":{"data":{"top":[0.10925148221343874,0.3037672281776417],"x":["Female","Male"]},"selected":{"id":"1031"},"selection_policy":{"id":"1030"}},"id":"1020","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1020"},"glyph":{"id":"1021"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1022"},"selection_glyph":null,"view":{"id":"1024"}},"id":"1023","type":"GlyphRenderer"},{"attributes":{"factors":["Female","Male"]},"id":"1004","type":"FactorRange"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"bb8af8d1-3c43-4b87-9757-3983e5d4a567","root_ids":["1001"],"roots":{"1001":"9a2f6d06-b1e5-45c9-9444-4485065d59c7"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();