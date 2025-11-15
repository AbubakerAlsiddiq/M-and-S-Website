# CLAUDE.md - AI Assistant Guide for M&S Organics Website

## Project Overview

This is a grocery store website for **M&S Organics - Delmarva Mediterranean Market**, a small business looking to increase their online presence and community engagement. The website allows users to view the store's inventory, pricing, and product photos.

### Tech Stack
- **Frontend**: React 18.2 + TypeScript + Vite
- **Backend**: Python Flask (REST API)
- **Routing**: React Router v6
- **Styling**: Bootstrap 5.3.3 + Custom CSS
- **Maps**: Google Maps via @vis.gl/react-google-maps
- **Data Storage**: Excel file (inventory.xlsx)
- **Additional Libraries**: axios, lodash, react-icons, xlsx

## Project Structure

```
/home/user/M-and-S-Website/
├── src/
│   ├── App.tsx              # Main app component with routing
│   ├── App.css              # App-level styles
│   ├── main.tsx             # React entry point
│   ├── components/          # React components
│   │   ├── About.tsx        # About us page
│   │   ├── GoogleMaps.tsx   # Store location map
│   │   ├── HomePage.tsx     # Landing page
│   │   ├── Inventory.tsx    # Inventory listing page
│   │   ├── LoadingScreen.tsx # Loading animation
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── SearchBar.tsx    # Search functionality
│   │   ├── Essentials.tsx   # Essential products showcase
│   │   ├── Deli.tsx         # Deli section
│   │   └── Declarations.d.ts # TypeScript declarations
│   ├── assets/              # Static assets
│   │   ├── inventory.xlsx   # Product inventory data
│   │   ├── *.jpeg, *.jpg    # Product images
│   │   └── logos & icons
│   └── backend/             # Python Flask backend
│       ├── app.py           # Flask API server
│       ├── wsgi.py          # WSGI entry point
│       └── static/          # Built React app (production)
├── package.json             # NPM dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # Project description

```

## Application Architecture

### Frontend Architecture

1. **Routing** (src/App.tsx:1)
   - Uses React Router v6 for client-side routing
   - Routes:
     - `/` - Home page
     - `/about` - About us page
     - `/inventory` - Inventory listing
     - `/category/:categoryName` - Category detail page (referenced but not implemented)

2. **State Management**
   - Uses React hooks (useState, useEffect)
   - No global state management (Redux/Context) - components fetch their own data

3. **Loading States**
   - 600ms loading screen on initial load and page transitions
   - Implemented in multiple components (src/App.tsx:12-18, src/Inventory.tsx:18-24)

4. **API Communication**
   - Direct fetch calls to backend API
   - Base URL: `http://localhost:8080`
   - No API client abstraction layer

### Backend Architecture (src/backend/app.py)

1. **Flask Server**
   - CORS enabled for cross-origin requests
   - Serves both API endpoints and static React app
   - Port: 8080 (configured in package.json:6)

2. **Data Layer**
   - Reads from Excel file: `C:/Users/aahme/Documents/m-and-s-website/src/assets/inventory.xlsx`
   - Uses pandas for Excel parsing
   - Data structure: Categories → Items → Prices
   - **WARNING**: File path is hardcoded to Windows path (src/backend/app.py:10)

3. **API Endpoints**
   - `GET /api/inventory` - Returns all categories with items and prices
   - `GET /api/inventory/<category>` - Returns items for specific category
   - `GET /api/search` - Returns all item names for search
   - Catch-all routes serve React SPA for client-side routing

## Key Conventions & Patterns

### Code Style

1. **TypeScript**
   - Strict mode enabled (tsconfig.json:10)
   - Interface-based type definitions
   - Explicit typing for component props and state
   - ESNext target with modern features

2. **React Patterns**
   - Functional components only (no class components)
   - React.FC type for components
   - Custom hooks not extensively used
   - CSS modules not used - companion CSS files per component

3. **File Organization**
   - Each component has matching CSS file (e.g., `Navbar.tsx` + `Navbar.css`)
   - Assets imported directly using ES6 imports
   - Components are relatively self-contained

### Naming Conventions

- **Components**: PascalCase (e.g., `HomePage`, `GoogleMaps`)
- **Files**: Match component names exactly
- **CSS Classes**: kebab-case (e.g., `inventory-container`, `social-media-links`)
- **Interfaces**: PascalCase, descriptive names (e.g., `CategoryItems`)

### Data Flow

1. **Inventory Data Flow**:
   ```
   inventory.xlsx → Flask app.py (pandas) → REST API →
   React fetch → Transform data → useState → Render
   ```

2. **Category List** (src/components/Navbar.tsx:14-47)
   - Hardcoded in Navbar component (36 categories)
   - **Note**: This should ideally come from the backend API

## Development Workflow

### Running the Application

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server** (Frontend only)
   ```bash
   npm run dev
   # Runs Vite dev server (default port 5173)
   ```

3. **Build for Production**
   ```bash
   npm run build
   # Compiles TypeScript and builds to dist/
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

5. **Run Backend** (Python Flask)
   ```bash
   cd src/backend
   python app.py
   # Should run on port 8080
   ```

### Development Environment

- **Proxy**: Frontend proxies API requests to `http://localhost:8080` (package.json:6)
- **Hot Reload**: Vite provides HMR (Hot Module Replacement)
- **TypeScript**: Compiles on-the-fly during development

## Known Issues & Technical Debt

1. **Hardcoded Paths** (src/backend/app.py:7,10)
   - Backend uses Windows-specific absolute paths
   - Should use relative paths or environment variables
   - Will break on different machines/deployments

