var hotel = {
    name: 'Park',
    rooms: 120;
    booked: 77,
    checkValidity : function (){
        return this.rooms - this.booked;
    }
}
elName = document.getElementById('hotelName');
elName.textContent = hotel.name;
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkValidity();