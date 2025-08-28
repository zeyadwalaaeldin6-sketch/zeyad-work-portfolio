import { Mail, Linkedin, Github, Database, BarChart3, TrendingUp, Users, Award, Calendar, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const workExperience = [
    {
      role: "Data Analysis Trainee",
      company: "DEPI Program, Ministry of Communications and Information Technology",
      period: "Jun 2025 – Present",
      type: "current"
    },
    {
      role: "Financial Inclusion and Risk Management Intern",
      company: "CIB",
      period: "Aug 2025",
      type: "intern"
    },
    {
      role: "Accounting Intern",
      company: "Arab African International Bank",
      period: "Jul 2025",
      type: "intern"
    },
    {
      role: "Delegate of Economics and Banking (Volunteer)",
      company: "SBS Student Activity",
      period: "Feb 2025 – Aug 2025",
      type: "volunteer"
    }
  ];

  const projects = [
    {
      title: "UK Train Data Analysis",
      description: "Analyzed UK train station data to identify performance bottlenecks, passenger flow patterns, and provided strategic insights and solutions to optimize railway operations and improve passenger experience.",
      highlight: true
    },
    {
      title: "Sales Data Analysis", 
      description: "Extracted insights and trends to support strategic decision-making through comprehensive sales performance evaluation."
    },
    {
      title: "Financial Performance Analysis",
      description: "Evaluated key financial metrics to assess company performance and identify growth opportunities."
    },
    {
      title: "Premier League Players Data Analysis",
      description: "Explored player statistics and performance patterns through advanced data visualization and statistical modeling."
    }
  ];

  const skills = {
    technical: ["Data Analysis", "Financial Analysis", "Power BI", "Excel"],
    soft: ["Communication", "Presentation Skills", "Teamwork", "Attention to Detail"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-gradient-hero text-primary-foreground relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 shadow-glow animate-pulse">
                <Database className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Data Analyst</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
                Zeyad Walaaeldin 
                <span className="block text-primary-light bg-gradient-to-r from-primary-light to-blue-300 bg-clip-text text-transparent">Ahmed</span>
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 max-w-xl">
                I help organizations transform data into clarity—turning numbers into insights and insights into confident, strategic decisions.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105"
                  asChild
                >
                  <a href="mailto:Zeyadwalaaeldin6@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/zeyadwalaaeldin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105"
                  asChild
                >
                  <a href="https://wa.me/201158166331" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Profile Image with Enhanced Gradient Overlay */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-profile rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <img 
                  src="/lovable-uploads/ddf3728d-9e05-4380-8ac0-d865b12f9ad0.png"
                  alt="Zeyad Walaaeldin Ahmed - Professional Profile" 
                  className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-elegant opacity-90 hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-background/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="h-8 w-8 text-primary-light" />
            Education
          </h2>
          <Card className="bg-gradient-card border-0 shadow-card-hover hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Faculty of Commerce
                  </h3>
                  <p className="text-white/80 mb-2">
                    Georgia State University Joint Program with Cairo University
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Calendar className="h-4 w-4" />
                    <span>2024–2028</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary-light" />
            Professional Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary-light to-transparent opacity-30 hidden md:block"></div>
            
            <div className="grid gap-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-card-hover hover:shadow-elegant transition-all duration-500 group hover:scale-[1.02] relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block group-hover:scale-125 transition-transform"></div>
                  
                  <CardContent className="p-8 md:pl-12">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <h3 className="text-xl font-semibold text-white group-hover:text-primary-light transition-colors duration-300">
                            {job.role}
                          </h3>
                          <Badge 
                            variant={job.type === 'current' ? 'default' : 'secondary'} 
                            className={`text-xs ${
                              job.type === 'current' 
                                ? 'bg-primary/20 text-primary border-primary/30 animate-pulse' 
                                : 'bg-secondary/20 text-secondary border-secondary/30'
                            }`}
                          >
                            {job.type === 'current' ? '🚀 Current' : job.type === 'intern' ? '💼 Internship' : '🤝 Volunteer'}
                          </Badge>
                        </div>
                        <p className="text-white/80 mb-3 font-medium text-lg">
                          {job.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Calendar className="h-4 w-4 text-primary-light" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary-light" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 shadow-card-hover hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary-light" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card-hover hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-light" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-secondary/50 border-secondary text-secondary-foreground hover:bg-secondary transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Database className="h-8 w-8 text-primary-light" />
            Featured Projects
          </h2>
          <div className="grid gap-8">
            {/* Featured Project */}
            {projects.filter(project => project.highlight).map((project, index) => (
              <Card key={`featured-${index}`} className="bg-gradient-to-br from-primary/20 via-blue-500/10 to-purple-500/20 border border-primary/30 shadow-glow hover:shadow-elegant transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg backdrop-blur-sm">
                      <BarChart3 className="h-6 w-6 text-primary-light" />
                    </div>
                    <div>
                      <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">Featured Project</Badge>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {projects.filter(project => !project.highlight).map((project, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-card-hover hover:shadow-elegant transition-all duration-500 group hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-primary-light" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-light transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                Ready to turn your data challenges into strategic opportunities? Let's discuss how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="mailto:Zeyadwalaaeldin6@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Zeyadwalaaeldin6@gmail.com
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/zeyadwalaaeldin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-green-600/20 backdrop-blur-sm border-green-400/30 hover:bg-green-600/30 text-green-100"
                  asChild
                >
                  <a href="https://wa.me/201158166331" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-white/70">
            © 2025 Zeyad Walaaeldin Ahmed. Transforming data into strategic insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
