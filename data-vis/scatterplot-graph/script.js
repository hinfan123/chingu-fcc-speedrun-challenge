let url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
getData(url)

function getData(url) {
    fetch(url)
     .then( response => {
        return response.json()
     })
     .then( data => {
         let fastestTime = 2210;

         //Prep the data for D3 
data.forEach(function(finish) {
    //turn finishing time into seconds behind winner
    finish.behind = finish.Seconds - fastestTime;
  
    //add data legend
    if (finish.Doping != "") {
      finish.legend = "Doping Allegations";
    } else {
      finish.legend = "No Doping Allegation";
    }
  
    //console.log(finish.legend);
  });
  console.log(data);

         draw(data);
     });
}

function draw(jsondata) {
    let margin = {top: 20, right: 20, bottom: 30, left: 20},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var formatCount = d3.format(",.0f"),
  formatTime = d3.time.format("%H:%M"),
  formatMinutes = function(d) {
    var t = new Date(2012, 0, 1, 0, d)
    t.setSeconds(t.getSeconds() + d);
    return formatTime(t);
  };

  // tooltip area

  var tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);


// axes
    let x = d3.scale.linear()
          .range([0, width])
          .domain([60 * 3.5, 0]);
          
          let xAxis = d3.svg.axis()
          .scale(x)
          .ticks(6)
          .orient("bottom")
          .tickFormat(formatMinutes);

          let y = d3.scale.linear()
          .range([0, height])
          .domain([1, 36]);

  let yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10, "");

      let tip = d3.tip()
      .attr('class', 'd3-tip')
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

  var ascents = svg.selectAll("circle")
  .data(jsondata)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return x(d.behind);
  })
  .attr("cy", function(d) {
    return y(d.Place);
  })
  .attr("r", 5)
  .attr("fill", function(d) {
    if (d.Doping == "") {
      return "#999";
    }
    return "#f44";
  })
  .attr("data-legend", function(d) {
    return d.legend;
  })
  .on("mouseover", function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", .9);

      tooltip.html(createToolTip(d))
      .style("left", ( width/2) + "px")
      .style("top", (280) + "px");
  })
  .on("mouseout", function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });

  //text labels
svg.selectAll("text")
.data(jsondata)
.enter()
.append("text")
.text(function(d) {
  return d.Name;
})
.attr("x", function(d) {
  return x(d.behind);
})
.attr("y", function(d) {
  return y(d.Place);
})
.attr("transform", "translate(15,8)");

}

function friendlySeconds(seconds) {
  return parseInt(seconds / 60) + ":" + seconds % 60;
}

function createToolTip(d) {
  var tooltipHTML = "<span class = 'name'>" + d.Name + ": " + d.Nationality + "</span>";
  tooltipHTML += "<br/>Year: " + d.Year + ", Time: " + friendlySeconds(d.Seconds) + "<br/>";
  if (d.doping !== "") {
    tooltipHTML += "<br/>" + d.Doping;
  } else {
    tooltipHTML += "<br/>No Doping Allegation";
  }
  return tooltipHTML;
}
