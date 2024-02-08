import axios from "axios";

export const getCustomers = async () => {
  try {
    const response = await axios.get(
      "https://test-frontend-uolpp.web.app/customers.json"
    );
    return { data: response.data, error: null };
  } catch (error) {
    console.error(error);
    const message = (error as Error).message;
    return { data: [], error: message };
  }
};
