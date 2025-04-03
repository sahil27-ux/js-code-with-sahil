// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value)/100;
    const bmi = weight / (height * height);
    
    let resultText = `BMI: ${bmi.toFixed(1)} - `;
    if(bmi < 18.5) resultText += "Underweight";
    else if(bmi < 25) resultText += "Normal";
    else if(bmi < 30) resultText += "Overweight";
    else resultText += "Obese";
    
    document.getElementById('bmi-result').innerHTML = resultText;
}

// Workout Logger
let workouts = [];

function logWorkout() {
    const workout = {
        type: document.getElementById('workout-type').value,
        duration: parseInt(document.getElementById('duration').value),
        date: new Date().toLocaleDateString()
    };
    
    workouts.push(workout);
    updateWorkoutList();
}

function updateWorkoutList() {
    const list = document.getElementById('workout-list');
    list.innerHTML = workouts.map(workout => `
        <div class="workout-item">
            <span>${workout.date}</span>
            <span>${workout.type}</span>
            <span>${workout.duration} mins</span>
        </div>
    `).join('');
}

// Progress Chart (Using Chart.js)
const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Active Minutes',
            data: [45, 60, 30, 75, 45, 90, 50],
            borderColor: '#4CAF50',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});