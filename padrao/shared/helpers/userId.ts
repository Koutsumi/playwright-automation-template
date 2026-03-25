import fs from 'node:fs';

const USER_LIST_PATH = './.auth/usersIdList.json';

interface UserEntry {
  name: string;
  email: string;
  userId: string;
  cookiesPath: string;
}

export function saveUserId(name: string ,email: string, userId: string, cookiesPath: string): void {
  let users: UserEntry[] = [];
  if (fs.existsSync(USER_LIST_PATH)) {
    users = JSON.parse(fs.readFileSync(USER_LIST_PATH, 'utf-8'));
  }

  const existingIndex = users.findIndex(u => u.name === name);

  if (existingIndex !== -1) {
    users[existingIndex].userId = userId;
    users[existingIndex].email = email;
    users[existingIndex].cookiesPath = cookiesPath;
  } else {
    users.push({ name, email, userId, cookiesPath });
  }

  fs.writeFileSync(USER_LIST_PATH, JSON.stringify(users, null, 2));
}

export function getUserData(cookiesPath: string): {userId: string, email: string} | null {
  if (!fs.existsSync(USER_LIST_PATH)) return null;

  const users: UserEntry[] = JSON.parse(fs.readFileSync(USER_LIST_PATH, 'utf-8'));
  const user = users.find(u => u.cookiesPath === cookiesPath);
  
  if(!user){ return null; }

  const data = {
    userId: user.userId,
    email: user.email,
    cookiesPath: user.cookiesPath
  }
  
  return  data;
}