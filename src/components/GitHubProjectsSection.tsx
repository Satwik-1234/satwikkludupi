import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Code2, Clock, ArrowUpRight } from 'lucide-react';

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
  },
  {
    name: "Pravara-River-Basin-Advanced-Morphometric-Hydrological-Analysis",
    description: "Comprehensive watershed morphometric and soil erosion modelling pipeline with conservation prioritization for the Pravara River Basin.",
    language: "Python",
    tags: ["Hydrology", "Morphometry", "Python"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/Pravara-River-Basin-Advanced-Morphometric-Hydrological-Analysis",
    featured: true,
  },
  {
    name: "Crop-water-Balance-Analysis-GEE-",
    description: "Crop water requirement and seasonal water balance modelling using satellite datasets in Google Earth Engine.",
    language: "JavaScript",
    tags: ["GEE", "Remote Sensing", "Water Resources"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/Crop-water-Balance-Analysis-GEE-",
    featured: true,
  },
  {
    name: "Soil-Erosion-Analysis-GEE",
    description: "Geospatial soil erosion modelling using RUSLE methodology in Google Earth Engine.",
    language: "JavaScript",
    tags: ["JavaScript", "GEE", "Soil Conservation"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/Soil-Erosion-Analysis-GEE",
  },
  {
    name: "TRMM-GPM-Rainfall-Data-Extraction-Guide-Panchganga-Basin",
    description: "20-year rainfall extraction and basin-wise organization using TRMM/GPM datasets.",
    language: "Python",
    tags: ["Python", "Rainfall Analysis", "Hydrology"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/TRMM-GPM-Rainfall-Data-Extraction-Guide-Panchganga-Basin",
  },
  {
    name: "BORI-DAM-breach-plots-",
    description: "Dam breach hydrograph analysis and flood modelling visualizations.",
    language: "Python",
    tags: ["HEC-RAS", "Flood Analysis", "Hydraulic Modeling"],
    updated: "2024",
    url: "https://github.com/Satwik-1234/BORI-DAM-breach-plots-",
  },
];

const languageColors: Record<string, string> = {
  Python: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  R: "bg-emerald-500",
  "Jupyter Notebook": "bg-orange-500",
};

const GitHubProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);

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

        const mapped: GitHubRepo[] = data
          .filter((r: any) => !r.fork)
          .map((r: any) => ({
            name: r.name,
            description: r.description || "No description available.",
            language: r.language || "Unknown",
            tags: knownTags[r.name] || [r.language || "Code"].filter(Boolean),
            updated: new Date(r.updated_at).toLocaleDateString("en-US", { year: "numeric", month: "short" }),
            url: r.html_url,
            featured: featuredNames.includes(r.name),
            stars: r.stargazers_count,
            forks: r.forks_count,
          }));

        // Sort: featured first, then by update date
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
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

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

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            GitHub <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open-source repositories in hydrology, GIS analysis, and geospatial engineering.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Featured Repos */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Featured badge */}
              <div className="absolute -top-3 left-5">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground">
                  Featured
                </span>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex-1 flex flex-col">
                {/* Repo name */}
                <div className="flex items-start justify-between gap-2 mb-3 mt-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <Code2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <h3 className="text-sm font-bold text-foreground truncate font-mono">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-foreground/5 text-muted-foreground border border-foreground/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/30">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || "bg-muted-foreground"}`} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {repo.stars !== undefined && repo.stars > 0 && (
                      <span className="flex items-center gap-1"><Star className="w-3 h-3" />{repo.stars}</span>
                    )}
                    {repo.forks !== undefined && repo.forks > 0 && (
                      <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks}</span>
                    )}
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{repo.updated}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Regular Repos Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {regular.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-5 flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Code2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-foreground truncate font-mono">
                    {repo.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {repo.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-foreground/5 text-muted-foreground border border-foreground/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2.5 border-t border-border/20">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || "bg-muted-foreground"}`} />
                  <span>{repo.language}</span>
                </div>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{repo.updated}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Satwik-1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View All Repositories
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubProjectsSection;
