import { UsersEntity } from '../../core/data-access/src';
import { UsersVM } from './users-vm';

type UsersVMAdapter = {
  entityToVM(entity: UsersEntity): UsersVM;
};

export const usersVMAdapter: UsersVMAdapter = {
  entityToVM({ id, name, username, email, isAdmin, photo, totalStoryPoints }) {
    return { id, name, username, email, isAdmin, photo, totalStoryPoints };
  },
};
