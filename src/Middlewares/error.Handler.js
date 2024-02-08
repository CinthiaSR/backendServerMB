export class AuthErrorHandler extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }

  static wrongCredentials(message = "Wrong credentials") {
    return new AuthErrorHandler(message, 401);
  }
  static unauthorized(
    message = "Unauthorized, check your authentication token"
  ) {
    return new AuthErrorHandler(message, 401);
  }
}

export default function errorHandler(err, req, res, next) {
  const errors = err.errors || [{message: err.message}];
  if (err.errors || err.message) {
    res.status(err.status || 500).json({errors});
  }
}
