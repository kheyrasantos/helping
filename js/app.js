// Bar Graph to show coco vs palm
var data = {
    labels : ["Coconut Oil","Palm Oil"],
    datasets : [
        {
            fillColor : "rgba(234,109,108, .8)",
            strokeColor : "rgba(234,109,108, .9)",
            highlightFill: "rgba(147,216,202, .8)",
            highlightStroke: "rgba(147,216,202, .9)",
            data : [.80,5]
        }
    ]

};

// Line Chart
var line_chart_data = {
    labels: ["1990", "1995", "2000", "2005", "2010", "2015", "2020"],
    datasets: [
        {
            label: "Usage (million tonnes)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2, 5, 9, 12, 25, 35, 72],
            spanGaps: false,
        }
    ]
};

// Pie Chart
var pie_chart_data = [
    {
        value: 56.9,
        color:"rgba(147,216,202, 1)",
        highlight: "rgba(234,109,108, 1)",
        label: "Indonesia"
    },
    {
        value: 35.1,
        color: "rgba(147,216,202, .8)",
        highlight: "rgba(234,109,108, .8)",
        label: "Malaysia"
    },
    {
        value: 3.98,
        color: "rgba(147,216,202, .6)",
        highlight: "rgba(234,109,108, .6)",
        label: "Thailand"
    },
    {
        value: 2.25,
        color: "rgba(147,216,202, .4)",
        highlight: "rgba(234,109,108, .4)",
        label: "Colombia"
    },
    {
        value: 1.7,
        color: "rgba(147,216,202, .3)",
        highlight: "rgba(234,109,108, .3)",
        label: "Nigeria"
    }
];


// Increment Number
window.setInterval(function(){
    $.each( $(".deaths"), function( i, elem ) {
         var $elem = $(elem);
         var count = parseInt($elem.html().replace(/,/g, ''));
         var random = Math.floor(Math.random() * 5);
         console.log(random);
         count = count - random;
         $elem.html(formatNumber(count));
    });
}, 3500
);


function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}


// isMobile function
(function(i){var e=/iPhone/i,n=/iPod/i,o=/iPad/i,t=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,r=/Android/i,d=/BlackBerry/i,s=/Opera Mini/i,a=/IEMobile/i,b=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),c=function(i,e){return i.test(e)},l=function(i){var l=i||navigator.userAgent;this.apple={phone:c(e,l),ipod:c(n,l),tablet:c(o,l),device:c(e,l)||c(n,l)||c(o,l)},this.android={phone:c(t,l),tablet:!c(t,l)&&c(r,l),device:c(t,l)||c(r,l)},this.other={blackberry:c(d,l),opera:c(s,l),windows:c(a,l),firefox:c(b,l),device:c(d,l)||c(s,l)||c(a,l)||c(b,l)},this.seven_inch=c(h,l),this.any=this.apple.device||this.android.device||this.other.device||this.seven_inch},v=i.isMobile=new l;v.Class=l})(window);

// console.log("According to Modernizr, SVG is supported");
if (isMobile.android.phone ||
    isMobile.apple.phone ||
    isMobile.apple.ipod ||
    isMobile.other.opera ||
    isMobile.other.firefox ||
    isMobile.other.blackberry ) { //inside the mobile function
        $('.video').css('height','75%');
        $('.no-video').css('padding-top', '30px');
        $('.intro-content h1').css('padding-top', '100px');
        new Chart(document.getElementById("canvas").getContext("2d")).Bar(data);
        new Chart(document.getElementById("canvas2").getContext("2d")).Line(line_chart_data);
        new Chart(document.getElementById("canvas3").getContext("2d")).Pie(pie_chart_data);
    }
else {

    // When scrolled into view, chart animates in

    var inView = false;

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    $(window).scroll(function() {
        if (isScrolledIntoView('.charts')) {
            if (inView) { return; }
            inView = true;
            new Chart(document.getElementById("canvas").getContext("2d")).Bar(data);
            new Chart(document.getElementById("canvas2").getContext("2d")).Line(line_chart_data);
            new Chart(document.getElementById("canvas3").getContext("2d")).Pie(pie_chart_data);
        }
    });

}


// Smooth Scrolling: Smooth scrolls to an ID on the current page.
    // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself.
        //See the docs for more details.
$('a.page-scroll').bind('click touchstart', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
