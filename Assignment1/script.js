$(document).ready(function () {
    // Add smooth scrolling to the page
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800
            );
        }
    });
});
