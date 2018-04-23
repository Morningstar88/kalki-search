// TODO JS
//
// Weather
// Working Weather on Click. https://codepen.io/fleeting/pen/Idsaj
// Data for styling: https://codepen.io/fleeting/pen/wzvAE
//API
// https://codepen.io/Hartecode/pen/zdXeJo?editors=1010


// cookie names for data we store
// YOUR API KEY DOES NOT GO IN THIS CODE; don't paste it in.
API_KEY_COOKIE = "bing-search-api-key";
CLIENT_ID_COOKIE = "bing-search-client-id";

function chooseATheme() {
    alert("I am an alert box!");
}

//JQUERY CHANGE https://codepen.io/raazxplorer/pen/WvyEvG

	$(document).ready(function(){
					$(".choose-original-theme").on({
// renamed orange theme.
						click: function(){
						    localStorage.setItem("kalkitheme", $(this).text());
							$(".main-url").css("color", "rgba(1,4,1,0.95)");
                 $(".main-url").css("font-family", "Lucida Sans Unicode");
                 $(".top-right-link").css("color", "rgba(70,0,14,1)");
                          $(".deeplinkstext").css("font-family", "Century Gothic");
               $(".text-content").css("font-family", "Open Sans");
              $(".deeplinkstext").css("background", "rgba(170,50,30,1)");
                   $(".deeplinkstext").css("color", "rgba(255,255,255,0.95)");
                      $(".knockout").css("color", "white");
                                   $(".knockout").css({"background": "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/577362/pexels-photo-226589.jpeg') 5% 5%",
                      "-webkit-text-fill-color":"transparent", "-webkit-background-clip": "text"});
                          $(".knockout").css({"font-family": "Century Gothic", "font-size": "202px", "text-shadow":'none'});
                  //This works to hide an element    $(".knockout").css("visibility", "hidden");
						}  
					});
				});

				$(document).ready(function(){
					$(".choose-orange-theme").on({
// renamed orange theme.
						click: function(){
						    localStorage.setItem("kalkitheme", $(this).text());
							$(".main-url").css("color", "rgba(1,4,1,0.95)");
                 $(".main-url").css("font-family", "Lucida Sans Unicode");
                 $(".top-right-link").css("color", "rgba(70,0,14,1)");
                          $(".deeplinkstext").css("font-family", "Century Gothic");
               $(".text-content").css("font-family", "Open Sans");
              $(".deeplinkstext:nth-child(4n+0)").css("background", "rgba(170,50,30,1)");
                  $(".deeplinkstext:nth-child(4n+1)").css("background", "rgba(180,60,30,1)");
                      $(".deeplinkstext:nth-child(4n+2)").css("background", "rgba(190,70,30,1)");
                          $(".deeplinkstext:nth-child(4n+3)").css("background", "rgba(200,80,30,1)");
                              $(".deeplinkstext:nth-child(4n+4)").css("background", "rgba(210,90,30,1)");
                   $(".deeplinkstext").css("color", "rgba(255,255,255,0.95)");
                      $(".knockout").css("color", "white");
                                   $(".knockout").css({"background": "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/577362/pexels-photo-226589.jpeg') 5% 5%",
                      "-webkit-text-fill-color":"transparent", "-webkit-background-clip": "text"});
                          $(".knockout").css({"font-family": "Century Gothic", "font-size": "202px", "text-shadow":'none'});
                  //This works to hide an element    $(".knockout").css("visibility", "hidden");
						}  
					});
				});

// JQUERY HOVER STATE https://stackoverflow.com/questions/21051440/how-to-define-the-css-hover-state-in-a-jquery-selector

