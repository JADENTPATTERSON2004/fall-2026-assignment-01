export type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  }
};

export class UserRegistry {
   private users: UserAccount[] = [];

  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const newUser: UserAccount = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...data,
    };

    this.users.push(newUser);

    return newUser
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return undefined;
    }

    return Object.freeze({
      id: user.id,
      email: user.email,
      profile: user.profile,
    });
  }
}
