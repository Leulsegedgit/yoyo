export class HelperFunctions {
    private characters: string;
  
    constructor() {
      this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
  
    generateRandomString(length: number): string {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      }
      return result;
    }
  }
  
