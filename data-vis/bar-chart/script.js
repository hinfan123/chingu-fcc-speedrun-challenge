let url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
getData(url)

function getData(url) {
    fetch(url)
     .then( response => {
        return response.json()
     })
     .then( data => {
         // console.log(data)
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

    let mindate = new Date(jsondata.data[0][0]),
        maxdate = new Date(jsondata.data[274][0]);

// range
    let x = d3.time.scale()
          .range([0, width])
          .domain([mindate, maxdate]);
          
          let y = d3.scale.linear()
          .range([height, 0])
          .domain([0, d3.max(jsondata.data, function(d) {
            return d[1];
          })]);
    

  let xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(d3.time.years, 5);

  let yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10, "");

      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      let formatCurrency = d3.format("$,.2f");

      let tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        let currentDateTime = new Date(d[0]);
        let year = currentDateTime.getFullYear();
        let month = months[currentDateTime.getMonth()];
        let dollars = d[1];
        return formatCurrency(dollars) + " Billion; Date: <span style='color:red'>" + month + ", " + year + "</span>";
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
      .attr("transform", "translate(" + width + ")")
      .style("text-anchor", "end")
        .text("Year");

  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.8em")
  .style("text-anchor", "end")
  .text("Gross Domestic Product, USA");

     // append the rectangles for the bar chart
     svg.selectAll(".bar")
     .data(jsondata.data)
   .enter().append("rect")
     .attr("class", "bar")
     .attr("x", function(d) { return x(new Date(d[0])); })
     .attr("y", function(d) { return y(d[1]); })
     .attr("height", function(d) { return height - y(d[1]); })
     .attr("width", 10)
     .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

}