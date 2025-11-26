# Tackles Backend API

A simple Node.js/Express backend API for the Tackles appointment booking application.

## 🚀 Features

- ✅ RESTful API for booking appointments
- ✅ CORS enabled for frontend integration
- ✅ In-memory data storage (can be replaced with a database)
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Input validation
- ✅ Error handling

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Navigate to the backend directory:
```bash
cd tackles/backend
```

2. Install dependencies:
```bash
npm install
```

## ⚙️ Configuration

The `.env` file contains the following configuration:

```env
PORT=5000
NODE_ENV=development
```

You can modify these values as needed.

## 🏃 Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Health Check
- **GET** `/api/health` - Check if the server is running

### Bookings

#### Get all bookings
- **GET** `/api/bookings`
- **Response**: 
```json
{
  "success": true,
  "count": 2,
  "data": [...]
}
```

#### Get a single booking
- **GET** `/api/bookings/:id`
- **Response**: 
```json
{
  "success": true,
  "data": {...}
}
```

#### Create a new booking
- **POST** `/api/bookings`
- **Body**:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "startDate": "2025-12-01",
  "endDate": "2025-12-02",
  "shifts": "Morning",
  "priority": "Normal",
  "location": "Dubai",
  "requiredService": "AC Maintenance & Servicing",
  "phone": "+971501234567",
  "budget": "500 AED",
  "description": "Need AC servicing for 2 units"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Appointment booked successfully!",
  "data": {...}
}
```

#### Update a booking
- **PUT** `/api/bookings/:id`
- **Body**: Same as POST (any fields to update)
- **Response**:
```json
{
  "success": true,
  "message": "Booking updated successfully",
  "data": {...}
}
```

#### Delete a booking
- **DELETE** `/api/bookings/:id`
- **Response**:
```json
{
  "success": true,
  "message": "Booking deleted successfully",
  "data": {...}
}
```

## 🔗 Frontend Integration

To connect the frontend to this backend, update the booking form submission in `../frontend/src/pages/Book.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    });
    
    const data = await response.json();
    
    if (data.success) {
      alert('Appointment booked successfully!');
      navigate('/results');
    } else {
      alert('Failed to book appointment: ' + data.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to book appointment. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

## 📝 Notes

- This backend currently uses **in-memory storage**, which means all data will be lost when the server restarts
- For production use, integrate a database like MongoDB, PostgreSQL, or MySQL
- Add authentication and authorization for secure access
- Implement rate limiting for production environments

## 🔐 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Email notifications for bookings
- [ ] Admin dashboard API
- [ ] File upload support
- [ ] Advanced filtering and pagination

## 📄 License

ISC
