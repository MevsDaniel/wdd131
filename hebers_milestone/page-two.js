document.addEventListener('DOMContentLoaded', function() {
    let milestones = JSON.parse(localStorage.getItem('milestones')) || [];
    let categoryDropdown = document.getElementById('milestoneDropdown');
    let ageDropdown = document.getElementById('ageDropdown');
    let milestoneContainer = document.getElementById('milestoneContainer');

    function displayMilestones(filteredMilestones) {
        milestoneContainer.innerHTML = '';
        filteredMilestones.forEach(milestone => {
            let milestoneInfo = document.createElement('div');
            milestoneInfo.className = 'milestone-info';
            milestoneInfo.innerHTML = `
                <p><strong>Category:</strong> ${milestone.category}</p>
                <p><strong>Age:</strong> ${milestone.timeRange}</p>
                <p><strong>Description:</strong> ${milestone.description}</p>
            `;
            milestoneContainer.appendChild(milestoneInfo);
        });
    }

});



