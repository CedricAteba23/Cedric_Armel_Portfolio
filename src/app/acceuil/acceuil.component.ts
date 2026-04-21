import { Component, HostListener, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  color: string;
  link: string;
  featured?: boolean;
}

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})



export class AcceuilComponent implements OnInit  {

 
  cursorX = 0;
  cursorY = 0;
  cursorHover = false;
 
  ngOnInit(): void {
    document.addEventListener('mousemove', (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    });
 
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => this.cursorHover = true);
      el.addEventListener('mouseleave', () => this.cursorHover = false);
    });
  } 

scrolled = false;
  menuOpen = false;
 
  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];
 
  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
 
  scrollTo(selector: string) {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }

   skills = [
    {
      name: 'Angular',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 6.5l1.5 12.5L12 22l8.5-3L22 6.5L12 2z" stroke="#C9A84C" stroke-width="1.2" fill="none"/>
        <path d="M12 6l-4.5 10h1.8l.9-2.3h3.6l.9 2.3H16.5L12 6zm0 3.2l1.3 3.3H10.7L12 9.2z" fill="#C9A84C"/>
      </svg>`,
      description: 'Applications SPA complexes, RxJS, NgRx, Angular Material, Architecture modulaire',
      level: 90
    },
    {
      name: 'Django',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#C9A84C" stroke-width="1.2"/>
        <path d="M9 7h2v10H9V7zM13 7h2v6c0 1.1-.9 2-2 2h-1" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/>
      </svg>`,
      description: 'REST APIs, ORM avancé, Authentication JWT, DjangoRestFramework, PostgreSQL/MySQL',
      level: 82
    },
    {
      name: 'Power Platform',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M4 14l4-8 4 6 3-4 5 6" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C9A84C" stroke-width="1.2"/>
      </svg>`,
      description: 'Power Apps Canvas & Model-driven, Power Automate, Power BI, Dataverse',
      level: 75
    },
    {
      name: 'SAP ERP',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#C9A84C" stroke-width="1.2"/>
        <path d="M8 12h8M12 8v8" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/>
      </svg>`,
      description: 'Modules FI/CO, MM, SD, ABAP initiation, Customizing & Configuration',
      level: 20
    },
    {
      name: 'TypeScript',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C9A84C" stroke-width="1.2"/>
        <path d="M8 10h8M12 10v7" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M16 13.5c-.5-1-1.3-1.5-2-1.5-1.1 0-2 .9-2 2s.9 2 2 2c.7 0 1.5-.5 2-1.5" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/>
      </svg>`,
      description: 'Typage strict, Generics, Decorators, Design Patterns orientés objet',
      level: 85
    },
    // {
    //   name: 'DevOps & Cloud',
    //   icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    //     <path d="M18 10a6 6 0 00-12 0 4 4 0 000 8h12a4 4 0 000-8z" stroke="#C9A84C" stroke-width="1.2"/>
    //   </svg>`,
    //   description: 'Docker, Git/GitLab CI, Azure DevOps, déploiements automatisés',
    //   level: 70
    // },
  ];

  categories = ['Tous', 'Angular', 'Django', 'Power Platform'];
  activeCategory = 'Tous';
 
  projects: Project[] = [
    {
      title: 'Plateforme de suivi de projets informatiques',
      description: 'Application complète de suivi des proejts informatiques , workflow de validation, de suivi et tableaux de bord analytiques.',
      tags: ['Angular 15', 'Django REST', 'Sqlite3'],
      category: 'Angular',
      color: 'linear-gradient(135deg, #1a1408, #2a2010)',
      link: '#',
      featured: true
    },
    {
      title: 'Plateforme de gestion de notes ',
      description: 'Elle permttait aux étudiants de voir leurs notes en temps réél',
      tags: ['Java', 'Power BI', 'Angular'],
      category: 'Angular',
      color: 'linear-gradient(135deg, #080f1a, #101828)',
      link: '#'
    },
    {
      title: 'API E-commerce Multivendeur',
      description: 'Backend scalable avec gestion multi-boutiques, paiement Stripe, notifications temps réel via WebSocket.',
      tags: ['Django', 'Celery', 'Redis', 'Stripe'],
      category: 'Django',
      color: 'linear-gradient(135deg, #0d1a0d, #162416)',
      link: '#'
    },
    {
      title: 'Portail Intranet Corporate',
      description: "Application Angular connectée à l'API SharePoint, avec gestion documentaire, actualités et organigramme interactif.",
      tags: ['Angular', 'SharePoint', 'MS Graph'],
      category: 'Angular',
      color: 'linear-gradient(135deg, #1a0d08, #2a1510)',
      link: '#'
    },
    {
      title: 'Automatisation Process Envoie de mails',
      description: "Flow Power Automate complet d'envoi des email.",
      tags: ['Power Automate', 'Teams', 'Dataverse'],
      category: 'Power Platform',
      color: 'linear-gradient(135deg, #1a1408, #2a2010)',
      link: '#'
    },
    {
      title: 'Planche de notation dactivités',
      description:" Il s'agit d'une plateforme phygitale de notation d'activités permet d'avoir les résultats d'un examen ou concours en temps réel",
      tags: ['Angular', 'Django', 'rabbitMQ', 'Docker'],
      category: 'Angular',
      color: 'linear-gradient(135deg, #0d0d1a, #15152a)',
      link: '#',
      featured: true
    },
    {
      title: "Gestion d'enquêtes",
      description: 'Plaateforme permettant de générer créer des enquêtes destinées à aux etudiants, particuliers etc. ',
      tags: ['Angular', 'Django', 'rabbitMQ', 'Docker'],
      category: 'Angular',
      color: 'linear-gradient(135deg, #0d0d1a, #15152a)',
      link: '#',
      featured: true
    }
  ];
 
  filteredProjects = [...this.projects];
 
  filterProjects(category: string) {
    this.activeCategory = category;
    this.filteredProjects = category === 'Tous'
      ? [...this.projects]
      : this.projects.filter(p => p.category === category);
  }

  certifications = [
    {
      name: 'PL-900: Power Platform Fundamentals',
      organization: 'Microsoft',
      date: 'En préparation 2026',
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" fill="#C9A84C" opacity="0.9"/><rect x="13" y="3" width="8" height="8" fill="#C9A84C" opacity="0.6"/><rect x="3" y="13" width="8" height="8" fill="#C9A84C" opacity="0.6"/><rect x="13" y="13" width="8" height="8" fill="#C9A84C" opacity="0.3"/></svg>`,
      inProgress: true,
      progress:40
    },
    {
      name: 'PL-100: Power Platform App Maker',
      organization: 'Microsoft',
      date: 'En préparation 2026',
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" fill="#C9A84C" opacity="0.9"/><rect x="13" y="3" width="8" height="8" fill="#C9A84C" opacity="0.6"/><rect x="3" y="13" width="8" height="8" fill="#C9A84C" opacity="0.6"/><rect x="13" y="13" width="8" height="8" fill="#C9A84C" opacity="0.3"/></svg>`,
      inProgress: true,
      progress: 20
    },
    {
      name: 'SAP Certified Application Associate',
      organization: 'SAP',
      date: 'En préparation 2026',
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#C9A84C" stroke-width="1.5"/><path d="M8 12h8M10 9l2-3 2 3M10 15l2 3 2-3" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/></svg>`,
      inProgress: true,
      progress: 20
    },
    {
      name: 'Microsoft Business Analyst',
      organization: 'Coursera',
      date: '2025',
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 6.5l1.5 12.5L12 22l8.5-3L22 6.5L12 2z" stroke="#C9A84C" stroke-width="1.5" fill="none"/><path d="M12 6l-4.5 10h1.8l.9-2.3h3.6l.9 2.3H16.5L12 6zm0 3.2l1.3 3.3H10.7L12 9.2z" fill="#C9A84C"/></svg>`,
      inProgress: false
    },
    // {
    //   name: 'Django REST Framework Mastery',
    //   organization: 'Udemy / Django',
    //   date: '2022',
    //   icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#C9A84C" stroke-width="1.5"/><path d="M9 7h2v10H9V7zM13 7h2v6c0 1.1-.9 2-2 2h-1" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    //   inProgress: false
    // },
  ];

  @HostListener('window:scroll')
    Scroll() {
  this.scrolled = window.scrollY > 50;

  document.querySelectorAll('section').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('animate-in');
    }
  });
}

currentYear = new Date().getFullYear();

downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/Curriculum V CEDRIC ATEBA.pdf';
  link.download = 'CV_Cedric_ATEBA.pdf';
  link.target = '_blank'; // ouvre aussi dans un nouvel onglet
  link.click();
}
}
