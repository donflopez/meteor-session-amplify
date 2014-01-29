Package.describe({
  summary: "Persistent session variables with amplify."
});

Package.on_use(function (api) {
  api.use('amplify');

  api.add_files("sessionAmplify.js", "client");
});
