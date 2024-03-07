var { SANDBOX_TEST_SERVER_URL, MODE, LIVE_SERVER_URL } = process.env;

class PayPAl {
  BASE_URL = MODE === "dev" ? SANDBOX_TEST_SERVER_URL : LIVE_SERVER_URL;
  async doCreateOreder() {
    try {
      const response = await fetch(`${this.BASE_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: [
            {
              id: "23",
              amount: amount,
            },
          ],
        }),
      });

      const orderData = await response.json();
      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      // setMessage(`Could not initiate PayPal Checkout...${error}`);
    }
  }
}
var payPalApi = new PayPAl();
export { payPalApi };
