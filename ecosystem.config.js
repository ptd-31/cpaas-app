const data = require("./lib/data");

module.exports = {
  apps: [{
    name: 'my-app',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      LOGLEVEL: 'debug',
      HTTP_PORT: 3000,
      JAMBONZ_ACCOUNT_SID: '9ea8f076-7efa-4ee1-b7fd-4a2116e6eb12',
      JAMBONZ_API_KEY: '1e80a9e7-266a-4565-9925-ddb7cb8d689d',
      JAMBONZ_REST_API_BASE_URL: 'https://cpaas.bigmouse.tk:3005/v1',
      WEBHOOK_SECRET: 'wh_secret_befrFjnyo8AH3fpNti6c2x',
      RASA_URL: 'http://68.183.225.152:5005/webhooks/rest/webhook',
      CALLER_ID: '100',
      AUDIO_URL: 'https://00f74ba44b23654b394741c94e143ec9903b88c769-apidata.googleusercontent.com/download/storage/v1/b/example21102022/o/def.mp3?jk=AFshE3VauUZ9-NrYgLY-eCzueA2rHLpTqb4ZWheX4MWEZmd6Ibpb_1coWgirR-d18ryfwV0GKdjePsvoijYtpn4Dxxy8jcpBhmI9J3-PyTFNrsssaaUCZA1J-mdrBQcf5zxNjRId-Lmj8ugRsazWNFbep9N8iwQmEVXtHcfj1x8keLnLKqhTesL9kDRshc28VJcsTUxHto_HYc5U1_QDpb8hsZdfknNCSE3SoFxY-FdwKQM0LdLxdETaPoPDnlLRjcrudLcVWgLlsb0M9mBhGOBiEC8VB1aiw3W-6-9rBt2SrcMM7e_tme2WyDP7yRmhVaFuwcGH1LN2us4ifm-fr7sJxyDrlKD4yICB36U9e7neQFZ3Fza-dcWTlOq1hHyy4t4sDaPNuRNIon-39Xkbrum_DVLEWF2Ungh3LN2tIfJaIZ0zCT0ngS-7JRbVx24fyKBN1zE88-qqsar2USjYnK6AZFNubhsRHx8revgPsGhrXLLZysb7L2etm-rZEinMyiKxJLeWiSoIAsmOP0lcjteVSCdCCqdM5rcHE1RzXpQnlrExrRTWzzVGCG0KSbSVtBH8dcZakOLXXZBrSYvfFL3owEAfNUbRsWd79p0ZUovAFUuu8hBInBjYCKXc9HhTsR257Y4RvYTcpTFAoI3TZtlysPGAJDk6OYhF0ewKS0SotXTZhfGp2awsbJQ6zzZmIM_1AqZzdSdt3YTuEtznsC_47kLVmRA3rB86C-u7QV3AjJka-5xq4j1pJoCQN8hepG6G6BsrTUE-P_-niJ2cpNp5y4zX8PYccfedRUcT2sK2oSAnwHXfkj5eZQnTe35P3Irdp8HFAes_JDkrldrwRp9unwEyJcO3qP5O04qAWM1_BDmSK6rSVHntX2ET5i2hMu1SLGL9nM436PYuZEQzvSIt6b82E8rb5BbUD8sIZu23KXDpxM__RCgdW6F1Hewth40DX36F2OdfkXR9v1fAbRtwY7ChaNYZTTl-yAl2lwgOFEAud_mZf6D0nNPmqwvITJHyFZWhTcs3QcX55qOJQQgG123cfL79EFSO21YlTQML6NBC-eumA88ku3y8o6CqwzzXXHC9MmRuSWmRZ_uEURC352DmT81t2ewzq9O6u7_jBN1b3eCyYK5J2CixLov6Y5HAxJ6HHyPk8AjxNkX6UQ&isca=1',
      TEXT_SAY: 'Xin ch??o. em l?? Mai ?????n t??? c??ng ty ?????nh Quang. Em g???i ?????n ????? g???i th??ng b??o ?????n qu?? kh??ch b??n em hi???n ??ang c?? s???n ph???m tai nghe ch???ng ???n th??? h??? m???i nh???t v???i Model H U 812. N???u qu?? kh??ch mu???n bi???t th??ng tin chi ti???t, vui l??ng n??i t?? v???n ????? g???p b??? ph???n t?? v???n ????? ???????c gi???i ????p v??? s???n ph???m m???i n??y, n???u kh??ng cu???c g???i s??? k???t th??c sau 5 gi??y n???a.',
      RESPONSES: data.responses,
      UTTERS: data.utters,
      INTENTS: data.intents,
      TD1:'https://storage.googleapis.com/recording1700/td13.wav',
      TD2:'https://storage.googleapis.com/recording1700/td2.wav',
      TD3:'https://storage.googleapis.com/recording1700/td3.wav',
      TD4:'https://storage.googleapis.com/recording1700/td4.wav',
      TD5:'https://storage.googleapis.com/recording1700/td5.wav',
      TD6:'https://storage.googleapis.com/recording1700/td6.wav',
      TD7:'https://storage.googleapis.com/recording1700/td7.wav',
      TD8:'https://storage.googleapis.com/recording1700/td8.wav',
      TD9:'https://storage.googleapis.com/recording1700/td9.wav',
      TD14:'https://storage.googleapis.com/recording1700/td14.wav',
    }
  }]
};