$(document).ready(function(){
					$(".choose-black-and-white-theme").on({

						click: function(){
						    localStorage.setItem("kalkitheme", $(this).text());
							$(".main-url").css("color", "rgba(2,1,1,0.9)");
                 $(".main-url").css("font-family", "Century Gothic");
                 $(".top-right-link").css("color", "rgba(1,2,2,0.7)");
               $(".deeplinkstext").css("font-family", "Century Gothic");
               $(".deeplinkstext").css("border", "1px solid rgba(2,2,2,0.8");
               $(".text-content").css("font-family", "Century Gothic");
              $(".deeplinkstext").css("background", "url() 5% 1%");
             $(".deeplinkstext").css("color", "rgba(20,20,20,0.8)");
    $(".knockout").css({"font-family": "Helvetica", "font-size": "202px", "-webkit-text-fill-color":"rgba(10,10,10,0.9)", "background": "none"});
						}  
					});
				});
				
				$(document).ready(function(){
					$(".choose-ascii-hacker-theme").on({

						click: function(){
						    localStorage.setItem("kalkitheme", $(this).text());
							$(".main-url").css("color", "rgba(2,1,1,0.9)");
                 $(".main-url").css("font-family", "Courier New");
                 $(".top-right-link").css("color", "rgba(1,2,2,0.7)");
                     $(".top-right-link").css("font-family", "Courier New");
                       $(".top-right-link").css("letter-spacing", "1px");
               $(".deeplinkstext").css("font-family", "Courier New");
               $(".deeplinkstext").css("border", "1px solid rgba(2,2,2,0.8");
               $(".text-content").css("font-family", "Courier New");
              $(".deeplinkstext").css("background", "url() 5% 1%");
             $(".deeplinkstext").css("color", "rgba(20,20,20,0.8)");
               $(".deeplinkstext").css("border", "1px rgba(20,20,20,0.9)");
                        $(".knockout").css({"font-family": "Lucida Console", "font-size": "202px", "-webkit-text-fill-color":"rgba(20,20,20,0.9)", "text-shadow":"0px 2px 2px rgba(100,100,100,0.8)", "background": "none"});
                 		$("#geolocationaddress").css({"color": "rgba(20,20,20,0.8)", "text-shadow": "1px 1px 1px rgba(10,10,10,0.8)", "border": "1px solid rgba(40,40,40,0.6)", "background": "white", "font-family": "Lucida Console", "box-shadow": "0px 0px 1px rgba(30,30,30,0.8)"});
						    
						}  
					});
				});
				
$(document).ready(function(){
    var theme = localStorage.getItem("kalkitheme");
    if (theme) {
        if(theme == 'ORANGE THEME')
        {
            $(".choose-orange-theme").click();
        }
        else if(theme == 'BLACK + WHITE THEME')
        {
            $(".choose-black-and-white-theme").click();
        }
        else if(theme == 'OLD SCHOOL ASCII THEME')
        {
            $(".choose-ascii-hacker-theme").click();
        }
        else if(theme == 'KALKI ORIGINAL')
        {
            $(".choose-original-theme").click();
        }
    }
    else{
        $(".choose-original-theme").click();
    }
});
				
//main-url
//number-of-results
//top-right-link
//text-content
//deeplinkstext
// .news-image {
// /*   width: 5%; */
// }
// .news-main-text {
//   font-size: 1.3em;
// }
// .news-category {
//   font-size: 15px;
// }
            
            
         

$(function(){
    $("#choose-a-theme-menu").hide();
    $("#choose-a-theme-button").on("click", function(){
        $("#choose-a-theme-menu").show();
    });
});
  // document.getElementById('choice-of-themes').innerHTML = "Choose a theme!";

//quotes arry

var quotes = ["The best preparation for tomorrow is doing your best today.",
    "Better to run than curse the road.",
    "Nothing in life is to be feared; it is only to be understood.",
    "Plant your garden and decorate your own soul.",
    "It's supposed to be hard. If it were easy, everyone would do it.",
    "The more you weigh, the harder you are to kidnap.",
      "Happiness is not having to set alarm for the next day",
    "Change the world by being yourself",
    "Every moment is a fresh beginning",
    "Never regret anything that made you smile.",
    "Die with memories, not dreams.",
    "Aspire to inspire before we expire.",
    "Everything you can imagine is real.",
    "Simplicity is the ultimate sophistication.",
    "Whatever you do, do it well",
    "What we think, we become",
    "All limitations are self-imposed.",
    "Be so good they can’t ignore you.",
    "Yesterday you said tomorrow. Just do it.",
    "Reality is wrong, dreams are for real."

]

// Various browsers differ in their support for persistent storage by local
// HTML files (IE won't use localStorage, but Chrome won't use cookies). So
// use localStorage if we can, otherwise use cookies.

try {
    localStorage.getItem; // try localStorage

    window.retrieveValue = function(name) {
        return localStorage.getItem(name) || "";
    }
    window.storeValue = function(name, value) {
        localStorage.setItem(name, value);
    }
} catch (e) {
    window.retrieveValue = function(name) {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var keyvalue = cookies[i].split("=");
            if (keyvalue[0].trim() === name) return keyvalue[1];
        }
        return "";
    }
    window.storeValue = function(name, value) {
        var expiry = new Date();
        expiry.setFullYear(expiry.getFullYear() + 1);
        document.cookie = name + "=" + value.trim() + "; expires=" + expiry.toUTCString();
    }
}

