import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"; // Імпорт axios

// Публічний ключ Stripe
const stripePromise = loadStripe('pk_live_51QPgAMRpHtXeYF3Zxajw1LPO8ieOevYhR9AVQ3yHAXH3Viw4PurnxjiI1XohOaysS6bmgScCVdFyMART9Hx7QhCG00Hs6nFzlX'); // Замініть на ваш реальний публічний ключ

export const handleCheckout = async (priceId) => {
  const stripe = await stripePromise;

  try {
    // Створення сесії для Checkout
    const response = await axios.post('https://backend-client-50dq.onrender.com/kurs/create-checkout-session', {
      priceId: priceId, // передаємо ID ціни
    });

    const session = response.data;

    // Перенаправлення на сторінку Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id, // sessionId повертається з вашого бекенду
    });

    if (error) {
      console.error('Error:', error);
    }
  } catch (error) {
    console.error('Error during checkout session creation:', error);
  }
};
