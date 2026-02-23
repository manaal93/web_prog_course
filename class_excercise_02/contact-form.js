// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation flags
            let isValid = true;
            let errorMessage = '';
            
            // Validate name
            if (name.length < 2) {
                isValid = false;
                errorMessage += 'Name must be at least 2 characters long.\n';
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
            
            // Validate message
            if (message.length < 10) {
                isValid = false;
                errorMessage += 'Message must be at least 10 characters long.\n';
            }
            
            // Display validation results
            if (!isValid) {
                alert('Please fix the following errors:\n\n' + errorMessage);
                return false;
            }
            
            // If validation passes, show success message and redirect
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            
            // Store form data in sessionStorage (optional)
            sessionStorage.setItem('contactName', name);
            sessionStorage.setItem('contactEmail', email);
            
            // Redirect to thank you page
            setTimeout(function() {
                window.location.href = 'thanks.html';
            }, 500);
            
            return false;
        });
        
        // Real-time validation feedback
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Add input event listeners for real-time feedback
        nameInput.addEventListener('blur', function() {
            if (this.value.trim().length < 2 && this.value.length > 0) {
                this.style.borderColor = '#ff0000';
            } else if (this.value.trim().length >= 2) {
                this.style.borderColor = '#4CAF50';
            } else {
                this.style.borderColor = '';
            }
        });
        
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value) && this.value.length > 0) {
                this.style.borderColor = '#ff0000';
            } else if (emailRegex.test(this.value)) {
                this.style.borderColor = '#4CAF50';
            } else {
                this.style.borderColor = '';
            }
        });
        
        messageInput.addEventListener('blur', function() {
            if (this.value.trim().length < 10 && this.value.length > 0) {
                this.style.borderColor = '#ff0000';
            } else if (this.value.trim().length >= 10) {
                this.style.borderColor = '#4CAF50';
            } else {
                this.style.borderColor = '';
            }
        });
    }
});

// Reset form function
function resetContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.reset();
        // Reset border colors
        document.getElementById('name').style.borderColor = '';
        document.getElementById('email').style.borderColor = '';
        document.getElementById('message').style.borderColor = '';
    }
}
