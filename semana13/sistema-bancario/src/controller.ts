import { writeFileSync, readFileSync } from 'fs';
import * as moment from 'moment';
import { users, statements } from './types';

export function createAccounts(newUser: users): void {

  const date1: moment.Moment = moment(newUser.age, 'DD/MM/YYYY');
  const date2: moment.Moment = moment(moment(), 'DD/MM/YYYY')
  const date: number = date2.diff(date1, 'year')

  const cpf: string[] = getAllAccounts().map(item => item.cpf)

  if (date > 18 && cpf.indexOf(newUser.cpf) === -1) {
    let accounts: object[] = getAllAccounts();
    accounts.push(newUser)

    try {
      writeFileSync('users.json', JSON.stringify(accounts, null, '\t'));

      console.log('Novo usuário cadastrado com sucesso!');

    } catch (error) {
      console.error(error)
    }
  } else {
    console.log('Este usuário não pode ser cadastrado');
  }
}

export function getAllAccounts(): any[] {
  try {
    return JSON.parse(readFileSync('users.json', 'utf-8'));
  } catch (err) {
    console.error(err)
  }
}

export function addBalance(userName: string, userCPF: string, userBalance: number): void {
  const userValidation: any[] = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);
  if (userValidation.length > 0) {

    const newBalance: any[] = getAllAccounts().map((item) => {
      if (item.cpf === userCPF) {
        return { ...item, balance: item.balance + userBalance }
      } else {
        return item
      }
    })

    try {
      writeFileSync('users.json', JSON.stringify(newBalance, null, '\t'));

      console.log('Saldo atualizado com sucesso!');

    } catch (error) {
      console.error(error)
    }

  } else {
    console.error('Usuário não encontrado')
  }

}

export function getBalance(userName: string, userCPF: string): void {
  const userValidation: any[] = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);
  if (userValidation.length > 0) {

    getAllAccounts().map(item => {
      if (item.cpf === userCPF)
        console.log(item.balance)
    })

  } else {
    console.error('Usuário não encontrado')
  }

}

export function payBill(userName: string, userCPF: string, userData: statements): void {

  const payDay: moment.Moment = moment(userData.date, 'DD/MM/YYYY');
  const currentDate: moment.Moment = moment(moment(), 'DD/MM/YYYY');

  const userValidation: any[] = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);

  userData.date = userData.date ? userData.date : moment().format('DD/MM/YYYY');

  if (userValidation.length > 0 && payDay.diff(currentDate, 'days') >= 0 && userValidation[0].balance > userData.amount) {

    const newStatement: any[] = getAllAccounts().map((item) => {
      if (item.cpf === userCPF) {
        userData.amount = -userData.amount
        item.statements.push(userData)
        return item
      } else {
        return item
      }
    }
    )

    try {
      writeFileSync('users.json', JSON.stringify(newStatement, null, '\t'));

      console.log('Extrato atualizado!');

    } catch (error) {
      console.error(error)
    }
  } else {
    console.error('Não foi pssível inserir novas informações.');
  }

}

export function updateBalance(userName: string, userCPF: string): void {
  const userValidation: any[] = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);

  const currentDate: moment.Moment = moment(moment(), 'DD/MM/YYYY');

  if (userValidation.length > 0) {

    let statements: any[] = [];

    getAllAccounts().map((item, i) => {
      if (item.name === userName && item.cpf === userCPF) {
        statements = item.statements;
      }
    })

    const amounts: number[] = [];

    statements.map(item => {
      if (moment(item.date, 'DD/MM/YYYY').diff(currentDate, 'days') <= 0) {
        amounts.push(item.amount);
      }
    })

    const newBalance: any[] = getAllAccounts().map((item) => {
      if (item.name === userName && item.cpf === userCPF) {
        return { ...item, balance: item.balance + amounts.reduce((sum, item) => sum += item, 0) }
      } else {
        return item
      }
    })

    console.log(newBalance)

    try {
      writeFileSync('users.json', JSON.stringify(newBalance, null, '\t'));

      console.log('Saldo atualizado com sucesso!');

    } catch (error) {
      console.error(error)
    }

  } else {
    console.error('Usuário não encontrado')
  }
}

export function performTransfer(userName1: string, userCPF1: string, userName2: string, userCPF2: string, amount: number): void {

  const userValidation: any[] = getAllAccounts().filter(item => {
    return item.name === userName1 && item.cpf === userCPF1 && item.balance > amount;
  })

  if (userValidation.length > 0) {
    const statement: statements = {
      description: 'Transferência entre contas internas.',
      amount: amount,
      date: moment().format('DD/MM/YYYY')
    }

    let newTransfer: any[] = [];

    if (getAllAccounts().filter(item => item.name === userName1 && item.cpf === userCPF1).length > 0) {

      newTransfer = getAllAccounts().map(item => {
        if (item.cpf === userCPF1) {
          item.statements.push({ ...statement, amount: -amount })
          return item;
        } else {
          return item;
        }
      })
    } else {
      console.error('Nome de usuário ou cpf do remetente estão incorretos.')
    }

    if (getAllAccounts().filter(item => item.name === userName2 && item.cpf === userCPF2).length > 0) {
      newTransfer = newTransfer.map(item => {
        if (item.cpf === userCPF2) {
          item.statements.push(statement)
          return item;
        } else {
          return item;
        }
      })
    } else {
      console.error('Nome de usuário ou cpf  do destinatário estão incorretos.')
    }

    try {
      writeFileSync('users.json', JSON.stringify(newTransfer, null, '\t'));

      console.log('Transferência realizada com sucesso!');

    } catch (error) {
      console.error(error)
    }
  } else {
    console.error('Seu saldo é insuficiente para transação.')
  }
}