2. **Missing Category Component**
   - Route defined in App.tsx:31 but Category.tsx doesn't exist
   - Users clicking categories will see error

3. **Category List Duplication**
   - Categories hardcoded in Navbar.tsx:14-47
   - Should fetch from backend API to avoid sync issues

4. **Loading State Timing**
   - Artificial 600ms delay on every page (src/App.tsx:15)
   - Not based on actual data loading completion
   - Can feel slow for fast connections

5. **Error Handling**
   - Basic error handling in components
   - No user-friendly error messages or retry logic
   - No loading states during API calls (only initial page load)

6. **TypeScript Configuration**
   - `allowJs: false` but no strict ESLint rules
   - Missing path aliases for cleaner imports

7. **No Environment Configuration**
   - API URL hardcoded in components
   - No .env file for configuration
   - Makes deployment difficult

8. **Search Implementation**
   - SearchBar component exists but search functionality incomplete
   - API endpoint returns data but no UI integration

## Working with Inventory Data

### Excel File Structure

Located at: `src/assets/inventory.xlsx`

**Sheets**:
1. **Categories** - Links category names to items
   - Columns: `Category Name`, various category columns
2. **Items** - Product details
   - Columns: `Name`, `Price`

### Backend Data Processing (src/backend/app.py:12-36)

1. Reads both sheets using pandas
2. Melts category data to create item-category mappings
3. Creates nested dictionary: `{category: {item: price}}`
4. Handles errors gracefully with error objects

### Adding New Products

1. Update `src/assets/inventory.xlsx`
2. Add item to **Items** sheet with Name and Price
3. Link to category in **Categories** sheet
4. Restart Flask server to reload data
5. Add product image to `src/assets/` if needed

## Google Maps Integration

- Uses `@vis.gl/react-google-maps` library
- Component: `src/components/GoogleMaps.tsx`
- Displays store location on home page
- Requires Google Maps API key (check for configuration)

## Social Media Links

Configured in Navbar:
- **Facebook**: https://www.facebook.com/DelmarvaMediterraneanMarket/
- **Instagram**: https://www.instagram.com/delmarvamediterraneanmarket/

## AI Assistant Guidelines

### When Making Changes

1. **Always check file existence** before modifying components
2. **Maintain TypeScript typing** - never use `any` unless absolutely necessary
3. **Follow existing patterns** - match component structure of similar files
4. **Update both frontend and backend** when changing data structures
5. **Test loading states** - ensure 600ms delay doesn't conflict with real loading
6. **Preserve Bootstrap classes** - this project uses Bootstrap styling extensively

### Common Tasks

#### Adding a New Page
1. Create component in `src/components/NewPage.tsx`
2. Create matching CSS file
3. Add route in `src/App.tsx`
4. Add navigation link in `src/components/Navbar.tsx`
5. Follow loading screen pattern from existing pages

#### Modifying API
1. Update Flask route in `src/backend/app.py`
2. Update corresponding fetch call in React component
3. Update TypeScript interfaces for new data shape
4. Test error handling

#### Styling Changes
1. Check if Bootstrap class exists first
2. Add custom CSS to component-specific CSS file
3. Follow existing class naming convention (kebab-case)
4. Avoid inline styles

#### Adding Dependencies
1. Use `npm install <package>` for frontend
2. Update `requirements.txt` (if exists) for Python packages
3. Document new dependencies in this file

### Testing Checklist

Before committing changes:
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] Frontend dev server runs (`npm run dev`)
- [ ] Backend server starts without errors
- [ ] All routes are accessible
- [ ] API endpoints return expected data
- [ ] No console errors in browser
- [ ] Responsive design works on mobile
- [ ] Loading states work correctly

### Git Workflow

Current branch: `claude/claude-md-mi0nffcxn0wrvy41-01NQUPRewQijDzd765LgH6GT`

**Commit Guidelines**:
- Use descriptive commit messages
- Reference file paths in commits
- Group related changes
- Test before committing

**Push Guidelines**:
- Always use `git push -u origin <branch-name>`
- Branch must start with 'claude/' and end with session ID
- Retry up to 4 times with exponential backoff on network errors

## Future Improvements Recommendations

1. **Environment Configuration**
   - Add `.env` file for API URLs, ports, and API keys
   - Use Vite's env variable support

2. **Path Resolution**
   - Fix hardcoded Windows paths in backend
   - Use relative paths from project root

3. **Category Component**
   - Implement missing Category.tsx for category detail pages
   - Show filtered products by category

4. **Dynamic Categories**
   - Remove hardcoded category list from Navbar
   - Fetch from backend API

5. **Search Functionality**
   - Complete SearchBar implementation
   - Add search results page or modal

6. **Image Management**
   - Implement dynamic image loading based on product names
   - Add placeholder images for products without photos

7. **Error Boundaries**
   - Add React Error Boundaries for graceful error handling
   - Improve error messages for users

8. **Performance**
   - Remove artificial loading delays
   - Implement actual loading states tied to API calls
   - Add caching for inventory data

9. **Accessibility**
   - Add ARIA labels
   - Ensure keyboard navigation works
   - Test with screen readers

10. **Testing**
    - Add unit tests (Jest/Vitest)
    - Add E2E tests (Playwright/Cypress)
    - Add API tests for backend

## Contact & Business Information

- **Business Name**: M&S Organics - Delmarva Mediterranean Market
- **Focus**: Mediterranean grocery products
- **Product Categories**: 36+ categories including Balkan Valley products, Mediterranean sweets, spices, cheese, meats, and more

## Last Updated

Generated: 2025-11-15
Status: Active Development
