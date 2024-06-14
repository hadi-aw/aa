document.addEventListener("DOMContentLoaded", function() {
    const data = [1, 2, 3, 4, 5];  // Example data

    // Select the body and bind data
    const divs = d3.select("body").selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point");

    // Add hover interactivity
    divs.on("mouseover", function(event, d) {
        d3.select(this).style("background-color", "firebrick");
    }).on("mouseout", function(event, d) {
        d3.select(this).style("background-color", "steelblue");
    });
});
