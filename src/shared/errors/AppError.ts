class AppError {
  public readonly messgae : String;
  public readonly statusCode : number;

  constructor(message: string, statusCode : number = 400) {
    this.messgae = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
