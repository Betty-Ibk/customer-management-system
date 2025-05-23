import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="app-header">
      <h1>CUSTOMER MANAGEMENT SYSTEM</h1>
    </header>
  `,
  styles: [`
    .app-header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 18px 30px;
      background-color: white;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    
    h1 {
      color: var(--primary-dark);
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    
    @media (max-width: 768px) {
      .app-header {
        padding: 15px;
      }
      
      h1 {
        font-size: 18px;
      }
    }
  `]
})
export class HeaderComponent {}



