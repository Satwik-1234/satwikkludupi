import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, MapPin, Linkedin, Phone, MessageCircle, Calendar, 
  Upload, Waves, Map, FileSpreadsheet, Mountain, Cog,
  Clock, IndianRupee, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: Waves,
    title: 'Flood Risk Mapping',
    description: 'HEC-RAS based floodplain inundation & risk zonation mapping',
    tools: ['HEC-RAS', 'ArcGIS', 'QGIS']
  },
  {
    icon: Mountain,
    title: 'Watershed Analysis',
    description: 'Hydrological modeling, rainfall-runoff analysis & PMF estimation',
    tools: ['HEC-HMS', 'GEE', 'SRTM DEM']
  },
  {
    icon: Map,
    title: 'Soil Erosion Assessment',
    description: 'RUSLE-based soil loss estimation & conservation planning',
    tools: ['RUSLE', 'GEE', 'CHIRPS']
  },
  {
    icon: FileSpreadsheet,
    title: 'GIS Spatial Analysis',
    description: 'LULC mapping, change detection & spatial data analysis',
    tools: ['ArcGIS Pro', 'QGIS', 'Sentinel-2']
  },
  {
    icon: Cog,
    title: 'CAD/CFD Simulations',
    description: 'Agricultural machinery design & fluid flow simulations',
    tools: ['SolidWorks', 'ANSYS', 'NX CAD']
  }
];

const impactMetrics = [
  { value: 6, suffix: '+', label: 'Major Projects' },
  { value: 20, suffix: '+', label: 'Certifications' },
  { value: 5, suffix: '+', label: 'Organizations' },
  { value: 24, suffix: 'hrs', label: 'Response Time' }
];

const techStack = [
  { name: 'HEC-HMS', category: 'Hydrology' },
  { name: 'HEC-RAS', category: 'Hydrology' },
  { name: 'ArcGIS Pro', category: 'GIS' },
  { name: 'QGIS', category: 'GIS' },
  { name: 'Google Earth Engine', category: 'Remote Sensing' },
  { name: 'SolidWorks', category: 'CAD' },
  { name: 'ANSYS', category: 'CFD/FEA' },
  { name: 'Agisoft Metashape', category: 'Photogrammetry' }
];

const projectTypes = [
  { id: 'flood', label: 'Flood Risk Mapping (HEC-RAS)' },
  { id: 'watershed', label: 'Watershed Analysis & Hydrological Modelling (HEC-HMS)' },
  { id: 'erosion', label: 'Soil Erosion Assessment (RUSLE/GEE)' },
  { id: 'gis', label: 'GIS Spatial Analysis' },
  { id: 'cad', label: 'CAD/CFD Simulations' }
];

