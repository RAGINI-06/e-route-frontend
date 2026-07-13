import api from "./api";

// Create a route
export const createRoute = async (source, destination, travelMode) => {
  const response = await api.post("/routes", {
    source,
    destination,
    travelMode,
  });

  return response.data;
};

// Get recommendation
export const getRecommendation = async (routeId) => {
  const response = await api.get(`/recommendation/${routeId}`);
  return response.data;
};