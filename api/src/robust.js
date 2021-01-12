class ApiError extends Error {

  toJSON() {
    return { error: this.message };
  }

}
class NotFoundError extends ApiError {}

export {
  ApiError,
  NotFoundError
};
