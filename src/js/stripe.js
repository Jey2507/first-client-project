import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"; // Імпорт axios

// Публічний ключ Stripe
const stripePromise = loadStripe('pk_test_51QKOCeFhNgTlpvpSgTdtn7m3jgLh0vi0n1ZrZgl9rNj8J6MixNoihPG69blNRVkCCXsvLCeETwT2dgJCSgf2Utje00SvBxPKCD'); // Замініть на ваш реальний публічний ключ

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
