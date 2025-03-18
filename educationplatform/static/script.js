// Teacher data (mock database)
const teachers = [
   {
     id: 1,
     name: "Dr. Sarah Johnson",
     specialty: "Mathematics",
     description: "PhD in Mathematics with 10+ years of teaching experience in calculus and algebra.",
     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop",
     experience: 10,
     rating: 4.8,
     students: 428,
     courses: 6,
     bio: "Dr. Johnson specializes in making complex mathematical concepts accessible to students at all levels. Her research focuses on mathematical education methods and she has published several papers on innovative teaching techniques. She believes in a hands-on approach to learning and incorporates real-world problems into her lessons."
   },
   {
     id: 2,
     name: "Prof. Michael Chen",
     specialty: "Physics",
     description: "Theoretical physicist with expertise in quantum mechanics and relativity theory.",
     image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
     experience: 15,
     rating: 4.9,
     students: 356,
     courses: 4,
     bio: "Professor Chen has been fascinated by the laws of physics since childhood. After completing his doctorate at MIT, he dedicated his career to both research and education. His teaching philosophy centers on building intuition for physical concepts through demonstrations and thought experiments. He's known for his ability to explain complex theories in simple, relatable terms."
   },
   {
     id: 3,
     name: "Emma Rodriguez",
     specialty: "Computer Science",
     description: "Software engineer and educator specializing in web development and programming languages.",
     image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop", 
     experience: 8,
     rating: 4.7,
     students: 512,
     courses: 8,
     bio: "Emma combines her industry experience as a senior developer with her passion for teaching. She has worked with startups and major tech companies before transitioning to education full-time. Her courses emphasize practical skills and project-based learning. Emma is particularly interested in making coding accessible to underrepresented groups in tech."
   },
   {
     id: 4,
     name: "Dr. Robert Williams",
     specialty: "Biology",
     description: "Molecular biologist with research focus on genetics and cell development.",
     image: "https://images.unsplash.com/photo-1671725779253-115c02bc5dbc?w=600&h=600&fit=crop",
     experience: 12,
     rating: 4.6,
     students: 271,
     courses: 5,
     bio: "Dr. Williams brings laboratory experience into the classroom, helping students understand biological concepts through experiments and case studies. His research has been published in leading scientific journals, and he continues to contribute to the field while teaching. He's passionate about connecting biological sciences to environmental and health issues relevant to students' lives."
   }
 ];
 
 // Schedule data (mock)
 const teacherSchedules = {
   1: {
     Monday: [
       { time: "10:00 - 11:30", status: "available" },
       { time: "13:00 - 14:30", status: "booked" },
       { time: "15:00 - 16:30", status: "available" }
     ],
     Tuesday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "available" }
     ],
     Wednesday: [
       { time: "13:00 - 14:30", status: "booked" },
       { time: "15:00 - 16:30", status: "booked" }
     ],
     Thursday: [
       { time: "10:00 - 11:30", status: "available" },
       { time: "14:00 - 15:30", status: "available" }
     ],
     Friday: [
       { time: "09:00 - 10:30", status: "booked" },
       { time: "13:00 - 14:30", status: "available" }
     ],
     Saturday: [],
     Sunday: []
   },
   2: {
     Monday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "booked" }
     ],
     Tuesday: [
       { time: "14:00 - 15:30", status: "available" },
       { time: "16:00 - 17:30", status: "available" }
     ],
     Wednesday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "available" }
     ],
     Thursday: [
       { time: "14:00 - 15:30", status: "booked" },
       { time: "16:00 - 17:30", status: "booked" }
     ],
     Friday: [
       { time: "11:00 - 12:30", status: "available" },
       { time: "14:00 - 15:30", status: "available" }
     ],
     Saturday: [
       { time: "10:00 - 11:30", status: "available" }
     ],
     Sunday: []
   },
   3: {
     Monday: [
       { time: "14:00 - 15:30", status: "booked" },
       { time: "16:00 - 17:30", status: "available" }
     ],
     Tuesday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "available" }
     ],
     Wednesday: [
       { time: "14:00 - 15:30", status: "available" },
       { time: "16:00 - 17:30", status: "booked" }
     ],
     Thursday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "available" }
     ],
     Friday: [
       { time: "14:00 - 15:30", status: "available" },
       { time: "16:00 - 17:30", status: "available" }
     ],
     Saturday: [
       { time: "10:00 - 11:30", status: "available" },
       { time: "13:00 - 14:30", status: "available" }
     ],
     Sunday: []
   },
   4: {
     Monday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "booked" }
     ],
     Tuesday: [
       { time: "14:00 - 15:30", status: "booked" },
       { time: "16:00 - 17:30", status: "available" }
     ],
     Wednesday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "available" }
     ],
     Thursday: [
       { time: "14:00 - 15:30", status: "booked" },
       { time: "16:00 - 17:30", status: "available" }
     ],
     Friday: [
       { time: "09:00 - 10:30", status: "available" },
       { time: "11:00 - 12:30", status: "available" }
     ],
     Saturday: [],
     Sunday: []
   }
 };
 
 // Courses data (mock)
 const teacherCourses = {
   1: [
     { name: "Advanced Calculus", tag: "Mathematics", description: "Master differential and integral calculus with practical applications." },
     { name: "Linear Algebra", tag: "Mathematics", description: "Understand vectors, matrices, and linear transformations." }
   ],
   2: [
     { name: "Quantum Physics", tag: "Physics", description: "Explore the fascinating world of quantum mechanics and particle physics." },
     { name: "Classical Mechanics", tag: "Physics", description: "Study motion, forces, and energy in physical systems." }
   ],
   3: [
     { name: "Web Development Bootcamp", tag: "Programming", description: "Learn HTML, CSS, JavaScript and build responsive websites." },
     { name: "Python Fundamentals", tag: "Programming", description: "Master Python programming from basics to advanced concepts." },
     { name: "Data Structures & Algorithms", tag: "Computer Science", description: "Implement essential data structures and algorithms in JavaScript." }
   ],
   4: [
     { name: "Molecular Biology", tag: "Biology", description: "Understand the molecular basis of biological activity in living systems." },
     { name: "Genetics", tag: "Biology", description: "Study inheritance patterns and genetic variations in organisms." }
   ]
 };
 
 // Mobile menu toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const mainNav = document.querySelector('.main-nav');
 
 if (menuToggle) {
   menuToggle.addEventListener('click', () => {
     menuToggle.classList.toggle('active');
     mainNav.classList.toggle('active');
   });
 }
 
 // Close mobile menu when clicking on links
 document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', () => {
     menuToggle.classList.remove('active');
     mainNav.classList.remove('active');
   });
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
     if (this.getAttribute('href') === '#') return;
     
     e.preventDefault();
     const targetId = this.getAttribute('href').substring(1);
     const targetElement = document.getElementById(targetId);
     
     if (targetElement) {
       window.scrollTo({
         top: targetElement.offsetTop - 80,
         behavior: 'smooth'
       });
     }
   });
 });
 
 // Handle form submissions
 const contactForm = document.querySelector('.contact-form');
 if (contactForm) {
   contactForm.addEventListener('submit', handleContactForm);
 }
 
 const loginForm = document.getElementById('login-form');
 if (loginForm) {
   loginForm.addEventListener('submit', handleLoginForm);
 }
 
 const registerForm = document.getElementById('register-form');
 if (registerForm) {
   registerForm.addEventListener('submit', handleRegisterForm);
 }
 
 const bookingForm = document.querySelector('.booking-form');
 if (bookingForm) {
   bookingForm.addEventListener('submit', handleBookingForm);
 }
 
 // Auth type toggle (on login and register pages)
 const authTypeButtons = document.querySelectorAll('.auth-type-btn');
 if (authTypeButtons.length > 0) {
   authTypeButtons.forEach(button => {
     button.addEventListener('click', () => {
       document.querySelectorAll('.auth-type-btn').forEach(btn => btn.classList.remove('active'));
       button.classList.add('active');
       
       // Show/hide teacher-specific fields on register page
       if (button.getAttribute('data-type') === 'teacher') {
         document.querySelector('.teacher-fields')?.style.setProperty('display', 'block');
       } else {
         document.querySelector('.teacher-fields')?.style.setProperty('display', 'none');
       }
     });
   });
 }
 
 // Load teachers on the main page
 function loadTeachers() {
   const teachersList = document.getElementById('teachers-list');
   
   if (teachersList) {
     teachersList.innerHTML = '';
     
     teachers.forEach(teacher => {
       const teacherCard = document.createElement('div');
       teacherCard.className = 'teacher-card';
       teacherCard.innerHTML = `
         <div class="teacher-card-image" style="background-image: url('${teacher.image}')"></div>
         <div class="teacher-card-content">
           <h3>${teacher.name}</h3>
           <span class="teacher-specialty">${teacher.specialty}</span>
           <p>${teacher.description}</p>
           <a href="teacher-detail.html?id=${teacher.id}" class="text-link">View Profile</a>
         </div>
       `;
       
       teachersList.appendChild(teacherCard);
     });
   }
 }
 
 // Load teacher profile on the detail page
 function loadTeacherProfile() {
   const profileContainer = document.getElementById('teacher-profile');
   const scheduleContainer = document.getElementById('teacher-schedule');
   const coursesGrid = document.querySelector('.teacher-courses .courses-grid');
   
   if (profileContainer) {
     const urlParams = new URLSearchParams(window.location.search);
     const teacherId = parseInt(urlParams.get('id'));
     
     const teacher = teachers.find(t => t.id === teacherId);
     
     if (teacher) {
       // Update page title
       document.title = `${teacher.name} - EduPlatform`;
       
       // Populate teacher profile
       profileContainer.innerHTML = `
         <div class="profile-image" style="background-image: url('${teacher.image}')"></div>
         <div class="profile-content">
           <h1>${teacher.name}</h1>
           <span class="profile-specialty">${teacher.specialty}</span>
           
           <div class="profile-stats">
             <div class="stat-item">
               <div class="stat-value">${teacher.experience}+</div>
               <div class="stat-label">Years Experience</div>
             </div>
             <div class="stat-item">
               <div class="stat-value">${teacher.rating}</div>
               <div class="stat-label">Rating</div>
             </div>
             <div class="stat-item">
               <div class="stat-value">${teacher.students}</div>
               <div class="stat-label">Students</div>
             </div>
             <div class="stat-item">
               <div class="stat-value">${teacher.courses}</div>
               <div class="stat-label">Courses</div>
             </div>
           </div>
           
           <p>${teacher.bio}</p>
         </div>
       `;
       
       // Populate schedule
       if (scheduleContainer) {
         const schedule = teacherSchedules[teacherId];
         const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
         
         let scheduleHTML = `
           <div class="schedule-header">
             ${days.map(day => `<div class="day-name">${day}</div>`).join('')}
           </div>
           <div class="schedule-body">
         `;
         
         days.forEach(day => {
           const daySlots = schedule[day] || [];
           
           scheduleHTML += `<div class="day-column" data-day="${day}">`;
           
           if (daySlots.length > 0) {
             daySlots.forEach(slot => {
               scheduleHTML += `
                 <div class="time-slot ${slot.status}">
                   ${slot.time} - ${slot.status === 'available' ? 'Available' : 'Booked'}
                 </div>
               `;
             });
           } else {
             scheduleHTML += `<div class="time-slot">No sessions</div>`;
           }
           
           scheduleHTML += `</div>`;
         });
         
         scheduleHTML += `</div>`;
         scheduleContainer.innerHTML = scheduleHTML;
       }
       
       // Populate courses
       if (coursesGrid) {
         const courses = teacherCourses[teacherId] || [];
         
         coursesGrid.innerHTML = '';
         
         courses.forEach(course => {
           const courseCard = document.createElement('div');
           courseCard.className = 'course-card';
           courseCard.innerHTML = `
             <div class="course-image"></div>
             <div class="course-content">
               <span class="tag">${course.tag}</span>
               <h3>${course.name}</h3>
               <p>${course.description}</p>
               <a href="#" class="text-link">View Course</a>
             </div>
           `;
           
           coursesGrid.appendChild(courseCard);
         });
       }
       
       // Populate booking time slots
       const bookingTimeSelect = document.getElementById('booking-time');
       if (bookingTimeSelect) {
         bookingTimeSelect.innerHTML = '<option value="">Select a time</option>';
         
         // Get all available slots
         Object.keys(schedule).forEach(day => {
           const availableSlots = schedule[day].filter(slot => slot.status === 'available');
           
           availableSlots.forEach(slot => {
             const option = document.createElement('option');
             option.value = `${day}|${slot.time}`;
             option.textContent = `${day}, ${slot.time}`;
             bookingTimeSelect.appendChild(option);
           });
         });
       }
     }
   }
 }
 
 // Form submission handlers
 function handleContactForm(e) {
   e.preventDefault();
   
   const nameInput = document.getElementById('name');
   const emailInput = document.getElementById('email');
   const subjectInput = document.getElementById('subject');
   const messageInput = document.getElementById('message');
   
   if (validateForm([
     { input: nameInput, message: 'Please enter your name' },
     { input: emailInput, message: 'Please enter a valid email address', validator: validateEmail },
     { input: subjectInput, message: 'Please enter a subject' },
     { input: messageInput, message: 'Please enter your message' }
   ])) {
     // Simulate form submission
     const submitButton = e.target.querySelector('button[type="submit"]');
     const originalText = submitButton.textContent;
     
     submitButton.textContent = 'Sending...';
     submitButton.disabled = true;
     
     setTimeout(() => {
       // Reset form
       e.target.reset();
       
       // Show success message
       submitButton.textContent = 'Message Sent';
       
       setTimeout(() => {
         submitButton.textContent = originalText;
         submitButton.disabled = false;
       }, 2000);
     }, 1500);
   }
 }
 
 function handleLoginForm(e) {
   e.preventDefault();
   
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const userType = document.querySelector('.auth-type-btn.active').getAttribute('data-type');
   
   if (validateForm([
     { input: emailInput, message: 'Please enter a valid email address', validator: validateEmail },
     { input: passwordInput, message: 'Please enter your password' }
   ])) {
     // Simulate authentication
     const submitButton = e.target.querySelector('button[type="submit"]');
     const formMessage = document.querySelector('.form-message');
     
     submitButton.textContent = 'Logging in...';
     submitButton.disabled = true;
     
     setTimeout(() => {
       if (emailInput.value === 'test@example.com' && passwordInput.value === 'password') {
         // Successful login
         formMessage.textContent = `Successfully logged in as ${userType}`;
         formMessage.className = 'form-message success';
         
         // Redirect to home page after successful login
         setTimeout(() => {
           window.location.href = 'index.html';
         }, 1500);
       } else {
         // Failed login
         formMessage.textContent = 'Invalid email or password';
         formMessage.className = 'form-message error';
         submitButton.textContent = 'Login';
         submitButton.disabled = false;
       }
     }, 1500);
   }
 }
 
 function handleRegisterForm(e) {
   e.preventDefault();
   
   const nameInput = document.getElementById('fullname');
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const confirmPasswordInput = document.getElementById('confirm-password');
   const termsCheckbox = document.getElementById('terms');
   const userType = document.querySelector('.auth-type-btn.active').getAttribute('data-type');
   
   const validations = [
     { input: nameInput, message: 'Please enter your full name' },
     { input: emailInput, message: 'Please enter a valid email address', validator: validateEmail },
     { input: passwordInput, message: 'Password must be at least 6 characters', validator: (value) => value.length >= 6 },
     { input: confirmPasswordInput, message: 'Passwords do not match', validator: (value) => value === passwordInput.value },
     { input: termsCheckbox, message: 'You must agree to the terms and conditions', validator: (value) => termsCheckbox.checked }
   ];
   
   // Add teacher-specific validations if registering as a teacher
   if (userType === 'teacher') {
     const specialtyInput = document.getElementById('specialty');
     const experienceInput = document.getElementById('experience');
     const bioInput = document.getElementById('bio');
     
     validations.push(
       { input: specialtyInput, message: 'Please enter your specialty' },
       { input: experienceInput, message: 'Please enter your years of experience' },
       { input: bioInput, message: 'Please enter a short bio' }
     );
   }
   
   if (validateForm(validations)) {
     // Simulate registration
     const submitButton = e.target.querySelector('button[type="submit"]');
     const formMessage = document.querySelector('.form-message');
     
     submitButton.textContent = 'Creating account...';
     submitButton.disabled = true;
     
     setTimeout(() => {
       // Successful registration
       formMessage.textContent = `Account created successfully as ${userType}`;
       formMessage.className = 'form-message success';
       
       // Reset form
       e.target.reset();
       
       // Redirect to login page after successful registration
       setTimeout(() => {
         window.location.href = 'login.html';
       }, 1500);
     }, 1500);
   }
 }
 
 function handleBookingForm(e) {
   e.preventDefault();
   
   const dateInput = document.getElementById('booking-date');
   const timeInput = document.getElementById('booking-time');
   const topicInput = document.getElementById('booking-topic');
   
   if (validateForm([
     { input: dateInput, message: 'Please select a date' },
     { input: timeInput, message: 'Please select a time slot' },
     { input: topicInput, message: 'Please enter a topic for your session' }
   ])) {
     // Simulate booking submission
     const submitButton = e.target.querySelector('button[type="submit"]');
     const originalText = submitButton.textContent;
     
     submitButton.textContent = 'Processing...';
     submitButton.disabled = true;
     
     setTimeout(() => {
       // Reset form
       e.target.reset();
       
       // Show success message
       submitButton.textContent = 'Booking Requested';
       
       setTimeout(() => {
         submitButton.textContent = originalText;
         submitButton.disabled = false;
       }, 2000);
     }, 1500);
   }
 }
 
 // Form validation helpers
 function validateForm(validations) {
   let isValid = true;
   
   validations.forEach(validation => {
     const input = validation.input;
     const errorElement = input.parentElement.querySelector('.form-error');
     let errorMessage = '';
     
     // Skip validation if input is not found
     if (!input) return;
     
     if (!input.value && input.type !== 'checkbox') {
       errorMessage = validation.message || 'This field is required';
       isValid = false;
     } else if (validation.validator && !validation.validator(input.value)) {
       errorMessage = validation.message || 'Invalid input';
       isValid = false;
     }
     
     if (errorElement) {
       errorElement.textContent = errorMessage;
     }
     
     // Add error class to input
     if (errorMessage) {
       input.classList.add('error');
     } else {
       input.classList.remove('error');
     }
   });
   
   return isValid;
 }
 
 function validateEmail(email) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
 }
 
 // Clear error messages on input
 document.addEventListener('input', function(e) {
   if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
     const errorElement = e.target.parentElement.querySelector('.form-error');
     if (errorElement) {
       errorElement.textContent = '';
     }
     e.target.classList.remove('error');
   }
 });
 
 // Initialize page-specific functions
 document.addEventListener('DOMContentLoaded', () => {
   // Load teachers on main page
   loadTeachers();
   
   // Load teacher profile on detail page
   loadTeacherProfile();
   
   // Add loading animation
   document.body.classList.add('loaded');
 });