const timelineOptions = ['Urgent', '1-2 weeks', '1 month', 'Flexible'];
const budgetOptions = ['₹10k-50k', '₹50k-2L', 'Custom'];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
    selectedTypes: [] as string[],
    timeline: '',
    budget: '',
    files: null as FileList | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleTypeToggle = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTypes: prev.selectedTypes.includes(typeId)
        ? prev.selectedTypes.filter(t => t !== typeId)
        : [...prev.selectedTypes, typeId]
    }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      setFormData(prev => ({ ...prev, files: e.dataTransfer.files }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Received!",
      description: "Thank you! I'll respond within 24 hours with a detailed quote.",
    });
    
    setFormData({ 
      name: '', 
      email: '', 
      projectDescription: '',
      selectedTypes: [],
      timeline: '',
      budget: '',
      files: null
    });
    setIsSubmitting(false);
  };

  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const calendlyUrl = 'https://calendly.com/satwikudupi';

  return (
    <>
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-muted-foreground max-w-xl mx-auto">
                <span className="font-semibold text-primary">PravahaTattva Solutions</span> — 
                Professional GIS, hydrology, and agricultural engineering consulting
              </p>
            </div>

            {/* Impact Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
            >
              {impactMetrics.map((metric, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {metric.value}{metric.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Service Offerings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-display font-bold text-center mb-8">
                Service <span className="gradient-text">Offerings</span>
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="glass-card p-6 hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-display font-bold text-center mb-8">
                Technical <span className="gradient-text">Stack</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="glass-card px-4 py-2 flex items-center gap-2 hover:border-primary/50 transition-all"
                  >
                    <span className="text-xs text-primary/70">{tech.category}</span>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="glass-card p-8">
                  <h3 className="text-xl font-display font-bold mb-2">Satwik Udupi</h3>
                  <p className="text-primary font-medium mb-6">PravahaTattva Solutions</p>
                  
                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">Phone</p>
                        <a 
                          href={`tel:${phoneNumber}`}
                          className="text-primary hover:underline font-medium"
                        >
                          +91 9834300849
                        </a>
                        <div className="flex gap-2 mt-2">
                          <a 
                            href={`tel:${phoneNumber}`}
                            className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            Call Now
                          </a>
                          <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-3 py-1.5 rounded-full hover:bg-green-500/20 transition-colors"
                          >
                            <MessageCircle className="w-3 h-3" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a 
                          href="mailto:Sarwikudupi@gmail.com" 
                          className="text-primary hover:underline block"
                        >
                          Sarwikudupi@gmail.com
                        </a>
                        <a 
                          href="mailto:satwikudupi2018@gmail.com" 
                          className="text-primary hover:underline text-sm"
                        >
                          satwikudupi2018@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/satwik-udupi-37304a231"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">
                          Krishna Canal, Vidyanagar Road<br />
                          Karad, Maharashtra 415124
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Calendly Button */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <a 
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <Calendar className="w-5 h-5" />
                      Book a Consultation
                    </a>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="glass-card p-2 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60977.03894508831!2d74.13721279375474!3d17.291079747055163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183e3a1e4f953%3A0x9987a0e03a00e22b!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karad, Maharashtra Location"
                  />
                </div>

                {/* LinkedIn Embed Badge */}
                <div className="glass-card p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">Connect on LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/satwik-udupi-37304a231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    Satwik Udupi
                  </a>
                </div>
              </motion.div>

              {/* Project Quote Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Quick Project Quote</h3>
                    <p className="text-sm text-muted-foreground">What can I help with today?</p>
                  </div>
                  
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-muted/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-muted/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Project Type
                    </label>
                    <div className="space-y-2">
                      {projectTypes.map((type) => (
                        <label 
                          key={type.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.selectedTypes.includes(type.id)
                              ? 'border-primary bg-primary/10'
                              : 'border-border/50 hover:border-primary/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedTypes.includes(type.id)}
                            onChange={() => handleTypeToggle(type.id)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            formData.selectedTypes.includes(type.id)
                              ? 'border-primary bg-primary'
                              : 'border-muted-foreground'
                          }`}>
                            {formData.selectedTypes.includes(type.id) && (
                              <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                            )}
                          </div>
                          <span className="text-sm">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Upload Data (Optional)
                    </label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                        isDragging 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border/50 hover:border-primary/50'
                      }`}
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drag & Drop DEM/Shapefile/Rainfall Data
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        or{' '}
                        <label className="text-primary cursor-pointer hover:underline">
                          browse files
                          <input
                            type="file"
                            multiple
                            className="sr-only"
                            onChange={(e) => setFormData(prev => ({ ...prev, files: e.target.files }))}
                          />
                        </label>
                      </p>
                      {formData.files && formData.files.length > 0 && (
                        <p className="text-sm text-primary mt-2">
                          {formData.files.length} file(s) selected
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                        <Clock className="w-4 h-4" /> Timeline
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {timelineOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, timeline: option }))}
                            className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                              formData.timeline === option
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border/50 hover:border-primary/50'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" /> Budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, budget: option }))}
                            className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                              formData.budget === option
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border/50 hover:border-primary/50'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Describe Your Needs
                    </label>
                    <Textarea
                      placeholder="Brief description of your project requirements..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      maxLength={200}
                      rows={3}
                      className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1 text-right">
                      {formData.projectDescription.length}/200
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent text-primary-foreground shadow-button hover:opacity-90 py-6 text-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'GET FREE QUOTE'}
                  </Button>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground py-3 rounded-lg font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Book Call
                    </a>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>

                  {/* Availability Status */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-muted-foreground">Currently Available For:</span>
                      <span className="font-medium text-foreground">Freelance | Consulting</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    Response Time: Within 24 Hours
                  </p>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Banner */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/50 py-3 px-4 md:hidden"
      >
        <div className="flex gap-2 max-w-md mx-auto">
          <a 
            href={`tel:${phoneNumber}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-medium"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ContactSection;
