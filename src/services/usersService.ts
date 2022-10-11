import {
  getAllUsers,
  getUsersByCompany,
} from "../repositories/usersRepository.js";

export async function getAllUsersService() {
  const users = await getAllUsers();
  let managers = [];
  let employees = [];

  users.forEach((user) => {
    if (user.manager) {
      managers.push(user);
    } else {
      employees.push(user);
    }
  });
  return { employees, managers };
}

export async function getUsersCompanyService(companyId: string) {
  const users = await getUsersByCompany(companyId);
  return users;
}
