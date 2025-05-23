import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Kanyinsole Akinyemi',
      email: 'adebimpe@gmail.com',
      phone: '08127503292',
      gender: 'female',
      address: 'Gowon estate, Lagos'
    },
    {
      id: 2,
      name: 'David Okonkwo',
      email: 'david5678@gmail.com',
      phone: '08033458721',
      gender: 'female',
      address: 'Mike Horger, Enugu'
    },
    {
      id: 3,
      name: 'Segun White',
      email: 'shegeee@gmail.com',
      phone: '08134567213',
      gender: 'male',
      address: 'Alausa, Ikeja, Lagos'
    },
    {
      id: 4,
      name: 'Taiwo Bello',
      email: 'taiwo.bello@gmail.com',
      phone: '09087564231',
      gender: 'female',
      address: 'Wuse 2, Abuja'
    },
    {
      id: 5,
      name: 'Timothy Emekauzo',
      email: 'emekauzo@gmail.com',
      phone: '07034567891',
      gender: 'male',
      address: 'Independence Layout, Enugu'
    },
    {
      id: 6,
      name: 'Zainab Hammed',
      email: 'zainabmohammed@gmail.com',
      phone: '08128903456',
      gender: 'female',
      address: 'Kawo, Kaduna'
    },
    {
      id: 7,
      name: 'Ify Nwachukwu',
      email: 'ifeanyi.nw@gmail.com',
      phone: '08079245634',
      gender: 'male',
      address: 'Rumuduru, Port Harcourt'
    },
    {
      id: 8,
      name: 'Adebisi Ayoola',
      email: 'adebisi.ayoola@gmail.com',
      phone: '09012233445',
      gender: 'female',
      address: 'Bodija, Ibadan'
    },
    {
      id: 9,
      name: 'Zahir Ibrahim',
      email: 'Zahir.ibrahim@gmail.com',
      phone: '08094561234',
      gender: 'male',
      address: 'Unguwan Rimi, Kaduna'
    },
    {
      id: 10,
      name: 'Ngozi Eze',
      email: 'ngozi.eze@gmail.com',
      phone: '08167893456',
      gender: 'female',
      address: 'Onitsha GRA, Anambra'
    },
    {
      id: 11,
      name: 'Oluwaseun Adeleke',
      email: 'seun.adeleke@gmail.com',
      phone: '08055678901',
      gender: 'male',
      address: 'Lekki Phase 1, Lagos'
    },
    {
      id: 12,
      name: 'Zuleeyah Yusuf',
      email: 'zuley.yusuf@gmail.com',
      phone: '09023456789',
      gender: 'female',
      address: 'Kano Municipal, Kano'
    },
    {
      id: 13,
      name: 'Chinedu Okafor',
      email: 'chukwudi.okafor@gmail.com',
      phone: '08034567890',
      gender: 'male',
      address: 'Asokoro, Abuja'
    },
    {
      id: 14,
      name: 'Folake Falade',
      email: 'folake.falade@gmail.com',
      phone: '07089012345',
      gender: 'female',
      address: 'Akobo, Ibadan'
    },
    {
      id: 15,
      name: 'Yusuf Suleiman',
      email: 'suleiman@gmail.com',
      phone: '08012345678',
      gender: 'male',
      address: 'Maitama, Abuja'
    }
  ];
  private nextId = 16;

  getAllCustomers(): Customer[] {
    return [...this.customers];
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  addCustomer(customer: Customer): void {
    customer.id = this.nextId++;
    this.customers.push({ ...customer });
  }

  updateCustomer(updatedCustomer: Customer): void {
    const index = this.customers.findIndex(customer => customer.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = { ...updatedCustomer };
    }
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }
}