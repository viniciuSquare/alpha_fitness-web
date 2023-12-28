export class User {
  public email: string | null = null;
  public dateOfBirth: Date | null = null;
  public height: number | null = null;

  constructor(
    public name: string,
    public imageUrl: string
  ){}

  setEmail(email: string) {
    this.email = email;
  }

  setDateOfBirth(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }
  
  setHeight(height: number ) {
    this.height = height;
  }
}