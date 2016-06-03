# DreamHouse Connected Lights Server

## Prerequisites

To run this sample application, you need a Philips Hue Bridge and at least one bulb connected to the bridge. Follow the instructions in the Philips Hue [Getting Started](http://www.developers.meethue.com/documentation/getting-started) to create a bridge user.

## Local Environment
This server allows you to test your application locally but is not suitable for a real-life deployment. Fot a real-life deployment, you'd need the Hue [Remote API](http://www.developers.meethue.com/content/remote-api) that is currently in beta.

## Installation Steps

1. Clone this repository:

    ```
    git clone https://github.com/dreamhouseapp/dreamhouse-lights
    ```
    
1. Navigate to the `dreamhouse-lights` directory

    ```
    cd dreamhouse-lights
    ```

1. Install the project dependencies:

    ```
    npm install
    ```

1. Generate self-signed certificates to run an HTTPS server. For example, on a Mac, type the following command:

    ```
    openssl req -nodes -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
    ```

1. Open a browser and access the following URL to get the IP address of the Hue bridge on your network: [https://www.meethue.com/api/nupnp](https://www.meethue.com/api/nupnp)

1. On the command line, type the following commands to define the environment variables used by the Node server. Replace the URL and user with your own values. If you haven't already done so, refere to the [Getting Started](http://www.developers.meethue.com/documentation/getting-started) to create a bridge user.
    
    ```
    export HUE_BRIDGE_URL=http://192.168.1.5
    export HUE_BRIDGE_USER=1028d66426293e821ecfd9ef1a0731df
    ```
    
1. Start the server
      
    ```
    node server
    ```
    
1. Open a browser, and access the following URL to test your local environment: [https://localhost:55555](https://localhost:55555).
    
1. You can now control the lights using the SmartHome component in the Salesforce1 mobile app or in Salesforce in the browser.