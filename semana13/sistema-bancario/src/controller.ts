import { writeFile, readFile, readFileSync } from 'fs';
import * as moment from 'moment';
import { users } from './types';

export function createAccounts(newUser: users): void {
  const date1: moment.Moment = moment(newUser.age, 'DD/MM/YYYY');
  const date2: moment.Moment = moment(moment(), 'DD/MM/YYYY')
  const date: number = date2.diff(date1, 'year')

  if (date > 18) {
    readFile('users.json', (err: Error, data: Buffer) => {
      try {
        let json: object[] = JSON.parse(data.toString())
        json.push(newUser)

        writeFile('users.json', JSON.stringify(json, null, '\t'), (err) => {
          try {
            console.log('Usuário cadastrado com sucesso!')
          } catch (error) {
            console.error(err)
          }
        })
      }
      catch (error) {
        console.error(err)
      }
    })
  }
}

export function getAllAccounts(): object[] {
  try {
    return JSON.parse(readFileSync('users.json', 'utf-8'));
  } catch (err) {
    console.error(err)
  }
}

export function addBalance(userName: string, userCPF: string, userBalance: number): void {
  const data: object[] = getAllAccounts()

  console.log(data.map((item) => {
      return item
  }))

}