// get stored API subscription key, or prompt if it's not found
function getSubscriptionKey() {
    var key = "07b3d7f2183d4296bc15da797e4d1545"; //     var key = retrieveValue(API_KEY_COOKIE);
    while (key.length !== 32) {
        key = prompt("Enter Bing Search API subscription key:", "").trim();
    }
    // always set the cookie in order to update the expiration date
    storeValue(API_KEY_COOKIE, key);
    return key;
}

// invalidate stored API subscription key so user will be prompted again
function invalidateSubscriptionKey() {
    storeValue(API_KEY_COOKIE, "");
}

// escape quotes to HTML entities for use in HTML tag attributes
function escapeQuotes(text) {
    return text.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

// get the host portion of a URL, strpping out search result formatting and www too
function getHost(url) {
    return url.replace(/<\/?b>/g, "").replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "");
}

// format plain text for display as an HTML <pre> element
function preFormat(text) {
    text = "" + text;
    return "<pre>" + text.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</pre>"
}

// put HTML markup into a <div> and reveal it
function showDiv(id, html) {
    var content = document.getElementById("_" + id)
    if (content) content.innerHTML = html;
    var wrapper = document.getElementById(id);
    if (wrapper) wrapper.style.display = html.trim() ? "block" : "none";
}

// hides the specified <div>s
function hideDivs() {
    for (var i = 0; i < arguments.length; i++) {
        var element = document.getElementById(arguments[i])
        if (element) element.style.display = "none";
    }
}

// render functions for various types of search results
searchItemRenderers = {
    // render Web page result
    webPages: function(item) {
        var html = [];
        if ("deepLinks" in item) {
            var links = [];
            for (var i = 0; i < item.deepLinks.length; i++) {
                links.push("<a class='deeplinkstext' href='" + item.deepLinks[i].url + "'>" +
                    item.deepLinks[i].name + "</a>");
            }
            html.push("<p class='base-link'>" + links.join("  ") + "</p>");
        }
        html.push("<div class='searchresult'><p class='webPages'><a class='main-url' href='" + item.url + "'>" + item.name + "</a>");
        html.push(" <span class='top-right-link'>(" + getHost(item.displayUrl) + ")</span>");
        html.push("<p class='text-content'>" + item.snippet + "</p></div>");

        return html.join("");
    },
    // render news story
    news: function(item) {
        var html = [];
        //adding container for each news item
        html.push("<p class='news-container'>");
        if (item.image) {
            width = 60;
            height = Math.round(width * item.image.thumbnail.height / item.image.thumbnail.width);
            //setting image class for each news image
            html.push("<img class='news-image' src='" + item.image.thumbnail.contentUrl +
                "&h=" + height + "&w=" + width + "' width=" + width + " height=" + height + ">");
        }
        html.push("<a class='main-url' href='" + item.url + "'>" + item.name + "</a>");
        if (item.category) html.push(" - " + item.category);



        html.push("<br><p class='news-main-text'>" + item.description + "</p>");
        html.push("<p> (" + getHost(item.url) + ")");
        if (item.contractualRules) { // MUST display source attributions
            html.push(" (");
            var rules = [];
            for (var i = 0; i < item.contractualRules.length; i++)
                rules.push(item.contractualRules[i].text);
            html.push(rules.join(", "));
            html.push(")</p>");
        }

        return html.join("");
    },
    // render image result using thumbnail
    images: function(item, section, index, count) {
        var height = 60;
        var width = Math.round(height * item.thumbnail.width / item.thumbnail.height);
        var html = [];
        if (section === "sidebar") {
            if (index) html.push("<br>");
        } else {
            if (!index) html.push("<p class='images'>");
        }
        html.push("<a href='" + item.hostPageUrl + "'>");
        var title = escapeQuotes(item.name) + "\n" + getHost(item.hostPageDisplayUrl);
        html.push("<img src='" + item.thumbnailUrl + "&h=" + height + "&w=" + width +
            "' height=" + height + " width=" + width + " title='" + title + "' alt='" + title + "'>");
        html.push("</a>");
        return html.join("");
    },
    // render video result using thumbnail
    videos: function(item, section, index, count) {
        // videos are rendered like images
        return searchItemRenderers.images(item, section, index, count);
    },
    relatedSearches: function(item, section, index, count) {
        var html = [];
        if (section !== "sidebar") html.push(index === 0 ? "<h2>Related</h2>" : " - ");
        else html.push("<p class='relatedSearches'>");
        //added related class to work on styling
        html.push("<a class='related' href='#' onclick='return doRelatedSearch(&quot;" +
            escapeQuotes(item.text) + "&quot;)'>");
        html.push(item.displayText + "</a>");
        return html.join("");
    }
}

