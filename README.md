# Contact Book API - React & Django

A full-stack contact management application built with Django REST API backend and React frontend. This application allows users to manage their contacts with full CRUD operations through a clean, responsive interface.

## 🌐 Live Demo

- **Frontend**: [https://contact-book-api-react-django.vercel.app/](https://contact-book-api-react-django.vercel.app/)
- **Backend**: Hosted on PythonAnywhere

## 🚀 Features

- **Complete Contact Management**: Add, view, edit, and delete contacts  
- **RESTful API**: Django REST Framework backend with proper API endpoints  
- **Responsive Design**: Modern React frontend that works on all devices  
- **Real-time Updates**: Dynamic contact list updates without page refresh  
- **Search & Filter**: Easy contact search and filtering capabilities  
- **Form Validation**: Client and server-side validation for data integrity  

## 🛠️ Tech Stack

### Backend
- **Django**: Python web framework  
- **Django REST Framework**: For building RESTful APIs  
- **SQLite/PostgreSQL**: Database (configurable)  
- **CORS Headers**: For cross-origin requests  

### Frontend
- **React**: JavaScript library for building user interfaces  
- **Axios**: HTTP client for API requests  
- **CSS3**: Modern styling and responsive design  
- **HTML5**: Semantic markup  

## 📁 Project Structure

```
Contact-Book-API-React-Django/
├── backend/
│   ├── contact_api/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── contacts/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8+  
- Node.js 14+  
- npm or yarn  

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jayesh-Kamble/Contact-Book-API-React-Django.git
   cd Contact-Book-API-React-Django
   ```

2. **Set up Python virtual environment**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server**
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000/`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The React app will be available at `http://localhost:3000/`

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts/` | Get all contacts |
| POST | `/api/contacts/` | Create a new contact |
| GET | `/api/contacts/{id}/` | Get a specific contact |
| PUT | `/api/contacts/{id}/` | Update a contact |
| DELETE | `/api/contacts/{id}/` | Delete a contact |

### Example API Response

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

## 🔧 Configuration

### Backend Configuration

Update `backend/contact_api/settings.py` for your environment:

```python
# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# CORS settings
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://contact-book-api-react-django.vercel.app",
]
```

### Frontend Configuration

Update API base URL in `frontend/src/services/api.js`:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
```

## 🚀 Deployment

### Backend Deployment (PythonAnywhere)

1. Upload your code to PythonAnywhere  
2. Set up a virtual environment  
3. Install dependencies  
4. Configure WSGI file  
5. Update allowed hosts and CORS settings  

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel  
2. Set environment variables for API URL  
3. Deploy automatically on push to main branch  

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jayesh Kamble**  
- GitHub: [@Jayesh-Kamble](https://github.com/Jayesh-Kamble)  
- LinkedIn: [Connect with me](https://linkedin.com/in/jayesh-kamble)

## 🙏 Acknowledgments

- Django REST Framework documentation  
- React documentation  
- Vercel for frontend hosting  
- PythonAnywhere for backend hosting  

⭐ If you found this project helpful, please give it a star!
