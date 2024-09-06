import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    const DB_HOST = `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(DB_HOST);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('error', error.messege);
  }
};

//BJHPUGhVuq0Npto2;
// [
//   {
//     name: 'Yulia Shevchenko',
//     phoneNumber: '+380000000001',
//     email: 'oleh1@example.com',
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954151',
//     updatedAt: '2024-05-08T16:12:14.954158',
//   },
//   {
//     name: 'Dmytro Boyko',
//     phoneNumber: '+380000000002',
//     email: null,
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954163',
//     updatedAt: '2024-05-08T16:12:14.954164',
//   },
//   {
//     name: 'Andriy Pavlenko',
//     phoneNumber: '+380000000003',
//     email: 'dmytro3@example.com',
//     isFavourite: false,
//     contactType: 'home',
//     createdAt: '2024-05-08T16:12:14.954168',
//     updatedAt: '2024-05-08T16:12:14.954170',
//   },
//   {
//     name: 'Yulia Shevchenko',
//     phoneNumber: '+380000000004',
//     email: null,
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954173',
//     updatedAt: '2024-05-08T16:12:14.954174',
//   },
//   {
//     name: 'Kateryna Povalenko',
//     phoneNumber: '+380000000005',
//     email: 'ivan5@example.com',
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954178',
//     updatedAt: '2024-05-08T16:12:14.954179',
//   },
//   {
//     name: 'Anna Kovalenko',
//     phoneNumber: '+380000000006',
//     email: null,
//     isFavourite: false,
//     contactType: 'home',
//     createdAt: '2024-05-08T16:12:14.954182',
//     updatedAt: '2024-05-08T16:12:14.954184',
//   },
//   {
//     name: 'Oleh Tkachuk',
//     phoneNumber: '+380000000007',
//     email: 'andriy7@example.com',
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954187',
//     updatedAt: '2024-05-08T16:12:14.954189',
//   },
//   {
//     name: 'Maria Petrenko',
//     phoneNumber: '+380000000008',
//     email: null,
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954196',
//     updatedAt: '2024-05-08T16:12:14.954198',
//   },
//   {
//     name: 'Ivan Ivanenko',
//     phoneNumber: '+380000000009',
//     email: 'vasyl9@example.com',
//     isFavourite: false,
//     contactType: 'home',
//     createdAt: '2024-05-08T16:12:14.954203',
//     updatedAt: '2024-05-08T16:12:14.954205',
//   },
//   {
//     name: 'Kateryna Kovalchuk',
//     phoneNumber: '+3800000000010',
//     email: null,
//     isFavourite: false,
//     contactType: 'personal',
//     createdAt: '2024-05-08T16:12:14.954208',
//     updatedAt: '2024-05-08T16:12:14.954211',
//   },
// ];
