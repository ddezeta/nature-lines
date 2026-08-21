// check env variables at app startup
const mapboxToken = process.env.PUBLIC_MAPBOX_TOKEN;

if (!mapboxToken) {
  throw new Error("Missing PUBLIC_MAPBOX_TOKEN environment variable");
}

export const ENV = {
  mapboxToken,
};
