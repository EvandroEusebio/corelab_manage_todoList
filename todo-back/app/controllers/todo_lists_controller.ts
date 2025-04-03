import type { HttpContext } from '@adonisjs/core/http'
import TodoList from '#models/todo_list'
import { createTodoListValidator, updateTodoListValidator } from '#validators/todo_list'
import { errors as vineError } from '@vinejs/vine'

export default class TodoListsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    // Fetch all todo lists
    const lists = await TodoList.all()

    // Return the todo lists
    return response.status(200).send({ lists })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      // validate the request data using Vine
      const validatedData = await request.validateUsing(createTodoListValidator)

      // create List
      const list = await TodoList.create(validatedData)

      // return the created list
      return response.status(200).send({ list })
    } catch (error: unknown) {
      if (error instanceof vineError.E_VALIDATION_ERROR) {
        return response.status(error.status).send({ errors: error.messages })
      }
      return response.status(500).send({ message: 'Server Error' })
    }
  }

  /**
   * Edit individual record
   */
  async edit({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const data = await request.validateUsing(updateTodoListValidator)
      const list = await TodoList.find(id)
      if (!list) {
        return response.status(404).send({ message: 'List not found!' })
      }

      list.merge(data)
      await list.save()

      return { message: 'List edited!', list }
    } catch (error) {
      if (error instanceof vineError.E_VALIDATION_ERROR) {
        console.log(error.messages)
        return response.status(401).send({ messageError: error.messages })
      } else {
        return response.status(500).send({ message: 'Server Error' })
      }
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const list = await TodoList.find(id)

    if (!list) {
      return response.status(404).send({ message: 'list not found!' })
    }

    await list.delete()
    return response.status(200).send({ message: 'list deleted' })
  }
}
