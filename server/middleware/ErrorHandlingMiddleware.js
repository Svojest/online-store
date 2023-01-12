const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
  // Если класс ошибки ApiError то тогда на клиент возвращаем ответ
  // со статус кодом получаемый из ошибки и сообщением
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).json({ message: 'Неизвестная ошибка' })
}