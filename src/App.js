import './App.css';

//Ref documentation
// https://paypal.github.io/react-paypal-js/?path=/story/getting-started--page


//imports
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//config sdk paypal
const initialOptions = {
  "client-id": "ATLNTVnFKdQJVXmhETGiTSmvA4BvzxZvYZRTXXyyao6hlJmK2O2UpAxpKqka1v03EIlC5QtSWWlX2h_K",
  currency: "BRL",
 // intent: "capture",
 // "data-client-token": "abc123xyz==",
};

function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "1.99", //transaction value (can be variable)
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                   //const name = details.id
                    alert(`Transaction completed by ${name}`);
                });
            }}
        />
    </PayPalScriptProvider>
  );
}

export default App;