// render search results from rankingResponse object in specified order
function renderResultsItems(section, results) {

    var items = results.rankingResponse[section].items;
    var html = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // collection name has lowercase first letter while answerType has uppercase
        // e.g. `WebPages` rankingResult type is in the `webPages` top-level collection
        var type = item.answerType[0].toLowerCase() + item.answerType.slice(1);
        
        // must have results of the given type AND a renderer for it
        if (type in results && type in searchItemRenderers) {
            var render = searchItemRenderers[type];
            // this ranking item refers to ONE result of the specified type
            if ("resultIndex" in item) {
                html.push(render(results[type].value[item.resultIndex], section));
                // this ranking item refers to ALL results of the specified type
            } else {
                var len = results[type].value.length;
                len = type == 'images' && section == 'sidebar' ? 4 : len;
                for (var j = 0; j < len; j++) {
                    html.push(render(results[type].value[j], section, j, len));
                }
            }
        }
    }
    return html.join("\n\n");
}

// render the search results given the parsed JSON response
function renderSearchResults(results) {

    // if spelling was corrected, update search field
    if (results.queryContext.alteredQuery)
        document.forms.bing.query.value = results.queryContext.alteredQuery;

    // add Prev / Next links with result count
    var pagingLinks = renderPagingLinks(results);
    showDiv("paging1", pagingLinks);
    showDiv("paging2", pagingLinks);

    // for each possible section, render the resuts from that section
    for (section in {
            pole: 0,
            mainline: 0,
            sidebar: 0
        }) {
        if (results.rankingResponse[section])
            showDiv(section, renderResultsItems(section, results));
    }
}

function renderErrorMessage(message) {
    showDiv("error", preFormat(message));
    showDiv("noresults", "No results.");
}

// handle Bing search request results
function handleOnLoad() {
    hideDivs("noresults");

    var json = this.responseText.trim();
    var jsobj = {};

    // try to parse JSON results
    try {
        if (json.length) jsobj = JSON.parse(json);
    } catch (e) {
        renderErrorMessage("Invalid JSON response");
    }

    // show raw JSON and headers
    showDiv("json", preFormat(JSON.stringify(jsobj, null, 2)));
    showDiv("http", preFormat("GET " + this.responseURL + "\n\nStatus: " + this.status + " " +
        this.statusText + "\n" + this.getAllResponseHeaders()));

    // if HTTP response is 200 OK, try to render search results
    if (this.status === 200) {
        var clientid = this.getResponseHeader("X-MSEdge-ClientID");
        if (clientid) retrieveValue(CLIENT_ID_COOKIE, clientid);
        if (json.length) {
            if (jsobj._type === "SearchResponse" && "rankingResponse" in jsobj) {
                renderSearchResults(jsobj);
            } else {
                renderErrorMessage("No search results in JSON response");
            }
        } else {
            renderErrorMessage("Empty response (are you sending too many requests too quickly?)");
        }
    }

    // Any other HTTP response is an error
    else {
        // 401 is unauthorized; force re-prompt for API key for next request
        if (this.status === 401) invalidateSubscriptionKey();

        // some error responses don't have a top-level errors object, so gin one up
        var errors = jsobj.errors || [jsobj];
        var errmsg = [];

        // display HTTP status code
        errmsg.push("HTTP Status " + this.status + " " + this.statusText + "\n");

        // add all fields from all error responses
        for (var i = 0; i < errors.length; i++) {
            if (i) errmsg.push("\n");
            for (var k in errors[i]) errmsg.push(k + ": " + errors[i][k]);
        }

        // also display Bing Trace ID if it isn't blocked by CORS
        var traceid = this.getResponseHeader("BingAPIs-TraceId");
        if (traceid) errmsg.push("\nTrace ID " + traceid);

        // and display the error message
        renderErrorMessage(errmsg.join("\n"));
    }
}

