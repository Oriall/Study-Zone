function html_box() {
    document.getElementById("bg-uni").style.background = "#1E1E2E";
    document.getElementById("bg-uni2").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni3").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni4").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni").style.borderTop = "#9783F5 1px solid";
    document.getElementById("bg-uni2").style.borderTop = "none";
    document.getElementById("bg-uni3").style.borderTop = "none";
    document.getElementById("bg-uni4").style.borderTop = "none";
    document.getElementById("html-code").style.display = "block";
    document.getElementById("css-code").style.display = "none";
    document.getElementById("js-code").style.display = "none";
    document.getElementById("vs-code").style.display = "none";
    document.getElementById("language").style.display = "none";
    document.getElementById("vs_btn").style.display = "none";
    document.getElementById("result5").style.display = "none";
    document.querySelector(".show").style.display = "block";
    document.getElementById("in_new").style.display = "none";
}
function css_box() {
    document.getElementById("bg-uni2").style.background = "#1E1E2E";
    document.getElementById("bg-uni").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni3").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni4").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni2").style.borderTop = "#9783F5 1px solid";
    document.getElementById("bg-uni").style.borderTop = "none";
    document.getElementById("bg-uni3").style.borderTop = "none";
    document.getElementById("bg-uni4").style.borderTop = "none";
    document.getElementById("html-code").style.display = "none";
    document.getElementById("css-code").style.display = "block";
    document.getElementById("js-code").style.display = "none";
    document.getElementById("vs-code").style.display = "none";
    document.getElementById("language").style.display = "none";
    document.getElementById("vs_btn").style.display = "none";
    document.getElementById("result5").style.display = "none";
    document.querySelector(".show").style.display = "block";
    document.getElementById("in_new").style.display = "none";

}
function js_box() {
    document.getElementById("bg-uni3").style.background = "#1E1E2E";
    document.getElementById("bg-uni").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni2").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni4").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni3").style.borderTop = "#9783F5 1px solid";
    document.getElementById("bg-uni").style.borderTop = "none";
    document.getElementById("bg-uni2").style.borderTop = "none";
    document.getElementById("bg-uni4").style.borderTop = "none";
    document.getElementById("html-code").style.display = "none";
    document.getElementById("css-code").style.display = "none";
    document.getElementById("vs-code").style.display = "none";
    document.getElementById("js-code").style.display = "block";
    document.getElementById("language").style.display = "none";
    document.getElementById("vs_btn").style.display = "none";
    document.getElementById("result5").style.display = "none";
    document.querySelector(".show").style.display = "block";
    document.getElementById("in_new").style.display = "none";
}
function vs_box() {
    document.getElementById("bg-uni4").style.background = "#1E1E2E";
    document.getElementById("bg-uni").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni2").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni3").style.background = "rgba(202, 166, 249, 0.06)";
    document.getElementById("bg-uni4").style.borderTop = "#9783F5 1px solid";
    document.getElementById("bg-uni").style.borderTop = "none";
    document.getElementById("bg-uni2").style.borderTop = "none";
    document.getElementById("bg-uni3").style.borderTop = "none";
    document.getElementById("html-code").style.display = "none";
    document.getElementById("css-code").style.display = "none";
    document.getElementById("js-code").style.display = "none";
    document.getElementById("vs-code").style.display = "block";
    document.getElementById("language").style.display = "block";
    document.getElementById("vs_btn").style.display = "block";
    document.getElementById("result5").style.display = "block";
    document.querySelector(".show").style.display = "none";
    document.getElementById("in_new").style.display = "flex";
}
function output_box() {
    document.getElementById("out_new").style.borderTop = "#9783F5 1px solid";
    document.getElementById("in_new").style.borderTop = "none";
    document.getElementById("result5").style.display = "block";
    document.getElementById("stdin").style.display = "none";
}
function input_box() {
    document.getElementById("in_new").style.borderTop = "#9783F5 1px solid";
    document.getElementById("out_new").style.borderTop = "none";
    document.getElementById("result5").style.display = "none";
    document.getElementById("stdin").style.display = "block";

}