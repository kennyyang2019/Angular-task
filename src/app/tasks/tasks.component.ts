import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;

  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Write Unit Tests',
      summary: 'Write comprehensive unit tests for the authentication module.',
      dueDate: '2024-07-01',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Design Database Schema',
      summary: 'Design the database schema for the new CRM system.',
      dueDate: '2024-08-15',
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Create User Flow Diagram',
      summary: 'Create a user flow diagram for the onboarding process.',
      dueDate: '2024-09-01',
    },
    {
      id: 't7',
      userId: 'u1',
      title: 'Implement Payment Gateway',
      summary: 'Integrate Stripe payment gateway into the checkout flow.',
      dueDate: '2024-10-01',
    },
    {
      id: 't8',
      userId: 'u6',
      title: 'Write API Documentation',
      summary: 'Document the newly developed API endpoints.',
      dueDate: '2024-10-15',
    },
    {
      id: 't9',
      userId: 'u2',
      title: 'Conduct User Research',
      summary: 'Conduct user interviews to gather feedback on the prototype.',
      dueDate: '2024-11-01',
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Optimize Website Performance',
      summary: 'Improve the website loading speed and SEO score.',
      dueDate: '2024-11-15',
    },
    {
      id: 't11',
      userId: 'u3',
      title: 'Implement User Authentication',
      summary: 'Implement user authentication and authorization logic.',
      dueDate: '2024-12-01',
    },
    {
      id: 't12',
      userId: 'u4',
      title: 'Create Marketing Materials',
      summary: 'Design brochures and website banners for the product launch.',
      dueDate: '2024-12-15',
    },
    {
      id: 't13',
      userId: 'u6',
      title: 'Set up CI/CD Pipeline',
      summary: 'Configure a continuous integration and deployment pipeline.',
      dueDate: '2025-01-15',
    },
    {
      id: 't14',
      userId: 'u1',
      title: 'Research New Technologies',
      summary:
        'Explore and evaluate potential technologies for future projects.',
      dueDate: '2025-02-01',
    },
    {
      id: 't15',
      userId: 'u2',
      title: 'Prepare Training Materials',
      summary: 'Develop training materials for new team members.',
      dueDate: '2025-02-15',
    },
    {
      id: 't16',
      userId: 'u3',
      title: 'Refactor Legacy Code',
      summary: 'Improve the maintainability and readability of existing code.',
      dueDate: '2025-03-01',
    },
    {
      id: 't17',
      userId: 'u4',
      title: 'Analyze User Data',
      summary:
        'Analyze user data to identify trends and areas for improvement.',
      dueDate: '2025-03-15',
    },
    {
      id: 't18',
      userId: 'u5',
      title: 'Implement Security Audits',
      summary: 'Conduct regular security audits to identify vulnerabilities.',
      dueDate: '2025-04-01',
    },
    {
      id: 't19',
      userId: 'u6',
      title: 'Develop Mobile App',
      summary: 'Develop a mobile application for iOS and Android platforms.',
      dueDate: '2025-04-15',
    },
    {
      id: 't20',
      userId: 'u1',
      title: 'Write Blog Post',
      summary: 'Write a blog post about the latest technology trends.',
      dueDate: '2025-05-01',
    },
  ];
  get selectedUserTasks() {
    let userTasks = this.tasks.filter((task) => this.userId == task.userId);
    return userTasks;
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task=> task.id!==id)
  }
}
