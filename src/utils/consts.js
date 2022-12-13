export const unauthorizedMessage = {
  status: false,
  message: 'Неправильные почта или пароль'
}
export const conflictMessage = {
  status: false,
  message: 'Пользователь с таким email уже зарегистрирован'
}
export const badRequestMessage = {
  status: false,
  message: 'Некорректные данные'
}
export const defaultMessage = {
  status: false,
  message: 'Произошла ошибка. Попробуйте еще раз позднее'
}
export function getMessageByError(error) {
  switch (error.response.status) {
    case 401:
      return unauthorizedMessage;
    case 409:
      return conflictMessage;
    case 400:
      return badRequestMessage;
    default:
      return defaultMessage
  }
}