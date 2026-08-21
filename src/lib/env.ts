// check env variables at app startup
const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

if (!mapboxToken) {
  throw new Error("Missing NEXT_PUBLIC_MAPBOX_TOKEN environment variable");
}

export const ENV = {
  mapboxToken,
};
