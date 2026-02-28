import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Code2, Clock, ArrowUpRight, Folder } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

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

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-foreground">
            GitHub <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open-source repositories in hydrology, GIS analysis, and geospatial engineering.
          </p>
        </motion.div>

        {/* Featured Repos - Pellet style cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {featured.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner card */}
              <div className="relative m-[1px] rounded-2xl bg-card p-6 h-full flex flex-col">
                {/* Featured chip */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/15 text-primary border border-primary/20">
                    ⭐ Featured
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                </div>

                {/* Repo icon + name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono truncate flex-1">
                    {repo.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 flex-1">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-primary/8 text-primary/80 border border-primary/15 group-hover:bg-primary/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/40">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || '#6B7280' }}
                    />
                    <span className="font-medium">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {repo.stars !== undefined && repo.stars > 0 && (
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" />{repo.stars}</span>
                    )}
                    {repo.forks !== undefined && repo.forks > 0 && (
                      <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" />{repo.forks}</span>
                    )}
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{repo.updated}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Regular Repos - Pellet grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {regular.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-5 flex flex-col hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Code2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <h3 className="text-sm font-bold text-foreground truncate font-mono group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-muted/60 text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t border-border/30">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || '#6B7280' }}
                    />
                    <span className="font-medium">{repo.language}</span>
                  </div>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{repo.updated}</span>
                </div>
              </div>
            </motion.a>
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
