function calculate() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interest_rate").value);
    var timePeriods = [10, 20, 30];
    var results = [];

    for (var i = 0; i < timePeriods.length; i++) {
        var time = timePeriods[i];
        var futureValue = principal * Math.pow(1 + interestRate/100, time);
        results.push({
            time: time,
            futureValue: futureValue.toFixed(2)
        });
    }

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";

    var table = document.createElement("table");
    table.className = "results-table";
    var headerRow = document.createElement("tr");
    var header1 = document.createElement("th");
    var header2 = document.createElement("th");
    header1.innerHTML = "Time Period";
    header2.innerHTML = "Future Value";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);

    for (var j = 0; j < results.length; j++) {
        var result = results[j];
        var row = document.createElement("tr");
        var timeCell = document.createElement("td");
        var valueCell = document.createElement("td");
        timeCell.innerHTML = result.time + " years";
        valueCell.innerHTML = result.futureValue;
        row.appendChild(timeCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    }

    resultsDiv.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        calculate();
    });
});
