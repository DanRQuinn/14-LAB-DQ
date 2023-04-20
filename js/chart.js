'use strict';

let canvasElem = document.getElementById('chart');

function renderChart() {
  // Instantiate a new AppState
  const appState = new AppState();

  // Use a method on that AppState to load vote data from localStorage.
  appState.loadItems();

  // Create a data object for chart.js using your AppState's allProducts array.
  const labels = appState.allProducts.map(product => product.name);
  const votesData = appState.allProducts.map(product => product.timesClicked);
  const shownData = appState.allProducts.map(product => product.timesShown);

  // Combine the data object with configuration information for chart.js type, colors, etc
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Votes',
        data: votesData,
        backgroundColor: 'rgba(132, 3, 252, 0.8)',
        borderColor: 'rgba(132, 3, 252, 1)',
        borderWidth: 1,
      },
      {
        label: 'Times Shown',
        data: shownData,
        backgroundColor: 'rgba(140, 110, 3, 0.8)',
        borderColor: 'rgba(140, 110, 3, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Call chart.js with the configuration and the canvasElem
  new Chart(canvasElem, {
    type: 'bar',
    data: data,
    options: options,
  });
}

renderChart();
