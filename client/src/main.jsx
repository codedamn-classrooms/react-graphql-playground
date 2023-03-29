import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const URI = `https://${import.meta.env.VITE_PUBLIC_HOSTNAME}/:${
	import.meta.env.PUBLIC_PORT
}`;
const client = new ApolloClient({
	uri: URI,
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
``;
