import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";

export class Bank {
  accounts: UserAccount[];
  fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], filManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = filManager;
  }


  createAccount(): void {
    let allAccounts: any[] = Object.values(this.getAllAccounts())
    const cpf: string[] = allAccounts.map((item) => item.cpf))

    if (this.accounts[0].age > 18 && cpf.indexOf(this.accounts[0].cpf) === -1) {
      
      allAccounts = allAccounts.concat(this.accounts)
      this.fileManager.fileName = 'users.json';
      this.fileManager.writeObjectToFile(allAccounts);

      console.log('Usuário cadastrado com sucesso!')
    } else {
      console.error('Este usuário não pode ser cadastrado.')
    }
  }

  getAllAccounts(): any {
    this.fileManager.fileName = 'users.json';
    const file: Object = this.fileManager.getObjectFromFIle();
    return file;
  }

  getAccountByCpf(): any {

  }

  saveAccounts(): void {

  }
}