function template(locals) {
var jade_debug = [{ lineno: 1, filename: "www/templates//video.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "www/templates//video.jade" });
jade_debug.unshift({ lineno: 1, filename: "www/templates//video.jade" });
buf.push("\n<video" + (jade.attr("id", 'video-'+item.id, true, false)) + " width=\"100%\" controls=\"controls\" autoplay=\"autoplay\" class=\"videoplayer\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "www/templates//video.jade" });
buf.push("\n  <source" + (jade.attr("src", item.url, true, false)) + " type=\"video/mp4\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "www/templates//video.jade" });
buf.push("\n  <object" + (jade.attr("data", item.url, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "www/templates//video.jade" });
buf.push("\n    <embed" + (jade.attr("src", item.url, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </object>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</video>");
jade_debug.shift();
jade_debug.shift();}.call(this,"item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "video(id='video-'+item.id, class='videoplayer', width='100%', controls, autoplay)\n    source(src=item.url, type='video/mp4')\n    object(data=item.url)\n        embed(src=item.url)\n");
}
}