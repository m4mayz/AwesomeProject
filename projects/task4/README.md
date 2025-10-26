# Task 4 & 5 - Travel Destination App

A React Native travel destination application with beautiful UI, featuring destination listings, detail pages, ticket booking, and user profiles.

## Screen Record Preview

https://drive.google.com/file/d/1okMUOWWEXq3c4-ThQZ-9JzPvf9PNQzDf/view?usp=drive_link

## 📱 Features

- **Home Screen**: Browse popular travel destinations with pull-to-refresh
- **Destination Details**: View detailed information about destinations
- **Ticket Booking**: Browse and search for flight tickets
- **Favorites**: Mark destinations as favorites with counter
- **Profile**: User profile management

## 🚀 How to Run

### Prerequisites

- Node.js >= 20
- React Native development environment set up
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. **Install dependencies** (from project root):

   ```bash
   npm install
   ```

2. **Install iOS dependencies** (macOS only):

   ```bash
   cd ios && pod install && cd ..
   ```

3. **Start Metro bundler**:

   ```bash
   npm start
   # or
   npx react-native start
   ```

4. **Run on Android**:

   ```bash
   npm run android
   # or
   npx react-native run-android
   ```

5. **Run on iOS** (macOS only):
   ```bash
   npm run ios
   # or
   npx react-native run-ios
   ```

## 📦 Tech Stack

### Core

- **React Native**: 0.81.4
- **React**: 19.1.0
- **TypeScript**: 5.8.3

### Navigation

- **@react-navigation/native**: ^7.1.18
- **@react-navigation/native-stack**: ^7.3.27
- **@react-navigation/bottom-tabs**: ^7.4.8

### UI Components

- **react-native-linear-gradient**: ^2.8.3
- **react-native-vector-icons**: ^10.3.0
- **@react-native-community/blur**: ^4.4.1

### Utilities

- **react-native-gesture-handler**: ^2.28.0
- **react-native-reanimated**: ^4.1.3
- **react-native-safe-area-context**: ^5.6.1
- **react-native-screens**: ^4.16.0

## 🗂️ Navigation Structure

```
AppNavigator (Stack)
├── StartScreen
├── HomeScreen (Bottom Tabs)
│   ├── Home
│   ├── Ticket
│   └── Profile
└── DetailPage
```

### Navigation Flow

1. **StartScreen** → Initial landing page
2. **HomeScreen** → Bottom Tab Navigator with 3 tabs:
   - **Home Tab**: Browse destinations from API
   - **Ticket Tab**: Search and book flight tickets
   - **Profile Tab**: User profile
3. **DetailPage** → Destination details (navigated from Home)

## 📋 Navigation Param Types

### Stack Navigator (`RootStackParamList`)

```typescript
{
  StartScreen: undefined;

  HomeScreen: undefined;

  DetailPage: {
    image: any;              // Image source (uri or require)
    location: string;        // Country name
    name: string;            // Destination name
    price: string;           // Price with format "$X.XXX/pax"
    rating: string;          // Rating (e.g., "4.9")
    description?: string;    // Description text
    temperature?: string;    // Temperature (e.g., "24° C")
    flagImage?: any;         // Country flag image source
  };
}
```

### Bottom Tab Navigator

```typescript
{
  Home: undefined;
  Ticket: undefined;
  Profile: undefined;
}
```

## 📂 Project Structure

```
task4/
├── navigation/
│   ├── AppNavigator.tsx       # Stack navigation
│   ├── BottomNavigator.tsx    # Bottom tab navigation
│   └── types.ts               # Navigation type definitions
├── screens/
│   ├── Home.tsx               # Home screen with destinations
│   ├── Detail.tsx             # Destination detail screen
│   ├── Ticket.tsx             # Ticket booking screen
│   └── Profile.tsx            # Profile screen
├── StartScreen.tsx            # Initial screen
└── README.md                  # This file
```

## 🌐 API Integration

### Destination API

- **Endpoint**: `https://68fafef094ec960660243e4d.mockapi.io/api/destination`
- **Method**: GET
- **Response Format**:
  ```json
  {
    "id": "1",
    "imageURL": "https://...",
    "country": "Maldives",
    "name": "Malé Atoll",
    "description": "...",
    "temperature": 30,
    "rating": 4.9,
    "countryFlag": "https://flagcdn.com/w320/mv.png",
    "price": 2500
  }
  ```

## 🎨 Key Features Implementation

### Home Screen

- Fetches destinations from API
- Pull-to-refresh functionality
- Favorite toggle with counter
- Search bar (UI ready)
- Filter button (UI ready)
- Loading, error, and empty states

### Detail Screen

- Dynamic content based on navigation params
- Back navigation
- Weather display
- Rating display
- Booking with ticket counter
- Hotel recommendations
- Blur effect on booking section

### Ticket Screen

- Category selection (Hotel, Aircraft, Villa, Attraction)
- Date picker with calendar
- Location selector
- Ticket cards with flight details
- Custom airplane icons

### Bottom Navigation

- Custom icons from local assets
- Active state with white background
- Smooth transitions

## 🎯 Navigation Usage Examples

### Navigate to Detail Page

```typescript
navigation.navigate('DetailPage', {
  image: { uri: 'https://...' },
  location: 'Indonesia',
  name: 'Labuan Bajo',
  price: '$4.000/pax',
  rating: '5.0',
  description: '...',
  temperature: '24° C',
  flagImage: { uri: 'https://...' },
});
```

### Navigate Back

```typescript
navigation.goBack();
```

## 📝 Notes

- All TypeScript types are defined in `navigation/types.ts`
- Global navigation types are declared for autocomplete support
- Icons are stored in `../../img/icon/` directory
- API calls use native `fetch` API
- State management uses React hooks (useState, useEffect)

## 🔧 Troubleshooting

### Metro bundler issues

```bash
npx react-native start --reset-cache
```

### Android build issues

```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

### iOS build issues

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

---

**Developer**: Akmal Z.H.  
**Last Updated**: October 26, 2025
