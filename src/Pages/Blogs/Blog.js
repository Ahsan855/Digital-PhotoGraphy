import React from "react";

const Blog = () => {
  return (
    <div className="d-flex mt-5">
      <div className="p-5">
        <h3 className="text-primary">
          Difference between authorization and authentication
        </h3>
        <p>
          Simply put, authentication is the process of verifying who someone is,
          whereas authorization is the process of verifying what specific
          applications, files, and data a user has access to. The situation is
          like that of an airline that needs to determine which people can come
          on board
        </p>
      </div>
      <div className="p-5">
        <h3 className="text-primary">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Firebase Authentication integrates tightly with other Firebase
          services, and it leverages industry standards like OAuth 2.0 and
          OpenID Connect, so it can be easily integrated with your custom
          backend
        </p>
      </div>
      <div className="p-5">
        <h3 className="text-primary">
          What other services does firebase provide other than authentication
        </h3>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Firebase Authentication integrates tightly with other Firebase
          services, and it leverages industry standards like OAuth 2.0 and
          OpenID Connect, so it can be easily integrated with your custom
          backend.
        </p>
      </div>
    </div>
  );
};

export default Blog;
