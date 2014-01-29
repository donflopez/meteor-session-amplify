//Code extracted from here http://stackoverflow.com/questions/11705825/persistent-sessions-in-meteor
// The author of this code is sebastien.b

SessionAmplify = _.extend({}, Session, {
  keys: _.object(_.map(amplify.store(), function(value, key) {
    return [key, JSON.stringify(value)]
  })),
  set: function (key, value) {
    Session.set.apply(this, arguments);
    amplify.store(key, value);
  },
});