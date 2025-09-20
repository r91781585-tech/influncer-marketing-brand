# Influencer Marketing Platform

A modern React-based frontend application for connecting brands with influencers. Built with Vite, TailwindCSS, and comprehensive authentication system.

## 🚀 Features

### ✅ Completed Features
- **Authentication System**
  - Login/Register with role selection (Brand/Influencer)
  - Protected routing and role-based access control
  - Persistent authentication state with Zustand
  - Demo credentials for testing

### 🛠 Tech Stack
- **Frontend Framework**: React 18 with Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM v6
- **State Management**: Zustand
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/r91781585-tech/influncer-marketing-brand.git
   cd influncer-marketing-brand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗 Project Structure

```
src/
├── components/
│   └── layout/
│       └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Home.jsx                # Landing page
│   ├── auth/
│   │   ├── Login.jsx           # Login page
│   │   └── Register.jsx        # Registration page
│   ├── brand/
│   │   └── BrandDashboard.jsx  # Brand dashboard
│   └── influencer/
│       ├── InfluencerProfile.jsx        # Influencer dashboard
│       └── InfluencerProfileWizard.jsx  # Profile setup
├── store/
│   └── authStore.js           # Authentication state
├── App.jsx                    # Main app component
├── main.jsx                   # App entry point
└── index.css                  # Global styles
```

## 🎯 Key Features

### Authentication Flow
- Role-based registration (Brand/Influencer)
- JWT token management (ready for backend integration)
- Protected route handling
- Automatic redirects based on authentication state

### User Roles
- **Brand**: Access to brand dashboard for campaign management
- **Influencer**: Access to profile management and campaign discovery

## 📊 Demo Credentials

For testing purposes, you can use these demo accounts:

**Influencer Account:**
- Email: `influencer@demo.com`
- Password: `demo123`

**Brand Account:**
- Email: `brand@demo.com`
- Password: `demo123`

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_SOCKET_URL=ws://localhost:3001
```

### API Integration
The frontend is ready for backend integration. Update the auth store (`src/store/authStore.js`) to connect to your actual API endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

## 🎨 Design System

### Color Palette
- Primary: Blue (#3B82F6)
- Secondary: Gray (#6B7280)
- Success: Green (#10B981)
- Warning: Amber (#F59E0B)
- Error: Red (#EF4444)

### Components
- Responsive design with mobile-first approach
- Consistent styling with TailwindCSS
- Form validation and error handling
- Loading states and user feedback

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting option

## 🔮 Next Steps

### Phase 2 Features (Planned)
- Campaign Management System
- Influencer Discovery & Search
- Messaging System
- Analytics Dashboard
- Profile Management Wizard
- File Upload Capabilities

### Technical Improvements
- Backend API integration
- Real-time messaging with WebSocket
- Advanced form validation
- Testing setup with Jest
- TypeScript migration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation for common solutions

---

Built with ❤️ for the creator economy