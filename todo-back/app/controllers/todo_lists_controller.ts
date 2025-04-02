import type { HttpContext } from '@adonisjs/core/http'
import TodoList from '#models/todo_list'
import { createTodoListValidator, updateTodoListValidator } from '#validators/todo_list'
import { errors } from '@vinejs/vine'

export default class TodoListsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    // Fetch all todo lists
    const todoLists = await TodoList.all()

    // Return the todo lists as JSON
    return {
      status: 'success',
      data: todoLists,
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    try {
      const data = request.body()
      const validatedData = await createTodoListValidator.validate(data)
      const todoList = await TodoList.create(validatedData)
      return {
        status: 'success',
        data: todoList,
      }
    } catch (error: unknown) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        return {
          status: error.status,
          message: error.message,
          code: error.code,
        }
      }
      return {
        status: 'error',
        message: 'An unexpected error occurred.',
      }
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
    
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
