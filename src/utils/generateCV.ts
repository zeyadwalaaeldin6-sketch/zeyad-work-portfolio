import { jsPDF } from 'jspdf';

export const generateCV = (language: 'en' | 'ar') => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  let yPosition = 20;

  // Header
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Zeyad Walaaeldin Ahmed", pageWidth / 2, yPosition, { align: 'center' });
  
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Business and Commerce Student", pageWidth / 2, yPosition, { align: 'center' });
  
  // Contact Information
  yPosition += 15;
  doc.setFontSize(10);
  const contactInfo = [
    "Phone: 01158166331",
    "Email: Zeyadwalaaeldin@outlook.com",
    "LinkedIn: www.linkedin.com/in/zeyadwalaaeldin",
    "Address: Al Narges, 5th settlement, New Cairo"
  ];
  
  contactInfo.forEach(info => {
    doc.text(info, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 5;
  });

  // Summary
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("SUMMARY", 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const summaryText = "Motivated 2nd-year student at the Faculty of Commerce, Georgia Program, Cairo University. Passionate about Finance and Information Technology. Seeking internships in the business and commerce fields to gain practical experience and apply academic knowledge in real-world projects.";
  const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 40);
  doc.text(summaryLines, 20, yPosition);
  yPosition += summaryLines.length * 5 + 10;

  // Education
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Cairo University", 20, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text("2024 – 2028", pageWidth - 60, yPosition);
  
  yPosition += 5;
  doc.setFontSize(10);
  doc.text("Faculty of Commerce - Georgia Program", 20, yPosition);
  yPosition += 4;
  doc.text("2nd Year | GPA: Very Good", 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Princeton International School", 20, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text("2021-2024", pageWidth - 60, yPosition);
  
  yPosition += 5;
  doc.setFontSize(10);
  doc.text("American Diploma (EST)", 20, yPosition);

  // Experience
  yPosition += 15;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EXPERIENCE", 20, yPosition);
  
  const experiences = [
    {
      title: "Digital Marketing Trainee",
      company: "Banque Misr",
      period: "Sept 2025 / Present",
      description: "The 'Maharat Min Google' Banque Misr training in collaboration with Google, focused on entrepreneurship and digital marketing to develop practical skills for launching and growing businesses."
    },
    {
      title: "Data Analytics Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "June 2025 / Present",
      description: "Trainee at (DEPI) Program offered by the Ministry of Communications and Information Technology. Specializing in the Microsoft Power BI Data Analytics Program."
    },
    {
      title: "Financial Inclusion Intern",
      company: "Commercial International Bank",
      period: "August 2025",
      description: "Intern at CIB online internship. Attended Lectures about Several Business-related topics including Risk Management, ESG Factors, AI/Data Science and Banking Operations."
    },
    {
      title: "Accounting Intern",
      company: "Arab African International Bank (AAIB)",
      period: "July 2025",
      description: "Rotational Intern at the Finance Department at AAIB. Week 1/2 (Accounts Payable and Fixed Asset Management), Week 3/4 (Financial Reporting and Taxation)."
    }
  ];

  experiences.forEach(exp => {
    yPosition += 8;
    if (yPosition > pageHeight - 30) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(exp.title, 20, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(exp.period, pageWidth - 60, yPosition);
    
    yPosition += 4;
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(exp.company, 20, yPosition);
    
    yPosition += 4;
    doc.setFont("helvetica", "normal");
    const descLines = doc.splitTextToSize(exp.description, pageWidth - 40);
    doc.text(descLines, 20, yPosition);
    yPosition += descLines.length * 4 + 3;
  });

  // Volunteering
  yPosition += 10;
  if (yPosition > pageHeight - 50) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("VOLUNTEERING EXPERIENCE", 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Delegate at SBS Student Activity", 20, yPosition);
  doc.setFont("helvetica", "normal");
  doc.text("Feb 2025 - August 2025", pageWidth - 60, yPosition);
  
  yPosition += 5;
  doc.setFontSize(10);
  const volunteerDesc = "Attended Educational Lectures About Economics and Banking. Worked in Teams to Research and Present different Economics Related Topics.";
  const volunteerLines = doc.splitTextToSize(volunteerDesc, pageWidth - 40);
  doc.text(volunteerLines, 20, yPosition);
  yPosition += volunteerLines.length * 4;

  // Skills Section
  yPosition += 15;
  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = 20;
  }

  // Technical Skills
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const techSkills = ["Data Analysis", "Power BI", "Microsoft Office (Excel, Word, PowerPoint)", "Data Entry"];
  techSkills.forEach(skill => {
    doc.text(`• ${skill}`, 25, yPosition);
    yPosition += 5;
  });

  // Personal Skills
  yPosition += 5;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("PERSONAL SKILLS", 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const personalSkills = ["Communication", "Teamwork", "Presentation", "Attention to Detail", "Problem Solving"];
  personalSkills.forEach(skill => {
    doc.text(`• ${skill}`, 25, yPosition);
    yPosition += 5;
  });

  // Languages
  yPosition += 5;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("LANGUAGES", 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const languages = ["Arabic – Native Language", "English – Very Good", "German – Basic"];
  languages.forEach(lang => {
    doc.text(`• ${lang}`, 25, yPosition);
    yPosition += 5;
  });

  // Download the PDF
  doc.save('Zeyad_Walaaeldin_CV.pdf');
};