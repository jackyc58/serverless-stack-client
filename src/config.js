export default {

  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_Xx3poku2UQrc60ixRuc6Tuca00hY0IYDx2",

  s3: {
    REGION: "us-east-1",
    BUCKET: "chh-bucket"
  },
  apiGateway: {
    REGION: "ap-northeast-1",
    URL: "https://tn4n3irpl7.execute-api.ap-northeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-northeast-1",
    USER_POOL_ID: "ap-northeast-1_xomK8RX7r",
    APP_CLIENT_ID: "5skoumflgpi6sr3j247orn47mr",
    IDENTITY_POOL_ID: "ap-northeast-1:5f5a80cc-ca9b-4828-b892-03df32bdd7f7"
  }
};