function bingWebSearch(query, options, key) {

    // scroll to top of window
    window.scrollTo(0, 0);
    if (!query.trim().length) return false; // empty query, do nothing
    //showing quotes before the ajax request is served or showing none if the resonse is empty
    showDiv("noresults", quotes[Math.floor((Math.random()) * 18)]);
    hideDivs("pole", "mainline", "sidebar", "_json", "_headers", "paging1", "paging2", "error");

    var endpoint = "https://api.cognitive.microsoft.com/bing/v7.0/search";
    var request = new XMLHttpRequest();
    var queryurl = endpoint + "?q=" + encodeURIComponent(query) + "&" + options;

    // 
    try {
        request.open("GET", queryurl);
    } catch (e) {
        renderErrorMessage("Bad request (invalid URL)\n" + queryurl);
        return false;
    }

    // add request headers
    request.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    request.setRequestHeader("Accept", "application/json");
    var clientid = retrieveValue(CLIENT_ID_COOKIE);
    if (clientid) request.setRequestHeader("X-MSEdge-ClientID", clientid);

    // event handler for successful response
    request.addEventListener("load", handleOnLoad);

    // event handler for erorrs
    request.addEventListener("error", function() {
        renderErrorMessage("Error completing request");
    });

    // event handler for aborted request
    request.addEventListener("abort", function() {
        renderErrorMessage("Request aborted");
    });

    // send the request
    request.send();
    return false;
}

// build query options from the HTML form
function bingSearchOptions(form) {

    var options = [];
    options.push("mkt=" + form.where.value);
    options.push("SafeSearch=" + (form.safe.checked ? "strict" : "off"));
    if (form.when.value.length) options.push("freshness=" + form.when.value);
    var what = [];
    for (var i = 0; i < form.what.length; i++)
        if (form.what[i].checked) what.push(form.what[i].value);
    if (what.length) {
        options.push("promote=" + what.join(","));
        options.push("answerCount=9");
    }
    options.push("count=" + form.count.value);
    options.push("offset=" + form.offset.value);
    options.push("textDecorations=true");
    options.push("textFormat=HTML");
    return options.join("&");
}

// toggle display of a div (used by JSON/HTTP expandos)
function toggleDisplay(id) {

    var element = document.getElementById(id);
    if (element) {
        var display = element.style.display;
        if (display === "none") {
            element.style.display = "block";
            window.scrollBy(0, 200);
        } else {
            element.style.display = "none";
        }
    }
    return false;
}

// perform a related search (used by related search links)
function doRelatedSearch(query) {

    var bing = document.forms.bing;
    bing.query.value = query;
    bing.offset.value = 0;
    return bingWebSearch(query, bingSearchOptions(bing), getSubscriptionKey());
}

// generate the HTML for paging links (prev/next)
//added prev and next classes for adding margin
function renderPagingLinks(results) {

    var html = [];
    var bing = document.forms.bing;
    var offset = parseInt(bing.offset.value, 10);
    var count = parseInt(bing.count.value, 10);
    html.push("<p class='paging'><i class='number-of-results'>Results " + (offset + 1) + " to " + (offset + count));
    html.push(" of about " + results.webPages.totalEstimatedMatches + ".</i> ");
    html.push("<a class='prev' href='#' onclick='return doPrevSearchPage()'>\<<<</a> | ");
    html.push("<a class='next' href='#' onclick='return doNextSearchPage()'>>>></a>");
    return html.join("");
}

// go to the next page (used by next page link)
function doNextSearchPage() {

    var bing = document.forms.bing;
    var query = bing.query.value;
    var offset = parseInt(bing.offset.value, 10);
    var count = parseInt(bing.count.value, 10);
    offset += count;
    bing.offset.value = offset;
    return bingWebSearch(query, bingSearchOptions(bing), getSubscriptionKey());
}

// go to the previous page (used by previous page link)
function doPrevSearchPage() {

    var bing = document.forms.bing;
    var query = bing.query.value;
    var offset = parseInt(bing.offset.value, 10);
    var count = parseInt(bing.count.value, 10);
    if (offset) {
        offset -= count;
        if (offset < 0) offset = 0;
        bing.offset.value = offset;
        return bingWebSearch(query, bingSearchOptions(bing), getSubscriptionKey());
    }
    alert("You're already at the beginning!");
    return false;
}
var $widget = $("[data-ks-widget]");
var toggleCls = "open";

$widget.on("click", "[data-widget-toggle]", function(e) {
    e.preventDefault();
    $widget.toggleClass(toggleCls);
});

