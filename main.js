document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const hearAbout = document.querySelector('input[name="hearAbout"]:checked').value;
    const contactMethod = document.getElementById('contactMethod').value;
    
    // Get announcements
    const cdOffers = document.getElementById('cdOffers').checked;
    const emailAnnouncements = document.getElementById('emailAnnouncements').checked;
    
    let announcements1 = cdOffers ? 'CD offers' : 'null';
    let announcements2 = emailAnnouncements ? 'email announcements' : 'null';
    
    // Display data in thank you page
    document.getElementById('displayFirstName').textContent = firstName;
    document.getElementById('displayLastName').textContent = lastName;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayDob').textContent = dob;
    document.getElementById('displayHearAbout').textContent = hearAbout;
    document.getElementById('displayAnnouncements1').textContent = announcements1;
    document.getElementById('displayAnnouncements2').textContent = announcements2;
    document.getElementById('displayContactMethod').textContent = contactMethod;
    
    // Hide form and show thank you page
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
    
    // Update URL to simulate page navigation
    window.history.pushState({}, '', window.location.href + '/survey');
});