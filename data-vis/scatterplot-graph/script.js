let url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
getData(url)

function getData(url) {
    fetch(url)
     .then( response => {
        return response.json()
     })
     .then( data => {
         console.log(data)
         d3.select(".notes")
      .append("text")
      .text(data.description);
         draw(data);
     })
}

function draw(jsondata) {
    let margin = {top: 20, right: 20, bottom: 30, left: 70},
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    var formatCount = d3.format(",.0f"),
  formatTime = d3.time.format("%H:%M"),
  formatMinutes = function(d) {
    var t = new Date(2012, 0, 1, 0, d)
    t.setSeconds(t.getSeconds() + d);
    return formatTime(t);
  };

// axes
    let x = d3.scale.linear()
          .range([0, width])
          .domain([[60 * 3.5, 0]]);
          
          let xAxis = d3.svg.axis()
          .scale(x)
          .ticks(6)
          .orient("bottom")
          .tickFormat(formatMinutes);

          let y = d3.scale.linear()
          .range([height, 0])
          .domain([1, 36]);

  let yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10, "");

      let tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return d.Name + ": " + d.Nationality + "<br/>Year: " + d.Year + ", Time: " + d.Time + "<br/><br/>" + d.Doping;
      })

      let svg = d3.select(".chart")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", 
                    "translate(" + margin.left + "," + margin.top + ")")

      svg.call(tip);


  // add the x and y Axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
        .text("Minutes Behind Fastest Time");

  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("class", "label")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.8em")
  .style("text-anchor", "end")
  .text("Ranking");

}