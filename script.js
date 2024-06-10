document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('message').value;

    const formData = {
        name,
        address,
        attendance,
        message
    };

    console.log('Form Data Submitted: ', formData);

    alert('Terima kasih atas konfirmasinya!');
    
    document.getElementById('rsvpForm').reset();
});
