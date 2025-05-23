import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { DialogService } from '../../services/dialog.service';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  filterText: string = '';
  
  // Pagination properties
  pageSize: number = 10;
  currentPage: number = 1;
  paginatedCustomers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customers = this.customerService.getAllCustomers();
    this.filteredCustomers = [...this.customers];
    this.updatePaginatedCustomers();
  }

  filterList(): void {
    if (!this.filterText) {
      this.filteredCustomers = [...this.customers];
    } else {
      this.filteredCustomers = this.customers.filter(customer =>
        customer.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.filterText.toLowerCase()) ||
        customer.phone.includes(this.filterText)
      );
    }
    this.currentPage = 1; // Reset to first page when filtering
    this.updatePaginatedCustomers();
  }

  updatePaginatedCustomers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedCustomers = this.filteredCustomers.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedCustomers();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedCustomers();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCustomers.length / this.pageSize);
  }

  viewDetails(id: number): void {
    this.router.navigate(['/customer', id]);
  }

  editCustomer(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteCustomer(id: number): void {
    this.dialogService.confirm({
      title: 'Delete Customer',
      message: 'Are you sure you want to delete this customer? This action cannot be undone.'
    }).subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(id);
        this.loadCustomers();
      }
    });
  }
}
