# DreamHouse スマートライトサーバー

これは、Philips Hue ブリッジに対応する開発時用の HTTP プロキシサーバーです。Hue ブリッジは現在、HTTPS アクセスに対応していません。その対策として、HTTPS リクエストをこのサーバーに送信することができます。このサーバーで受信したリクエストは、HTTP を使用して Hue ブリッジに送られます。これにより、HTTPS を使用して読み込まれるページ（Visualforce のページなど）からブリッジに対してリクエストを送信できます。このサーバーを使用することで、ローカルでのアプリケーションのテストができますが、実生活環境に導入するには適していません。実生活環境に導入する場合は、Hue [リモート API](http://www.developers.meethue.com/content/remote-api) が必要になりますが、これは現在、ベータ版です。

## 前提条件

このサンプルアプリケーションを実行するには、 Philips Hue ブリッジと、そのブリッジに接続するランプが 1 つ以上必要です。Philips Hue の「[Getting Started](http://www.developers.meethue.com/documentation/getting-started)（英語）」ページの記載に従って、ブリッジユーザーを作成します。

## インストール手順

1. リポジトリをクローン（複製）します。

    ```
    git clone https://github.com/dreamhouseapp-jp/dreamhousejp-iot-lights
    ```

1. `dreamhousejp-lights` ディレクトリに移動します。

    ```
    cd dreamhousejp-iot-lights
    ```

1. プロジェクトの依存関係をインストールします。

    ```
    npm install
    ```

1. HTTPS サーバーを実行するための自己署名証明書を生成します。たとえば Mac の場合は、次のコマンドを入力します。

    ```
    openssl req -nodes -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
    ```

1. ブラウザを開き、次の URL にアクセスして、ネットワーク上の Hue ブリッジの IP アドレスを取得します。
[https://www.meethue.com/api/nupnp](https://www.meethue.com/api/nupnp)

1. コマンドラインで次のコマンドを入力して、ノードサーバーで使用する環境変数を定義します。URL とユーザーは、実際の環境に合わせて置き換えてください。まだブリッジユーザーを作成していない場合は、「[Getting Started](http://www.developers.meethue.com/documentation/getting-started)（英語）」ページを参照して作成します。

    ```
    export HUE_BRIDGE_URL=http://192.168.1.5
    export HUE_BRIDGE_USER=1028d66426293e821ecfd9ef1a0731df
    ```

1. サーバーを起動します。

    ```
    node server
    ```

1. ブラウザを開き、次の URL にアクセスしてローカルの環境をテストします。
[https://localhost:55555](https://localhost:55555)

1. これで、Salesforce1 モバイルアプリの SmartHome コンポーネントまたはブラウザの Salesforce で照明を制御できます。
