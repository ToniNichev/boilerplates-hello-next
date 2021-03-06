import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"
                        rel="stylesheet"
                    />                
                </Head>
                <body>
                    <h1>NEXT JS</h1>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}