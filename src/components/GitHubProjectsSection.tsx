import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Code2, Clock, ChevronRight, Folder, Calendar, ArrowUpRight } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  tags: string[];
  updated: string;
  url: string;
  featured?: boolean;
  stars?: number;
  forks?: number;
  color: string;
}

const fallbackRepos: GitHubRepo[] = [
  {
    name: "RUSLE_Western-Maharashtra",
    description: "30m resolution soil erosion modelling integrating RUSLE, terrain analysis, NDVI, and ML-based vulnerability assessment across Western Maharashtra.",
    language: "Python",
    tags: ["Python", "GEE", "RUSLE", "GIS"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/RUSLE_Western-Maharashtra",
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Pravara-River-Basin-Advanced-Morphometric-Hydrological-Analysis",
    description: "Comprehensive watershed morphometric and soil erosion modelling pipeline with conservation prioritization for the Pravara River Basin.",
    language: "Python",
    tags: ["Hydrology", "Morphometry", "Python"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/Pravara-River-Basin-Advanced-Morphometric-Hydrological-Analysis",
    featured: true,
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    name: "Crop-water-Balance-Analysis-GEE-",
    description: "Crop water requirement and seasonal water balance modelling using satellite datasets in Google Earth Engine.",
    language: "JavaScript",
    tags: ["GEE", "Remote Sensing", "Water Resources"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/Crop-water-Balance-Analysis-GEE-",
    featured: true,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Soil-Erosion-Analysis-GEE",
    description: "Geospatial soil erosion modelling using RUSLE methodology in Google Earth Engine.",
    language: "JavaScript",
    tags: ["JavaScript", "GEE", "Soil Conservation"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/Soil-Erosion-Analysis-GEE",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    name: "TRMM-GPM-Rainfall-Data-Extraction-Guide-Panchganga-Basin",
    description: "20-year rainfall extraction and basin-wise organization using TRMM/GPM datasets.",
    language: "Python",
    tags: ["Python", "Rainfall Analysis", "Hydrology"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/TRMM-GPM-Rainfall-Data-Extraction-Guide-Panchganga-Basin",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    name: "BORI-DAM-breach-plots-",
    description: "Dam breach hydrograph analysis and flood modelling visualizations.",
    language: "Python",
    tags: ["HEC-RAS", "Flood Analysis", "Hydraulic Modeling"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/BORI-DAM-breach-plots-",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

const languageColors: Record<string, string> = {
  Python: "#3B82F6",
  JavaScript: "#FACC15",
  TypeScript: "#60A5FA",
  R: "#10B981",
  "Jupyter Notebook": "#F97316",
};

const GitHubProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [expandedRepo, setExpandedRepo] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Satwik-1234/repos?sort=updated&per_page=30");
        if (!res.ok) return;
        const data = await res.json();

        const featuredNames = [
          "RUSLE_Western-Maharashtra",
          "Pravara-River-Basin-Advanced-Morphometric-Hydrological-Analysis",
          "Crop-water-Balance-Analysis-GEE-",
        ];

        const knownTags: Record<string, string[]> = {
          "RUSLE_Western-Maharashtra": ["Python", "GEE", "RUSLE", "GIS"],
          "Pravara-River-Basin-Advanced-Morphometric-Hydrological-Analysis": ["Hydrology", "Morphometry", "Python"],
          "Crop-water-Balance-Analysis-GEE-": ["GEE", "Remote Sensing", "Water Resources"],
          "Soil-Erosion-Analysis-GEE": ["JavaScript", "GEE", "Soil Conservation"],
          "TRMM-GPM-Rainfall-Data-Extraction-Guide-Panchganga-Basin": ["Python", "Rainfall Analysis", "Hydrology"],
          "BORI-DAM-breach-plots-": ["HEC-RAS", "Flood Analysis", "Hydraulic Modeling"],
        };

        const colors = [
          "from-blue-500/20 to-cyan-500/20",
          "from-teal-500/20 to-emerald-500/20",
          "from-amber-500/20 to-orange-500/20",
          "from-violet-500/20 to-purple-500/20",
          "from-rose-500/20 to-pink-500/20",
          "from-indigo-500/20 to-blue-500/20",
        ];

        const mapped: GitHubRepo[] = data
          .filter((r: any) => !r.fork)
          .map((r: any, idx: number) => ({
            name: r.name,
            description: r.description || "No description available.",
            language: r.language || "Unknown",
            tags: knownTags[r.name] || [r.language || "Code"].filter(Boolean),
            updated: new Date(r.updated_at).toLocaleDateString("en-US", { year: "numeric", month: "short" }),
            url: r.html_url,
            featured: featuredNames.includes(r.name),
            stars: r.stargazers_count,
            forks: r.forks_count,
            color: colors[idx % colors.length],
          }));

        mapped.sort((a: GitHubRepo, b: GitHubRepo) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });

        if (mapped.length > 0) setRepos(mapped);
      } catch {
        // keep fallback
      }
    };
    fetchRepos();
  }, []);

  const featured = repos.filter((r) => r.featured);
  const regular = repos.filter((r) => !r.featured);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Github className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Open Source</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            GitHub <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open-source repositories in hydrology, GIS analysis, and geospatial engineering.
          </p>
        </motion.div>

        {/* Featured Repos - Expandable cards like ProjectsSection */}
        <div className="space-y-6 mb-12">
          {featured.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div
                className={`relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 ${
                  expandedRepo === repo.name ? 'border-primary/50' : ''
                }`}
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${repo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Project number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 font-display">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Header - clickable to expand */}
                <div
                  className="relative p-6 md:p-8 cursor-pointer"
                  onClick={() => setExpandedRepo(expandedRepo === repo.name ? null : repo.name)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/15 text-primary border border-primary/20">
                          ⭐ Featured
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{repo.updated}</span>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-mono">
                        {repo.name}
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-2xl">
                        {repo.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {repo.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80 border border-foreground/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground hidden lg:block">
                        {expandedRepo === repo.name ? 'Collapse' : 'Expand'}
                      </span>
                      <div className={`w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center transition-transform duration-300 ${
                        expandedRepo === repo.name ? 'rotate-90' : ''
                      }`}>
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedRepo === repo.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative border-t border-border/30"
                    >
                      <div className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Repository Details */}
                          <div>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                              <Code2 className="w-4 h-4 text-primary" />
                              Repository Details
                            </h4>
                            <ul className="space-y-3">
                              <li className="text-sm text-muted-foreground flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Primary Language: <strong className="text-foreground">{repo.language}</strong></span>
                              </li>
                              {repo.stars !== undefined && (
                                <li className="text-sm text-muted-foreground flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>Stars: <strong className="text-foreground">{repo.stars}</strong></span>
                                </li>
                              )}
                              {repo.forks !== undefined && (
                                <li className="text-sm text-muted-foreground flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                  <span>Forks: <strong className="text-foreground">{repo.forks}</strong></span>
                                </li>
                              )}
                              <li className="text-sm text-muted-foreground flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <span>Last Updated: <strong className="text-foreground">{repo.updated}</strong></span>
                              </li>
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                              <Folder className="w-4 h-4 text-primary" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {repo.tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 text-sm font-medium rounded-xl bg-primary/5 border border-primary/10 text-foreground">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* View Repository Button */}
                        <div className="mt-8 pt-6 border-t border-border/30">
                          <motion.a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="w-4 h-4" />
                            View Repository
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Repos - Compact expandable cards */}
        <div className="space-y-4">
          {regular.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              className="group"
            >
              <div className={`relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 ${
                expandedRepo === repo.name ? 'border-primary/50' : ''
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${repo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div
                  className="relative p-5 md:p-6 cursor-pointer"
                  onClick={() => setExpandedRepo(expandedRepo === repo.name ? null : repo.name)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Code2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors font-mono truncate">
                          {repo.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1 ml-7">
                        {repo.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3 ml-7">
                        {repo.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-foreground/10 text-foreground/70 border border-foreground/10">
                            {tag}
                          </span>
                        ))}
                        <div className="flex items-center gap-1.5 ml-2 text-xs text-muted-foreground">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: languageColors[repo.language] || '#6B7280' }}
                          />
                          <span>{repo.language}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      expandedRepo === repo.name ? 'rotate-90' : ''
                    }`}>
                      <ChevronRight className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedRepo === repo.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative border-t border-border/30"
                    >
                      <div className="p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {repo.stars !== undefined && repo.stars > 0 && (
                            <span className="flex items-center gap-1"><Star className="w-4 h-4" />{repo.stars} stars</span>
                          )}
                          {repo.forks !== undefined && repo.forks > 0 && (
                            <span className="flex items-center gap-1"><GitFork className="w-4 h-4" />{repo.forks} forks</span>
                          )}
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{repo.updated}</span>
                        </div>
                        <motion.a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="w-4 h-4" />
                          View Repository
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Satwik-1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            View All Repositories
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubProjectsSection;
