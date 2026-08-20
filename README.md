# Nature Lines: A GPS Trail Map

You want to hike trails without getting lost? This tool will help you do that! Welcome to Nature Lines, where we stay in line to help keep Nature protected!

It started with two simple goals: Don't get lost and reach your destination.

## Features
- **Interactive 3D Trail Map:** Visualize the entire trail in a high-detail 3D environment.
- **GPS Geolocation:** See your real-time location on the map to stay on the path.
- **Trail Information:** Quick access to key stats like distance and elevation gain.
- **Mobile-First Design:** A clean, responsive interface that works perfectly on your phone.

## Getting Started

Here's how to get the project running on your local machine.<br>
(production - pending)<br>
(localhost - in progress) <br>

### 1. Prerequisites
- Node.js (v18 or later)
- npm

### 2. Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nature-lines
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your Mapbox Access Token:**
   The map requires a Mapbox access token to work.

   - First, rename `.env.example` to `.env.local`:
     ```bash
     mv .env.example .env.local
     ```
   - Then, open the new `.env.local` file and paste in your access token from your [Mapbox account](https://account.mapbox.com/access-tokens/).

### 3. Run the Development Server

Once you've set up your token, you can start the local server:
```bash
npm run dev
```
Now you can open [http://localhost:3000](http://localhost:3000) in your browser to see it in action.

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Mapping:** [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
