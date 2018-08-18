exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://user1:password1@ds123822.mlab.com:23822/blog-posts-app";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/test-blog-posts-app";
exports.PORT = process.env.PORT || 8080;