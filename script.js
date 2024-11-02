// Sample data representing equipment available
const equipments = [
    { 
        id: 1, 
        name: 'Textbook: Introduction to C', 
        owner: 'Ankush', 
        contact: 'ankush@ug.cusat.ac.in', 
        image: 'path/image1.jpg', 
        available: true,
        reviews: []
    },
    { 
        id: 2, 
        name: 'Laptop', 
        owner: 'Binyanshu', 
        contact: 'binyanshu@ug.cusat.ac.in', 
        image: 'path/image2.jpg', 
        available: false,
        reviews: []
    },
    { 
        id: 3, 
        name: 'Headphones', 
        owner: 'Athira', 
        contact: 'athira@ug.cusat.ac.in', 
        image: 'path/image3.jpg', 
        available: true,
        reviews: []
    },
    { 
        id: 4, 
        name: 'Projector', 
        owner: 'Mimansha', 
        contact: 'mimansha@ug.cusat.ac.in', 
        image: 'path/image4.jpg', 
        available: true,
        reviews: []
    },
    { 
        id: 5, 
        name: 'Drafter', 
        owner: 'Akshay', 
        contact: 'akshay@ug.cusat.ac.in', 
        image: 'path/image5.jpg', 
        available: true,
        reviews: []
    }
];

// Function to display equipment
function displayEquipments() {
    const equipmentList = document.getElementById('equipment-list');
    equipmentList.innerHTML = ''; // Clear the list

    equipments.forEach(equipment => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${equipment.image}" alt="${equipment.name}">
            <div>
                <h3>${equipment.name}</h3>
                <p>Owned by: ${equipment.owner} (Contact: ${equipment.contact})</p>
                <p>Status: ${equipment.available ? 'Available' : 'Not Available'}</p>
                <button onclick="borrowEquipment(${equipment.id})" ${!equipment.available ? 'disabled' : ''}>Borrow</button>
                <button onclick="returnEquipment(${equipment.id})" ${equipment.available ? 'disabled' : ''}>Return</button>
                
                <div class="review-container">
                    <h4>Reviews:</h4>
                    <div id="reviews-${equipment.id}">
                        ${equipment.reviews.map(review => `<p>${review}</p>`).join('')}
                    </div>
                    <input type="text" class="review-input" id="review-input-${equipment.id}" placeholder="Write a review...">
                    <button onclick="submitReview(${equipment.id})">Submit Review</button>
                    <div class="rating">
                        <span>Rate: </span>
                        ${[1, 2, 3, 4, 5].map(star => `<span class="star" onclick="rateEquipment(${equipment.id}, ${star})">★</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        equipmentList.appendChild(li);
    });
}

// Function to handle borrowing equipment
function borrowEquipment(id) {
    const equipment = equipments.find(e => e.id === id);
    if (equipment && equipment.available) {
        equipment.available = false; // Mark as not available
        alert(`You have requested to borrow: ${equipment.name} owned by ${equipment.owner}.`);
        displayEquipments(); // Update the display
    }
}

// Function to handle returning equipment
function returnEquipment(id) {
    const equipment = equipments.find(e => e.id === id);
    if (equipment) {
        equipment.available = true; // Mark as available
        alert(`You have returned: ${equipment.name}.`);
        displayEquipments(); // Update the display
    }
}

// Function to submit a review
function submitReview(id) {
    const reviewInput = document.getElementById(`review-input-${id}`);
    const reviewText = reviewInput.value.trim();
    if (reviewText) {
        const equipment = equipments.find(e => e.id === id);
        equipment.reviews.push(reviewText);
        reviewInput.value = ''; // Clear input
        displayEquipments(); // Update the display
    } else {
        alert('Please write a review before submitting.');
    }
}

// Function to rate the equipment
function rateEquipment(id, rating) {
    const equipment = equipments.find(e => e.id === id);
    alert(`You rated ${equipment.name} with ${rating} star(s).`);
    // You can further implement logic to save the rating if needed
}

// Initial display of equipment
displayEquipments();
