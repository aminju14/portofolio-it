const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });

doc.pipe(fs.createWriteStream('public/CV_Muhammad_Amin.pdf'));

// Colors
const primaryColor = '#1D68F2';
const secondaryColor = '#3b82f6';
const textColor = '#1e293b';
const lightText = '#64748b';

// Header
doc.fontSize(28).fillColor(primaryColor).text('MUHAMMAD AMIN', { align: 'center' });
doc.fontSize(14).fillColor(secondaryColor).text('Senior Software Engineer & System Architect', { align: 'center' });
doc.moveDown(0.5);

doc.fontSize(10).fillColor(lightText).text('Jakarta, Indonesia | muhammad.amin1406@gmail.com | linkedin.com/in/aminju | github.com/aminju14', { align: 'center' });
doc.moveDown(1.5);

// Divider
doc.moveTo(50, doc.y).lineTo(550, doc.y).lineWidth(1).strokeColor('#e2e8f0').stroke();
doc.moveDown(1.5);

// Professional Summary
doc.fontSize(14).fillColor(primaryColor).text('PROFESSIONAL SUMMARY', { underline: false });
doc.moveDown(0.5);
doc.fontSize(10).fillColor(textColor).text(
  'Building scalable systems from idea to production. Specializing in microservices, AI integrations, and intelligent automation that drives real business impact.',
  { align: 'justify', lineGap: 3 }
);
doc.moveDown(1.5);

// Experience
doc.fontSize(14).fillColor(primaryColor).text('EXPERIENCE');
doc.moveDown(0.5);

const experiences = [
  {
    title: 'Software Engineer Section Head',
    company: 'PT Triputra Agro Persada',
    date: '2020 - Present',
    desc: [
      'Serving as Software Engineer Section Head, I lead the IT team in designing, developing, and managing various end-to-end application solutions that support business operations.',
      'Actively analyze requirements, resolve complex issues in running systems, and ensure every application is optimal and scalable.',
      'Involved in the mobile app deployment process to the Play Store and App Store, while ensuring system quality and stability through monitoring and continuous improvement.'
    ]
  },
  {
    title: 'Mobile Developer',
    company: 'PT Indocyber Global Technology',
    date: '2017 - 2020',
    desc: [
      'Responsible for building and developing Android and iOS applications with a focus on optimal performance, usability, and user experience.',
      'Collaborated directly with users and stakeholders to gather business requirements, translating them into intuitive UI/UX designs and implementing them into stable, efficient applications.',
      'Active in maintenance, system analysis, app deployment, and technical documentation to ensure long-term sustainability and ease of future development.'
    ]
  },
  {
    title: 'Android Developer',
    company: 'PT Swadharma Duta Data',
    date: '2016 - 2017',
    desc: [
      'Focused on developing Android-based mobile applications with a strong emphasis on code quality and user experience.',
      'Involved in the UI/UX design process, feature development, and app maintenance to ensure peak performance.',
      'Interacted with users to understand their needs, analyzed existing systems, and provided effective technical solutions to enhance application quality.'
    ]
  }
];

experiences.forEach(exp => {
  doc.fontSize(12).fillColor(textColor).font('Helvetica-Bold').text(exp.title, { continued: true });
  doc.font('Helvetica').fillColor(lightText).text(` | ${exp.company}`, { continued: true });
  doc.text(`   (${exp.date})`, { align: 'right' });
  doc.moveDown(0.3);
  exp.desc.forEach(item => {
    doc.fontSize(10).fillColor(textColor).text(`• ${item}`, { indent: 15, lineGap: 2 });
  });
  doc.moveDown(1);
});

// Education
doc.fontSize(14).fillColor(primaryColor).font('Helvetica-Bold').text('EDUCATION');
doc.moveDown(0.5);
doc.fontSize(12).fillColor(textColor).font('Helvetica-Bold').text('Informatics Engineering');
doc.fontSize(10).fillColor(lightText).font('Helvetica').text('National University | 2012 - 2016');
doc.moveDown(1.5);

// Certificates
doc.fontSize(14).fillColor(primaryColor).font('Helvetica-Bold').text('CERTIFICATES');
doc.moveDown(0.5);
const certificates = [
  "Certified Android Web App",
  "Certified Arduino Berbasis Android Mikro",
  "Certificated of Attendance by AVNET Technology Solution",
  "Certificated Workshop Augment Reality",
  "Certified English Access Microscholarship Program by CCE Indonesia",
  "Certified CCNA Routing and Switching: Introduction to Networks by Cisco Networking Academy"
];
certificates.forEach(cert => {
  doc.fontSize(10).fillColor(textColor).font('Helvetica').text(`• ${cert}`, { indent: 15, lineGap: 2 });
});
doc.moveDown(1.5);

// Technical Skills
doc.fontSize(14).fillColor(primaryColor).font('Helvetica-Bold').text('TECHNICAL EXPERTISE');
doc.moveDown(0.5);

doc.fontSize(10).fillColor(textColor).font('Helvetica-Bold').text('Core Concepts: ', { continued: true });
doc.font('Helvetica').text('Microservices, Clean Architecture, Event-Driven, AI Integration, Scalable Systems');
doc.moveDown(0.3);
doc.font('Helvetica-Bold').text('Databases: ', { continued: true });
doc.font('Helvetica').text('PostgreSQL, MySQL, Redis, MongoDB');
doc.moveDown(0.3);
doc.font('Helvetica-Bold').text('Tools & Architecture: ', { continued: true });
doc.font('Helvetica').text('Docker, RabbitMQ, System Architecture, REST API, Microservices, Linux, Git');

doc.end();
console.log('PDF generated successfully at public/CV_Muhammad_Amin.pdf');
