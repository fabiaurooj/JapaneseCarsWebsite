# 🚗 ATIF TRADING LTD - Used Japanese Cars Website

A modern, colorful website for buying and selling used Japanese vehicles. Features car listings with advanced filtering, detailed car information, and customer inquiry management.

## Features

✅ **Homepage** - Featured cars carousel with brand showcase  
✅ **Car Listings** - Browse all cars with advanced search & filtering  
✅ **Detailed Information** - Full specs, photos, features, and pricing  
✅ **Contact Form** - Easy customer inquiry system  
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices  
✅ **Modern UI** - Colorful, professional design with Japanese aesthetic  

## Project Structure

```
JapaneseCarsWebsite/
├── index.html              (Homepage)
├── listings.html           (All cars with filters)
├── car-detail.html         (Individual car information)
├── contact.html            (Contact & inquiry form)
├── css/
│   └── styles.css          (All styling)
├── js/
│   ├── api.js              (API calls & data)
│   └── script.js           (Frontend functionality)
├── images/                 (Car images directory)
├── backend/
│   ├── server.js           (Express server)
│   └── package.json        (Dependencies)
└── README.md               (This file)
```

## Getting Started

### Frontend Only (Static Site)

1. Simply open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx http-server
   ```

2. Visit `http://localhost:8000` (or your server port)

### Frontend + Backend

1. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the backend server:**
   ```bash
   npm start
   # Or for development with auto-reload:
   npm run dev
   ```

3. **In another terminal, start the frontend:**
   ```bash
   npx http-server
   ```

4. Visit `http://localhost:3000` or `http://localhost:8080`

## Features Breakdown

### 🏠 Homepage
- Hero section with call-to-action
- Featured cars showcase
- Popular Japanese brands display
- Why choose us benefits section

### 🚗 Listings Page
- **Advanced Filters:**
  - Brand selection
  - Year range
  - Price range
  - Maximum mileage
  - Transmission type (Auto/Manual)
  - Condition (Excellent/Good/Fair)
- Grid layout with 3 columns
- Quick view with key specs
- Condition badges with color coding

### 📋 Car Detail Page
- High-resolution image gallery
- Complete vehicle specifications
- Detailed description
- Feature list
- Contact/Inquiry button
- Professional layout

### 📞 Contact Page
- Contact form for inquiries
- Pre-filled car interest field
- Contact information display
- Business hours
- Multiple contact methods

## Customization

### Edit Car Data
Edit the `carsData` array in `js/api.js` to add/modify cars

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-red: #E63946;
    --primary-white: #F1FAEE;
    --primary-blue: #1D3557;
    --accent-gold: #FFB703;
    --accent-orange: #FB5607;
    --accent-green: #06A77D;
}
```

### Add Images
Replace car emojis with real images by uploading to `images/` folder and updating HTML

## API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cars` | Get all cars |
| GET | `/api/cars/featured` | Get featured cars |
| GET | `/api/cars/:id` | Get car by ID |
| POST | `/api/cars/filter` | Filter cars by criteria |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/admin/contacts` | Get all contact messages |
| PUT | `/api/admin/contacts/:id` | Mark contact as handled |

## Sample Car Data

Each car includes:
- Brand, Model, Year
- Price, Mileage, Condition
- Transmission, Fuel Type
- Engine specs, Horsepower
- Color, Features list
- Detailed description

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

- Lightweight CSS without external dependencies
- Client-side filtering for instant results
- Optimized images
- Responsive grid layout
- Fast API responses

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Online payment system
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Image upload functionality
- [ ] Advanced search with AI recommendations
- [ ] Comparison tool for multiple cars
- [ ] Customer reviews & ratings
- [ ] Mobile app version

## License

MIT License - Feel free to use this project for any purpose

## Support

For issues or questions, please contact: **info@atifinternational.com**

---

**Made with ❤️ by ATIF TRADING LTD** 🇯🇵🚗
