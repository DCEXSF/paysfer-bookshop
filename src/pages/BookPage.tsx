import { useParams } from "react-router-dom";
import { useEffect } from "react";

const API_URL =
  "https://paysfer-backend-337705274204.us-central1.run.app/seller/v1/seller-pagination-products";
const SELLER_ID = "0592de2a-815c-4929-a521-82301b246cce";

export default function BookPage() {
  const { ean } = useParams();

  useEffect(() => {
    async function fetchAndRedirect() {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filter: { ISBN: ean },
            ISBN: ean,
            page: 1,
            sellerId: SELLER_ID,
          }),
        });
        const data = await response.json();
        const product = data.ResponseBody?.products?.[0];
        if (product && product._id && product.title) {
          window.location.href = `https://www.paysfer.com/product-page/${
            product._id
          }/${encodeURIComponent(
            product.title.replace(/\s+/g, "_")
          )}?src=from-search`;
        } else {
          window.location.href = "https://www.paysfer.com/top100";
        }
      } catch (err) {
        window.location.href = "https://www.paysfer.com/top100";
      }
    }
    // if (ean) fetchAndRedirect();
    fetchAndRedirect();
  }, []);

  return null;
}
