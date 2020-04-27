$(document).ready(function() {

    var expandable = document.getElementsByClassName("expandable");

    // This function changes the icon colour of the selected project
    function changeIcons(icons, color) {
        for (var icon=0; icon < icons.length; icon++) {
            icons[icon].style.color = color;
        }
    }

    // This function expands an area of text so more details can be read
    function expand(area) {
        var i = $(area).index();

        // If it's a project
        if (i > 0) {
            var projectName = area.children[0].children[0];
            var description = area.children[0].children[2];
            var arrow = area.children[0].children[2].children[0];
            var icons =  area.children[0].children[1].children;
        }
        // Close the selected area
        if (expandable[i].style.display == "grid") {
            expandable[i].style.display = "none";
            if (i == 0) { // If it's about section
                area.innerHTML = "Read more";
            }
            else { // Project
                area.style.background = "";
                projectName.style.color = "#fa8072";
                description.style.color = "grey";
                arrow.className = "fa fa-angle-down";
                arrow.style.color = "grey";
                changeIcons(icons, "#04b976");
            }
        }
        // Open the selected area
        else {
            expandable[i].style.display = "grid";
            if (i == 0) { // If it's about section
                area.innerHTML = "Read less";
            } else { // Project
                area.style.background = "#79e79e";
                projectName.style.color = "white";
                description.style.color = "#fa8072";
                arrow.className = "fa fa-angle-up";
                arrow.style.color = "#fa8072";
                changeIcons(icons, "#fa8072");
            }
        }
    }

    // Click project
    $(".brief").click(function() {
        expand(this.parentElement);
    });

    // Click read more
    $(".readmore a").click(function() {
        expand(this);
    });
});