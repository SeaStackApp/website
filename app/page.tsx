import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Waves, Server, Shield, Zap, Code, Cloud, Check, ArrowRight, BookOpen, Github, Network, Star} from "lucide-react"
import Link from "next/link"
import {GITHUB_URL} from "@/lib/config";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">SeaStack</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              {/*<Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </span>
              </Link>
              <Button size="sm" asChild={true}>
                <Link href="#">
                  Launch Cloud <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 border-primary/20 bg-primary/10 text-primary">
              <Zap className="h-3 w-3 mr-1" />
              Docker Swarm Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Manage Your Docker Swarm
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 mt-2">
                From One Control Panel
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
              SeaStack provides a powerful control panel to manage Docker Swarm services across multiple servers. Deploy
              and scale your infrastructure with ease.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#pricing">
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  <Cloud className="mr-2 h-5 w-5" />
                  See pricing
                </Button>
              </Link>
              <Link href={GITHUB_URL} target="_blank">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  <Github className="mr-2 h-5 w-5" />
                  Self-Host (Open Source)
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="max-w-5xl mx-auto mt-20">
            <Card className="p-1 bg-card/50 backdrop-blur border-border/50 shadow-2xl shadow-primary/10">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-background rounded-md overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                <img
                  src="/screenshot.png"
                  alt="SeaStack Dashboard Interface"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Everything You Need to Manage Your Swarm
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Built for DevOps teams who need reliable, scalable infrastructure management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Multi-Server Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect and manage unlimited Docker Swarm servers from a single, unified control panel
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 group">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Network className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                Smart Network Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                SeaStack manages networks automatically, with the option to configure them manually when you need full
                control
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Secure by Default
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                SSH keys and environment variables are encrypted in the database, ensuring your sensitive data remains
                protected
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 group">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Open Source</h3>
              <p className="text-muted-foreground leading-relaxed">
                Self-host with our open-source version. Full control over your infrastructure
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Cloud or Self-Hosted
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose between our managed cloud service or deploy on your own infrastructure
              </p>
            </Card>

            <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 group">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Waves className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                Simple Deployment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploy and update services with intuitive UI or API. No complex configurations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Choose Your Deployment Option</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Start with open source or scale with our managed cloud service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Self-Hosted Plan */}
            <Card className="p-8 bg-card border-border/50 relative hover:border-primary/30 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Self-Hosted</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold">Free</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Open source version for teams who want full control
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Open Source</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">All core features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Community support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Self-managed updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Host on your infrastructure</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full bg-transparent" size="lg" asChild={true}>
                <Link href={GITHUB_URL} className="block" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  Get Started
                </Link>
              </Button>
            </Card>

            {/* Cloud Plan */}
            <Card className="p-8 bg-gradient-to-br from-primary/20 via-card to-card border-primary shadow-xl shadow-primary/10 relative transform hover:scale-[1.02] transition-all duration-300">
              <Badge className="absolute top-6 right-6 bg-primary text-primary-foreground hover:bg-primary/90">
                In Progress
              </Badge>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Cloud</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold">€5</span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Billed monthly</p>
                <p className="text-muted-foreground leading-relaxed">
                  Fully managed service with premium features and support
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium text-foreground">Bring your own servers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">All features included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Automatic updates</span>
                </li>
              </ul>

              <Button className="w-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-muted hover:bg-muted hover:shadow-none shadow-none opacity-45" size="lg" asChild={true} disabled={true}>
                <Link href="" className="block">
                    <Cloud className="mr-2 h-5 w-5" />
                    Available Soon
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-card/50 backdrop-blur border-border/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Simplify Your Docker Swarm Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join DevOps teams who trust SeaStack to manage their infrastructure
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={GITHUB_URL} target="_blank" prefetch={false}>
                <Button size="lg" className="text-lg px-8">
                  <Star className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </Link>
              {/*<Link href="#">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  View Documentation
                </Button>
              </Link>*/}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">SeaStack</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href={GITHUB_URL} className="hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SeaStack - Made with ♥️ by <Link href="https://simonloir.be">Simon Loir</Link> in Belgium
          </div>
        </div>
      </footer>
    </div>
  )
}
