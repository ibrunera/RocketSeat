import {Request, Response} from 'express'
import CreateUser from './services/CreateUser'

export function helloWorld(request: Request,response: Response){
  const user = CreateUser({
    email:'bruno@email.com',
    password:'qwerty',
    techs:[
      'Node',
      {title:'JS',experience:100}
    ]
  })

  console.log(user)

  return response.json(user)
}