document.getElementById('milestoneForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let category = document.getElementById('milestoneCategory').value;
    let timeRange = document.getElementById('milestoneTimeRange').value;
    let description = document.getElementById('milestoneDescription').value;
    
    let milestone = {
        category: category,
        timeRange: timeRange,
        description: description
    };

    let milestones = JSON.parse(localStorage.getItem('milestones')) || [];
    milestones.push(milestone);
    localStorage.setItem('milestones', JSON.stringify(milestones));

    alert('Milestone saved successfully!');
    document.getElementById('milestoneForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const birthdate = '2022-09-07';
    let heberAgeDisplay = document.getElementById('heberAgeDisplay');
    let milestoneImage = document.getElementById('milestoneImage');

    function calculateAge(birthdate) {
        let birthDate = new Date(birthdate);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        let months = monthDifference >= 0 ? monthDifference : 12 + monthDifference;
        return { years: age, months: months };
    }

    function displayHeberAge() {
        let { years, months } = calculateAge(birthdate);
        heberAgeDisplay.innerText = `Heber's Current Age: ${years} years and ${months} months`;
        

        let ageInMonths = years * 12 + months;
        let imageUrl = '';
        
     
        if (ageInMonths <= 12) imageUrl = 'milestone-pictures/12months.png';
        else if (ageInMonths <= 15) imageUrl = 'milestone-pictures/15months.png';
        else if (ageInMonths <= 24) imageUrl = 'milestone-pictures/2years.png';
        else if (ageInMonths <= 30) imageUrl = 'milestone-pictures/30months.png';
        else if (ageInMonths <= 36) imageUrl = 'milestone-pictures/3years.png';
        else if (ageInMonths <= 48) imageUrl = 'milestone-pictures/4years.png';
        else if (ageInMonths <= 60) imageUrl = 'milestone-pictures/5years.png';


        if (imageUrl) {
            milestoneImage.src = imageUrl;
            milestoneImage.style.display = 'block';
        }
    }

    displayHeberAge();
});