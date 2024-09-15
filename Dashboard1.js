// Chart.js: Rendering the charts for Patients, Therapists, and Sessions

// Patients Chart (Bar)
const ctxPatients = document.getElementById('patientsChart').getContext('2d');
const patientsChart = new Chart(ctxPatients, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example months
    datasets: [{
      label: 'Patients',
      data: [10, 15, 20, 25, 18, 22, 30], // Example data
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Therapists Chart (Line)
const ctxTherapists = document.getElementById('therapistsChart').getContext('2d');
const therapistsChart = new Chart(ctxTherapists, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example months
    datasets: [{
      label: 'Therapists',
      data: [5, 10, 15, 20, 25, 30, 35], // Example data
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Sessions Chart (Pie)
const ctxSessions = document.getElementById('sessionsChart').getContext('2d');
const sessionsChart = new Chart(ctxSessions, {
  type: 'pie',
  data: {
    labels: ['Completed', 'Pending', 'Cancelled'], // Example session statuses
    datasets: [{
      label: 'Sessions',
      data: [50, 30, 20], // Example data
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});