// Beautiful Pics Feed

$(function() {
    // return;
    loadNext();
    $(window).scroll(function() {
        console.log($(window).scrollTop() + ' ' + ($('body').height() - $(window).height() - 10));
        if ($(window).scrollTop() >= $('body').height() - $(window).height() - 10 && !Settings.isLoading) {
            loadNext();
        }
    });
});

/*Animation Start*/

var mTitle = null;

$("h3").each(function(index) {
    mTitle = $(this).html();
    $(this).html("");

    // $("h3").each(function(index) {
    // mTitle = $(this).html();
    // $(this).html("");

    for (var i = 0; i < mTitle.length; i++) {
        if (mTitle.charAt(i) == " ") {
            $(this).append("<span class='jump'> &nbsp; </span>");
        } else {
            $(this).append("<span class='jump'>" + mTitle.charAt(i) + "</span>");
        }
    }
});


var timing = 0;

$('span.jump').each(function(index, element) {
    timing = (index * 50) + 800; //original 500
    $(this).velocity({
        opacity: 1,
        color: "#eee", //flash color
        translateY: 0 //original -5
    }, {
        duration: 600,
        delay: (timing),
        loop: true
    });
    $(this).velocity({
        opacity: 1, //text opacity
        color: "#004040", //text color
        translateY: 0
    }, {
        duration: 200,
        delay: (400 - timing),
        loop: true
    });

    // button fade in fadeout effect. Took the id as a selector
    $("null").velocity({
        opacity: 0,
        translateY: 0 //original -580
    }, {
        duration: 3000,
        delay: (timing),
        loop: true
    }); //original value 800
    $("#back").velocity({
        opacity: 1,
        translateY: 0
    }, {
        duration: 200,
        delay: (400 - timing),
        loop: true
    });
});

//Start copy to clip function
$(".copied").hide();
$(function() {

    $('.address_content').on('click', function() {

        //$(".copied").show();
        //$( ".copied" ).hasClass('on');
        if ($(".copied").hasClass('on')) {
            $(".copied").text("Already Copied :)");
            $(".copied").fadeIn("slow", function() {
                $(".copied").fadeOut("slow", function() {
                    $(".copied").addClass('on');
                });
            });
        } else {
            $(".copied").fadeIn("slow", function() {
                $(".copied").fadeOut("slow", function() {
                    $(".copied").addClass('on');
                });
            });
            SelectText($(this)[0]);
            document.execCommand('copy');
        }

    });

    function SelectText(element) {
        var doc = document,
            range, selection;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});

// copied animation
// t.classList.add('copied');
// setTimeout(function() { t.classList.remove('copied'); }, 1500);
(function () {
var geolocation_store = "";
$.post("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#geolocationaddress").html("&#2631;" + response.region +"&#2631;");
    geolocation_store = response.region;
    $("#hey-city").html("Hey " + geolocation_store + " ! ");
    toggleDisplay("modal");
    console.log("running");
}, "jsonp");

// http://jsfiddle.net/cbtzzLjs/17/



// $('#geolocationaddress').click(function() {
//     $('#screen, #modal').show();
// });

// $('#screen, #modal').click(function() {
//     $('#screen, #modal').hide();
// });
}())

//Bing Image Search Docs
// https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/
// https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/tutorial-bing-image-search-single-page-app
// https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/tutorial-bing-image-search-single-page-app-source

//New Minimal Modal Text:

fetch('https://www.reddit.com/r/KalkiTaiwan.json')
.then(res=>res.json())
.then(res=>res.data.children)
.then(res=>res.map(post=>({
  author: post.data.author,
  link: post.data.url,
  img: post.data.thumbnail,
  title: post.data.title
})))
.then(res=>res.map(render))
.then(res=>console.log(res))



const app = document.querySelector('#app');

const render = post => {
  const node = document.createElement('div');
  node.innerHTML = `
    <h2>
  <img src="${post.img}" />
<br>
      <a class="modal-news" href="${post.link}">      
         ${post.title} 
      </a>
   </h2>`;
  app.appendChild(node);
}

$(function(){
    $("#reveal-news").hide();
    $("#geolocationaddress").on("click", function(){
        $("#reveal-news").toggle();
    });
});

// ANother Reddit News App

// LOCAL STORAGE:

//https://jsfiddle.net/james2doyle/jC9ms/

// Buggy version store name: // // https://jsfiddle.net/yzrzje41/5/

