$(document).ready(function() {
    $(".accordion").accordion();

    $(".autocomplete").autocomplete({
        source: ["Apple", "Banana", "Orange", "Strawberry", "Mango"]
    });

    $(".datepicker").datepicker();

    $("#slider").slider({
        min: 1,
        max: 10,
        value: 5,
        step: 1,
        slide: function(event, ui) {
            $("#slider-value").text(ui.value);
        }
    });
    $("#slider-value").text($("#slider").slider("value"));

    $(".show-hide button").click(function() {
        $(".element-to-toggle").toggle("slow");
    });

    $(".explode button").click(function() {
        $(".element-to-explode").effect("explode", {
            pieces: 9,
            duration: 1000,
            easing: "easeInOutCubic"
        });
    });

    $(".fade-in-out button").click(function() {
        $(".element-to-fade").fadeToggle("slow");
    });

    $(".color-animation button").click(function() {
        $(".element-to-animate").animate({ backgroundColor: "yellow" }, "slow");
    });

    $("#draggable").draggable();

    $("#droppable").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    $("#resizable").resizable();

    $("#selectable").selectable();
});
