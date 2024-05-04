export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleRecord = Record<UserRole, string>;

const RoleDescription: UserRoleRecord = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {RoleDescription}